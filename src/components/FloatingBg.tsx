import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Canvas3DBackground } from './3d/Canvas3DBackground';

interface FloatingBgProps {
  children?: React.ReactNode;
  theme?: string;
}

export const FloatingBg: React.FC<FloatingBgProps> = ({ children, theme = 'purple' }) => {
  return (
    <Canvas3DBackground theme={theme}>
      <View style={styles.content}>{children}</View>
    </Canvas3DBackground>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    height: '100%',
    zIndex: 2,
  },
});

