import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Canvas3DBackgroundProps {
  theme?: string; // 'purple' | 'cyan' | 'green' | 'amber' | 'emerald' | 'blue' | 'indigo' | 'rose';
  intensity?: number;
  children?: React.ReactNode;
}

const themeColors: Record<string, { bgTop: string; bgBottom: string; primary: number; secondary: number; accent: number }> = {
  purple: { bgTop: '#1e1b4b', bgBottom: '#31104b', primary: 0xa855f7, secondary: 0xec4899, accent: 0xf59e0b },
  cyan: { bgTop: '#083344', bgBottom: '#0e7490', primary: 0x06b6d4, secondary: 0x3b82f6, accent: 0x10b981 },
  green: { bgTop: '#052e16', bgBottom: '#14532d', primary: 0x22c55e, secondary: 0x84cc16, accent: 0xeab308 },
  amber: { bgTop: '#451a03', bgBottom: '#78350f', primary: 0xf59e0b, secondary: 0xef4444, accent: 0xfbbf24 },
  emerald: { bgTop: '#064e3b', bgBottom: '#047857', primary: 0x10b981, secondary: 0x06b6d4, accent: 0x34d399 },
  blue: { bgTop: '#172554', bgBottom: '#1e40af', primary: 0x3b82f6, secondary: 0x06b6d4, accent: 0x60a5fa },
  indigo: { bgTop: '#1e1b4b', bgBottom: '#3730a3', primary: 0x6366f1, secondary: 0x8b5cf6, accent: 0xa855f7 },
  rose: { bgTop: '#4c0519', bgBottom: '#881337', primary: 0xf43f5e, secondary: 0xec4899, accent: 0xfb7185 },
};


export const Canvas3DBackground: React.FC<Canvas3DBackgroundProps> = ({
  theme = 'purple',
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 22;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Append canvas
    const canvas = renderer.domElement;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    container.appendChild(canvas);

    // Color theme picks
    const currentTheme = themeColors[theme] || themeColors.purple;

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(currentTheme.primary, 2.5);
    dirLight.position.set(15, 20, 15);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(currentTheme.secondary, 3, 50);
    pointLight.position.set(-15, -10, 10);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(currentTheme.accent, 2, 40);
    pointLight2.position.set(10, -15, 8);
    scene.add(pointLight2);

    // 3. Floating 3D Geometries with Specular/Metallic Gloss
    const group = new THREE.Group();
    scene.add(group);

    const shapesGroup: THREE.Mesh[] = [];

    // Create 3D Polyhedrons, Torus Knots, Stars/Cubes, Crystals
    const geometries = [
      new THREE.IcosahedronGeometry(1.4, 0),
      new THREE.TorusGeometry(1.2, 0.4, 16, 32),
      new THREE.OctahedronGeometry(1.3, 0),
      new THREE.DodecahedronGeometry(1.2, 0),
      new THREE.TorusKnotGeometry(0.9, 0.3, 64, 16),
      new THREE.TetrahedronGeometry(1.5, 0),
    ];

    const materials = [
      new THREE.MeshStandardMaterial({
        color: currentTheme.primary,
        metalness: 0.3,
        roughness: 0.2,
        wireframe: false,
      }),
      new THREE.MeshStandardMaterial({
        color: currentTheme.secondary,
        metalness: 0.5,
        roughness: 0.1,
      }),
      new THREE.MeshStandardMaterial({
        color: currentTheme.accent,
        metalness: 0.2,
        roughness: 0.3,
      }),
      new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transmission: 0.6,
        opacity: 0.85,
        transparent: true,
        roughness: 0.1,
        ior: 1.5,
      }),
    ];

    // Spawn 18 interactive floating 3D objects in 3D space
    for (let i = 0; i < 18; i++) {
      const geo = geometries[i % geometries.length];
      const mat = materials[i % materials.length].clone();
      const mesh = new THREE.Mesh(geo, mat);

      mesh.position.x = (Math.random() - 0.5) * 36;
      mesh.position.y = (Math.random() - 0.5) * 28;
      mesh.position.z = (Math.random() - 0.5) * 18 - 2;

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      const scale = 0.6 + Math.random() * 0.9;
      mesh.scale.set(scale, scale, scale);

      // Custom motion attributes attached to mesh userData
      mesh.userData = {
        rotSpeedX: (Math.random() - 0.5) * 0.015,
        rotSpeedY: (Math.random() - 0.5) * 0.015,
        floatSpeed: 0.008 + Math.random() * 0.012,
        floatAmplitude: 0.8 + Math.random() * 1.2,
        initialY: mesh.position.y,
        initialX: mesh.position.x,
        phase: Math.random() * Math.PI * 2,
      };

      shapesGroup.push(mesh);
      group.add(mesh);
    }

    // 4. Particle Field (3D Ambient Starfield / Dust)
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 50;
      posArray[i + 1] = (Math.random() - 0.5) * 40;
      posArray[i + 2] = (Math.random() - 0.5) * 30;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.18,
      color: currentTheme.primary,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse movement listener for parallax & perspective tilt
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Rotate whole group subtly with mouse
      group.rotation.y = mouseRef.current.x * 0.25;
      group.rotation.x = -mouseRef.current.y * 0.25;

      camera.position.x = mouseRef.current.x * 1.5;
      camera.position.y = -mouseRef.current.y * 1.5;
      camera.lookAt(0, 0, 0);

      // Animate floating objects
      shapesGroup.forEach((mesh) => {
        const { rotSpeedX, rotSpeedY, floatSpeed, floatAmplitude, initialY, phase } =
          mesh.userData;

        mesh.rotation.x += rotSpeedX;
        mesh.rotation.y += rotSpeedY;

        mesh.position.y = initialY + Math.sin(elapsedTime * floatSpeed * 100 + phase) * floatAmplitude;
      });

      // Rotate particle field
      particles.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      // Cleanup three objects
      shapesGroup.forEach((mesh) => {
        mesh.geometry.dispose();
      });
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, [theme]);

  const currentTheme = themeColors[theme] || themeColors.purple;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '100dvh',
        background: `radial-gradient(circle at 50% 20%, ${currentTheme.bgBottom} 0%, ${currentTheme.bgTop} 100%)`,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: '100%',
          minHeight: '100dvh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </div>
    </div>
  );
};
