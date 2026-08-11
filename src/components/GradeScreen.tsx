import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { motion } from 'motion/react';
import { CURRICULUM } from '../data/curriculum';
import { CHARACTERS } from '../data/characters';
import { FloatingBg } from './FloatingBg';
import { Tilt3DCard } from './3d/Tilt3DCard';
import { Button3D } from './3d/Button3D';

interface GradeScreenProps {
  playerName: string;
  selectedCharId: string;
  onSelectGrade: (gradeKey: string) => void;
  onBack: () => void;
}

export const GradeScreen: React.FC<GradeScreenProps> = ({
  playerName,
  selectedCharId,
  onSelectGrade,
  onBack,
}) => {
  const char = CHARACTERS.find((c) => c.id === selectedCharId) || CHARACTERS[0];

  return (
    <FloatingBg theme="cyan">
      <View style={styles.topBar}>
        <Button3D variant="slate" size="sm" onClick={onBack} icon="⬅">
          Ganti Karakter
        </Button3D>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ alignItems: 'center' }}
        >
          <Text style={styles.greeting}>
            {char.emoji} {playerName} ({char.name})
          </Text>
          <Text style={styles.subtitle}>🗺️ Pilih wilayah petualangan:</Text>
        </motion.div>

        <View style={styles.grid}>
          {Object.entries(CURRICULUM).map(([gradeKey, gradeData], idx) => (
            <motion.div
              key={gradeKey}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              style={{ width: '45%', minWidth: 160, maxWidth: 260 }}
            >
              <Tilt3DCard
                maxTilt={12}
                scaleOnHover={1.05}
                onClick={() => onSelectGrade(gradeKey)}
                glowColor="rgba(6, 182, 212, 0.4)"
              >
                <View style={styles.card3D}>
                  <Text style={styles.cardIcon}>{gradeData.icon}</Text>
                  <Text style={styles.cardTitle}>{gradeKey}</Text>
                  <Text style={styles.cardTheme}>{gradeData.theme}</Text>
                  <View style={styles.badge3D}>
                    <Text style={styles.badgeText}>{gradeData.desc}</Text>
                  </View>
                </View>
              </Tilt3DCard>
            </motion.div>
          ))}
        </View>
      </ScrollView>
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
    padding: 20,
    alignItems: 'center',
    maxWidth: 900,
    alignSelf: 'center',
    width: '100%',
  },
  greeting: {
    fontSize: 28,
    fontWeight: '900',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 6,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#bae6fd',
    marginBottom: 28,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    width: '100%',
  },
  card3D: {
    backgroundColor: 'rgba(15, 23, 42, 0.82)',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(56, 189, 248, 0.3)',
    boxShadow:
      '0 15px 30px -5px rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)',
  },
  cardIcon: {
    fontSize: 48,
    marginBottom: 10,
    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#ffffff',
    marginBottom: 4,
  },
  cardTheme: {
    fontSize: 14,
    fontWeight: '700',
    color: '#38bdf8',
    marginBottom: 12,
  },
  badge3D: {
    backgroundColor: 'rgba(14, 116, 144, 0.4)',
    borderWidth: 1,
    borderColor: '#06b6d4',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#e0f2fe',
    textAlign: 'center',
  },
});

