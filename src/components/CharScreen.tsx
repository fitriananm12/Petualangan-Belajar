import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { motion } from 'motion/react';
import { CHARACTERS } from '../data/characters';
import { FloatingBg } from './FloatingBg';
import { Tilt3DCard } from './3d/Tilt3DCard';
import { Button3D } from './3d/Button3D';

interface CharScreenProps {
  playerName: string;
  selectedCharId?: string;
  onSelectCharacter: (charId: string) => void;
  onBack: () => void;
}

export const CharScreen: React.FC<CharScreenProps> = ({
  playerName,
  selectedCharId,
  onSelectCharacter,
  onBack,
}) => {
  const [selectedId, setSelectedId] = useState<string>(selectedCharId || 'rana');

  const handleConfirm = () => {
    if (selectedId) {
      onSelectCharacter(selectedId);
    }
  };

  return (
    <FloatingBg theme="indigo">
      <View style={styles.topBar}>
        <Button3D variant="slate" size="sm" onClick={onBack} icon="⬅">
          Ganti Nama
        </Button3D>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ alignItems: 'center' }}
        >
          <Text style={styles.greeting}>Halo, {playerName}! 👋</Text>
          <Text style={styles.subtitle}>🎭 Pilih karakter jagoanmu:</Text>
        </motion.div>

        <View style={styles.grid}>
          {CHARACTERS.map((ch, idx) => {
            const isSelected = selectedId === ch.id;
            return (
              <motion.div
                key={ch.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                style={{ width: '45%', minWidth: 150, maxWidth: 220 }}
              >
                <Tilt3DCard
                  maxTilt={12}
                  scaleOnHover={1.05}
                  onClick={() => setSelectedId(ch.id)}
                  glowColor={ch.accent}
                >
                  <View
                    style={[
                      styles.card3D,
                      isSelected && styles.cardSelected3D,
                    ]}
                  >
                    {isSelected && (
                      <View style={styles.checkBadge3D}>
                        <Text style={styles.checkText}>✓</Text>
                      </View>
                    )}
                    <View
                      style={[
                        styles.avatarBox3D,
                        { backgroundColor: ch.accent },
                      ]}
                    >
                      <Text style={styles.emoji}>{ch.emoji}</Text>
                    </View>
                    <Text style={styles.charName}>{ch.name}</Text>
                    <Text style={styles.charTrait}>{ch.trait}</Text>
                  </View>
                </Tilt3DCard>
              </motion.div>
            );
          })}
        </View>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ marginTop: 12, width: '100%', maxWidth: 300 }}
        >
          <Button3D
            variant="amber"
            size="lg"
            disabled={!selectedId}
            onClick={handleConfirm}
            icon="✅"
            style={{ width: '100%' }}
          >
            Pilih Karakter Ini
          </Button3D>
        </motion.div>
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
    fontSize: 30,
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
    color: '#e2e8f0',
    marginBottom: 28,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    width: '100%',
    marginBottom: 28,
  },
  card3D: {
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    position: 'relative',
    boxShadow:
      '0 15px 30px -5px rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)',
  },
  cardSelected3D: {
    borderColor: '#f59e0b',
    backgroundColor: 'rgba(30, 41, 59, 0.95)',
    boxShadow:
      '0 20px 35px -5px rgba(245, 158, 11, 0.4), inset 0 0 12px rgba(245, 158, 11, 0.3)',
  },
  checkBadge3D: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f59e0b',
    borderWidth: 2,
    borderColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    zIndex: 10,
  },
  checkText: {
    fontWeight: '900',
    color: '#ffffff',
    fontSize: 16,
  },
  avatarBox3D: {
    width: 72,
    height: 72,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    boxShadow:
      '0 10px 20px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.4)',
  },
  emoji: {
    fontSize: 38,
  },
  charName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 4,
  },
  charTrait: {
    fontSize: 12,
    fontWeight: '600',
    color: '#94a3b8',
    textAlign: 'center',
  },
});
