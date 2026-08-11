import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Character, CategoryData } from '../types';
import { PosSelector } from './PosSelector';
import { SettingsModal, ThemeOverride } from './SettingsModal';
import { audioManager } from '../utils/audio';

interface GameCanvasProps {
  character: Character;
  playerName: string;
  gradeKey: string;
  categoryKey: string;
  categoryData: CategoryData;
  currentPosIndex: number;
  unlockedPosIndex?: number;
  completedPosIndices?: number[];
  failedPosIndices?: number[];
  activeSlide?: number;
  onSlideChange?: (slideIndex: number) => void;
  lives?: number;
  score?: number;
  onSelectPosIndex?: (index: number) => void;
  onReachCheckpoint: (posIdx?: number) => void;
  onBack: () => void;
}

const SLIDE_SIZE = 5;

// Helper to render specific character 3D shapes
const render3DCharacterShape = (
  ctx: CanvasRenderingContext2D,
  character: Character,
  px: number,
  py: number,
  size: number,
  facingRight: boolean,
  frameCount: number
) => {
  const eyeDir = facingRight ? 5 : -5;
  const radius = size * 0.55;

  ctx.save();

  switch (character.id) {
    case 'rana': {
      // 🦁 RANA - SINGA REALISTIS (Realistic Lion with Anatomical Body, Paws & Layered Mane)
      const tailSway = Math.sin(frameCount * 0.15) * 10;
      const legStep = Math.sin(frameCount * 0.2) * 4;

      // 1. Realistic Wagging Lion Tail
      ctx.strokeStyle = '#9a3412';
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(px - (facingRight ? 16 : -16), py + 8);
      ctx.quadraticCurveTo(
        px - (facingRight ? 32 : -32),
        py + 12,
        px - (facingRight ? 42 : -42) + tailSway,
        py - 12
      );
      ctx.stroke();

      // Bushy Tail Tuft
      const tailTuftX = px - (facingRight ? 42 : -42) + tailSway;
      const tailTuftY = py - 12;
      const tailGrad = ctx.createRadialGradient(tailTuftX, tailTuftY, 2, tailTuftX, tailTuftY, 10);
      tailGrad.addColorStop(0, '#78350f');
      tailGrad.addColorStop(1, '#451a03');
      ctx.fillStyle = tailGrad;
      ctx.beginPath();
      ctx.ellipse(tailTuftX, tailTuftY, 9, 7, facingRight ? -0.4 : 0.4, 0, Math.PI * 2);
      ctx.fill();

      // 2. Hind Legs & Paws
      ctx.fillStyle = '#b45309';
      // Left Back Paw
      ctx.beginPath();
      ctx.ellipse(px - 18, py + 22 + legStep, 8, 5, 0, 0, Math.PI * 2);
      ctx.fill();
      // Right Back Paw
      ctx.beginPath();
      ctx.ellipse(px + 18, py + 22 - legStep, 8, 5, 0, 0, Math.PI * 2);
      ctx.fill();

      // Back Paw Claws
      ctx.fillStyle = '#fef08a';
      ctx.beginPath();
      ctx.arc(px - 20, py + 24 + legStep, 2, 0, Math.PI * 2);
      ctx.arc(px - 16, py + 24 + legStep, 2, 0, Math.PI * 2);
      ctx.arc(px + 16, py + 24 - legStep, 2, 0, Math.PI * 2);
      ctx.arc(px + 20, py + 24 - legStep, 2, 0, Math.PI * 2);
      ctx.fill();

      // 3. Lion Torso (Muscular Body)
      const bodyGrad = ctx.createLinearGradient(px, py - 10, px, py + 20);
      bodyGrad.addColorStop(0, '#f59e0b');
      bodyGrad.addColorStop(1, '#b45309');
      ctx.fillStyle = bodyGrad;
      ctx.beginPath();
      ctx.ellipse(px, py + 6, radius * 0.95, radius * 0.75, 0, 0, Math.PI * 2);
      ctx.fill();

      // Light Cream Chest Fur
      ctx.fillStyle = '#fef3c7';
      ctx.beginPath();
      ctx.ellipse(px + eyeDir * 0.5, py + 8, radius * 0.45, radius * 0.5, 0, 0, Math.PI * 2);
      ctx.fill();

      // Front Legs & Paws
      ctx.fillStyle = '#d97706';
      ctx.beginPath();
      ctx.ellipse(px - 10, py + 22 - legStep, 7, 6, 0, 0, Math.PI * 2);
      ctx.ellipse(px + 10, py + 22 + legStep, 7, 6, 0, 0, Math.PI * 2);
      ctx.fill();

      // 4. Multi-Layered Majestic Mane (Surai Singa)
      const outerManeR = radius + 14;
      ctx.fillStyle = '#78350f'; // Darker base mane
      for (let i = 0; i < 16; i++) {
        const angle = (i * Math.PI) / 8 + frameCount * 0.015;
        const mx = px + Math.cos(angle) * outerManeR;
        const my = (py - 6) + Math.sin(angle) * (outerManeR - 2);
        ctx.beginPath();
        ctx.arc(mx, my, 10, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = '#b45309'; // Mid golden mane
      for (let i = 0; i < 14; i++) {
        const angle = (i * Math.PI) / 7 - frameCount * 0.015;
        const mx = px + Math.cos(angle) * (outerManeR - 4);
        const my = (py - 6) + Math.sin(angle) * (outerManeR - 5);
        ctx.beginPath();
        ctx.arc(mx, my, 8, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = '#f59e0b'; // Light amber highlights
      for (let i = 0; i < 12; i++) {
        const angle = (i * Math.PI) / 6;
        const mx = px + Math.cos(angle) * (outerManeR - 8);
        const my = (py - 6) + Math.sin(angle) * (outerManeR - 8);
        ctx.beginPath();
        ctx.arc(mx, my, 6, 0, Math.PI * 2);
        ctx.fill();
      }

      // 5. Lion Head
      const lionHeadGrad = ctx.createRadialGradient(px - 4, py - 10, 3, px, py - 4, radius * 0.7);
      lionHeadGrad.addColorStop(0, '#fbbf24');
      lionHeadGrad.addColorStop(1, '#d97706');
      ctx.fillStyle = lionHeadGrad;
      ctx.beginPath();
      ctx.arc(px, py - 6, radius * 0.7, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#78350f';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Rounded Ears
      ctx.fillStyle = '#b45309';
      ctx.beginPath();
      ctx.arc(px - 16, py - 22, 8, 0, Math.PI * 2);
      ctx.arc(px + 16, py - 22, 8, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#fef3c7';
      ctx.beginPath();
      ctx.arc(px - 16, py - 22, 4.5, 0, Math.PI * 2);
      ctx.arc(px + 16, py - 22, 4.5, 0, Math.PI * 2);
      ctx.fill();

      // Muzzle & Snout
      ctx.fillStyle = '#fef08a';
      ctx.beginPath();
      ctx.ellipse(px + eyeDir * 0.5, py - 1, 12, 9, 0, 0, Math.PI * 2);
      ctx.fill();

      // Leather Nose
      ctx.fillStyle = '#451a03';
      ctx.beginPath();
      ctx.moveTo(px + eyeDir - 4, py - 4);
      ctx.lineTo(px + eyeDir + 4, py - 4);
      ctx.lineTo(px + eyeDir, py + 1);
      ctx.closePath();
      ctx.fill();

      // Realistic Almond Eyes
      const leftEyeX = px + eyeDir - 8;
      const rightEyeX = px + eyeDir + 8;
      const eyeY = py - 9;

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.ellipse(leftEyeX, eyeY, 5, 4, 0, 0, Math.PI * 2);
      ctx.ellipse(rightEyeX, eyeY, 5, 4, 0, 0, Math.PI * 2);
      ctx.fill();

      // Amber Iris & Black Pupil
      ctx.fillStyle = '#b45309';
      ctx.beginPath();
      ctx.arc(leftEyeX + (facingRight ? 1 : -1), eyeY, 3, 0, Math.PI * 2);
      ctx.arc(rightEyeX + (facingRight ? 1 : -1), eyeY, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.arc(leftEyeX + (facingRight ? 1 : -1), eyeY, 1.8, 0, Math.PI * 2);
      ctx.arc(rightEyeX + (facingRight ? 1 : -1), eyeY, 1.8, 0, Math.PI * 2);
      ctx.fill();

      // Specular Light Spot
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(leftEyeX - 1, eyeY - 1, 1, 0, Math.PI * 2);
      ctx.arc(rightEyeX - 1, eyeY - 1, 1, 0, Math.PI * 2);
      ctx.fill();

      // Whiskers
      ctx.strokeStyle = '#78350f';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(px + eyeDir - 6, py);
      ctx.lineTo(px + eyeDir - 18, py - 2);
      ctx.moveTo(px + eyeDir - 6, py + 2);
      ctx.lineTo(px + eyeDir - 16, py + 5);

      ctx.moveTo(px + eyeDir + 6, py);
      ctx.lineTo(px + eyeDir + 18, py - 2);
      ctx.moveTo(px + eyeDir + 6, py + 2);
      ctx.lineTo(px + eyeDir + 16, py + 5);
      ctx.stroke();

      break;
    }

    case 'bima': {
      // 🦉 BIMA - BURUNG HANTU REALISTIS (Realistic Owl with Layered Feather Wings, Facial Disk & Talons)
      const wingFlap = Math.sin(frameCount * 0.18) * 6;
      const headBob = Math.sin(frameCount * 0.1) * 2;

      // 1. Sharp Talons (Cakar Burung Hantu)
      ctx.fillStyle = '#d97706';
      ctx.beginPath();
      // Left Talon
      ctx.arc(px - 10, py + 22, 3, 0, Math.PI * 2);
      ctx.arc(px - 6, py + 23, 3, 0, Math.PI * 2);
      ctx.arc(px - 2, py + 22, 3, 0, Math.PI * 2);
      // Right Talon
      ctx.arc(px + 2, py + 22, 3, 0, Math.PI * 2);
      ctx.arc(px + 6, py + 23, 3, 0, Math.PI * 2);
      ctx.arc(px + 10, py + 22, 3, 0, Math.PI * 2);
      ctx.fill();

      // 2. Realistic Layered Feathered Wings
      // Left Wing
      ctx.fillStyle = '#1e3a8a';
      ctx.beginPath();
      ctx.ellipse(
        px - radius - 2,
        py + 2,
        12,
        22,
        -0.25 - wingFlap * 0.02,
        0,
        Math.PI * 2
      );
      ctx.fill();

      ctx.fillStyle = '#3b82f6';
      ctx.beginPath();
      ctx.ellipse(
        px - radius - 1,
        py + 4,
        8,
        16,
        -0.2 - wingFlap * 0.02,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // Right Wing
      ctx.fillStyle = '#1e3a8a';
      ctx.beginPath();
      ctx.ellipse(
        px + radius + 2,
        py + 2,
        12,
        22,
        0.25 + wingFlap * 0.02,
        0,
        Math.PI * 2
      );
      ctx.fill();

      ctx.fillStyle = '#3b82f6';
      ctx.beginPath();
      ctx.ellipse(
        px + radius + 1,
        py + 4,
        8,
        16,
        0.2 + wingFlap * 0.02,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // 3. Tapered Owl Torso Body
      const owlBodyGrad = ctx.createLinearGradient(px, py - 12, px, py + 20);
      owlBodyGrad.addColorStop(0, '#2563eb');
      owlBodyGrad.addColorStop(1, '#1e3a8a');
      ctx.fillStyle = owlBodyGrad;
      ctx.beginPath();
      ctx.ellipse(px, py + 2, radius * 0.85, radius * 1.05, 0, 0, Math.PI * 2);
      ctx.fill();

      // Downy Feather Chest Pattern (V-shape Spots)
      ctx.fillStyle = '#dbeafe';
      ctx.beginPath();
      ctx.ellipse(px, py + 8, radius * 0.55, radius * 0.65, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#93c5fd';
      ctx.lineWidth = 1.8;
      for (let row = 0; row < 3; row++) {
        for (let col = -1; col <= 1; col++) {
          ctx.beginPath();
          const fx = px + col * 7;
          const fy = py + 4 + row * 6;
          ctx.arc(fx, fy, 3, 0, Math.PI);
          ctx.stroke();
        }
      }

      // 4. Feathered Ear Tufts (Horn Feathers)
      ctx.fillStyle = '#1e3a8a';
      ctx.beginPath();
      ctx.moveTo(px - 14, py - radius + 4 + headBob);
      ctx.lineTo(px - 22, py - radius - 16 + headBob);
      ctx.lineTo(px - 6, py - radius - 2 + headBob);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(px + 14, py - radius + 4 + headBob);
      ctx.lineTo(px + 22, py - radius - 16 + headBob);
      ctx.lineTo(px + 6, py - radius - 2 + headBob);
      ctx.closePath();
      ctx.fill();

      // 5. Owl Head & Facial Disk (Heart/Double-Ring Face)
      ctx.fillStyle = '#eff6ff';
      ctx.beginPath();
      ctx.ellipse(px - 9, py - 6 + headBob, 12, 13, 0, 0, Math.PI * 2);
      ctx.ellipse(px + 9, py - 6 + headBob, 12, 13, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#1e40af';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Large Luminous Owl Eyes
      const owlEyeY = py - 7 + headBob;
      ctx.fillStyle = '#fef08a'; // Golden yellow outer ring
      ctx.beginPath();
      ctx.arc(px - 9, owlEyeY, 9, 0, Math.PI * 2);
      ctx.arc(px + 9, owlEyeY, 9, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#f59e0b'; // Amber inner iris
      ctx.beginPath();
      ctx.arc(px - 9, owlEyeY, 7, 0, Math.PI * 2);
      ctx.arc(px + 9, owlEyeY, 7, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#0f172a'; // Deep pupil
      ctx.beginPath();
      ctx.arc(px - 9 + eyeDir * 0.3, owlEyeY, 4.5, 0, Math.PI * 2);
      ctx.arc(px + 9 + eyeDir * 0.3, owlEyeY, 4.5, 0, Math.PI * 2);
      ctx.fill();

      // Glint
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(px - 11, owlEyeY - 2, 1.8, 0, Math.PI * 2);
      ctx.arc(px + 7, owlEyeY - 2, 1.8, 0, Math.PI * 2);
      ctx.fill();

      // Hooked Beak (Paruh Burung Hantu)
      ctx.fillStyle = '#ea580c';
      ctx.beginPath();
      ctx.moveTo(px - 4, py - 2 + headBob);
      ctx.lineTo(px + 4, py - 2 + headBob);
      ctx.lineTo(px, py + 8 + headBob);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#f97316';
      ctx.beginPath();
      ctx.moveTo(px - 2, py - 2 + headBob);
      ctx.lineTo(px + 2, py - 2 + headBob);
      ctx.lineTo(px, py + 5 + headBob);
      ctx.closePath();
      ctx.fill();

      break;
    }

    case 'sari': {
      // 🦋 SARI - KUPU-KUPU REALISTIS (Realistic Swallowtail Butterfly with Detailed Wing Veins & Translucent Glow)
      const wingFlap = Math.sin(frameCount * 0.22) * 0.35 + 0.75;
      const hoverY = Math.sin(frameCount * 0.15) * 3;

      // 1. Forewings & Hindwings (Sayap Depan & Sayap Belakang)
      ctx.save();
      ctx.translate(px, py + hoverY);

      // Top Forewings
      const fwWidth = 26 * wingFlap;
      const fwHeight = 22;

      // Left Forewing
      const leftWingGrad = ctx.createRadialGradient(-15 * wingFlap, -12, 4, -15 * wingFlap, -12, 24);
      leftWingGrad.addColorStop(0, '#f472b6');
      leftWingGrad.addColorStop(0.6, '#ec4899');
      leftWingGrad.addColorStop(1, '#831843');
      ctx.fillStyle = leftWingGrad;
      ctx.beginPath();
      ctx.ellipse(-16 * wingFlap, -12, fwWidth, fwHeight, -0.35, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fbcfe8';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Right Forewing
      const rightWingGrad = ctx.createRadialGradient(15 * wingFlap, -12, 4, 15 * wingFlap, -12, 24);
      rightWingGrad.addColorStop(0, '#f472b6');
      rightWingGrad.addColorStop(0.6, '#ec4899');
      rightWingGrad.addColorStop(1, '#831843');
      ctx.fillStyle = rightWingGrad;
      ctx.beginPath();
      ctx.ellipse(16 * wingFlap, -12, fwWidth, fwHeight, 0.35, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fbcfe8';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Bottom Hindwings
      const hwWidth = 18 * wingFlap;
      const hwHeight = 16;

      ctx.fillStyle = '#db2777';
      // Left Hindwing
      ctx.beginPath();
      ctx.ellipse(-14 * wingFlap, 12, hwWidth, hwHeight, 0.25, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Right Hindwing
      ctx.beginPath();
      ctx.ellipse(14 * wingFlap, 12, hwWidth, hwHeight, -0.25, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Detailed Black Vein Lines across Wings
      ctx.strokeStyle = 'rgba(131, 24, 67, 0.7)';
      ctx.lineWidth = 1.2;

      // Left Veins
      ctx.beginPath();
      ctx.moveTo(0, -4);
      ctx.lineTo(-30 * wingFlap, -22);
      ctx.moveTo(0, -4);
      ctx.lineTo(-32 * wingFlap, -10);
      ctx.moveTo(0, -4);
      ctx.lineTo(-24 * wingFlap, 6);
      ctx.moveTo(0, 4);
      ctx.lineTo(-20 * wingFlap, 22);
      ctx.stroke();

      // Right Veins
      ctx.beginPath();
      ctx.moveTo(0, -4);
      ctx.lineTo(30 * wingFlap, -22);
      ctx.moveTo(0, -4);
      ctx.lineTo(32 * wingFlap, -10);
      ctx.moveTo(0, -4);
      ctx.lineTo(24 * wingFlap, 6);
      ctx.moveTo(0, 4);
      ctx.lineTo(20 * wingFlap, 22);
      ctx.stroke();

      // White Spots along Wing Edges
      ctx.fillStyle = '#ffffff';
      const spots = [-32, -26, -18, 18, 26, 32];
      spots.forEach((sp) => {
        ctx.beginPath();
        ctx.arc(sp * wingFlap, -14 + Math.abs(sp) * 0.15, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Segmented Insect Body (Head, Thorax, Abdomen)
      // Abdomen
      const abdGrad = ctx.createLinearGradient(0, 0, 0, 22);
      abdGrad.addColorStop(0, '#be185d');
      abdGrad.addColorStop(1, '#500724');
      ctx.fillStyle = abdGrad;
      ctx.beginPath();
      ctx.ellipse(0, 10, 5, 13, 0, 0, Math.PI * 2);
      ctx.fill();

      // Abdomen Segment Stripes
      ctx.strokeStyle = '#fbcfe8';
      ctx.lineWidth = 1;
      for (let s = 2; s <= 16; s += 4) {
        ctx.beginPath();
        ctx.moveTo(-4, s);
        ctx.lineTo(4, s);
        ctx.stroke();
      }

      // Thorax (Fuzzy Midsection)
      ctx.fillStyle = '#9d174d';
      ctx.beginPath();
      ctx.arc(0, -2, 6.5, 0, Math.PI * 2);
      ctx.fill();

      // Head
      ctx.fillStyle = '#831843';
      ctx.beginPath();
      ctx.arc(0, -10, 5, 0, Math.PI * 2);
      ctx.fill();

      // Delicate Curved Antennae
      ctx.strokeStyle = '#f472b6';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(-2, -14);
      ctx.quadraticCurveTo(-12, -28, -16, -24);
      ctx.moveTo(2, -14);
      ctx.quadraticCurveTo(12, -28, 16, -24);
      ctx.stroke();

      // Antenna Tips
      ctx.fillStyle = '#fde047';
      ctx.beginPath();
      ctx.arc(-16, -24, 2.5, 0, Math.PI * 2);
      ctx.arc(16, -24, 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Compound Eyes
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(-2.5, -11, 2, 0, Math.PI * 2);
      ctx.arc(2.5, -11, 2, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
      break;
    }

    case 'dika': {
      // 🐿️ DIKA - TUPAI REALISTIS (Realistic Squirrel with Bushy Curved Tail & Acorn)
      const tailSway = Math.sin(frameCount * 0.14) * 8;
      const earTwitch = Math.sin(frameCount * 0.18) * 3;

      // 1. Giant Fluffy S-Curved Squirrel Tail (Ekor Tupai Lebat)
      const tailX = px - (facingRight ? 24 : -24) + tailSway;
      const tailY = py - 18;

      ctx.fillStyle = '#c2410c';
      ctx.beginPath();
      ctx.arc(tailX, tailY, 22, 0, Math.PI * 2);
      ctx.arc(tailX - 8, tailY + 14, 18, 0, Math.PI * 2);
      ctx.fill();

      const tailInnerGrad = ctx.createRadialGradient(tailX, tailY, 4, tailX, tailY, 20);
      tailInnerGrad.addColorStop(0, '#fdba74');
      tailInnerGrad.addColorStop(1, '#ea580c');
      ctx.fillStyle = tailInnerGrad;
      ctx.beginPath();
      ctx.arc(tailX, tailY, 15, 0, Math.PI * 2);
      ctx.fill();

      // 2. Hind Legs & Body
      ctx.fillStyle = '#ea580c';
      // Thigh
      ctx.beginPath();
      ctx.ellipse(px - 8, py + 12, 11, 14, -0.2, 0, Math.PI * 2);
      ctx.fill();

      // Main Torso
      const sqGrad = ctx.createLinearGradient(px, py - 10, px, py + 18);
      sqGrad.addColorStop(0, '#fb923c');
      sqGrad.addColorStop(1, '#c2410c');
      ctx.fillStyle = sqGrad;
      ctx.beginPath();
      ctx.ellipse(px, py + 2, radius * 0.85, radius * 0.95, 0, 0, Math.PI * 2);
      ctx.fill();

      // Pale Cream Belly Fur
      ctx.fillStyle = '#ffedd5';
      ctx.beginPath();
      ctx.ellipse(px + eyeDir * 0.4, py + 4, radius * 0.45, radius * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();

      // 3. Squirrel Holding an Acorn (Biji Ek)
      const acornX = px + eyeDir * 1.5;
      const acornY = py + 8;
      // Acorn Nut
      ctx.fillStyle = '#b45309';
      ctx.beginPath();
      ctx.ellipse(acornX, acornY + 2, 5, 6, 0, 0, Math.PI * 2);
      ctx.fill();
      // Acorn Cap
      ctx.fillStyle = '#78350f';
      ctx.beginPath();
      ctx.ellipse(acornX, acornY - 3, 6, 3, 0, 0, Math.PI * 2);
      ctx.fill();

      // Front Paws clutching acorn
      ctx.fillStyle = '#ea580c';
      ctx.beginPath();
      ctx.arc(acornX - 4, acornY + 1, 3.5, 0, Math.PI * 2);
      ctx.arc(acornX + 4, acornY + 1, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // 4. Squirrel Head
      ctx.fillStyle = '#ea580c';
      ctx.beginPath();
      ctx.arc(px, py - 8, radius * 0.7, 0, Math.PI * 2);
      ctx.fill();

      // Pointy Ears with Tuft Tips
      ctx.fillStyle = '#c2410c';
      ctx.beginPath();
      ctx.moveTo(px - 14, py - 12);
      ctx.lineTo(px - 20 + earTwitch, py - 28);
      ctx.lineTo(px - 6, py - 18);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(px + 14, py - 12);
      ctx.lineTo(px + 20 - earTwitch, py - 28);
      ctx.lineTo(px + 6, py - 18);
      ctx.closePath();
      ctx.fill();

      // Inner Ear Pink
      ctx.fillStyle = '#fed7aa';
      ctx.beginPath();
      ctx.moveTo(px - 12, py - 14);
      ctx.lineTo(px - 17, py - 24);
      ctx.lineTo(px - 8, py - 18);
      ctx.closePath();
      ctx.fill();

      // Chubby Cheeks
      ctx.fillStyle = '#ffedd5';
      ctx.beginPath();
      ctx.arc(px - 7 + eyeDir * 0.5, py - 2, 7, 0, Math.PI * 2);
      ctx.arc(px + 7 + eyeDir * 0.5, py - 2, 7, 0, Math.PI * 2);
      ctx.fill();

      // Dark Nose
      ctx.fillStyle = '#451a03';
      ctx.beginPath();
      ctx.arc(px + eyeDir, py - 5, 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Glossy Almond Eyes
      const sqEyeX1 = px + eyeDir - 7;
      const sqEyeX2 = px + eyeDir + 7;
      const sqEyeY = py - 10;

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(sqEyeX1, sqEyeY, 4.5, 0, Math.PI * 2);
      ctx.arc(sqEyeX2, sqEyeY, 4.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.arc(sqEyeX1 + (facingRight ? 1 : -1), sqEyeY, 2.8, 0, Math.PI * 2);
      ctx.arc(sqEyeX2 + (facingRight ? 1 : -1), sqEyeY, 2.8, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(sqEyeX1 - 1, sqEyeY - 1, 1, 0, Math.PI * 2);
      ctx.arc(sqEyeX2 - 1, sqEyeY - 1, 1, 0, Math.PI * 2);
      ctx.fill();

      break;
    }

    case 'nisa': {
      // 🐰 NISA - KELINCI REALISTIS (Realistic Bunny Rabbit with Long Flexible Ears & Cotton Tail)
      const earWiggle = Math.sin(frameCount * 0.16) * 5;
      const hopY = Math.abs(Math.sin(frameCount * 0.2)) * 3;

      // 1. Soft Fluffy Cotton Tail (Ekor Kapas)
      const tailX = px - (facingRight ? 22 : -22);
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(tailX, py + 12 - hopY, 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#f1f5f9';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // 2. Folded Hind Legs & Paw
      ctx.fillStyle = '#f472b6';
      ctx.beginPath();
      ctx.ellipse(px - 10, py + 16 - hopY, 11, 8, 0.2, 0, Math.PI * 2);
      ctx.fill();

      // 3. Bunny Body
      const bunnyGrad = ctx.createLinearGradient(px, py - 10, px, py + 20);
      bunnyGrad.addColorStop(0, '#f472b6');
      bunnyGrad.addColorStop(1, '#db2777');
      ctx.fillStyle = bunnyGrad;
      ctx.beginPath();
      ctx.ellipse(px, py + 2 - hopY, radius * 0.85, radius * 0.95, 0, 0, Math.PI * 2);
      ctx.fill();

      // Soft Fluffy White Chest Fur
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.ellipse(px + eyeDir * 0.4, py + 4 - hopY, radius * 0.5, radius * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();

      // Front Paws
      ctx.fillStyle = '#f472b6';
      ctx.beginPath();
      ctx.ellipse(px - 4 + eyeDir, py + 18 - hopY, 5, 4, 0, 0, Math.PI * 2);
      ctx.ellipse(px + 4 + eyeDir, py + 18 - hopY, 5, 4, 0, 0, Math.PI * 2);
      ctx.fill();

      // 4. Long Realistic Bunny Ears (Telinga Kelinci Panjang)
      const earY = py - radius * 0.7 - hopY;
      // Left Ear
      ctx.fillStyle = '#f472b6';
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;

      ctx.beginPath();
      ctx.ellipse(px - 10, earY - 18 + earWiggle, 7, 24, -0.12, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Right Ear
      ctx.beginPath();
      ctx.ellipse(px + 10, earY - 18 - earWiggle, 7, 24, 0.12, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Inner Ear Soft Pink Depth
      ctx.fillStyle = '#fbcfe8';
      ctx.beginPath();
      ctx.ellipse(px - 10, earY - 18 + earWiggle, 3.5, 17, -0.12, 0, Math.PI * 2);
      ctx.ellipse(px + 10, earY - 18 - earWiggle, 3.5, 17, 0.12, 0, Math.PI * 2);
      ctx.fill();

      // 5. Bunny Head & Face
      ctx.fillStyle = '#f472b6';
      ctx.beginPath();
      ctx.arc(px, py - 6 - hopY, radius * 0.7, 0, Math.PI * 2);
      ctx.fill();

      // Muzzle & Pink Nose
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.ellipse(px + eyeDir * 0.5, py + 1 - hopY, 9, 6, 0, 0, Math.PI * 2);
      ctx.fill();

      // Y-Shaped Nose
      ctx.fillStyle = '#be185d';
      ctx.beginPath();
      ctx.moveTo(px + eyeDir - 2.5, py - 2 - hopY);
      ctx.lineTo(px + eyeDir + 2.5, py - 2 - hopY);
      ctx.lineTo(px + eyeDir, py + 1 - hopY);
      ctx.closePath();
      ctx.fill();

      // Expressive Eyes
      const bEyeX1 = px + eyeDir - 7;
      const bEyeX2 = px + eyeDir + 7;
      const bEyeY = py - 8 - hopY;

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(bEyeX1, bEyeY, 5, 0, Math.PI * 2);
      ctx.arc(bEyeX2, bEyeY, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#701a75';
      ctx.beginPath();
      ctx.arc(bEyeX1 + (facingRight ? 1 : -1), bEyeY, 3, 0, Math.PI * 2);
      ctx.arc(bEyeX2 + (facingRight ? 1 : -1), bEyeY, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(bEyeX1 - 1, bEyeY - 1, 1.2, 0, Math.PI * 2);
      ctx.arc(bEyeX2 - 1, bEyeY - 1, 1.2, 0, Math.PI * 2);
      ctx.fill();

      // Delicate Whiskers
      ctx.strokeStyle = '#be185d';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(px + eyeDir - 4, py + 1 - hopY);
      ctx.lineTo(px + eyeDir - 14, py - hopY);
      ctx.moveTo(px + eyeDir - 4, py + 3 - hopY);
      ctx.lineTo(px + eyeDir - 12, py + 5 - hopY);

      ctx.moveTo(px + eyeDir + 4, py + 1 - hopY);
      ctx.lineTo(px + eyeDir + 14, py - hopY);
      ctx.moveTo(px + eyeDir + 4, py + 3 - hopY);
      ctx.lineTo(px + eyeDir + 12, py + 5 - hopY);
      ctx.stroke();

      break;
    }

    case 'yoga': {
      // 🐢 YOGA - KURA-KURA REALISTIS (Realistic Turtle with Domed Hexagonal Shell & Scaled Flippers)
      // 1. 4 Scaled Reptilian Flippers / Legs
      ctx.fillStyle = '#15803d';
      // Rear Feet
      ctx.beginPath();
      ctx.ellipse(px - 22, py + 14, 8, 5, -0.3, 0, Math.PI * 2);
      ctx.ellipse(px + 22, py + 14, 8, 5, 0.3, 0, Math.PI * 2);
      ctx.fill();

      // Front Flippers
      ctx.beginPath();
      ctx.ellipse(px - 20, py + 4, 9, 6, 0.4, 0, Math.PI * 2);
      ctx.ellipse(px + 20, py + 4, 9, 6, -0.4, 0, Math.PI * 2);
      ctx.fill();

      // Claws
      ctx.fillStyle = '#fef08a';
      ctx.beginPath();
      ctx.arc(px - 26, py + 15, 1.5, 0, Math.PI * 2);
      ctx.arc(px + 26, py + 15, 1.5, 0, Math.PI * 2);
      ctx.arc(px - 25, py + 6, 1.5, 0, Math.PI * 2);
      ctx.arc(px + 25, py + 6, 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Small Tail
      ctx.fillStyle = '#166534';
      ctx.beginPath();
      ctx.moveTo(px - (facingRight ? 24 : -24), py + 10);
      ctx.lineTo(px - (facingRight ? 32 : -32), py + 12);
      ctx.lineTo(px - (facingRight ? 24 : -24), py + 14);
      ctx.closePath();
      ctx.fill();

      // 2. Realistic 3D Domed Turtle Carapace (Tempurung Kura-Kura)
      const shellR = radius + 6;
      const shellGrad = ctx.createRadialGradient(
        px - 6,
        py - 10,
        4,
        px,
        py,
        shellR
      );
      shellGrad.addColorStop(0, '#4ade80');
      shellGrad.addColorStop(0.5, '#16a34a');
      shellGrad.addColorStop(1, '#064e3b');
      ctx.fillStyle = shellGrad;

      ctx.beginPath();
      ctx.ellipse(px, py + 2, shellR, shellR * 0.8, 0, 0, Math.PI * 2);
      ctx.fill();

      // Outer Shell Rim Ridge (Marginal Scutes)
      ctx.strokeStyle = '#fef08a';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Hexagonal / Pentagonal Scute Pattern Lines
      ctx.strokeStyle = 'rgba(254, 240, 138, 0.6)';
      ctx.lineWidth = 1.6;

      // Central Hexagon
      ctx.beginPath();
      const hexR = 10;
      for (let i = 0; i < 6; i++) {
        const a = (i * Math.PI) / 3;
        const hx = px + Math.cos(a) * hexR;
        const hy = (py - 2) + Math.sin(a) * (hexR * 0.8);
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
      ctx.stroke();

      // Radiating Scute Lines to Rim
      for (let i = 0; i < 6; i++) {
        const a = (i * Math.PI) / 3;
        const innerX = px + Math.cos(a) * hexR;
        const innerY = (py - 2) + Math.sin(a) * (hexR * 0.8);
        const outerX = px + Math.cos(a) * (shellR - 2);
        const outerY = (py - 2) + Math.sin(a) * (shellR * 0.78);
        ctx.beginPath();
        ctx.moveTo(innerX, innerY);
        ctx.lineTo(outerX, outerY);
        ctx.stroke();
      }

      // 3. Reptilian Head (Poking Out)
      const headX = px + (facingRight ? 20 : -20);
      const headY = py - 6;

      ctx.fillStyle = '#22c55e';
      ctx.beginPath();
      ctx.ellipse(headX, headY, 11, 9, facingRight ? 0.2 : -0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#14532d';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Turtle Eye
      const tEyeX = headX + (facingRight ? 3 : -3);
      const tEyeY = headY - 2;

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(tEyeX, tEyeY, 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.arc(tEyeX + (facingRight ? 1 : -1), tEyeY, 2.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(tEyeX, tEyeY - 1, 0.8, 0, Math.PI * 2);
      ctx.fill();

      break;
    }

    default: {
      // Generic Detailed Animal Mascot
      const mascotGrad = ctx.createRadialGradient(px - 6, py - 8, 4, px, py, radius);
      mascotGrad.addColorStop(0, character.accent);
      mascotGrad.addColorStop(1, character.color);
      ctx.fillStyle = mascotGrad;
      ctx.beginPath();
      ctx.arc(px, py, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Cute Ears
      ctx.fillStyle = character.color;
      ctx.beginPath();
      ctx.arc(px - 16, py - 16, 8, 0, Math.PI * 2);
      ctx.arc(px + 16, py - 16, 8, 0, Math.PI * 2);
      ctx.fill();

      // Eyes
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(px + eyeDir - 7, py - 4, 6, 0, Math.PI * 2);
      ctx.arc(px + eyeDir + 7, py - 4, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.arc(px + eyeDir - 5, py - 4, 3, 0, Math.PI * 2);
      ctx.arc(px + eyeDir + 9, py - 4, 3, 0, Math.PI * 2);
      ctx.fill();

      break;
    }
  }

  ctx.restore();
};

export const GameCanvas: React.FC<GameCanvasProps> = ({
  character,
  playerName,
  gradeKey,
  categoryKey,
  categoryData,
  currentPosIndex,
  unlockedPosIndex = 0,
  completedPosIndices = [],
  failedPosIndices = [],
  activeSlide: activeSlideProp,
  onSlideChange,
  lives = 3,
  score = 0,
  onSelectPosIndex,
  onReachCheckpoint,
  onBack,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth || 900,
    height: window.innerHeight || 650,
  });

  const [showPosPanel, setShowPosPanel] = useState<boolean>(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [themeOverride, setThemeOverride] = useState<ThemeOverride>('auto');
  const [isMusicMuted, setIsMusicMuted] = useState<boolean>(audioManager.isMusicMutedState());
  const [isSFXMuted, setIsSFXMuted] = useState<boolean>(audioManager.isSFXMutedState());

  const themeOverrideRef = useRef<ThemeOverride>('auto');
  themeOverrideRef.current = themeOverride;

  // Persistent Player character position across frames & modal opens (no teleporting)
  const playerPosRef = useRef<{ x: number; y: number; facingRight: boolean }>({
    x: -1,
    y: -1,
    facingRight: true,
  });
  const lastTriggeredPosRef = useRef<number | null>(null);
  const lastSlideRef = useRef<number>(-1);

  // Reset player position when changing grade or category
  useEffect(() => {
    playerPosRef.current = { x: -1, y: -1, facingRight: true };
    lastTriggeredPosRef.current = null;
  }, [categoryKey, gradeKey]);

  // Detect Biome & Set Background Music (BGM)
  useEffect(() => {
    let envType = 'hutan';
    if (themeOverride !== 'auto') {
      envType = themeOverride;
    } else {
      const catName = categoryData?.name || '';
      const catTheme = categoryData?.theme || '';
      const envText = `${catName} ${catTheme} ${categoryKey}`.toLowerCase();

      if (envText.includes('pantai') || envText.includes('pesisir') || envText.includes('laut') || envText.includes('ocean') || envText.includes('beach') || envText.includes('pulau')) {
        envType = 'pantai';
      } else if (envText.includes('desa') || envText.includes('kampung') || envText.includes('warga') || envText.includes('village')) {
        envType = 'desa';
      } else if (envText.includes('lembah') || envText.includes('jurang') || envText.includes('ngarai') || envText.includes('canyon') || envText.includes('valley')) {
        envType = 'lembah';
      } else if (envText.includes('gurun') || envText.includes('oasis') || envText.includes('sahara') || envText.includes('desert') || envText.includes('padang pasir')) {
        envType = 'gurun';
      } else if (envText.includes('danau') || envText.includes('sungai') || envText.includes('air') || envText.includes('lake') || envText.includes('river') || envText.includes('samudra')) {
        envType = 'danau';
      } else if (envText.includes('gunung') || envText.includes('puncak') || envText.includes('tebing') || envText.includes('mountain')) {
        envType = 'gunung';
      } else if (envText.includes('istana') || envText.includes('candi') || envText.includes('kerajaan') || envText.includes('castle')) {
        envType = 'istana';
      } else if (envText.includes('padang') || envText.includes('lapangan') || envText.includes('savana') || envText.includes('meadow')) {
        envType = 'padang';
      } else {
        envType = 'hutan';
      }
    }

    audioManager.setBGMTheme(envType);

    return () => {
      audioManager.stopBGM();
    };
  }, [categoryData, categoryKey, themeOverride]);

  // Keyboard and Touch controls
  const keysRef = useRef<{ [key: string]: boolean }>({});
  const touchKeysRef = useRef<{ up: boolean; down: boolean; left: boolean; right: boolean }>({
    up: false,
    down: false,
    left: false,
    right: false,
  });

  // Handle Window Resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Main 3D Canvas Game Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let frameCount = 0;

    const width = dimensions.width;
    const height = dimensions.height;

    canvas.width = width;
    canvas.height = height;

    const positions = categoryData.positions;
    const activeSlide = typeof activeSlideProp === 'number'
      ? activeSlideProp
      : Math.floor(currentPosIndex / SLIDE_SIZE);

    if (lastSlideRef.current !== activeSlide) {
      lastSlideRef.current = activeSlide;
      playerPosRef.current.x = -1; // Reset to place character at start of new slide
    }

    const slidePositions = positions.slice(
      activeSlide * SLIDE_SIZE,
      (activeSlide + 1) * SLIDE_SIZE
    );
    const numInSlide = slidePositions.length;

    // 3D Perspective Ground Configuration
    const horizonY = height * 0.38;
    const groundBottomY = height * 0.85;
    const spacing = width / (numInSlide + 1);

    // Dynamic ZIG-ZAG (Winding Path) Checkpoint Pedestal Markers
    // Alternates Y position between lower ground (~78%) and upper ground (~22%)
    const zigZagRatios = [0.78, 0.22, 0.82, 0.26, 0.58];

    const markers = slidePositions.map((_, localIdx) => {
      const globalIdx = activeSlide * SLIDE_SIZE + localIdx;
      const x = spacing * (localIdx + 1);
      const ratio = zigZagRatios[localIdx % zigZagRatios.length];
      const y = horizonY + (groundBottomY - horizonY) * ratio;
      return {
        x,
        y,
        r: 36,
        globalIdx,
        localIdx,
      };
    });

    // Initialize character start position near Pos 1 if not set
    if (playerPosRef.current.x < 0) {
      const firstMarker = markers[0];
      if (firstMarker) {
        playerPosRef.current.x = Math.max(30, firstMarker.x - 70);
        playerPosRef.current.y = firstMarker.y;
      } else {
        playerPosRef.current.x = 80;
        playerPosRef.current.y = groundBottomY - 50;
      }
    }

    // 3D Fireflies
    const fireflies: Array<{ x: number; y: number; z: number; vx: number; vy: number; p: number; sz: number }> = [];
    for (let i = 0; i < 40; i++) {
      fireflies.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.9,
        vy: (Math.random() - 0.5) * 0.6,
        p: Math.random() * Math.PI * 2,
        sz: Math.random() * 3 + 1,
      });
    }

    // Key handlers
    const handleKeyDown = (e: KeyboardEvent) => {
      keysRef.current[e.key.toLowerCase()] = true;
      if (e.key === 'Escape') onBack();
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      keysRef.current[e.key.toLowerCase()] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // ------------------- RENDER 3D GAME LOOP -------------------
    const gameLoop = () => {
      frameCount++;

      // Update Player Motion
      let dx = 0;
      let dy = 0;
      const moveSpeed = 5.5;
      const keys = keysRef.current;
      const tKeys = touchKeysRef.current;

      if (keys['w'] || keys['arrowup'] || tKeys.up) dy -= moveSpeed;
      if (keys['s'] || keys['arrowdown'] || tKeys.down) dy += moveSpeed;
      if (keys['a'] || keys['arrowleft'] || tKeys.left) {
        dx -= moveSpeed;
        playerPosRef.current.facingRight = false;
      }
      if (keys['d'] || keys['arrowright'] || tKeys.right) {
        dx += moveSpeed;
        playerPosRef.current.facingRight = true;
      }

      if (dx && dy) {
        const factor = 1 / Math.SQRT2;
        dx *= factor;
        dy *= factor;
      }

      playerPosRef.current.x += dx;
      playerPosRef.current.y += dy;

      const playerSize = 48;
      playerPosRef.current.x = Math.max(playerSize / 2, Math.min(width - playerSize / 2, playerPosRef.current.x));
      playerPosRef.current.y = Math.max(horizonY + 20, Math.min(groundBottomY, playerPosRef.current.y));

      const jumpY = dx || dy ? Math.abs(Math.sin(frameCount * 0.2)) * 12 : 0;

      // Check collision with pedestals manually walked onto by player
      markers.forEach((m) => {
        const dist = Math.hypot(playerPosRef.current.x - m.x, playerPosRef.current.y - m.y);
        if (dist < m.r + 20) {
          if (lastTriggeredPosRef.current !== m.globalIdx) {
            lastTriggeredPosRef.current = m.globalIdx;
            if (onSelectPosIndex) onSelectPosIndex(m.globalIdx);
            if (
              !completedPosIndices.includes(m.globalIdx) &&
              !failedPosIndices.includes(m.globalIdx) &&
              m.globalIdx <= unlockedPosIndex
            ) {
              onReachCheckpoint(m.globalIdx);
            }
          }
        } else if (dist > m.r + 55 && lastTriggeredPosRef.current === m.globalIdx) {
          lastTriggeredPosRef.current = null;
        }
      });

      type BiomeType = 'hutan' | 'pantai' | 'desa' | 'lembah' | 'gurun' | 'danau' | 'gunung' | 'istana' | 'padang';
      let envType: BiomeType = 'hutan';

      if (themeOverrideRef.current !== 'auto') {
        envType = themeOverrideRef.current as BiomeType;
      } else {
        const catName = categoryData?.name || '';
        const catTheme = categoryData?.theme || '';
        const envText = `${catName} ${catTheme} ${categoryKey}`.toLowerCase();

        if (envText.includes('pantai') || envText.includes('pesisir') || envText.includes('laut') || envText.includes('ocean') || envText.includes('beach') || envText.includes('pulau')) {
          envType = 'pantai';
        } else if (envText.includes('desa') || envText.includes('kampung') || envText.includes('warga') || envText.includes('village')) {
          envType = 'desa';
        } else if (envText.includes('lembah') || envText.includes('jurang') || envText.includes('ngarai') || envText.includes('canyon') || envText.includes('valley')) {
          envType = 'lembah';
        } else if (envText.includes('gurun') || envText.includes('oasis') || envText.includes('sahara') || envText.includes('desert') || envText.includes('padang pasir')) {
          envType = 'gurun';
        } else if (envText.includes('danau') || envText.includes('sungai') || envText.includes('air') || envText.includes('lake') || envText.includes('river') || envText.includes('samudra')) {
          envType = 'danau';
        } else if (envText.includes('gunung') || envText.includes('puncak') || envText.includes('tebing') || envText.includes('mountain')) {
          envType = 'gunung';
        } else if (envText.includes('istana') || envText.includes('candi') || envText.includes('kerajaan') || envText.includes('castle')) {
          envType = 'istana';
        } else if (envText.includes('padang') || envText.includes('lapangan') || envText.includes('savana') || envText.includes('meadow')) {
          envType = 'padang';
        } else {
          envType = 'hutan';
        }
      }

      // 1. SKY GRADIENT PER BIOME
      const skyGrad = ctx.createLinearGradient(0, 0, 0, horizonY);
      if (envType === 'pantai') {
        skyGrad.addColorStop(0, '#020617');
        skyGrad.addColorStop(0.5, '#4c1d95');
        skyGrad.addColorStop(1, '#ea580c'); // Tropical sunset horizon
      } else if (envType === 'desa') {
        skyGrad.addColorStop(0, '#020617');
        skyGrad.addColorStop(0.6, '#1e1b4b');
        skyGrad.addColorStop(1, '#312e81'); // Peaceful village dusk
      } else if (envType === 'lembah') {
        skyGrad.addColorStop(0, '#0f172a');
        skyGrad.addColorStop(0.5, '#3b0764');
        skyGrad.addColorStop(1, '#581c87'); // Mystical purple valley
      } else if (envType === 'gurun') {
        skyGrad.addColorStop(0, '#020617');
        skyGrad.addColorStop(0.5, '#451a03');
        skyGrad.addColorStop(1, '#7c2d12'); // Desert starlit amber
      } else if (envType === 'danau') {
        skyGrad.addColorStop(0, '#020617');
        skyGrad.addColorStop(0.6, '#0f172a');
        skyGrad.addColorStop(1, '#0891b2'); // Lake cyan horizon glow
      } else if (envType === 'gunung') {
        skyGrad.addColorStop(0, '#1e1b4b');
        skyGrad.addColorStop(0.6, '#31103f');
        skyGrad.addColorStop(1, '#4c1d95'); // Mountain violet horizon glow
      } else if (envType === 'istana') {
        skyGrad.addColorStop(0, '#2e1065');
        skyGrad.addColorStop(0.6, '#581c87');
        skyGrad.addColorStop(1, '#831843'); // Royal purple horizon glow
      } else if (envType === 'padang') {
        skyGrad.addColorStop(0, '#020617');
        skyGrad.addColorStop(0.6, '#0f172a');
        skyGrad.addColorStop(1, '#1e3a8a');
      } else {
        // Hutan
        skyGrad.addColorStop(0, '#022c22');
        skyGrad.addColorStop(0.6, '#064e3b');
        skyGrad.addColorStop(1, '#0f172a');
      }
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, horizonY);

      // 3D Twinkling Stars
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      for (let i = 0; i < 65; i++) {
        const sx = (i * 157.3 + frameCount * 0.03) % width;
        const sy = (i * 83.1) % (horizonY * 0.85);
        const sz = (Math.sin(frameCount * 0.04 + i) + 1) * 1.3;
        ctx.beginPath();
        ctx.arc(sx, sy, sz, 0, Math.PI * 2);
        ctx.fill();
      }

      // 🌙 MOON LOCATED EXACTLY IN THE CENTER (DITENGAH)
      const moonX = width * 0.5; // TOP CENTER!
      const moonY = horizonY * 0.35;
      const moonR = 36;

      // Outer Moon Glow Aura
      const moonGlow = ctx.createRadialGradient(moonX, moonY, moonR * 0.4, moonX, moonY, moonR * 3.2);
      moonGlow.addColorStop(0, 'rgba(254, 240, 138, 0.5)');
      moonGlow.addColorStop(0.5, 'rgba(253, 224, 71, 0.2)');
      moonGlow.addColorStop(1, 'rgba(253, 224, 71, 0)');
      ctx.fillStyle = moonGlow;
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonR * 3.2, 0, Math.PI * 2);
      ctx.fill();

      // Moon Disk
      const moonGrad = ctx.createRadialGradient(moonX - moonR * 0.3, moonY - moonR * 0.3, moonR * 0.2, moonX, moonY, moonR);
      moonGrad.addColorStop(0, '#ffffff');
      moonGrad.addColorStop(0.75, '#fef08a');
      moonGrad.addColorStop(1, '#f59e0b');
      ctx.fillStyle = moonGrad;
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonR, 0, Math.PI * 2);
      ctx.fill();

      // Moon Craters
      ctx.fillStyle = 'rgba(180, 83, 9, 0.22)';
      ctx.beginPath();
      ctx.arc(moonX - 9, moonY - 7, 6, 0, Math.PI * 2);
      ctx.arc(moonX + 11, moonY + 6, 8, 0, Math.PI * 2);
      ctx.arc(moonX - 5, moonY + 10, 4.5, 0, Math.PI * 2);
      ctx.fill();

      // 2. BACKGROUND SCENERY ACCORDING TO BIOME
      if (envType === 'danau') {
        // 🌊 DANAU: Lake Shore Hills & Cattail Reeds
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.moveTo(0, horizonY);
        ctx.quadraticCurveTo(width * 0.25, horizonY - 45, width * 0.5, horizonY - 15);
        ctx.quadraticCurveTo(width * 0.75, horizonY - 50, width, horizonY);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#0e7490';
        ctx.beginPath();
        ctx.moveTo(0, horizonY);
        ctx.quadraticCurveTo(width * 0.3, horizonY - 25, width * 0.6, horizonY - 10);
        ctx.quadraticCurveTo(width * 0.8, horizonY - 30, width, horizonY);
        ctx.closePath();
        ctx.fill();
      } else if (envType === 'gunung') {
        // 🏔️ GUNUNG: Snow-capped Jagged Peaks
        // Back Peaks
        ctx.fillStyle = '#31103f';
        ctx.beginPath();
        ctx.moveTo(0, horizonY);
        ctx.lineTo(width * 0.15, horizonY - 110);
        ctx.lineTo(width * 0.35, horizonY - 45);
        ctx.lineTo(width * 0.5, horizonY - 130);
        ctx.lineTo(width * 0.7, horizonY - 60);
        ctx.lineTo(width * 0.88, horizonY - 115);
        ctx.lineTo(width, horizonY);
        ctx.closePath();
        ctx.fill();

        // Snow Caps
        ctx.fillStyle = '#e0e7ff';
        ctx.beginPath();
        ctx.moveTo(width * 0.5, horizonY - 130);
        ctx.lineTo(width * 0.46, horizonY - 100);
        ctx.lineTo(width * 0.54, horizonY - 100);
        ctx.closePath();
        ctx.fill();

        // Front Jagged Peaks
        ctx.fillStyle = '#1e1b4b';
        ctx.beginPath();
        ctx.moveTo(0, horizonY);
        ctx.lineTo(width * 0.22, horizonY - 80);
        ctx.lineTo(width * 0.45, horizonY - 35);
        ctx.lineTo(width * 0.75, horizonY - 95);
        ctx.lineTo(width, horizonY - 30);
        ctx.lineTo(width, horizonY);
        ctx.closePath();
        ctx.fill();
      } else if (envType === 'istana') {
        // 🏰 ISTANA: Castle Spires & Ancient Temple Silhouettes
        ctx.fillStyle = '#3b0764';
        const castleCenterX = width * 0.5;
        // Central Tower
        ctx.fillRect(castleCenterX - 30, horizonY - 90, 60, 90);
        // Roof Cone
        ctx.beginPath();
        ctx.moveTo(castleCenterX - 35, horizonY - 90);
        ctx.lineTo(castleCenterX, horizonY - 140);
        ctx.lineTo(castleCenterX + 35, horizonY - 90);
        ctx.closePath();
        ctx.fill();

        // Side Towers
        ctx.fillRect(castleCenterX - 110, horizonY - 65, 45, 65);
        ctx.fillRect(castleCenterX + 65, horizonY - 65, 45, 65);

        // Side Cone Roofs
        ctx.beginPath();
        ctx.moveTo(castleCenterX - 115, horizonY - 65);
        ctx.lineTo(castleCenterX - 87, horizonY - 105);
        ctx.lineTo(castleCenterX - 60, horizonY - 65);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(castleCenterX + 60, horizonY - 65);
        ctx.lineTo(castleCenterX + 87, horizonY - 105);
        ctx.lineTo(castleCenterX + 115, horizonY - 65);
        ctx.closePath();
        ctx.fill();
      } else if (envType === 'padang') {
        // 🌾 PADANG: Rolling Green Hills
        ctx.fillStyle = '#166534';
        ctx.beginPath();
        ctx.moveTo(0, horizonY);
        ctx.quadraticCurveTo(width * 0.3, horizonY - 50, width * 0.6, horizonY - 20);
        ctx.quadraticCurveTo(width * 0.85, horizonY - 60, width, horizonY);
        ctx.closePath();
        ctx.fill();
      } else {
        // 🌲 HUTAN: Pine Trees & Jungle Canopy Silhouettes
        ctx.fillStyle = '#064e3b';
        // Layer of Pine Trees
        for (let tx = 0; tx < width; tx += 45) {
          const treeH = 50 + Math.sin(tx * 0.05) * 20;
          ctx.beginPath();
          ctx.moveTo(tx - 22, horizonY);
          ctx.lineTo(tx, horizonY - treeH);
          ctx.lineTo(tx + 22, horizonY);
          ctx.closePath();
          ctx.fill();
        }

        ctx.fillStyle = '#022c22';
        for (let tx = 20; tx < width; tx += 60) {
          const treeH = 65 + Math.cos(tx * 0.08) * 25;
          ctx.beginPath();
          ctx.moveTo(tx - 28, horizonY);
          ctx.lineTo(tx, horizonY - treeH);
          ctx.lineTo(tx + 28, horizonY);
          ctx.closePath();
          ctx.fill();
        }
      }

      // 3. 3D TILTED GROUND PERSPECTIVE PER BIOME
      const groundGrad = ctx.createLinearGradient(0, horizonY, 0, height);
      if (envType === 'danau') {
        // Water Surface Canvas
        groundGrad.addColorStop(0, '#0284c7');
        groundGrad.addColorStop(0.4, '#0369a1');
        groundGrad.addColorStop(1, '#0c4a6e');
      } else if (envType === 'gunung') {
        // Slate Mountain Rock
        groundGrad.addColorStop(0, '#475569');
        groundGrad.addColorStop(0.4, '#334155');
        groundGrad.addColorStop(1, '#0f172a');
      } else if (envType === 'istana') {
        // Palace Courtyard Marble
        groundGrad.addColorStop(0, '#312e81');
        groundGrad.addColorStop(0.4, '#1e1b4b');
        groundGrad.addColorStop(1, '#020617');
      } else if (envType === 'padang') {
        // Grassland
        groundGrad.addColorStop(0, '#16a34a');
        groundGrad.addColorStop(0.4, '#15803d');
        groundGrad.addColorStop(1, '#052e16');
      } else {
        // Hutan Forest Floor
        groundGrad.addColorStop(0, '#15803d');
        groundGrad.addColorStop(0.4, '#166534');
        groundGrad.addColorStop(1, '#022c22');
      }
      ctx.fillStyle = groundGrad;
      ctx.fillRect(0, horizonY, width, height - horizonY);

      // Shimmering Water Reflection column for Danau directly under centered Moon
      if (envType === 'danau') {
        const refGlow = ctx.createLinearGradient(0, horizonY, 0, height);
        refGlow.addColorStop(0, 'rgba(254, 240, 138, 0.35)');
        refGlow.addColorStop(1, 'rgba(254, 240, 138, 0.02)');
        ctx.fillStyle = refGlow;
        ctx.beginPath();
        ctx.moveTo(moonX - 50, horizonY);
        ctx.lineTo(moonX + 50, horizonY);
        ctx.lineTo(moonX + 120, height);
        ctx.lineTo(moonX - 120, height);
        ctx.closePath();
        ctx.fill();

        // Water Ripples
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.lineWidth = 1.5;
        for (let ry = horizonY + 15; ry < height; ry += 22) {
          const rOffset = Math.sin(frameCount * 0.08 + ry * 0.1) * 15;
          ctx.beginPath();
          ctx.moveTo(width * 0.1 + rOffset, ry);
          ctx.lineTo(width * 0.9 + rOffset, ry);
          ctx.stroke();
        }

        // Floating Lily Pads (Teratai)
        ctx.fillStyle = '#16a34a';
        for (let l = 0; l < 8; l++) {
          const lx = (l * 120 + 60) % (width - 80) + 40;
          const ly = horizonY + 40 + (l * 35) % (height - horizonY - 80);
          ctx.beginPath();
          ctx.arc(lx, ly, 14, 0.2, Math.PI * 1.8);
          ctx.fill();
        }
      } else {
        // 3D Grid Lines for Ground
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 1.5;
        const vanishX = width / 2;
        for (let i = -10; i <= 10; i++) {
          const startX = vanishX + i * 80;
          ctx.beginPath();
          ctx.moveTo(vanishX + i * 15, horizonY);
          ctx.lineTo(startX, height);
          ctx.stroke();
        }

        // Horizontal 3D Depth Rings
        for (let y = horizonY + 25; y < height; y += 35) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      }

      // 4. 3D ROAD PATH PER BIOME
      if (envType === 'danau') {
        // Wooden Pier / Boardwalk
        ctx.strokeStyle = '#78350f'; // Dark Wood
        ctx.lineWidth = 42;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(0, horizonY + 80);
        if (markers.length) {
          ctx.lineTo(markers[0].x, markers[0].y);
          for (let i = 1; i < markers.length; i++) {
            ctx.lineTo(markers[i].x, markers[i].y);
          }
        }
        ctx.stroke();

        // Wooden Plank Planks
        ctx.strokeStyle = '#fde047';
        ctx.lineWidth = 3;
        ctx.setLineDash([8, 8]);
        ctx.stroke();
        ctx.setLineDash([]);
      } else if (envType === 'istana') {
        // Red Velvet Royal Carpet with Gold Trim
        ctx.strokeStyle = '#991b1b'; // Red Velvet
        ctx.lineWidth = 44;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(0, horizonY + 80);
        if (markers.length) {
          ctx.lineTo(markers[0].x, markers[0].y);
          for (let i = 1; i < markers.length; i++) {
            ctx.lineTo(markers[i].x, markers[i].y);
          }
        }
        ctx.stroke();

        // Gold Trim Line
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 4;
        ctx.setLineDash([12, 12]);
        ctx.stroke();
        ctx.setLineDash([]);
      } else if (envType === 'gunung') {
        // Cobblestone Rocky Path
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 42;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(0, horizonY + 80);
        if (markers.length) {
          ctx.lineTo(markers[0].x, markers[0].y);
          for (let i = 1; i < markers.length; i++) {
            ctx.lineTo(markers[i].x, markers[i].y);
          }
        }
        ctx.stroke();

        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 3;
        ctx.setLineDash([10, 10]);
        ctx.stroke();
        ctx.setLineDash([]);
      } else {
        // Dirt Earth Trail (Hutan & Padang)
        ctx.strokeStyle = '#a16207';
        ctx.lineWidth = 40;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(0, horizonY + 80);
        if (markers.length) {
          ctx.lineTo(markers[0].x, markers[0].y);
          for (let i = 1; i < markers.length; i++) {
            ctx.lineTo(markers[i].x, markers[i].y);
          }
        }
        ctx.stroke();

        ctx.strokeStyle = '#fef08a';
        ctx.lineWidth = 4;
        ctx.setLineDash([12, 12]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // 5. 3D PEDESTALS / POS MARKERS
      markers.forEach((m) => {
        const isSolved = completedPosIndices.includes(m.globalIdx);
        const isFailed = failedPosIndices.includes(m.globalIdx);
        const isUnlocked = m.globalIdx <= unlockedPosIndex;
        const isCurrentTarget = m.globalIdx === currentPosIndex;
        const isPeak = m.globalIdx === positions.length - 1;

        let mainColor = '#64748b';
        let darkColor = '#334155';
        let topColor = '#cbd5e1';
        let statusIcon = '🔒';

        if (isSolved) {
          mainColor = '#10b981';
          darkColor = '#047857';
          topColor = '#a7f3d0';
          statusIcon = '✅';
        } else if (isFailed) {
          mainColor = '#ef4444';
          darkColor = '#991b1b';
          topColor = '#fca5a5';
          statusIcon = '❌';
        } else if (isUnlocked) {
          mainColor = '#f59e0b';
          darkColor = '#b45309';
          topColor = '#fef08a';
          statusIcon = '⭐';
        }

        // 3D Shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.beginPath();
        ctx.ellipse(m.x, m.y + 22, m.r + 6, (m.r + 6) * 0.4, 0, 0, Math.PI * 2);
        ctx.fill();

        // 3D Cylinder Side Body
        ctx.fillStyle = darkColor;
        ctx.beginPath();
        ctx.ellipse(m.x, m.y + 16, m.r, m.r * 0.4, 0, 0, Math.PI);
        ctx.ellipse(m.x, m.y, m.r, m.r * 0.4, 0, Math.PI, 0, true);
        ctx.fill();

        const cylGrad = ctx.createLinearGradient(m.x - m.r, m.y, m.x + m.r, m.y + 16);
        cylGrad.addColorStop(0, darkColor);
        cylGrad.addColorStop(0.5, mainColor);
        cylGrad.addColorStop(1, darkColor);
        ctx.fillStyle = cylGrad;
        ctx.fillRect(m.x - m.r, m.y, m.r * 2, 16);

        // Pedestal Top Face
        ctx.fillStyle = topColor;
        ctx.beginPath();
        ctx.ellipse(m.x, m.y, m.r, m.r * 0.4, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.stroke();

        if (isCurrentTarget || (isUnlocked && !isSolved && !isFailed)) {
          const pulse = Math.sin(frameCount * 0.1) * 8 + 12;
          ctx.strokeStyle = isSolved
            ? 'rgba(16, 185, 129, 0.8)'
            : isFailed
            ? 'rgba(239, 68, 68, 0.8)'
            : 'rgba(253, 224, 71, 0.8)';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.ellipse(m.x, m.y, m.r + pulse, (m.r + pulse) * 0.4, 0, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.fillStyle = isCurrentTarget ? '#1e293b' : '#0f172a';
        ctx.font = '900 20px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(isSolved ? '✓' : isFailed ? '✕' : String(m.globalIdx + 1), m.x, m.y - 1);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 13px sans-serif';
        ctx.shadowColor = '#000000';
        ctx.shadowBlur = 6;
        const statusLabel = isSolved
          ? 'SELESAI'
          : isFailed
          ? 'TERTUTUP'
          : isPeak
          ? 'PUNCAK'
          : `POS ${m.globalIdx + 1}`;
        ctx.fillText(
          `${statusIcon} ${statusLabel}`,
          m.x,
          m.y - m.r * 0.8 - 12
        );
        ctx.shadowBlur = 0;
      });

      // 6. FIREFLIES
      fireflies.forEach((ff) => {
        ff.x += ff.vx;
        ff.y += ff.vy;
        if (ff.x < 0) ff.x = width;
        if (ff.x > width) ff.x = 0;
        if (ff.y < 0) ff.y = height;
        if (ff.y > height) ff.y = 0;

        const pulse = (Math.sin(frameCount * 0.06 + ff.p) + 1) * 0.5;
        ctx.fillStyle = `rgba(253, 224, 71, ${pulse * 0.85})`;
        ctx.beginPath();
        ctx.arc(ff.x, ff.y, ff.sz * ff.z, 0, Math.PI * 2);
        ctx.fill();
      });

      // 7. 3D CUSTOM CHARACTER ANIMAL SHAPE
      const px = playerPosRef.current.x;
      const py = playerPosRef.current.y - jumpY;
      const size = 48;

      // Drop Shadow on Ground
      ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
      ctx.beginPath();
      const shadowScale = 1 - jumpY * 0.015;
      ctx.ellipse(
        playerPosRef.current.x,
        playerPosRef.current.y + size * 0.35,
        (size / 2) * shadowScale,
        (size / 4) * shadowScale,
        0,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // RENDER SPECIFIC ANIMAL MODEL FOR SELECTED CHARACTER
      render3DCharacterShape(
        ctx,
        character,
        px,
        py,
        size,
        playerPosRef.current.facingRight,
        frameCount
      );

      // Character Name Tag & Emoji Floating Above
      ctx.font = '18px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(character.emoji, px, py - size * 0.8 - 22);

      ctx.fillStyle = '#ffffff';
      ctx.font = '900 13px sans-serif';
      ctx.shadowColor = '#000000';
      ctx.shadowBlur = 6;
      ctx.fillText(playerName, px, py - size * 0.8 - 6);
      ctx.shadowBlur = 0;

      animId = requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [
    dimensions,
    currentPosIndex,
    unlockedPosIndex,
    completedPosIndices,
    failedPosIndices,
    categoryData,
    character,
    playerName,
    onReachCheckpoint,
    onBack,
  ]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const positions = categoryData.positions;
    const activeSlide = Math.floor(currentPosIndex / SLIDE_SIZE);
    const slidePositions = positions.slice(
      activeSlide * SLIDE_SIZE,
      (activeSlide + 1) * SLIDE_SIZE
    );
    const numInSlide = slidePositions.length;
    const width = dimensions.width;
    const height = dimensions.height;
    const horizonY = height * 0.38;
    const groundBottomY = height * 0.85;
    const spacing = width / (numInSlide + 1);
    const zigZagRatios = [0.78, 0.22, 0.82, 0.26, 0.58];

    slidePositions.forEach((_, localIdx) => {
      const globalIdx = activeSlide * SLIDE_SIZE + localIdx;
      const x = spacing * (localIdx + 1);
      const ratio = zigZagRatios[localIdx % zigZagRatios.length];
      const y = horizonY + (groundBottomY - horizonY) * ratio;

      const dist = Math.hypot(clickX - x, clickY - y);
      if (dist < 55) {
        playerPosRef.current.x = x;
        playerPosRef.current.y = y;
        lastTriggeredPosRef.current = globalIdx;
        if (onSelectPosIndex) {
          onSelectPosIndex(globalIdx);
        }
        if (globalIdx <= unlockedPosIndex) {
          onReachCheckpoint(globalIdx);
        }
      }
    });
  };

  return (
    <View style={styles.container}>
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        style={{ width: '100%', height: '100%', display: 'block', cursor: 'pointer' }}
      />

      {/* Floating HUD Top Bar */}
      <View style={styles.hudContainer}>
        <View style={styles.hudPill}>
          <Text style={styles.hudText}>
            {character.emoji} {playerName} ({character.name}) | {gradeKey} • {categoryKey}
          </Text>
        </View>

        <View style={styles.livesPill}>
          <Text style={styles.livesText}>
            {'❤️'.repeat(lives)}{'🖤'.repeat(Math.max(0, 3 - lives))}
          </Text>
        </View>

        <View style={styles.scorePill}>
          <Text style={styles.scoreText}>
            ⭐ {score} Poin
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.hudPillBtn, showPosPanel && styles.hudPillBtnActive]}
          onPress={() => setShowPosPanel(!showPosPanel)}
        >
          <Text style={styles.hudText}>
            {showPosPanel ? '🎯 Sembunyikan Panel Pos' : '🎯 Pilih Pos / Soal'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.hudPillBtn}
          onPress={() => setIsSettingsOpen(true)}
        >
          <Text style={styles.hudText}>⚙️ Pengaturan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButtonPill} onPress={onBack}>
          <Text style={styles.hudText}>⬅ Keluar</Text>
        </TouchableOpacity>
      </View>

      {/* D-Pad Touch Controls */}
      <View style={styles.dpadContainer}>
        <View style={styles.dpadRow}>
          <TouchableOpacity
            style={styles.dpadBtn}
            activeOpacity={0.6}
            onPressIn={() => (touchKeysRef.current.up = true)}
            onPressOut={() => (touchKeysRef.current.up = false)}
          >
            <Text style={styles.dpadArrow}>▲</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dpadRowMiddle}>
          <TouchableOpacity
            style={styles.dpadBtn}
            activeOpacity={0.6}
            onPressIn={() => (touchKeysRef.current.left = true)}
            onPressOut={() => (touchKeysRef.current.left = false)}
          >
            <Text style={styles.dpadArrow}>◀</Text>
          </TouchableOpacity>
          <View style={styles.dpadCenter} />
          <TouchableOpacity
            style={styles.dpadBtn}
            activeOpacity={0.6}
            onPressIn={() => (touchKeysRef.current.right = true)}
            onPressOut={() => (touchKeysRef.current.right = false)}
          >
            <Text style={styles.dpadArrow}>▶</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dpadRow}>
          <TouchableOpacity
            style={styles.dpadBtn}
            activeOpacity={0.6}
            onPressIn={() => (touchKeysRef.current.down = true)}
            onPressOut={() => (touchKeysRef.current.down = false)}
          >
            <Text style={styles.dpadArrow}>▼</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Compact Numbered Pos Selector Panel */}
      {showPosPanel && (
        <View style={styles.posPanelOverlay}>
          <PosSelector
            positions={categoryData.positions}
            currentPosIndex={currentPosIndex}
            unlockedPosIndex={unlockedPosIndex}
            completedPosIndices={completedPosIndices}
            failedPosIndices={failedPosIndices}
            activeSlide={activeSlideProp}
            onSlideChange={onSlideChange}
            onSelectPos={(idx) => {
              if (onSelectPosIndex) {
                onSelectPosIndex(idx);
              }
            }}
            onOpenQuiz={(idx) => {
              if (onSelectPosIndex) {
                onSelectPosIndex(idx);
              }
              if (
                !completedPosIndices.includes(idx) &&
                !failedPosIndices.includes(idx) &&
                idx <= unlockedPosIndex
              ) {
                onReachCheckpoint(idx);
              }
            }}
            categoryKey={categoryKey}
          />
        </View>
      )}

      <SettingsModal
        visible={isSettingsOpen}
        selectedThemeOverride={themeOverride}
        onSelectThemeOverride={(theme) => setThemeOverride(theme)}
        isMusicMuted={isMusicMuted}
        onToggleMusic={() => {
          const next = !isMusicMuted;
          audioManager.setMusicMuted(next);
          setIsMusicMuted(next);
        }}
        isSFXMuted={isSFXMuted}
        onToggleSFX={() => {
          const next = !isSFXMuted;
          audioManager.setSFXMuted(next);
          setIsSFXMuted(next);
        }}
        onClose={() => setIsSettingsOpen(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  hudContainer: {
    position: 'absolute',
    top: 14,
    left: 14,
    right: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    zIndex: 10,
  },
  hudPill: {
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    elevation: 4,
  },
  livesPill: {
    backgroundColor: 'rgba(239, 68, 68, 0.25)',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: '#ef4444',
    elevation: 4,
  },
  livesText: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 2,
  },
  scorePill: {
    backgroundColor: 'rgba(245, 158, 11, 0.25)',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: '#f59e0b',
    elevation: 4,
  },
  scoreText: {
    fontSize: 13,
    fontWeight: '900',
    color: '#fef08a',
  },
  hudPillBtn: {
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: '#6c5ce7',
    elevation: 4,
  },
  hudPillBtnActive: {
    backgroundColor: '#f59e0b',
    borderColor: '#ffffff',
  },
  backButtonPill: {
    backgroundColor: '#ef4444',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 50,
    elevation: 4,
  },
  hudText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#ffffff',
  },
  dpadContainer: {
    position: 'absolute',
    top: 68,
    left: 14,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 8,
  },
  dpadRow: {
    alignItems: 'center',
  },
  dpadRowMiddle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dpadBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    elevation: 4,
  },
  dpadCenter: {
    width: 18,
    height: 18,
  },
  dpadArrow: {
    fontSize: 15,
    color: '#0f172a',
    fontWeight: '900',
  },
  posPanelOverlay: {
    position: 'absolute',
    bottom: 8,
    left: 0,
    right: 0,
    zIndex: 100,
    alignItems: 'center',
  },
});
