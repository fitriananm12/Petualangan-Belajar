import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { motion } from 'motion/react';
import { Button3D } from './3d/Button3D';

interface GameOverModalProps {
  visible: boolean;
  onRestart: () => void;
  categoryName?: string;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({
  visible,
  onRestart,
  categoryName = '',
}) => {
  useEffect(() => {
    if (!visible) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onRestart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [visible, onRestart]);

  if (!visible) return null;

  return (
    <View style={styles.overlayWrapper}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        style={{ width: '92%', maxWidth: 460 }}
      >
        <View style={styles.card3D}>
          <View style={styles.iconCircle3D}>
            <Text style={styles.iconText}>💔</Text>
          </View>

          <Text style={styles.title}>GAME OVER - NYAWA HABIS!</Text>

          <Text style={styles.description}>
            Kamu telah 3 kali salah menjawab soal di petualangan{' '}
            <Text style={styles.highlight}>{categoryName}</Text>. Nyawamu telah habis!
          </Text>

          <View style={styles.infoBox3D}>
            <Text style={styles.infoText}>
              🔄 Kamu akan mengulang kembali dari <Text style={styles.bold}>Pos Pertama (Pos 1)</Text>{' '}
              dengan <Text style={styles.bold}>3 Nyawa Penuh (❤️❤️❤️)</Text>.
            </Text>
          </View>

          <Button3D
            variant="rose"
            size="lg"
            onClick={onRestart}
            icon="🔄"
            style={{ width: '100%' }}
          >
            Ulang Dari Pos 1
          </Button3D>
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
    backgroundColor: 'rgba(2, 6, 23, 0.85)',
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
    borderColor: '#f43f5e',
    alignItems: 'center',
    boxShadow:
      '0 25px 50px -12px rgba(244, 63, 94, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)',
  },
  iconCircle3D: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(244, 63, 94, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#f43f5e',
    marginBottom: 16,
    boxShadow: '0 0 20px rgba(244, 63, 94, 0.5)',
  },
  iconText: {
    fontSize: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  description: {
    fontSize: 15,
    color: '#cbd5e1',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 16,
  },
  highlight: {
    color: '#f87171',
    fontWeight: '900',
  },
  infoBox3D: {
    backgroundColor: 'rgba(30, 41, 59, 0.9)',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: 24,
    width: '100%',
  },
  infoText: {
    fontSize: 13,
    color: '#94a3b8',
    textAlign: 'center',
    lineHeight: 20,
  },
  bold: {
    color: '#ffffff',
    fontWeight: '900',
  },
});

