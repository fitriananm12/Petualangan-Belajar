export interface Character {
  id: string;
  name: string;
  trait: string;
  color: string;
  accent: string;
  emoji: string;
  eyeColor: string;
}

export interface QuestionPos {
  title: string;
  material: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface CategoryData {
  name: string;
  positions: QuestionPos[];
}

export interface GradeData {
  icon: string;
  theme: string;
  desc: string;
  Membaca: CategoryData;
  Menghitung: CategoryData;
  Menulis: CategoryData;
}

export type CurriculumType = Record<string, GradeData>;

export type ScreenType = 'login' | 'char' | 'grade' | 'category' | 'game' | 'library';
