import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface HandwritingPadProps {
  onCanvasChange?: (hasContent: boolean) => void;
}

export const HandwritingPad: React.FC<HandwritingPadProps> = ({ onCanvasChange }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [penColor, setPenColor] = useState('#1e3a8a'); // Default blue ink
  const [penWidth, setPenWidth] = useState(3);
  const [isEraser, setIsEraser] = useState(false);
  const [penPos, setPenPos] = useState<{ x: number; y: number } | null>(null);
  const [hasWritten, setHasWritten] = useState(false);

  // Draw lined notebook paper background
  const drawBackground = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Paper background
    ctx.fillStyle = '#fefce8'; // Light warm yellow paper hue
    ctx.fillRect(0, 0, width, height);

    // Left red margin line
    ctx.beginPath();
    ctx.strokeStyle = '#f87171';
    ctx.lineWidth = 1.5;
    ctx.moveTo(35, 0);
    ctx.lineTo(35, height);
    ctx.stroke();

    // Horizontal notebook lines
    ctx.beginPath();
    ctx.strokeStyle = '#cbd5e1'; // Soft slate blue line
    ctx.lineWidth = 1;
    const lineSpacing = 28;
    for (let y = 30; y < height; y += lineSpacing) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas internal resolution based on parent
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width || 400;
    canvas.height = 180;

    drawBackground(ctx, canvas.width, canvas.height);
  }, []);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    drawBackground(ctx, canvas.width, canvas.height);
    setHasWritten(false);
    if (onCanvasChange) onCanvasChange(false);
  };

  const getCanvasCoords = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();

    let clientX = 0;
    let clientY = 0;

    if ('touches' in e && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if ('clientX' in e) {
      clientX = (e as MouseEvent).clientX;
      clientY = (e as MouseEvent).clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const startDrawing = (e: any) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const coords = getCanvasCoords(e);
    setIsDrawing(true);
    setPenPos(coords);

    ctx.beginPath();
    ctx.moveTo(coords.x, coords.y);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = isEraser ? '#fefce8' : penColor;
    ctx.lineWidth = isEraser ? penWidth * 4 : penWidth;
  };

  const draw = (e: any) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const coords = getCanvasCoords(e);
    setPenPos(coords);

    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();

    if (!hasWritten) {
      setHasWritten(true);
      if (onCanvasChange) onCanvasChange(true);
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    setPenPos(null);
  };

  return (
    <View style={styles.container}>
      {/* Header Info */}
      <View style={styles.boxHeader}>
        <Text style={styles.boxTitle}>✒️ KOTAK PENA & LEMBAR KERTAS MENULIS</Text>
        <Text style={styles.boxSubtitle}>Geser pena di atas kertas untuk menulis jawaban tanganmu!</Text>
      </View>

      {/* Pen Toolbox Controls */}
      <View style={styles.toolbox}>
        <Text style={styles.toolLabel}>Pilih Alat:</Text>
        
        {/* Blue Pen */}
        <TouchableOpacity
          style={[styles.toolBtn, !isEraser && penColor === '#1e3a8a' && styles.toolBtnActive]}
          onPress={() => { setIsEraser(false); setPenColor('#1e3a8a'); }}
        >
          <Text style={styles.toolIcon}>🖋️</Text>
          <Text style={styles.toolText}>Pena Biru</Text>
        </TouchableOpacity>

        {/* Dark Ink Pen */}
        <TouchableOpacity
          style={[styles.toolBtn, !isEraser && penColor === '#0f172a' && styles.toolBtnActive]}
          onPress={() => { setIsEraser(false); setPenColor('#0f172a'); }}
        >
          <Text style={styles.toolIcon}>✒️</Text>
          <Text style={styles.toolText}>Pena Hitam</Text>
        </TouchableOpacity>

        {/* Red Pencil */}
        <TouchableOpacity
          style={[styles.toolBtn, !isEraser && penColor === '#dc2626' && styles.toolBtnActive]}
          onPress={() => { setIsEraser(false); setPenColor('#dc2626'); }}
        >
          <Text style={styles.toolIcon}>✏️</Text>
          <Text style={styles.toolText}>Pena Merah</Text>
        </TouchableOpacity>

        {/* Eraser */}
        <TouchableOpacity
          style={[styles.toolBtn, isEraser && styles.toolBtnActive]}
          onPress={() => setIsEraser(true)}
        >
          <Text style={styles.toolIcon}>🧹</Text>
          <Text style={styles.toolText}>Penghapus</Text>
        </TouchableOpacity>

        {/* Clear Button */}
        <TouchableOpacity style={styles.clearBtn} onPress={clearCanvas}>
          <Text style={styles.clearText}>🗑️ Bersihkan</Text>
        </TouchableOpacity>
      </View>

      {/* Thickness Selector */}
      <View style={styles.thicknessRow}>
        <Text style={styles.thicknessLabel}>Ukuran Pena:</Text>
        {[2, 4, 7].map((w) => (
          <TouchableOpacity
            key={w}
            style={[styles.sizeBtn, penWidth === w && styles.sizeBtnActive]}
            onPress={() => setPenWidth(w)}
          >
            <View
              style={{
                width: w * 2 + 2,
                height: w * 2 + 2,
                borderRadius: w + 1,
                backgroundColor: isEraser ? '#64748b' : penColor,
              }}
            />
            <Text style={styles.sizeText}>{w === 2 ? 'Tipis' : w === 4 ? 'Sedang' : 'Tebal'}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Lined Paper Canvas Area */}
      <View style={styles.paperFrame}>
        {/* Floating Pen Cursor Tip Indicator */}
        {penPos && (
          <div
            style={{
              position: 'absolute',
              left: `${penPos.x - 4}px`,
              top: `${penPos.y - 28}px`,
              pointerEvents: 'none',
              fontSize: '24px',
              zIndex: 10,
              filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.3))',
              transition: 'transform 0.05s ease',
            }}
          >
            {isEraser ? '🧹' : '✒️'}
          </div>
        )}

        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '180px',
            borderRadius: '12px',
            cursor: isEraser ? 'crosshair' : 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'><text y=\'20\' font-size=\'20\'>✒️</text></svg>"), pointer',
            touchAction: 'none',
          }}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />

        {/* Watermark helper overlay when canvas is empty */}
        {!hasWritten && (
          <View style={styles.watermarkOverlay} pointerEvents="none">
            <Text style={styles.watermarkText}>✍️ Geser pena di sini untuk menulis...</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fffbeb',
    borderRadius: 16,
    padding: 12,
    marginVertical: 12,
    borderWidth: 2,
    borderColor: '#fde047',
    shadowColor: '#b45309',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  boxHeader: {
    marginBottom: 8,
    alignItems: 'center',
  },
  boxTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#92400e',
    letterSpacing: 0.5,
  },
  boxSubtitle: {
    fontSize: 11,
    color: '#b45309',
    marginTop: 2,
  },
  toolbox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
    backgroundColor: '#fef3c7',
    padding: 6,
    borderRadius: 10,
  },
  toolLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#78350f',
    marginRight: 2,
  },
  toolBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fcd34d',
  },
  toolBtnActive: {
    backgroundColor: '#fef08a',
    borderColor: '#ca8a04',
    borderWidth: 2,
  },
  toolIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  toolText: {
    fontSize: 11,
    color: '#451a03',
    fontWeight: '600',
  },
  clearBtn: {
    marginLeft: 'auto',
    backgroundColor: '#fee2e2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fca5a5',
  },
  clearText: {
    fontSize: 11,
    color: '#991b1b',
    fontWeight: 'bold',
  },
  thicknessRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  thicknessLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#78350f',
  },
  sizeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    backgroundColor: '#fef9c3',
  },
  sizeBtnActive: {
    backgroundColor: '#fef08a',
    borderWidth: 1,
    borderColor: '#ca8a04',
  },
  sizeText: {
    fontSize: 10,
    color: '#78350f',
  },
  paperFrame: {
    position: 'relative',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e2e8f0',
    overflow: 'hidden',
    backgroundColor: '#fefce8',
  },
  watermarkOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  watermarkText: {
    fontSize: 14,
    color: '#94a3b8',
    fontStyle: 'italic',
    fontWeight: '500',
  },
});
