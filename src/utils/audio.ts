// Web Audio API Synthesizer for SFX and Procedural Background Music (BGM)

class AudioManager {
  private ctx: AudioContext | null = null;
  private currentTheme: string = 'none';
  private bgmOscs: OscillatorNode[] = [];
  private bgmGain: GainNode | null = null;
  private masterGain: GainNode | null = null;
  private musicMuted: boolean = false;
  private sfxMuted: boolean = false;
  private bgmInterval: number | null = null;

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.value = 0.4;
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setMusicMuted(muted: boolean) {
    this.musicMuted = muted;
    if (this.bgmGain && this.ctx) {
      this.bgmGain.gain.setValueAtTime(muted ? 0 : 0.12, this.ctx.currentTime);
    }
  }

  public setSFXMuted(muted: boolean) {
    this.sfxMuted = muted;
  }

  public isMusicMutedState(): boolean {
    return this.musicMuted;
  }

  public isSFXMutedState(): boolean {
    return this.sfxMuted;
  }

  public toggleMute(): boolean {
    const newMuted = !this.musicMuted;
    this.setMusicMuted(newMuted);
    this.setSFXMuted(newMuted);
    return newMuted;
  }

  public getIsMuted(): boolean {
    return this.musicMuted && this.sfxMuted;
  }

  // --- SOUND EFFECTS (SFX) ---

  public playCorrectSFX() {
    try {
      if (this.sfxMuted) return;
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.25, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);

        osc.connect(gain);
        gain.connect(this.masterGain!);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.38);
      });
    } catch {
      // Audio context fallback
    }
  }

  public playWrongSFX() {
    try {
      if (this.sfxMuted) return;
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const freqs = [220, 185, 146.83]; // A3, F#3, D3
      freqs.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now + idx * 0.12);

        gain.gain.setValueAtTime(0, now + idx * 0.12);
        gain.gain.linearRampToValueAtTime(0.2, now + idx * 0.12 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.3);

        osc.connect(gain);
        gain.connect(this.masterGain!);

        osc.start(now + idx * 0.12);
        osc.stop(now + idx * 0.12 + 0.32);
      });
    } catch {
      // Audio context fallback
    }
  }

  public playGameOverSFX() {
    try {
      if (this.sfxMuted) return;
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const freqs = [300, 260, 220, 160];
      freqs.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now + idx * 0.15);

        gain.gain.setValueAtTime(0, now + idx * 0.15);
        gain.gain.linearRampToValueAtTime(0.25, now + idx * 0.15 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.15 + 0.4);

        osc.connect(gain);
        gain.connect(this.masterGain!);

        osc.start(now + idx * 0.15);
        osc.stop(now + idx * 0.15 + 0.42);
      });
    } catch {
      // Audio context fallback
    }
  }

  public playVictorySFX() {
    try {
      if (this.sfxMuted) return;
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5]; // C5, E5, G5, C6, E6
      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);

        gain.gain.setValueAtTime(0, now + idx * 0.1);
        gain.gain.linearRampToValueAtTime(0.3, now + idx * 0.1 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.5);

        osc.connect(gain);
        gain.connect(this.masterGain!);

        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.52);
      });
    } catch {
      // Audio context fallback
    }
  }

  // --- BACKGROUND MUSIC (BGM) PER THEME ---

  public setBGMTheme(theme: string) {
    if (this.currentTheme === theme && this.bgmInterval) return;
    this.currentTheme = theme;
    this.stopBGM();

    this.initCtx();
    if (!this.ctx) return;

    this.bgmGain = this.ctx.createGain();
    this.bgmGain.gain.setValueAtTime(this.musicMuted ? 0 : 0.12, this.ctx.currentTime);
    this.bgmGain.connect(this.masterGain!);

    // Chords and melody pattern per biome
    let freqs: number[] = [261.63, 329.63, 392.0]; // C, E, G default
    let waveType: OscillatorType = 'sine';
    let tempoMs = 800;

    if (theme === 'pantai') {
      // Tropical Sunset Beach Vibe
      freqs = [220, 277.18, 329.63, 440]; // A, C#, E, A
      waveType = 'sine';
      tempoMs = 1200;
    } else if (theme === 'desa') {
      // Warm Village Marimba Vibe
      freqs = [293.66, 369.99, 440, 587.33]; // D, F#, A, D
      waveType = 'triangle';
      tempoMs = 600;
    } else if (theme === 'lembah') {
      // Mystical Echoing Valley
      freqs = [196, 246.94, 293.66, 392]; // G, B, D, G
      waveType = 'sine';
      tempoMs = 1000;
    } else if (theme === 'gurun') {
      // Desert Amber Drone Vibe
      freqs = [146.83, 220, 293.66, 311.13]; // D, A, D, Eb (Phrygian)
      waveType = 'sawtooth';
      tempoMs = 1100;
    } else if (theme === 'danau') {
      // Calming Shimmering Lake
      freqs = [261.63, 329.63, 392.0, 523.25]; // C, E, G, C
      waveType = 'sine';
      tempoMs = 900;
    } else if (theme === 'gunung') {
      // High Mountain Windswept Echo
      freqs = [174.61, 220, 261.63, 349.23]; // F, A, C, F
      waveType = 'triangle';
      tempoMs = 1000;
    } else if (theme === 'istana') {
      // Royal Palace Noble Organ
      freqs = [220, 261.63, 329.63, 440]; // Am
      waveType = 'square';
      tempoMs = 750;
    } else {
      // Hutan / Default Forest
      freqs = [220, 261.63, 329.63, 392.0]; // Am7
      waveType = 'sine';
      tempoMs = 850;
    }

    let noteIdx = 0;
    const playNote = () => {
      if (!this.ctx || !this.bgmGain) return;
      const freq = freqs[noteIdx % freqs.length];
      noteIdx++;

      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      osc.type = waveType;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      noteGain.gain.setValueAtTime(0, this.ctx.currentTime);
      noteGain.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 0.1);
      noteGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + (tempoMs / 1000) * 1.2);

      osc.connect(noteGain);
      noteGain.connect(this.bgmGain);

      osc.start();
      osc.stop(this.ctx.currentTime + (tempoMs / 1000) * 1.3);
    };

    playNote();
    this.bgmInterval = window.setInterval(playNote, tempoMs);
  }

  public stopBGM() {
    if (this.bgmInterval) {
      clearInterval(this.bgmInterval);
      this.bgmInterval = null;
    }
    this.bgmOscs.forEach((o) => {
      try { o.stop(); } catch {}
    });
    this.bgmOscs = [];
  }
}

export const audioManager = new AudioManager();
