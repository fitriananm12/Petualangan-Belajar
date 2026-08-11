import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { motion, AnimatePresence } from 'motion/react';
import { LoginScreen } from './components/LoginScreen';
import { CharScreen } from './components/CharScreen';
import { GradeScreen } from './components/GradeScreen';
import { CategoryScreen } from './components/CategoryScreen';
import { MaterialLibraryView } from './components/MaterialLibraryView';
import { GameCanvas } from './components/GameCanvas';
import { QuizModal } from './components/QuizModal';
import { GameOverModal } from './components/GameOverModal';
import { CompletionModal } from './components/CompletionModal';
import { CHARACTERS } from './data/characters';
import { CURRICULUM } from './data/curriculum';
import { ScreenType } from './types';
import { audioManager } from './utils/audio';

export default function App() {
  const [screen, setScreen] = useState<ScreenType>('login');
  const [playerName, setPlayerName] = useState<string>('');
  const [selectedCharId, setSelectedCharId] = useState<string>('rana');
  const [gradeKey, setGradeKey] = useState<string>('Kelas 1');
  const [categoryKey, setCategoryKey] = useState<string>('Membaca');
  const [currentPosIndex, setCurrentPosIndex] = useState<number>(0);

  // Gamification & Lives State
  const [lives, setLives] = useState<number>(3);
  const [score, setScore] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [wrongCount, setWrongCount] = useState<number>(0);

  // Unlocked, Completed & Failed positions tracking
  const [unlockedPosIndex, setUnlockedPosIndex] = useState<number>(0);
  const [completedPosIndices, setCompletedPosIndices] = useState<number[]>([]);
  const [failedPosIndices, setFailedPosIndices] = useState<number[]>([]);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  useEffect(() => {
    const targetSlide = Math.floor(currentPosIndex / 5);
    setActiveSlide(targetSlide);
  }, [currentPosIndex, categoryKey]);

  // Modals
  const [quizOpen, setQuizOpen] = useState<boolean>(false);
  const [feedbackShown, setFeedbackShown] = useState<boolean>(false);
  const [lastCorrect, setLastCorrect] = useState<boolean>(false);
  const [gameOverModal, setGameOverModal] = useState<boolean>(false);
  const [completionModal, setCompletionModal] = useState<boolean>(false);

  const selectedCharacter =
    CHARACTERS.find((c) => c.id === selectedCharId) || CHARACTERS[0];

  const currentGradeData = CURRICULUM[gradeKey];
  const currentCategoryData = currentGradeData
    ? currentGradeData[categoryKey as 'Membaca' | 'Menghitung']
    : null;

  const currentQuestionPos = currentCategoryData
    ? currentCategoryData.positions[currentPosIndex]
    : null;

  // Navigation handlers
  const handleLogin = (name: string) => {
    setPlayerName(name);
    setScreen('char');
  };

  const handleSelectCharacter = (charId: string) => {
    setSelectedCharId(charId);
    setScreen('grade');
  };

  const handleSelectGrade = (selectedGrade: string) => {
    setGradeKey(selectedGrade);
    setScreen('category');
  };

  const handleSelectCategory = (catKey: string) => {
    if (catKey === 'Library' || catKey === 'library') {
      setScreen('library');
      return;
    }
    setCategoryKey(catKey);
    setCurrentPosIndex(0);
    setUnlockedPosIndex(0);
    setCompletedPosIndices([]);
    setFailedPosIndices([]);
    setLives(3);
    setScore(0);
    setCorrectCount(0);
    setWrongCount(0);
    setQuizOpen(false);
    setFeedbackShown(false);
    setGameOverModal(false);
    setCompletionModal(false);
    setScreen('game');
  };

  const handleResetRun = () => {
    setLives(3);
    setScore(0);
    setCorrectCount(0);
    setWrongCount(0);
    setCurrentPosIndex(0);
    setUnlockedPosIndex(0);
    setCompletedPosIndices([]);
    setFailedPosIndices([]);
    setQuizOpen(false);
    setFeedbackShown(false);
    setGameOverModal(false);
    setCompletionModal(false);
  };

  // Quiz Handlers
  const handleReachCheckpoint = (posIdx?: number) => {
    const targetIdx = typeof posIdx === 'number' ? posIdx : currentPosIndex;
    // Do not open quiz if pos is locked
    if (targetIdx > unlockedPosIndex) {
      return;
    }
    setCurrentPosIndex(targetIdx);
    setQuizOpen(true);
    setFeedbackShown(false);
  };

  const handleSelectOption = (isCorrect: boolean) => {
    setLastCorrect(isCorrect);
    setFeedbackShown(true);

    if (isCorrect) {
      setScore((prev) => prev + 100);
      setCorrectCount((prev) => prev + 1);
    } else {
      setWrongCount((prev) => prev + 1);
      setLives((prev) => {
        const next = prev - 1;
        return Math.max(0, next);
      });
    }
  };

  const handleNextOrRetry = () => {
    if (!currentCategoryData) return;

    setQuizOpen(false);
    setFeedbackShown(false);

    // If lives drop to 0, trigger Game Over modal
    if (!lastCorrect && lives - 1 <= 0) {
      setFailedPosIndices((prev) => Array.from(new Set([...prev, currentPosIndex])));
      setGameOverModal(true);
      audioManager.playGameOverSFX();
      return;
    }

    if (lastCorrect) {
      setCompletedPosIndices((prev) => Array.from(new Set([...prev, currentPosIndex])));
      setFailedPosIndices((prev) => prev.filter((idx) => idx !== currentPosIndex));
      setUnlockedPosIndex((prev) => Math.max(prev, currentPosIndex + 1));

      // Reached the peak (Pos Terakhir Selesai)
      if (currentPosIndex >= currentCategoryData.positions.length - 1) {
        setCompletionModal(true);
        audioManager.playVictorySFX();
      }
    } else {
      // Wrong answer -> Pos is recorded in failedPosIndices, and unlock next Pos so player can continue to next Pos
      setFailedPosIndices((prev) => Array.from(new Set([...prev, currentPosIndex])));
      setUnlockedPosIndex((prev) => Math.max(prev, currentPosIndex + 1));
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.rootContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={screen}
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}
          >
            {screen === 'login' && <LoginScreen onLogin={handleLogin} />}

            {screen === 'char' && (
              <CharScreen
                playerName={playerName}
                selectedCharId={selectedCharId}
                onSelectCharacter={handleSelectCharacter}
                onBack={() => setScreen('login')}
              />
            )}

            {screen === 'grade' && (
              <GradeScreen
                playerName={playerName}
                selectedCharId={selectedCharId}
                onSelectGrade={handleSelectGrade}
                onBack={() => setScreen('char')}
              />
            )}

            {screen === 'category' && (
              <CategoryScreen
                gradeKey={gradeKey}
                onSelectCategory={handleSelectCategory}
                onBack={() => setScreen('grade')}
              />
            )}

            {screen === 'library' && (
              <MaterialLibraryView
                gradeKey={gradeKey}
                onBack={() => setScreen('category')}
              />
            )}

            {screen === 'game' && currentCategoryData && (
              <View style={{ width: '100%', height: '100%', position: 'relative' }}>
                <GameCanvas
                  character={selectedCharacter}
                  playerName={playerName}
                  gradeKey={gradeKey}
                  categoryKey={categoryKey}
                  categoryData={currentCategoryData}
                  currentPosIndex={currentPosIndex}
                  unlockedPosIndex={unlockedPosIndex}
                  completedPosIndices={completedPosIndices}
                  failedPosIndices={failedPosIndices}
                  activeSlide={activeSlide}
                  onSlideChange={(s) => setActiveSlide(s)}
                  lives={lives}
                  score={score}
                  onSelectPosIndex={(idx) => setCurrentPosIndex(idx)}
                  onReachCheckpoint={handleReachCheckpoint}
                  onBack={() => setScreen('category')}
                />

                {/* Quiz Question Modal */}
                <AnimatePresence>
                  {quizOpen && currentQuestionPos && (
                    <QuizModal
                      visible={quizOpen}
                      positionData={currentQuestionPos}
                      category={categoryKey}
                      isTotalPositions={currentCategoryData.positions.length}
                      currentPosIndex={currentPosIndex}
                      feedbackShown={feedbackShown}
                      lastCorrect={lastCorrect}
                      lives={lives}
                      score={score}
                      onSelectOption={handleSelectOption}
                      onNextOrRetry={handleNextOrRetry}
                      onClose={() => setQuizOpen(false)}
                    />
                  )}
                </AnimatePresence>

                {/* Game Over Modal (Nyawa Habis) */}
                <AnimatePresence>
                  {gameOverModal && (
                    <GameOverModal
                      visible={gameOverModal}
                      categoryName={`${gradeKey} • ${categoryKey}`}
                      onRestart={handleResetRun}
                    />
                  )}
                </AnimatePresence>

                {/* Completion Modal (Pos Terakhir Selesai) */}
                <AnimatePresence>
                  {completionModal && (
                    <CompletionModal
                      visible={completionModal}
                      score={score}
                      correctCount={correctCount}
                      totalPositions={currentCategoryData.positions.length}
                      lives={lives}
                      categoryName={`${gradeKey} • ${categoryKey}`}
                      onPlayAgain={handleResetRun}
                      onBackToCategory={() => {
                        setCompletionModal(false);
                        setScreen('category');
                      }}
                    />
                  )}
                </AnimatePresence>
              </View>
            )}
          </motion.div>
        </AnimatePresence>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#6c5ce7',
  },
  rootContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
