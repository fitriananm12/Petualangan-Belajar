import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { motion } from 'motion/react';
import { audioManager } from '../utils/audio';
import { Button3D } from './3d/Button3D';

export type ThemeOverride = 'auto' | 'hutan' | 'pantai' | 'desa' | 'lembah' | 'gurun' | 'danau' | 'gunung' | 'istana' | 'padang';

interface SettingsModalProps {
  visible: boolean;
  selectedThemeOverride: ThemeOverride;
  onSelectThemeOverride: (theme: ThemeOverride) => void;
  isMusicMuted: boolean;
  onToggleMusic: () => void;
  isSFXMuted: boolean;
  onToggleSFX: () => void;
  onClose: () => void;
}

const themeOptions: { key: ThemeOverride; label: string; icon: string }[] = [
  { key: 'auto', label: 'Otomatis (Sesuai Topik)', icon: '🎯' },
  { key: 'hutan', label: 'Hutan Tunas', icon: '🌲' },
  { key: 'pantai', label: 'Pantai Tropis', icon: '🏖️' },
  { key: 'desa', label: 'Desa Warga', icon: '🏡' },
  { key: 'lembah', label: 'Lembah Hijau', icon: '🏞️' },
  { key: 'gurun', label: 'Gurun Pasir', icon: '🏜️' },
  { key: 'danau', label: 'Danau Biru', icon: '🌊' },
  { key: 'gunung', label: 'Puncak Gunung', icon: '🏔️' },
  { key: 'istana', label: 'Istana Kerajaan', icon: '🏰' },
  { key: 'padang', label: 'Padang Savana', icon: '🌾' },
];

export const SettingsModal: React.FC<SettingsModalProps> = ({
  visible,
  selectedThemeOverride,
  onSelectThemeOverride,
  isMusicMuted,
  onToggleMusic,
  isSFXMuted,
  onToggleSFX,
  onClose,
}) => {
  if (!visible) return null;

  return (
    <View style={styles.modalWrapper}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={styles.backdrop}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          style={styles.cardContainer}
        >
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>⚙️ Pengaturan Game</Text>
            <TouchableOpacity
              style={styles.closeBtn}
              activeOpacity={0.7}
              onPress={onClose}
              // @ts-ignore - web click fallback
              onClick={onClose}
            >
              <Text style={styles.closeBtnText}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollContent}>
            {/* Audio Settings Section */}
            <View style={styles.sectionCard}>
              <Text style={styles.sectionTitle}>🔊 Pengaturan Suara & Musik</Text>
              
              <View style={styles.toggleRow}>
                <View style={styles.toggleLabelGroup}>
                  <Text style={styles.toggleLabelText}>🎵 Musik Latar (BGM)</Text>
                  <Text style={styles.toggleSubText}>Musik yang menyesuaikan tema lokasi</Text>
                </View>
                <TouchableOpacity
                  style={[styles.togglePill, !isMusicMuted ? styles.togglePillActive : styles.togglePillInactive]}
                  activeOpacity={0.8}
                  onPress={onToggleMusic}
                  // @ts-ignore
                  onClick={onToggleMusic}
                >
                  <Text style={styles.togglePillText}>{!isMusicMuted ? 'ON 🔊' : 'OFF 🔇'}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.toggleRow}>
                <View style={styles.toggleLabelGroup}>
                  <Text style={styles.toggleLabelText}>🔔 Efek Suara (SFX)</Text>
                  <Text style={styles.toggleSubText}>Suara jawaban benar / salah</Text>
                </View>
                <TouchableOpacity
                  style={[styles.togglePill, !isSFXMuted ? styles.togglePillActive : styles.togglePillInactive]}
                  activeOpacity={0.8}
                  onPress={onToggleSFX}
                  // @ts-ignore
                  onClick={onToggleSFX}
                >
                  <Text style={styles.togglePillText}>{!isSFXMuted ? 'ON 🔔' : 'OFF 🔇'}</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Theme / Biome Override Section */}
            <View style={styles.sectionCard}>
              <Text style={styles.sectionTitle}>🎨 Pengaturan Tema & Peta (Map Biome)</Text>
              <Text style={styles.sectionSubTitle}>Pilih tampilan visual lokasi dan suasana musik tempat bermain:</Text>

              <View style={styles.themeGrid}>
                {themeOptions.map((opt) => {
                  const isSelected = selectedThemeOverride === opt.key;
                  return (
                    <TouchableOpacity
                      key={opt.key}
                      style={[styles.themeCard, isSelected && styles.themeCardSelected]}
                      activeOpacity={0.8}
                      onPress={() => onSelectThemeOverride(opt.key)}
                      // @ts-ignore
                      onClick={() => onSelectThemeOverride(opt.key)}
                    >
                      <Text style={styles.themeIcon}>{opt.icon}</Text>
                      <Text style={[styles.themeLabel, isSelected && styles.themeLabelSelected]}>
                        {opt.label}
                      </Text>
                      {isSelected && <Text style={styles.checkBadge}>✓</Text>}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </ScrollView>

          <View style={{ marginTop: 16 }}>
            <Button3D
              variant="cyan"
              size="md"
              onClick={onClose}
              icon="💾"
              style={{ width: '100%' }}
            >
              Simpan & Kembali
            </Button3D>
          </View>
        </motion.div>
      </motion.div>
    </View>
  );
};


const styles = StyleSheet.create({
  modalWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
  },
  backdrop: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  cardContainer: {
    width: '100%',
    maxWidth: 540,
    maxHeight: '90%',
    backgroundColor: '#0f172a',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#38bdf8',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
    marginBottom: 12,
  },
  modalTitle: {
    color: '#f8fafc',
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeBtn: {
    backgroundColor: '#1e293b',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#475569',
  },
  closeBtnText: {
    color: '#94a3b8',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollArea: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 4,
    gap: 16,
  },
  sectionCard: {
    backgroundColor: '#1e293b',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  sectionTitle: {
    color: '#38bdf8',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  sectionSubTitle: {
    color: '#94a3b8',
    fontSize: 13,
    marginBottom: 12,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  toggleLabelGroup: {
    flex: 1,
    paddingRight: 12,
  },
  toggleLabelText: {
    color: '#f8fafc',
    fontSize: 14,
    fontWeight: '600',
  },
  toggleSubText: {
    color: '#64748b',
    fontSize: 12,
  },
  togglePill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1.5,
  },
  togglePillActive: {
    backgroundColor: '#0284c7',
    borderColor: '#38bdf8',
  },
  togglePillInactive: {
    backgroundColor: '#334155',
    borderColor: '#64748b',
  },
  togglePillText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  themeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 4,
  },
  themeCard: {
    width: '48%',
    backgroundColor: '#0f172a',
    borderRadius: 12,
    padding: 10,
    borderWidth: 1.5,
    borderColor: '#334155',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    position: 'relative',
  },
  themeCardSelected: {
    backgroundColor: '#0369a1',
    borderColor: '#38bdf8',
  },
  themeIcon: {
    fontSize: 18,
  },
  themeLabel: {
    color: '#cbd5e1',
    fontSize: 12,
    fontWeight: '500',
    flex: 1,
  },
  themeLabelSelected: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  checkBadge: {
    color: '#38bdf8',
    fontSize: 14,
    fontWeight: 'bold',
  },
  saveCloseBtn: {
    backgroundColor: '#0284c7',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#38bdf8',
  },
  saveCloseBtnText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
