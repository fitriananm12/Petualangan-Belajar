import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { motion } from 'motion/react';
import { FloatingBg } from './FloatingBg';
import { Tilt3DCard } from './3d/Tilt3DCard';
import { Button3D } from './3d/Button3D';

interface LoginScreenProps {
  onLogin: (name: string) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [name, setName] = useState('');

  const handleStart = () => {
    const trimmed = name.trim();
    if (!trimmed) {
      alert('Tulis namamu dulu ya! 😊');
      return;
    }
    onLogin(trimmed);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleStart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [name]);

  return (
    <FloatingBg theme="purple">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          style={{ width: '100%', maxWidth: 460 }}
        >
          <Tilt3DCard maxTilt={10} glowColor="rgba(168, 85, 247, 0.4)">
            <View style={styles.glassCard}>
              <View style={styles.badge3D}>
                <Text style={styles.badge3DText}>🎮 GAME EDUKASI 3D</Text>
              </View>

              <Text style={styles.title}>🌟 Petualangan Belajar</Text>
              <Text style={styles.subtitle}>
                Serunya belajar Membaca, Menghitung, & Menulis!
              </Text>

              <View style={styles.inputWrapper3D}>
                <TextInput
                  style={styles.input}
                  placeholder="✏️ Ketik namamu di sini..."
                  placeholderTextColor="#94a3b8"
                  value={name}
                  onChangeText={setName}
                  maxLength={20}
                  onSubmitEditing={handleStart}
                  returnKeyType="done"
                />
              </View>

              <View style={{ width: '100%', marginTop: 24 }}>
                <Button3D
                  variant="amber"
                  size="lg"
                  onClick={handleStart}
                  icon="🚀"
                  style={{ width: '100%' }}
                >
                  Mulai Petualangan
                </Button3D>
              </View>
            </View>
          </Tilt3DCard>
        </motion.div>
      </KeyboardAvoidingView>
    </FloatingBg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  glassCard: {
    width: '100%',
    backgroundColor: 'rgba(15, 23, 42, 0.75)',
    borderRadius: 28,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.25)',
    padding: 32,
    alignItems: 'center',
    boxShadow:
      '0 25px 50px -12px rgba(0, 0, 0, 0.6), inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)',
  },
  badge3D: {
    backgroundColor: 'rgba(168, 85, 247, 0.3)',
    borderColor: '#c084fc',
    borderWidth: 1.5,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 50,
    marginBottom: 16,
    boxShadow: '0 4px 12px rgba(168, 85, 247, 0.3)',
  },
  badge3DText: {
    color: '#e9d5ff',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#cbd5e1',
    textAlign: 'center',
    marginBottom: 28,
    fontWeight: '600',
    lineHeight: 22,
  },
  inputWrapper3D: {
    width: '100%',
    position: 'relative',
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 50,
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
    textAlign: 'center',
    borderWidth: 3,
    borderColor: '#38bdf8',
    boxShadow:
      '0 10px 15px -3px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.1)',
  },
});

