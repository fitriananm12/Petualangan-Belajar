import React, { useState } from 'react';

interface Button3DProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  variant?: 'amber' | 'emerald' | 'cyan' | 'purple' | 'rose' | 'slate';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  icon?: string;
}

const variantStyles = {
  amber: {
    bg: 'linear-gradient(180deg, #fde047 0%, #f59e0b 100%)',
    shadow: '#b45309',
    text: '#291e03',
    border: '#fef08a',
    glow: 'rgba(251, 191, 36, 0.4)',
  },
  emerald: {
    bg: 'linear-gradient(180deg, #34d399 0%, #059669 100%)',
    shadow: '#044e33',
    text: '#ffffff',
    border: '#a7f3d0',
    glow: 'rgba(52, 211, 153, 0.4)',
  },
  cyan: {
    bg: 'linear-gradient(180deg, #38bdf8 0%, #0284c7 100%)',
    shadow: '#075985',
    text: '#ffffff',
    border: '#bae6fd',
    glow: 'rgba(56, 189, 248, 0.4)',
  },
  purple: {
    bg: 'linear-gradient(180deg, #c084fc 0%, #7e22ce 100%)',
    shadow: '#581c87',
    text: '#ffffff',
    border: '#f3e8ff',
    glow: 'rgba(192, 132, 252, 0.4)',
  },
  rose: {
    bg: 'linear-gradient(180deg, #fb7185 0%, #e11d48 100%)',
    shadow: '#881337',
    text: '#ffffff',
    border: '#fecdd3',
    glow: 'rgba(251, 113, 133, 0.4)',
  },
  slate: {
    bg: 'linear-gradient(180deg, #94a3b8 0%, #475569 100%)',
    shadow: '#1e293b',
    text: '#ffffff',
    border: '#cbd5e1',
    glow: 'rgba(148, 163, 184, 0.3)',
  },
};

export const Button3D: React.FC<Button3DProps> = ({
  children,
  onClick,
  variant = 'amber',
  size = 'md',
  disabled = false,
  className = '',
  style = {},
  icon,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const styleConfig = variantStyles[variant] || variantStyles.amber;

  const paddingY = size === 'sm' ? 8 : size === 'lg' ? 16 : 12;
  const paddingX = size === 'sm' ? 16 : size === 'lg' ? 32 : 24;
  const fontSize = size === 'sm' ? 13 : size === 'lg' ? 18 : 15;
  const shadowDepth = isPressed ? 2 : isHovered ? 8 : 6;

  return (
    <button
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      onMouseDown={() => !disabled && setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => {
        setIsPressed(false);
        setIsHovered(false);
      }}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      className={`btn-3d ${className}`}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: `${paddingY}px ${paddingX}px`,
        fontSize: `${fontSize}px`,
        fontWeight: 800,
        color: styleConfig.text,
        background: styleConfig.bg,
        border: `2px solid ${styleConfig.border}`,
        borderRadius: '50px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        outline: 'none',
        userSelect: 'none',
        transform: isPressed
          ? `translateY(${shadowDepth / 2}px) scale(0.98)`
          : isHovered
          ? 'translateY(-2px) scale(1.02)'
          : 'translateY(0px) scale(1)',
        boxShadow: `0 ${shadowDepth}px 0 0 ${styleConfig.shadow}, 0 ${shadowDepth + 8}px 20px ${styleConfig.glow}`,
        transition: 'transform 0.1s cubic-bezier(0.2, 0.8, 0.4, 1), boxShadow 0.1s cubic-bezier(0.2, 0.8, 0.4, 1)',
        textShadow: variant === 'amber' ? '0 1px 1px rgba(255,255,255,0.8)' : '0 1px 2px rgba(0,0,0,0.4)',
        ...style,
      }}
    >
      {icon && <span style={{ fontSize: `${fontSize + 4}px` }}>{icon}</span>}
      <span style={{ position: 'relative', zIndex: 2 }}>{children}</span>
      {/* Specular top light streak */}
      <span
        style={{
          position: 'absolute',
          top: '3px',
          left: '12%',
          right: '12%',
          height: '35%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 100%)',
          borderRadius: '50px 50px 0 0',
          pointerEvents: 'none',
        }}
      />
    </button>
  );
};
