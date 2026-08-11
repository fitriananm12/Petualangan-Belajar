import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native';
import { motion, AnimatePresence } from 'motion/react';
import { GRADE_MATERIALS, LibraryBook, BookChapter } from '../data/materials';
import { FloatingBg } from './FloatingBg';
import { Tilt3DCard } from './3d/Tilt3DCard';
import { Button3D } from './3d/Button3D';

interface MaterialLibraryViewProps {
  gradeKey: string;
  onBack: () => void;
}

export const MaterialLibraryView: React.FC<MaterialLibraryViewProps> = ({
  gradeKey,
  onBack,
}) => {
  const books = GRADE_MATERIALS[gradeKey] || GRADE_MATERIALS['Kelas 1'];
  
  // State for Shelf Filtering & Book Reader
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('Semua');
  const [selectedBook, setSelectedBook] = useState<LibraryBook | null>(null);
  const [selectedChapterIndex, setSelectedChapterIndex] = useState<number>(0);
  
  // Digital Reader Settings & States
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [bookmarks, setBookmarks] = useState<Record<string, boolean>>({});
  const [userPracticeText, setUserPracticeText] = useState<string>('');
  const [practiceFeedback, setPracticeFeedback] = useState<string | null>(null);
  const [quizSelectedOption, setQuizSelectedOption] = useState<number | null>(null);
  const [quizChecked, setQuizChecked] = useState<boolean>(false);

  // Filtered books on shelf
  const filteredBooks = useMemo(() => {
    if (activeCategoryFilter === 'Semua') return books;
    return books.filter((b) =>
      b.chapters.some((c) => c.category === activeCategoryFilter)
    );
  }, [books, activeCategoryFilter]);

  const currentChapter: BookChapter | null = useMemo(() => {
    if (!selectedBook || !selectedBook.chapters) return null;
    return selectedBook.chapters[selectedChapterIndex] || selectedBook.chapters[0] || null;
  }, [selectedBook, selectedChapterIndex]);

  const handleOpenBook = (book: LibraryBook) => {
    setSelectedBook(book);
    setSelectedChapterIndex(0);
    setUserPracticeText('');
    setPracticeFeedback(null);
    setQuizSelectedOption(null);
    setQuizChecked(false);
  };

  const handleCloseBook = () => {
    setSelectedBook(null);
    setSelectedChapterIndex(0);
  };

  const handleSelectChapter = (index: number) => {
    setSelectedChapterIndex(index);
    setUserPracticeText('');
    setPracticeFeedback(null);
    setQuizSelectedOption(null);
    setQuizChecked(false);
  };

  const toggleBookmark = (chapterId: string) => {
    setBookmarks((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  const handleCheckPractice = () => {
    if (!userPracticeText.trim()) {
      setPracticeFeedback('⚠️ Tuliskan jawabanmu terlebih dahulu di kotak di atas!');
      return;
    }
    setPracticeFeedback('🎉 Hebat sekali! Tulisanmu sudah dicatat. Terus berlatih agar makin pintar!');
  };

  const getFontSizeStyle = () => {
    if (fontSize === 'small') return { fontSize: 13, lineHeight: 20 };
    if (fontSize === 'large') return { fontSize: 18, lineHeight: 28 };
    return { fontSize: 15, lineHeight: 24 };
  };

  return (
    <FloatingBg>
      {/* TOP NAV BAR */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backBtn} onPress={selectedBook ? handleCloseBook : onBack}>
          <Text style={styles.backBtnText}>
            {selectedBook ? '📚 Kembali ke Rak Buku' : '⬅ Kembali ke Pilihan Tab'}
          </Text>
        </TouchableOpacity>

        <View style={styles.gradeBadge}>
          <Text style={styles.gradeBadgeText}>🏫 Buku Digital {gradeKey}</Text>
        </View>
      </View>

      <View style={styles.container}>
        <AnimatePresence mode="wait">
          {!selectedBook ? (
            /* ANIMATED LIBRARY SHELF VIEW */
            <motion.div
              key="library-shelf"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={styles.fullWidth}
            >
              <Text style={styles.shelfHeading}>🏛️ Perpustakaan Buku Digital & Ringkasan Materi</Text>
              <Text style={styles.shelfSubheading}>
                Pilih buku digital di bawah ini untuk membaca rangkuman materi lengkap dan panduan menulis!
              </Text>

              {/* CATEGORY FILTER TABS */}
              <View style={styles.filterTabsContainer}>
                {['Semua', 'Menulis', 'Membaca', 'Menghitung'].map((cat) => {
                  const isActive = activeCategoryFilter === cat;
                  return (
                    <TouchableOpacity
                      key={cat}
                      style={[styles.filterTabPill, isActive && styles.filterTabPillActive]}
                      onPress={() => setActiveCategoryFilter(cat)}
                    >
                      <Text style={[styles.filterTabText, isActive && styles.filterTabTextActive]}>
                        {cat === 'Semua' ? '📚 Semua Buku' : cat === 'Menulis' ? '✍️ Menulis' : cat === 'Membaca' ? '📖 Membaca' : '🔢 Menghitung'}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              {/* LIBRARY BOOKSHELF DISPLAY */}
              <View style={styles.shelfContainer}>
                <View style={styles.woodPlank}>
                  <Text style={styles.woodLabel}>
                    📖 RAK BUKU UTAMA — {gradeKey.toUpperCase()} ({filteredBooks.length} Buku Tersedia)
                  </Text>
                </View>

                <View style={styles.booksGrid}>
                  {filteredBooks.map((book, idx) => (
                    <motion.div
                      key={book.id}
                      initial={{ opacity: 0, scale: 0.8, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, type: 'spring', stiffness: 260, damping: 20 }}
                    >
                      <Tilt3DCard
                        borderColor={book.accentColor}
                        glowColor={book.accentColor}
                        onClick={() => handleOpenBook(book)}
                        style={{ width: 220, minHeight: 270 }}
                      >
                        <TouchableOpacity
                          style={[
                            styles.bookSpineInner,
                            { backgroundColor: book.coverColor },
                          ]}
                          activeOpacity={0.85}
                          onPress={() => handleOpenBook(book)}
                          // @ts-ignore
                          onClick={() => handleOpenBook(book)}
                        >
                          <View style={styles.bookSpineRibbon} />
                          <Text style={styles.bookIcon}>{book.icon}</Text>
                          <Text style={styles.bookTitleText}>{book.title}</Text>
                          <Text style={styles.bookSubtitleText}>{book.subtitle}</Text>

                          <View style={styles.bookMetaRow}>
                            <Text style={styles.bookChapterBadge}>
                              📑 {book.chapters.length} Bab Materi
                            </Text>
                          </View>

                          <View style={styles.openPill}>
                            <Text style={styles.openPillText}>📖 Buka Buku Digital</Text>
                          </View>
                        </TouchableOpacity>
                      </Tilt3DCard>
                    </motion.div>
                  ))}
                </View>


                <View style={styles.woodPlankBottom} />
              </View>
            </motion.div>
          ) : (
            /* ANIMATED DIGITAL E-READER VIEW */
            <motion.div
              key="book-reader"
              initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.95, rotateY: 10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              style={styles.fullWidth}
            >
              <View style={styles.readerWrapper}>
                {/* READER TOOLBAR HEADER */}
                <View style={[styles.readerHeader, { backgroundColor: selectedBook.coverColor }]}>
                  <View style={styles.readerHeaderLeft}>
                    <Text style={styles.readerHeaderIcon}>{selectedBook.icon}</Text>
                    <View>
                      <Text style={styles.readerHeaderTitle}>{selectedBook.title}</Text>
                      <Text style={styles.readerHeaderSub}>{selectedBook.subtitle}</Text>
                    </View>
                  </View>

                  {/* FONT SIZE & BOOKMARK CONTROLS */}
                  <View style={styles.readerControlsGroup}>
                    <View style={styles.fontSizeControls}>
                      <Text style={styles.ctrlLabel}>Ukuran Teks:</Text>
                      <TouchableOpacity
                        style={[styles.sizeBtn, fontSize === 'small' && styles.sizeBtnActive]}
                        onPress={() => setFontSize('small')}
                      >
                        <Text style={styles.sizeBtnText}>A-</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.sizeBtn, fontSize === 'medium' && styles.sizeBtnActive]}
                        onPress={() => setFontSize('medium')}
                      >
                        <Text style={styles.sizeBtnText}>A</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.sizeBtn, fontSize === 'large' && styles.sizeBtnActive]}
                        onPress={() => setFontSize('large')}
                      >
                        <Text style={styles.sizeBtnText}>A+</Text>
                      </TouchableOpacity>
                    </View>

                    {currentChapter && (
                      <TouchableOpacity
                        style={[
                          styles.bookmarkBtn,
                          bookmarks[currentChapter.id] && styles.bookmarkBtnActive,
                        ]}
                        onPress={() => toggleBookmark(currentChapter.id)}
                      >
                        <Text style={styles.bookmarkBtnText}>
                          {bookmarks[currentChapter.id] ? '🔖 Ditandai' : '📑 Tandai Bab'}
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>

                {/* PROGRESS BAR */}
                <View style={styles.readingProgressBarBg}>
                  <View
                    style={[
                      styles.readingProgressBarFill,
                      {
                        width: `${
                          ((selectedChapterIndex + 1) / selectedBook.chapters.length) * 100
                        }%`,
                        backgroundColor: selectedBook.accentColor,
                      },
                    ]}
                  />
                </View>

                <View style={styles.bookBody}>
                  {/* CHAPTERS NAVIGATION SIDEBAR */}
                  <View style={styles.chapterSidebar}>
                    <Text style={styles.sidebarTitle}>📑 Daftar Bab Digital</Text>
                    <ScrollView style={styles.sidebarScroll}>
                      {selectedBook.chapters.map((chap, idx) => {
                        const isChapActive = selectedChapterIndex === idx;
                        const isBookmarked = bookmarks[chap.id];
                        return (
                          <TouchableOpacity
                            key={chap.id}
                            style={[
                              styles.chapterItem,
                              isChapActive && styles.chapterItemActive,
                            ]}
                            activeOpacity={0.75}
                            onPress={() => handleSelectChapter(idx)}
                            // @ts-ignore
                            onClick={() => handleSelectChapter(idx)}
                          >
                            <View style={styles.chapHeaderRow}>
                              <Text
                                style={[
                                  styles.chapterItemText,
                                  isChapActive && styles.chapterItemTextActive,
                                ]}
                              >
                                {chap.title}
                              </Text>
                              {isBookmarked && <Text style={styles.bookmarkBadgeIcon}>🔖</Text>}
                            </View>

                            <View style={styles.chapCatBadge}>
                              <Text style={styles.chapCatText}>{chap.category}</Text>
                            </View>
                          </TouchableOpacity>
                        );
                      })}
                    </ScrollView>
                  </View>

                  {/* CHAPTER CONTENT DISPLAY PAGE */}
                  <View style={styles.pageContent}>
                    {currentChapter && (
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentChapter.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.25 }}
                          style={styles.pageMotionInner}
                        >
                          <ScrollView style={styles.contentScroll} contentContainerStyle={styles.contentInnerContainer}>
                            <View style={styles.chapBadgeHeader}>
                              <Text style={styles.chapBadgeTag}>
                                📌 BAB {selectedChapterIndex + 1} DARI {selectedBook.chapters.length} • KATEGORI: {currentChapter.category.toUpperCase()}
                              </Text>
                            </View>

                            <Text style={styles.chapterMainTitle}>{currentChapter.title}</Text>

                            {/* MAIN MATERIAL CONTENT BOX */}
                            <View style={styles.materialBox}>
                              <Text style={styles.materialBoxTitle}>📖 Rangkuman Inti Materi:</Text>
                              <Text style={[styles.materialBoxText, getFontSizeStyle()]}>
                                {currentChapter.content}
                              </Text>
                            </View>

                            {/* EXAMPLES & WORKING STEPS */}
                            <Text style={styles.sectionSubHeading}>💡 Contoh Nyata & Penjelasan Langkah:</Text>
                            <View style={styles.examplesList}>
                              {currentChapter.examples.map((ex, i) => (
                                <View key={i} style={styles.exampleItem}>
                                  <Text style={styles.exampleBullet}>✨</Text>
                                  <Text style={[styles.exampleText, getFontSizeStyle()]}>{ex}</Text>
                                </View>
                              ))}
                            </View>

                            {/* WRITING GUIDE IF AVAILABLE */}
                            {currentChapter.writingGuide && (
                              <View style={styles.guideCard}>
                                <Text style={styles.guideCardTitle}>✍️ Tips & Panduan Menulis Rapi:</Text>
                                {currentChapter.writingGuide.map((g, gi) => (
                                  <Text key={gi} style={[styles.guideText, getFontSizeStyle()]}>• {g}</Text>
                                ))}
                              </View>
                            )}

                            {/* INTERACTIVE DIGITAL PRACTICE SCRATCHPAD */}
                            {currentChapter.practicePrompt && (
                              <View style={styles.practiceCard}>
                                <Text style={styles.practiceTitle}>✏️ Lembar Latihan Digital Mandiri:</Text>
                                <Text style={styles.practiceText}>{currentChapter.practicePrompt}</Text>

                                <TextInput
                                  style={styles.practiceInput}
                                  placeholder="Ketikkan tulisan atau jawabanmu di sini..."
                                  placeholderTextColor="#a1a1aa"
                                  multiline
                                  numberOfLines={3}
                                  value={userPracticeText}
                                  onChangeText={setUserPracticeText}
                                />

                                <TouchableOpacity style={styles.checkPracticeBtn} onPress={handleCheckPractice}>
                                  <Text style={styles.checkPracticeBtnText}>✨ Simpan / Periksa Latihan</Text>
                                </TouchableOpacity>

                                {practiceFeedback && (
                                  <View style={styles.feedbackBox}>
                                    <Text style={styles.feedbackBoxText}>{practiceFeedback}</Text>
                                  </View>
                                )}
                              </View>
                            )}

                            {/* MINI QUIZ FOR IMMEDIATE RETENTION */}
                            {currentChapter.miniQuiz && (
                              <View style={styles.quizBoxContainer}>
                                <Text style={styles.quizBoxHeading}>🧠 Kuis Cepat Pemahaman Bab:</Text>
                                <Text style={styles.quizBoxQuestion}>{currentChapter.miniQuiz.question}</Text>

                                <View style={styles.quizOptionsGroup}>
                                  {currentChapter.miniQuiz.options.map((opt, oIdx) => {
                                    const isSelected = quizSelectedOption === oIdx;
                                    const isCorrect = oIdx === currentChapter.miniQuiz?.correctIndex;

                                    return (
                                      <TouchableOpacity
                                        key={oIdx}
                                        style={[
                                          styles.quizOptBtn,
                                          quizChecked && isCorrect && styles.quizOptBtnCorrect,
                                          quizChecked && !isCorrect && isSelected && styles.quizOptBtnWrong,
                                          !quizChecked && isSelected && styles.quizOptBtnSelected,
                                        ]}
                                        onPress={() => {
                                          setQuizSelectedOption(oIdx);
                                          setQuizChecked(true);
                                        }}
                                      >
                                        <Text style={styles.quizOptText}>
                                          {String.fromCharCode(65 + oIdx)}. {opt}
                                        </Text>
                                      </TouchableOpacity>
                                    );
                                  })}
                                </View>

                                {quizChecked && (
                                  <View style={styles.quizExplanationCard}>
                                    <Text style={styles.quizExplanationTitle}>
                                      {quizSelectedOption === currentChapter.miniQuiz.correctIndex ? '🎉 BENAR!' : '💡 PENJELASAN:'}
                                    </Text>
                                    <Text style={styles.quizExplanationText}>{currentChapter.miniQuiz.explanation}</Text>
                                  </View>
                                )}
                              </View>
                            )}

                            {/* PAGE NAVIGATION FOOTER */}
                            <View style={styles.pageNavFooter}>
                              <TouchableOpacity
                                style={[
                                  styles.pageNavBtn,
                                  selectedChapterIndex === 0 && styles.pageNavBtnDisabled,
                                ]}
                                disabled={selectedChapterIndex === 0}
                                onPress={() => handleSelectChapter(selectedChapterIndex - 1)}
                              >
                                <Text style={styles.pageNavBtnText}>⬅ Bab Sebelumnya</Text>
                              </TouchableOpacity>

                              <Text style={styles.pageIndicatorText}>
                                Halaman {selectedChapterIndex + 1} dari {selectedBook.chapters.length}
                              </Text>

                              <TouchableOpacity
                                style={[
                                  styles.pageNavBtn,
                                  selectedChapterIndex === selectedBook.chapters.length - 1 &&
                                    styles.pageNavBtnDisabled,
                                ]}
                                disabled={selectedChapterIndex === selectedBook.chapters.length - 1}
                                onPress={() => handleSelectChapter(selectedChapterIndex + 1)}
                              >
                                <Text style={styles.pageNavBtnText}>Bab Selanjutnya ➡</Text>
                              </TouchableOpacity>
                            </View>
                          </ScrollView>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </View>
                </View>
              </View>
            </motion.div>
          )}
        </AnimatePresence>
      </View>
    </FloatingBg>
  );
};

const styles = StyleSheet.create({
  topBar: {
    paddingTop: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  backBtnText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
  },
  gradeBadge: {
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#38bdf8',
  },
  gradeBadgeText: {
    color: '#f8fafc',
    fontSize: 14,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 16,
    maxWidth: 960,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  fullWidth: {
    width: '100%',
    flex: 1,
  },
  shelfHeading: {
    fontSize: 26,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 4,
  },
  shelfSubheading: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: 16,
  },
  filterTabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 16,
    flexWrap: 'wrap',
  },
  filterTabPill: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  filterTabPillActive: {
    backgroundColor: '#0284c7',
    borderColor: '#38bdf8',
  },
  filterTabText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
  },
  filterTabTextActive: {
    fontWeight: 'bold',
  },
  shelfContainer: {
    backgroundColor: 'rgba(15, 23, 42, 0.75)',
    borderRadius: 24,
    padding: 20,
    borderWidth: 2,
    borderColor: '#38bdf8',
    alignItems: 'center',
  },
  woodPlank: {
    backgroundColor: '#b45309',
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 20,
    borderBottomWidth: 3,
    borderBottomColor: '#78350f',
  },
  woodPlankBottom: {
    backgroundColor: '#b45309',
    width: '100%',
    height: 14,
    borderRadius: 6,
    marginTop: 20,
    borderBottomWidth: 3,
    borderBottomColor: '#78350f',
  },
  woodLabel: {
    color: '#fef3c7',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
  },
  booksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    width: '100%',
  },
  bookSpineInner: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
    minHeight: 270,
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden',
  },
  bookSpine: {
    width: 220,
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
    borderWidth: 3,
    minHeight: 270,
    justifyContent: 'space-between',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    position: 'relative',
    overflow: 'hidden',
  },
  bookSpineRibbon: {
    position: 'absolute',
    top: 0,
    left: 20,
    width: 14,
    height: 40,
    backgroundColor: '#ffffff',
    opacity: 0.4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  bookIcon: {
    fontSize: 44,
    marginTop: 10,
    marginBottom: 6,
  },
  bookTitleText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  bookSubtitleText: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 8,
  },
  bookMetaRow: {
    marginBottom: 10,
  },
  bookChapterBadge: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    color: '#ffffff',
    fontSize: 11,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  openPill: {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  openPillText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },

  /* DIGITAL READER STYLES */
  readerWrapper: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    overflow: 'hidden',
    flex: 1,
    minHeight: 560,
    borderWidth: 2,
    borderColor: '#cbd5e1',
    elevation: 10,
  },
  readerHeader: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 12,
  },
  readerHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  readerHeaderIcon: {
    fontSize: 32,
  },
  readerHeaderTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  readerHeaderSub: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 12,
  },
  readerControlsGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  fontSizeControls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 4,
    borderRadius: 12,
    gap: 4,
  },
  ctrlLabel: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '600',
    marginLeft: 4,
    marginRight: 4,
  },
  sizeBtn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: 'transparent',
  },
  sizeBtnActive: {
    backgroundColor: '#ffffff',
  },
  sizeBtnText: {
    color: '#0f172a',
    fontWeight: 'bold',
    fontSize: 12,
  },
  bookmarkBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  bookmarkBtnActive: {
    backgroundColor: '#f59e0b',
    borderColor: '#fde047',
  },
  bookmarkBtnText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  readingProgressBarBg: {
    height: 4,
    backgroundColor: '#e2e8f0',
    width: '100%',
  },
  readingProgressBarFill: {
    height: '100%',
  },
  bookBody: {
    flexDirection: 'row',
    flex: 1,
  },
  chapterSidebar: {
    width: 230,
    backgroundColor: '#f8fafc',
    borderRightWidth: 1,
    borderRightColor: '#e2e8f0',
    padding: 12,
  },
  sidebarTitle: {
    color: '#334155',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sidebarScroll: {
    flex: 1,
  },
  chapterItem: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },
  chapterItemActive: {
    backgroundColor: '#0284c7',
    borderColor: '#0284c7',
  },
  chapHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  chapterItemText: {
    color: '#1e293b',
    fontSize: 12,
    fontWeight: '600',
    flex: 1,
  },
  chapterItemTextActive: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  bookmarkBadgeIcon: {
    fontSize: 12,
  },
  chapCatBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.06)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  chapCatText: {
    fontSize: 10,
    color: '#475569',
    fontWeight: 'bold',
  },
  pageContent: {
    flex: 1,
    backgroundColor: '#fffdfa',
    padding: 20,
  },
  pageMotionInner: {
    flex: 1,
  },
  contentScroll: {
    flex: 1,
    minHeight: 0,
    overflowY: 'auto',
  } as any,
  contentInnerContainer: {
    paddingBottom: 24,
  },
  chapBadgeHeader: {
    marginBottom: 6,
  },
  chapBadgeTag: {
    color: '#0284c7',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  chapterMainTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 16,
  },
  materialBox: {
    backgroundColor: '#f0f9ff',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#bae6fd',
    marginBottom: 16,
  },
  materialBoxTitle: {
    color: '#0369a1',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  materialBoxText: {
    color: '#334155',
  },
  sectionSubHeading: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 10,
  },
  examplesList: {
    gap: 8,
    marginBottom: 16,
  },
  exampleItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  exampleBullet: {
    fontSize: 14,
  },
  exampleText: {
    color: '#334155',
    flex: 1,
  },
  guideCard: {
    backgroundColor: '#f0fdf4',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#bbf7d0',
    marginBottom: 16,
  },
  guideCardTitle: {
    color: '#15803d',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  guideText: {
    color: '#166534',
    marginBottom: 4,
  },
  practiceCard: {
    backgroundColor: '#fefce8',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#fef08a',
    marginBottom: 16,
  },
  practiceTitle: {
    color: '#a16207',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  practiceText: {
    color: '#854d0e',
    fontSize: 13,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  practiceInput: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fde047',
    padding: 10,
    fontSize: 13,
    color: '#1e293b',
    minHeight: 60,
    textAlignVertical: 'top',
    marginBottom: 10,
  },
  checkPracticeBtn: {
    backgroundColor: '#ca8a04',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  checkPracticeBtnText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  feedbackBox: {
    marginTop: 10,
    backgroundColor: '#fef3c7',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fcd34d',
  },
  feedbackBoxText: {
    color: '#92400e',
    fontSize: 12,
    fontWeight: '600',
  },
  quizBoxContainer: {
    backgroundColor: '#f8fafc',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    marginBottom: 16,
  },
  quizBoxHeading: {
    color: '#475569',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  quizBoxQuestion: {
    color: '#0f172a',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  quizOptionsGroup: {
    gap: 8,
    marginBottom: 10,
  },
  quizOptBtn: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },
  quizOptBtnSelected: {
    borderColor: '#0284c7',
    backgroundColor: '#e0f2fe',
  },
  quizOptBtnCorrect: {
    borderColor: '#22c55e',
    backgroundColor: '#dcfce7',
  },
  quizOptBtnWrong: {
    borderColor: '#ef4444',
    backgroundColor: '#fee2e2',
  },
  quizOptText: {
    fontSize: 13,
    color: '#1e293b',
    fontWeight: '600',
  },
  quizExplanationCard: {
    backgroundColor: '#eff6ff',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#bfdbfe',
  },
  quizExplanationTitle: {
    color: '#1d4ed8',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  quizExplanationText: {
    color: '#1e40af',
    fontSize: 12,
  },
  pageNavFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    marginTop: 10,
  },
  pageNavBtn: {
    backgroundColor: '#0284c7',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  pageNavBtnDisabled: {
    backgroundColor: '#cbd5e1',
  },
  pageNavBtnText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  pageIndicatorText: {
    color: '#64748b',
    fontSize: 12,
    fontWeight: '600',
  },
});
