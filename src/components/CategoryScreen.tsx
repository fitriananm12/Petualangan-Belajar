import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { motion } from 'motion/react';
import { CURRICULUM } from '../data/curriculum';
import { FloatingBg } from './FloatingBg';
import { Tilt3DCard } from './3d/Tilt3DCard';
import { Button3D } from './3d/Button3D';

interface CategoryScreenProps {
  gradeKey: string;
  onSelectCategory: (catKey: string) => void;
  onBack: () => void;
}

export const CategoryScreen: React.FC<CategoryScreenProps> = ({
  gradeKey,
  onSelectCategory,
  onBack,
}) => {
  const gradeData = CURRICULUM[gradeKey];

  return (
    <FloatingBg theme="emerald">
      <View style={styles.topBar}>
        <Button3D variant="slate" size="sm" onClick={onBack} icon="⬅">
          Kembali ke Peta
        </Button3D>
      </View>

      <View style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ alignItems: 'center' }}
        >
          <Text style={styles.title}>
            {gradeData?.icon} {gradeKey}
          </Text>
          <Text style={styles.subtitle}>Pilih jalur petualangan:</Text>
        </motion.div>

        <View style={styles.catGrid}>
          {/* Membaca */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            style={{ width: '45%', minWidth: 200, maxWidth: 280 }}
          >
            <Tilt3DCard
              maxTilt={12}
              scaleOnHover={1.05}
              onClick={() => onSelectCategory('Membaca')}
              glowColor="rgba(16, 185, 129, 0.4)"
            >
              <View style={[styles.card3D, styles.cardMembaca]}>
                <Text style={styles.cardIcon}>📖</Text>
                <Text style={styles.cardTitle}>Membaca</Text>
                <Text style={styles.cardDesc}>
                  {gradeData?.Membaca.name}
                  {'\n'}
                  {gradeData?.Membaca.positions.length} Pos Tantangan
                </Text>
              </View>
            </Tilt3DCard>
          </motion.div>

          {/* Menghitung */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            style={{ width: '45%', minWidth: 200, maxWidth: 280 }}
          >
            <Tilt3DCard
              maxTilt={12}
              scaleOnHover={1.05}
              onClick={() => onSelectCategory('Menghitung')}
              glowColor="rgba(6, 182, 212, 0.4)"
            >
              <View style={[styles.card3D, styles.cardMenghitung]}>
                <Text style={styles.cardIcon}>🔢</Text>
                <Text style={styles.cardTitle}>Menghitung</Text>
                <Text style={styles.cardDesc}>
                  {gradeData?.Menghitung.name}
                  {'\n'}
                  {gradeData?.Menghitung.positions.length} Pos Tantangan
                </Text>
              </View>
            </Tilt3DCard>
          </motion.div>

          {/* Menulis */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            style={{ width: '45%', minWidth: 200, maxWidth: 280 }}
          >
            <Tilt3DCard
              maxTilt={12}
              scaleOnHover={1.05}
              onClick={() => onSelectCategory('Menulis')}
              glowColor="rgba(244, 63, 94, 0.4)"
            >
              <View style={[styles.card3D, styles.cardMenulis]}>
                <Text style={styles.cardIcon}>✍️</Text>
                <Text style={styles.cardTitle}>Menulis</Text>
                <Text style={styles.cardDesc}>
                  {gradeData?.Menulis?.name || 'Taman Menulis & Ejaan'}
                  {'\n'}
                  {gradeData?.Menulis?.positions?.length || 15} Pos Tantangan & Pena
                </Text>
              </View>
            </Tilt3DCard>
          </motion.div>

          {/* Library */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            style={{ width: '45%', minWidth: 200, maxWidth: 280 }}
          >
            <Tilt3DCard
              maxTilt={12}
              scaleOnHover={1.05}
              onClick={() => onSelectCategory('Library')}
              glowColor="rgba(168, 85, 247, 0.4)"
            >
              <View style={[styles.card3D, styles.cardLibrary]}>
                <Text style={styles.cardIcon}>📚</Text>
                <Text style={styles.cardTitle}>Perpustakaan</Text>
                <Text style={styles.cardDesc}>
                  Perpustakaan Pembahasan Soal{'\n'}
                  & Panduan Ringkasan Materi
                </Text>
              </View>
            </Tilt3DCard>
          </motion.div>
        </View>
      </View>
    </FloatingBg>
  );
};

const styles = StyleSheet.create({
  topBar: {
    paddingTop: 16,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 850,
    alignSelf: 'center',
    width: '100%',
  },
  title: {
    fontSize: 34,
    fontWeight: '900',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#a7f3d0',
    marginBottom: 32,
  },
  catGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    width: '100%',
  },
  card3D: {
    backgroundColor: 'rgba(15, 23, 42, 0.82)',
    borderRadius: 28,
    padding: 28,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    boxShadow:
      '0 20px 35px -5px rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)',
  },
  cardMembaca: {
    borderColor: '#10b981',
  },
  cardMenghitung: {
    borderColor: '#06b6d4',
  },
  cardMenulis: {
    borderColor: '#f43f5e',
  },
  cardLibrary: {
    borderColor: '#a855f7',
  },
  cardIcon: {
    fontSize: 52,
    marginBottom: 12,
    filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.3))',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#ffffff',
    marginBottom: 8,
  },
  cardDesc: {
    fontSize: 13,
    fontWeight: '600',
    color: '#cbd5e1',
    textAlign: 'center',
    lineHeight: 20,
  },
});

