import React, { useMemo, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { motion, AnimatePresence } from 'motion/react';
import { QuestionPos } from '../types';
import { audioManager } from '../utils/audio';
import { HandwritingPad } from './HandwritingPad';

interface QuizModalProps {
  visible: boolean;
  positionData: QuestionPos;
  category: string;
  isTotalPositions: number;
  currentPosIndex: number;
  feedbackShown: boolean;
  lastCorrect: boolean;
  lives?: number;
  score?: number;
  onSelectOption: (isCorrect: boolean) => void;
  onNextOrRetry: () => void;
  onClose: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  visible,
  positionData,
  category,
  isTotalPositions,
  currentPosIndex,
  feedbackShown,
  lastCorrect,
  lives = 3,
  score = 0,
  onSelectOption,
  onNextOrRetry,
  onClose,
}) => {
  if (!visible || !positionData) return null;

  const [hasWrittenCanvas, setHasWrittenCanvas] = React.useState(false);
  const [writingWarning, setWritingWarning] = React.useState<string | null>(null);
  const [selectedOptionIndex, setSelectedOptionIndex] = React.useState<number | null>(null);

  const catIcon = category === 'Membaca' ? '📖' : category === 'Menulis' ? '✏️' : '🔢';
  const isLastPos = currentPosIndex >= isTotalPositions - 1;
  const isWritingCategory = category === 'Menulis' || category.toLowerCase().includes('tulis');

  // Reset canvas & option state on position/modal change
  useEffect(() => {
    setHasWrittenCanvas(false);
    setWritingWarning(null);
    setSelectedOptionIndex(null);
  }, [positionData, visible, feedbackShown]);

  const handleWritingSubmit = () => {
    if (!hasWrittenCanvas) {
      audioManager.playWrongSFX();
      setWritingWarning('✏️ Kertas tulis masih kosong! Tuliskan/coret dulu jawabanmu di lembar kertas di atas.');
      return;
    }

    if (selectedOptionIndex === null) {
      audioManager.playWrongSFX();
      setWritingWarning('👇 Pilihlah opsi jawaban A, B, atau C di bawah yang sesuai dengan tulisan tanganmu sebelum mengirim!');
      return;
    }

    const isCorrect = selectedOptionIndex === shuffledData.correctIndex;
    if (isCorrect) {
      audioManager.playCorrectSFX();
    } else {
      audioManager.playWrongSFX();
    }
    onSelectOption(isCorrect);
  };

  // Shuffled options stably generated per positionData
  const shuffledData = useMemo(() => {
    if (!positionData || !positionData.options || positionData.options.length === 0) {
      return { options: [], correctIndex: 0 };
    }

    const items = positionData.options.map((opt, idx) => ({
      text: opt,
      isCorrect: idx === positionData.correct,
    }));

    // Deterministic shuffle based on question string so indices remain rock-solid across re-renders
    const shuffled = [...items];
    let seed = 0;
    const keyStr = (positionData.title || '') + (positionData.question || '');
    for (let i = 0; i < keyStr.length; i++) {
      seed = (seed << 5) - seed + keyStr.charCodeAt(i);
      seed |= 0;
    }
    const pseudoRandom = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(pseudoRandom() * (i + 1));
      const temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }

    const correctIndex = shuffled.findIndex((item) => item.isCorrect);

    return {
      options: shuffled.map((item) => item.text),
      correctIndex,
    };
  }, [positionData]);

  // Render heart emojis
  const renderHearts = () => {
    const hearts = [];
    for (let i = 0; i < 3; i++) {
      hearts.push(i < lives ? '❤️' : '🖤');
    }
    return hearts.join(' ');
  };

  useEffect(() => {
    if (!visible) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (feedbackShown) {
          onNextOrRetry();
        }
      } else if (!feedbackShown && shuffledData.options && shuffledData.options.length > 0) {
        const keyUpper = e.key.toUpperCase();
        let selectedIdx = -1;
        if (keyUpper === 'A' || e.key === '1') selectedIdx = 0;
        else if (keyUpper === 'B' || e.key === '2') selectedIdx = 1;
        else if (keyUpper === 'C' || e.key === '3') selectedIdx = 2;
        else if (keyUpper === 'D' || e.key === '4') selectedIdx = 3;

        if (selectedIdx >= 0 && selectedIdx < shuffledData.options.length) {
          e.preventDefault();
          if (isWritingCategory && !hasWrittenCanvas) {
            audioManager.playWrongSFX();
            setWritingWarning('✏️ Kamu belum menulis di lembar kertas! Tuliskan/coret dulu jawabanmu di atas kertas.');
            return;
          }
          setSelectedOptionIndex(selectedIdx);
          const isCorrect = selectedIdx === shuffledData.correctIndex;
          if (isCorrect) {
            audioManager.playCorrectSFX();
          } else {
            audioManager.playWrongSFX();
          }
          onSelectOption(isCorrect);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [visible, feedbackShown, shuffledData, onNextOrRetry, onSelectOption]);

  return (
    <View style={styles.modalContainerWrapper}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(15, 23, 42, 0.75)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 16,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          style={{
            width: '100%',
            maxWidth: 620,
            maxHeight: '92dvh',
            height: '92dvh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <View style={styles.panel3D}>
            {/* Top Bar inside Modal: Nyawa & Poin */}
            <View style={styles.statusBar}>
              <View style={styles.livesBadge}>
                <Text style={styles.livesText}>{renderHearts()}</Text>
              </View>
              <View style={styles.scoreBadge}>
                <Text style={styles.scoreText}>⭐ {score} Poin</Text>
              </View>
              <TouchableOpacity
                style={styles.closeHeaderBtn}
                activeOpacity={0.7}
                onPress={onClose}
                // @ts-ignore - web click fallback
                onClick={onClose}
              >
                <Text style={styles.closeHeaderBtnText}>✕</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              style={{ flex: 1, width: '100%', minHeight: 0, overflowY: 'auto', WebkitOverflowScrolling: 'touch' } as any}
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={true}
            >
              <AnimatePresence mode="wait">
                {!feedbackShown ? (
                  <motion.div
                    key="question"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <View style={styles.header}>
                      <Text style={styles.headerIcon}>{catIcon}</Text>
                      <Text style={styles.headerTitle}>{positionData.title}</Text>
                    </View>

                    <View style={styles.materialCard3D}>
                      <Text style={styles.materialLabel}>📖 Ringkasan Soal / Materi:</Text>
                      <Text style={styles.materialText}>{positionData.material}</Text>
                    </View>

                    <View style={styles.questionCard3D}>
                      <Text style={styles.questionLabel}>
                        {isWritingCategory ? '✍️ PERINTAH MENULIS TANGAN:' : '❓ PERTANYAAN:'}
                      </Text>
                      <Text style={styles.questionText}>{positionData.question}</Text>
                    </View>

                    {isWritingCategory && (
                      <View style={{ width: '100%', marginBottom: 16 }}>
                        <HandwritingPad
                          onCanvasChange={(hasContent) => {
                            setHasWrittenCanvas(hasContent);
                            if (hasContent) setWritingWarning(null);
                          }}
                        />

                        {writingWarning && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            <View style={styles.warningBox}>
                              <Text style={styles.warningText}>{writingWarning}</Text>
                            </View>
                          </motion.div>
                        )}

                        <TouchableOpacity
                          style={styles.submitWritingBtn}
                          activeOpacity={0.8}
                          onPress={handleWritingSubmit}
                          // @ts-ignore - web click fallback
                          onClick={handleWritingSubmit}
                        >
                          <Text style={styles.submitWritingBtnText}>
                            🚀 KIRIM HASIL TULISAN SAYA
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}

                    <View style={styles.optionsList}>
                      <Text style={styles.writingOptionTitle}>
                        {isWritingCategory
                          ? '👇 Pilihlah opsi jawaban A, B, atau C di bawah ini yang sesuai dengan tulisan tanganmu:'
                          : '👇 Pilihan Jawaban (Pilih salah satu):'}
                      </Text>
                      {shuffledData.options.map((opt, i) => {
                        const letter = String.fromCharCode(65 + i);
                        const isThisCorrect = i === shuffledData.correctIndex;
                        const isSelected = selectedOptionIndex === i;

                        const handleOptionPress = () => {
                          if (isWritingCategory && !hasWrittenCanvas) {
                            audioManager.playWrongSFX();
                            setWritingWarning('✏️ Kamu belum menulis di lembar kertas! Tuliskan/coret dulu jawabanmu di kertas di atas sebelum memilih.');
                            return;
                          }

                          setSelectedOptionIndex(i);
                          setWritingWarning(null);

                          if (isThisCorrect) {
                            audioManager.playCorrectSFX();
                          } else {
                            audioManager.playWrongSFX();
                          }
                          onSelectOption(isThisCorrect);
                        };

                        return (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.02, x: 4 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                          >
                            <TouchableOpacity
                              style={[
                                styles.optionButton3D,
                                isSelected && styles.optionButtonSelected3D,
                              ]}
                              activeOpacity={0.8}
                              onPress={handleOptionPress}
                              // @ts-ignore - web click fallback
                              onClick={handleOptionPress}
                            >
                              <View
                                style={[
                                  styles.letterBadge3D,
                                  isSelected && styles.letterBadgeSelected3D,
                                ]}
                              >
                                <Text style={styles.letterText}>{letter}</Text>
                              </View>
                              <Text style={styles.optionText}>{opt}</Text>
                            </TouchableOpacity>
                          </motion.div>
                        );
                      })}
                    </View>
                  </motion.div>
                ) : (
                  <motion.div
                    key="feedback"
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Text
                      style={[
                        styles.feedbackTitle,
                        lastCorrect ? styles.correctTitle : styles.wrongTitle,
                      ]}
                    >
                      {lastCorrect
                        ? '🎉 JAWABAN BENAR! (+100 Poin)'
                        : '❌ JAWABAN SALAH! Pos Tertutup (-1 Nyawa 💔)'}
                    </Text>

                    <View style={styles.explanationCard3D}>
                      <Text style={styles.explanationText}>
                        📝 <Text style={styles.boldText}>Pembahasan lengkap: </Text>
                        {positionData.explanation}
                      </Text>
                    </View>

                    <Text style={styles.autoCloseSubtext}>
                      {lastCorrect
                        ? '🚶 Tekan tombol di bawah untuk melangkah ke Pos selanjutnya!'
                        : '🔒 Pos ini telah TERTUTUP. Lanjutkan ke Pos lainnya!'}
                    </Text>

                    <TouchableOpacity
                      style={[
                        styles.actionBtn3D,
                        lastCorrect ? styles.correctBtn3D : styles.wrongBtn3D,
                      ]}
                      activeOpacity={0.8}
                      onPress={onNextOrRetry}
                      // @ts-ignore - web click fallback
                      onClick={onNextOrRetry}
                    >
                      <Text style={styles.actionBtnText}>
                        {lastCorrect
                          ? !isLastPos
                            ? `➡️ Tutup & Lanjut ke Pos ${currentPosIndex + 2}`
                            : '🎉 Petualangan Selesai!'
                          : lives - 1 <= 0
                          ? '💔 Nyawa Habis (Reset)'
                          : '➡️ Lanjutkan Petualangan'}
                      </Text>
                    </TouchableOpacity>
                  </motion.div>
                )}
              </AnimatePresence>
            </ScrollView>
          </View>

        </motion.div>
      </motion.div>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainerWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99999,
    width: '100%',
    height: '100%',
  },
  panel3D: {
    width: '100%',
    height: '100%',
    flex: 1,
    minHeight: 0,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#0f172a',

    borderRadius: 28,
    padding: 24,
    borderWidth: 2,
    borderColor: 'rgba(56, 189, 248, 0.4)',
    boxShadow:
      '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(56, 189, 248, 0.2), inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)',
    position: 'relative',
    overflow: 'hidden',
  },
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 8,
  },
  livesBadge: {
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    borderColor: '#ef4444',
    borderWidth: 1.5,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 14,
    boxShadow: '0 4px 10px rgba(239, 68, 68, 0.3)',
  },
  livesText: {
    fontSize: 16,
    fontWeight: '800',
  },
  scoreBadge: {
    backgroundColor: 'rgba(245, 158, 11, 0.2)',
    borderColor: '#f59e0b',
    borderWidth: 1.5,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 14,
    boxShadow: '0 4px 10px rgba(245, 158, 11, 0.3)',
  },
  scoreText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#fef08a',
  },
  closeHeaderBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  closeHeaderBtnText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#cbd5e1',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  headerIcon: {
    fontSize: 32,
    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#38bdf8',
    flex: 1,
  },
  materialCard3D: {
    backgroundColor: 'rgba(30, 41, 59, 0.9)',
    padding: 16,
    borderRadius: 18,
    borderLeftWidth: 4,
    borderLeftColor: '#38bdf8',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: 16,
  },
  materialLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: '#7dd3fc',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  materialText: {
    fontSize: 15,
    color: '#f1f5f9',
    lineHeight: 22,
    fontWeight: '600',
  },
  questionCard3D: {
    backgroundColor: 'rgba(30, 41, 59, 0.95)',
    padding: 18,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#0284c7',
    marginBottom: 20,
    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
  },
  questionLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: '#f59e0b',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: 26,
  },
  optionsList: {
    gap: 12,
  },
  optionButton3D: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 41, 59, 0.85)',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 18,
    gap: 14,
    cursor: 'pointer',
    boxShadow:
      '0 6px 16px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
  },
  optionButtonSelected3D: {
    borderColor: '#38bdf8',
    backgroundColor: 'rgba(14, 165, 233, 0.35)',
    boxShadow: '0 0 18px rgba(56, 189, 248, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
  },
  letterBadge3D: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: '#0284c7',
    borderWidth: 1,
    borderColor: '#38bdf8',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  },
  letterBadgeSelected3D: {
    backgroundColor: '#f59e0b',
    borderColor: '#fef08a',
  },
  letterText: {
    color: '#ffffff',
    fontWeight: '900',
    fontSize: 16,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#f8fafc',
    flex: 1,
  },
  writingOptionTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#fbbf24',
    marginBottom: 8,
    marginTop: 4,
  },
  feedbackTitle: {
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 16,
    textAlign: 'center',
  },
  correctTitle: {
    color: '#34d399',
    textShadowColor: 'rgba(52, 211, 153, 0.4)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  wrongTitle: {
    color: '#f87171',
    textShadowColor: 'rgba(248, 113, 113, 0.4)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  explanationCard3D: {
    backgroundColor: 'rgba(30, 41, 59, 0.95)',
    padding: 20,
    borderRadius: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#f59e0b',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: 20,
  },
  explanationText: {
    fontSize: 15,
    color: '#f1f5f9',
    lineHeight: 24,
    fontWeight: '600',
  },
  boldText: {
    fontWeight: '900',
    color: '#fef08a',
  },
  autoCloseSubtext: {
    fontSize: 13,
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '600',
  },
  actionBtn3D: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 2,
    cursor: 'pointer',
    boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
  },
  correctBtn3D: {
    backgroundColor: '#f59e0b',
    borderColor: '#fef08a',
  },
  wrongBtn3D: {
    backgroundColor: '#dc2626',
    borderColor: '#fecdd3',
  },
  actionBtnText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#ffffff',
  },
  submitWritingBtn: {
    backgroundColor: '#10b981',
    borderColor: '#a7f3d0',
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
    cursor: 'pointer',
    boxShadow: '0 8px 16px rgba(16, 185, 129, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
  },
  submitWritingBtnText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: 0.5,
  },
  warningBox: {
    backgroundColor: 'rgba(239, 68, 68, 0.25)',
    borderColor: '#f87171',
    borderWidth: 1.5,
    borderRadius: 14,
    padding: 10,
    marginVertical: 8,
    alignItems: 'center',
  },
  warningText: {
    color: '#fecdd3',
    fontSize: 13,
    fontWeight: '800',
    textAlign: 'center',
  },
});
