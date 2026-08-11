import React, { useState, useRef } from 'react';

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxTilt?: number; // degrees
  scaleOnHover?: number;
  glowColor?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
}

export const Tilt3DCard: React.FC<Tilt3DCardProps> = ({
  children,
  className = '',
  style = {},
  maxTilt = 12,
  scaleOnHover = 1.03,
  glowColor = 'rgba(255, 255, 255, 0.2)',
  onClick,
  disabled = false,
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0, shineX: 50, shineY: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate normalized coords -1 to 1
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    // Tilt X depends on Y, Tilt Y depends on X
    const rotateX = -yPct * maxTilt * 2;
    const rotateY = xPct * maxTilt * 2;

    const shineX = (mouseX / width) * 100;
    const shineY = (mouseY / height) * 100;

    setTilt({ x: rotateX, y: rotateY, shineX, shineY });
  };

  const handleMouseEnter = () => {
    if (!disabled) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0, shineX: 50, shineY: 50 });
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-3d-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={disabled ? undefined : onClick}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        display: 'inline-block',
        width: '100%',
        cursor: disabled ? 'not-allowed' : onClick ? 'pointer' : 'default',
        opacity: disabled ? 0.6 : 1,
        ...style,
      }}
    >
      <div
        style={{
          transform: isHovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(16px) scale(${scaleOnHover})`
            : 'rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)',
          transition: isHovered
            ? 'transform 0.1s cubic-bezier(0.03, 0.98, 0.52, 0.99)'
            : 'transform 0.5s cubic-bezier(0.03, 0.98, 0.52, 0.99)',
          transformStyle: 'preserve-3d',
          position: 'relative',
          borderRadius: '24px',
        }}
      >
        {/* Specular shine glare overlay */}
        {isHovered && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              background: `radial-gradient(circle at ${tilt.shineX}% ${tilt.shineY}%, ${glowColor} 0%, transparent 60%)`,
              pointerEvents: 'none',
              zIndex: 10,
              mixBlendMode: 'overlay',
            }}
          />
        )}
        {children}
      </div>
    </div>
  );
};
