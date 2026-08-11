import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { QuestionPos } from '../types';

interface PosSelectorProps {
  positions: QuestionPos[];
  currentPosIndex: number;
  unlockedPosIndex?: number;
  completedPosIndices?: number[];
  failedPosIndices?: number[];
  activeSlide?: number;
  onSlideChange?: (slideIndex: number) => void;
  onSelectPos: (index: number) => void;
  onOpenQuiz: (index: number) => void;
  categoryKey?: string;
}

const SLIDE_SIZE = 5;

export const PosSelector: React.FC<PosSelectorProps> = ({
  positions,
  currentPosIndex,
  unlockedPosIndex = 0,
  completedPosIndices = [],
  failedPosIndices = [],
  activeSlide: activeSlideProp,
  onSlideChange,
  onSelectPos,
  onOpenQuiz,
  categoryKey = 'Membaca',
}) => {
  const totalSlides = Math.max(1, Math.ceil(positions.length / SLIDE_SIZE));
  const initialSlide = Math.floor(currentPosIndex / SLIDE_SIZE);
  const [internalSlide, setInternalSlide] = useState<number>(initialSlide);

  const activeSlide = typeof activeSlideProp === 'number' ? activeSlideProp : internalSlide;

  // Sync active slide if currentPosIndex changes externally
  useEffect(() => {
    const targetSlide = Math.floor(currentPosIndex / SLIDE_SIZE);
    if (targetSlide !== activeSlide && targetSlide >= 0 && targetSlide < totalSlides) {
      setInternalSlide(targetSlide);
      if (onSlideChange) onSlideChange(targetSlide);
    }
  }, [currentPosIndex, totalSlides]);

  const handlePrevSlide = (e?: any) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (activeSlide > 0) {
      const nextSlide = activeSlide - 1;
      setInternalSlide(nextSlide);
      if (onSlideChange) onSlideChange(nextSlide);
    }
  };

  const handleNextSlide = (e?: any) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (activeSlide < totalSlides - 1) {
      const nextSlide = activeSlide + 1;
      setInternalSlide(nextSlide);
      if (onSlideChange) onSlideChange(nextSlide);
    }
  };

  const currentSlidePositions = positions.slice(
    activeSlide * SLIDE_SIZE,
    (activeSlide + 1) * SLIDE_SIZE
  );

  const activePos = positions[currentPosIndex] || positions[0];

  const isCurrentCompleted = completedPosIndices.includes(currentPosIndex);
  const isCurrentFailed = failedPosIndices.includes(currentPosIndex);
  const isCurrentLocked = currentPosIndex > unlockedPosIndex;

  const handleStartQuiz = (e?: any) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (!isCurrentLocked && onOpenQuiz) {
      onOpenQuiz(currentPosIndex);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      const isInput = activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA');
      if (!isInput && e.key === 'Enter') {
        if (!isCurrentLocked && onOpenQuiz) {
          e.preventDefault();
          onOpenQuiz(currentPosIndex);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPosIndex, isCurrentLocked, onOpenQuiz]);

  const handleSelect = (globalIdx: number, e?: any) => {
    if (e && e.stopPropagation) e.stopPropagation();
    onSelectPos(globalIdx);
    if (globalIdx <= unlockedPosIndex && onOpenQuiz) {
      onOpenQuiz(globalIdx);
    }
  };

  return (
    <View style={styles.slimWrapper}>
      <View style={styles.compactContainer}>
        {/* Left Side: Slide Navigator */}
        <View style={styles.slideSection}>
          <TouchableOpacity
            style={[styles.miniArrowBtn, activeSlide === 0 && styles.miniArrowDisabled]}
            disabled={activeSlide === 0}
            onPress={handlePrevSlide}
            // @ts-ignore - web click fallback
            onClick={handlePrevSlide}
            activeOpacity={0.7}
          >
            <Text style={styles.miniArrowText}>◀</Text>
          </TouchableOpacity>

          <View style={styles.slideBadge}>
            <Text style={styles.slideBadgeText}>
              Slide {activeSlide + 1}/{totalSlides}
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.miniArrowBtn,
              activeSlide === totalSlides - 1 && styles.miniArrowDisabled,
            ]}
            disabled={activeSlide === totalSlides - 1}
            onPress={handleNextSlide}
            // @ts-ignore - web click fallback
            onClick={handleNextSlide}
            activeOpacity={0.7}
          >
            <Text style={styles.miniArrowText}>▶</Text>
          </TouchableOpacity>
        </View>

        {/* Center: 5 Numbered Pos Circles */}
        <View style={styles.posNumbersRow}>
          {currentSlidePositions.map((_, localIndex) => {
            const globalIndex = activeSlide * SLIDE_SIZE + localIndex;
            const isCurrent = globalIndex === currentPosIndex;
            const isDone = completedPosIndices.includes(globalIndex);
            const isFailed = failedPosIndices.includes(globalIndex);
            const isUnlocked = globalIndex <= unlockedPosIndex;
            const posNum = globalIndex + 1;
            const isPeak = globalIndex === positions.length - 1;

            return (
              <TouchableOpacity
                key={globalIndex}
                style={[
                  styles.posCircle,
                  isCurrent && styles.posCircleActive,
                  isDone && styles.posCircleDone,
                  isFailed && styles.posCircleFailed,
                  !isUnlocked && !isDone && !isFailed && styles.posCircleLocked,
                ]}
                activeOpacity={0.8}
                onPress={(e) => handleSelect(globalIndex, e)}
                // @ts-ignore - web click fallback
                onClick={(e) => handleSelect(globalIndex, e)}
              >
                <Text
                  style={[
                    styles.posCircleText,
                    isCurrent && styles.posCircleTextActive,
                    isFailed && styles.posCircleTextFailed,
                  ]}
                >
                  {isFailed ? '✕' : isPeak ? '🚩' : posNum}
                </Text>
                {isDone && <Text style={styles.miniCheck}>✓</Text>}
                {isFailed && <Text style={styles.miniCross}>✕</Text>}
                {!isUnlocked && !isDone && !isFailed && <Text style={styles.miniLock}>🔒</Text>}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Right Side: Primary "Kerjakan Soal" Button */}
        <TouchableOpacity
          style={[
            styles.openQuizButton,
            isCurrentCompleted && styles.btnCompleted,
            isCurrentFailed && styles.btnFailed,
            isCurrentLocked && styles.btnLocked,
          ]}
          disabled={isCurrentLocked}
          activeOpacity={0.8}
          onPress={handleStartQuiz}
          // @ts-ignore - web click fallback
          onClick={handleStartQuiz}
        >
          <Text style={styles.openQuizButtonText} numberOfLines={1}>
            {isCurrentCompleted
              ? `✅ POS ${currentPosIndex + 1} (KERJAKAN ULANG)`
              : isCurrentFailed
              ? `⚠️ POS ${currentPosIndex + 1} (COBA LAGI)`
              : isCurrentLocked
              ? `🔒 POS ${currentPosIndex + 1} TERKUNCI`
              : `▶ KERJAKAN POS ${currentPosIndex + 1}`}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sub-label showing current active Pos Title */}
      {activePos && (
        <TouchableOpacity
          style={[
            styles.activeTitlePill,
            isCurrentFailed && { backgroundColor: 'rgba(239, 68, 68, 0.3)', borderColor: '#ef4444' },
            isCurrentCompleted && { backgroundColor: 'rgba(16, 185, 129, 0.3)', borderColor: '#10b981' },
          ]}
          disabled={isCurrentLocked}
          activeOpacity={0.8}
          onPress={handleStartQuiz}
          // @ts-ignore - web click fallback
          onClick={handleStartQuiz}
        >
          <Text style={styles.activeTitleText} numberOfLines={1}>
            📍 Pos {currentPosIndex + 1}: {activePos.title}{' '}
            {isCurrentCompleted
              ? '(Sudah Selesai ✅ - Klik untuk Ulang)'
              : isCurrentFailed
              ? '(Belum Berhasil ⚠️ - Klik untuk Coba Lagi)'
              : isCurrentLocked
              ? '(Terkunci - Selesaikan Pos Sebelumnya 🔒)'
              : '(Klik untuk Buka Soal)'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  slimWrapper: {
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingBottom: 4,
    width: '100%',
  },
  compactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(15, 23, 42, 0.88)',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderWidth: 2,
    borderColor: 'rgba(56, 189, 248, 0.35)',
    boxShadow: '0 20px 30px -5px rgba(0, 0, 0, 0.6), inset 0 1px 1px 0 rgba(255, 255, 255, 0.25)',
    maxWidth: 880,
    width: '98%',
    gap: 12,
  },
  slideSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flexShrink: 0,
  },
  miniArrowBtn: {
    backgroundColor: '#0284c7',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#38bdf8',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  },
  miniArrowDisabled: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'transparent',
    opacity: 0.3,
  },
  miniArrowText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '900',
  },
  slideBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  slideBadgeText: {
    color: '#e2e8f0',
    fontSize: 12,
    fontWeight: '800',
  },
  posNumbersRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flexShrink: 0,
  },
  posCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(30, 41, 59, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.25)',
    position: 'relative',
    cursor: 'pointer',
    boxShadow: '0 6px 12px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.2)',
  },
  posCircleActive: {
    backgroundColor: '#f59e0b',
    borderColor: '#fef08a',
    transform: [{ scale: 1.15 }],
    boxShadow: '0 0 20px rgba(245, 158, 11, 0.8), 0 6px 12px rgba(0,0,0,0.4)',
  },
  posCircleDone: {
    backgroundColor: '#059669',
    borderColor: '#a7f3d0',
    boxShadow: '0 6px 12px rgba(5, 150, 105, 0.4)',
  },
  posCircleFailed: {
    backgroundColor: '#dc2626',
    borderColor: '#fecdd3',
    boxShadow: '0 6px 12px rgba(220, 38, 38, 0.4)',
  },
  posCircleLocked: {
    backgroundColor: 'rgba(15, 23, 42, 0.5)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    opacity: 0.5,
  },
  posCircleText: {
    color: '#f8fafc',
    fontSize: 14,
    fontWeight: '900',
  },
  posCircleTextActive: {
    color: '#0f172a',
    fontSize: 15,
  },
  posCircleTextFailed: {
    color: '#ffffff',
  },
  miniCheck: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#34d399',
    color: '#0f172a',
    fontSize: 10,
    fontWeight: '900',
    width: 16,
    height: 16,
    borderRadius: 8,
    textAlign: 'center',
    lineHeight: 16,
  },
  miniCross: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#ef4444',
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '900',
    width: 16,
    height: 16,
    borderRadius: 8,
    textAlign: 'center',
    lineHeight: 16,
  },
  miniLock: {
    position: 'absolute',
    top: -4,
    right: -4,
    fontSize: 11,
  },
  openQuizButton: {
    backgroundColor: '#0284c7',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#38bdf8',
    cursor: 'pointer',
    boxShadow: '0 6px 16px rgba(2, 132, 199, 0.4)',
  },
  btnCompleted: {
    backgroundColor: '#059669',
    borderColor: '#34d399',
    boxShadow: '0 6px 16px rgba(5, 150, 105, 0.4)',
  },
  btnFailed: {
    backgroundColor: '#d97706',
    borderColor: '#fbbf24',
    boxShadow: '0 6px 16px rgba(217, 119, 6, 0.4)',
  },
  btnLocked: {
    backgroundColor: '#334155',
    borderColor: '#64748b',
    opacity: 0.6,
  },
  openQuizButtonText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '900',
  },
  activeTitlePill: {
    marginTop: 6,
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(56, 189, 248, 0.3)',
  },
  activeTitleText: {
    color: '#f8fafc',
    fontSize: 12,
    fontWeight: '700',
  },
});

