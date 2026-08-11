import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { motion } from 'motion/react';
import { Button3D } from './3d/Button3D';

interface CompletionModalProps {
  visible: boolean;
  score: number;
  correctCount: number;
  totalPositions: number;
  lives: number;
  categoryName: string;
  onPlayAgain: () => void;
  onBackToCategory: () => void;
}

export const CompletionModal: React.FC<CompletionModalProps> = ({
  visible,
  score,
  correctCount,
  totalPositions,
  lives,
  categoryName,
  onPlayAgain,
  onBackToCategory,
}) => {
  useEffect(() => {
    if (!visible) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onPlayAgain();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [visible, onPlayAgain]);

  if (!visible) return null;

  // Calculate final score percentage (0-100)
  const finalGrade = Math.round((correctCount / Math.max(1, totalPositions)) * 100);

  let gradeBadge = '🌟 LULUS SEMPURNA!';
  let gradeColor = '#10b981';
  if (finalGrade >= 90) {
    gradeBadge = '🌟 ISTIMEWA (SANGAT BAGUS)!';
    gradeColor = '#f59e0b';
  } else if (finalGrade >= 70) {
    gradeBadge = '⭐ BAGUS SEKALl!';
    gradeColor = '#3b82f6';
  } else {
    gradeBadge = '👍 TETAP SEMANGAT!';
    gradeColor = '#8b5cf6';
  }

  const renderHearts = () => {
    return '❤️'.repeat(lives) + '🖤'.repeat(Math.max(0, 3 - lives));
  };

  return (
    <View style={styles.overlayWrapper}>
      <motion.div
        initial={{ opacity: 0, scale: 0.82, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.82, y: 25 }}
        transition={{ type: 'spring', damping: 22, stiffness: 320 }}
        style={{ width: '92%', maxWidth: 500 }}
      >
        <View style={styles.card3D}>
          <View style={styles.trophyCircle3D}>
            <Text style={styles.trophyIcon}>🏆</Text>
          </View>

          <Text style={styles.title}>PETUALANGAN SELESAI!</Text>
          <Text style={styles.subtitle}>
            Selamat! Kamu telah berhasil menuntaskan seluruh Pos di{' '}
            <Text style={styles.categoryHighlight}>{categoryName}</Text> 🎉
          </Text>

          {/* Grade Badge */}
          <View style={[styles.badgePill, { borderColor: gradeColor }]}>
            <Text style={[styles.badgeText, { color: gradeColor }]}>{gradeBadge}</Text>
          </View>

          {/* Score & Stats Grid */}
          <View style={styles.statsGrid}>
            <View style={styles.statBox3D}>
              <Text style={styles.statLabel}>🎯 Nilai Akhir</Text>
              <Text style={styles.statValueGrade}>{finalGrade}</Text>
              <Text style={styles.statSubText}>dari 100</Text>
            </View>

            <View style={styles.statBox3D}>
              <Text style={styles.statLabel}>⭐ Total Poin</Text>
              <Text style={styles.statValuePoints}>{score}</Text>
              <Text style={styles.statSubText}>Poin Terkumpul</Text>
            </View>
          </View>

          <View style={styles.detailRow3D}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>❤️ Sisa Nyawa:</Text>
              <Text style={styles.detailValue}>{renderHearts()} ({lives}/3)</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>✅ Jawaban Benar:</Text>
              <Text style={styles.detailValue}>{correctCount} / {totalPositions} Pos</Text>
            </View>
          </View>

          {/* Buttons */}
          <View style={styles.buttonGroup}>
            <Button3D
              variant="amber"
              size="md"
              onClick={onPlayAgain}
              icon="🔄"
              style={{ width: '100%' }}
            >
              Main Lagi (Pos 1)
            </Button3D>

            <Button3D
              variant="slate"
              size="md"
              onClick={onBackToCategory}
              icon="🗺️"
              style={{ width: '100%' }}
            >
              Pilih Kategori Lain
            </Button3D>
          </View>
        </View>
      </motion.div>
    </View>
  );
};

const styles = StyleSheet.create({
  overlayWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(2, 6, 23, 0.88)',
    zIndex: 100000,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card3D: {
    backgroundColor: '#0f172a',
    borderRadius: 28,
    padding: 28,
    borderWidth: 2,
    borderColor: '#f59e0b',
    alignItems: 'center',
    boxShadow:
      '0 25px 50px -12px rgba(245, 158, 11, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)',
  },
  trophyCircle3D: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(245, 158, 11, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#f59e0b',
    marginBottom: 14,
    boxShadow: '0 0 25px rgba(245, 158, 11, 0.6)',
  },
  trophyIcon: {
    fontSize: 42,
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    color: '#fef08a',
    textAlign: 'center',
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 14,
    color: '#cbd5e1',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 14,
  },
  categoryHighlight: {
    color: '#38bdf8',
    fontWeight: '800',
  },
  badgePill: {
    backgroundColor: 'rgba(15, 23, 42, 0.9)',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 50,
    borderWidth: 1.5,
    marginBottom: 16,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
    marginBottom: 16,
  },
  statBox3D: {
    flex: 1,
    backgroundColor: 'rgba(30, 41, 59, 0.9)',
    borderRadius: 18,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#94a3b8',
    marginBottom: 4,
  },
  statValueGrade: {
    fontSize: 32,
    fontWeight: '900',
    color: '#34d399',
  },
  statValuePoints: {
    fontSize: 32,
    fontWeight: '900',
    color: '#f59e0b',
  },
  statSubText: {
    fontSize: 11,
    color: '#64748b',
    marginTop: 2,
  },
  detailRow3D: {
    width: '100%',
    backgroundColor: 'rgba(30, 41, 59, 0.7)',
    borderRadius: 18,
    padding: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    gap: 8,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 13,
    color: '#cbd5e1',
    fontWeight: '700',
  },
  detailValue: {
    fontSize: 13,
    color: '#f8fafc',
    fontWeight: '800',
  },
  buttonGroup: {
    width: '100%',
    gap: 12,
  },
});

