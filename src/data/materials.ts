export interface BookChapter {
  id: string;
  title: string;
  category: 'Menulis' | 'Membaca' | 'Menghitung';
  content: string;
  examples: string[];
  practicePrompt?: string;
  writingGuide?: string[];
  miniQuiz?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export interface LibraryBook {
  id: string;
  title: string;
  coverColor: string;
  accentColor: string;
  icon: string;
  subtitle: string;
  description: string;
  chapters: BookChapter[];
}

export const GRADE_MATERIALS: Record<string, LibraryBook[]> = {
  'Kelas 1': [
    {
      id: 'k1-menulis-1',
      title: 'Kitab Menulis Huruf & Bahasa Dasar',
      coverColor: '#e11d48',
      accentColor: '#fb7185',
      icon: '✍️',
      subtitle: 'Panduan Huruf, Suku Kata & Kalimat',
      description: 'Materi lengkap melatih menulis huruf A-Z, membedakan vokal/konsonan, suku kata terbuka-tertutup, serta tanda baca dasar.',
      chapters: [
        {
          id: 'k1-c1',
          title: 'Bab 1: Huruf Vokal & Konsonan',
          category: 'Menulis',
          content: 'Huruf Vokal adalah huruf pembuka suara yaitu A, I, U, E, O. Sedangkan Huruf Konsonan adalah huruf mati seperti B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z. Menulis huruf harus tegak lurus dengan memegang pensil posisi capit kepiting.',
          examples: [
            'Huruf Vokal: A, E, I, O, U (Contoh kata: Apel, Ibu, Udang, Ember, Obor)',
            'Huruf Konsonan: B, C, D, F, G (Contoh kata: Bola, Cangkir, Daun, Foto)',
            'Cara Tulis A: Tarik garis miring kiri, miring kanan, lalu sabuk horizontal di tengah.',
            'Cara Tulis I: Tarik garis lurus dari atas ke bawah, beri titik kecil di atas.'
          ],
          practicePrompt: 'Tuliskan 5 huruf vokal dengan rapi di bukumu dan sebutkan huruf depan namamu!',
          writingGuide: [
            'Pegang pensil dengan rileks menggunakan 3 jari (ibu jari, telunjuk, tengah)',
            'Gunakan garis tegak lurus dan jangan terlalu menekan kertas',
            'Beri jarak 1 jari antar kata agar mudah dibaca'
          ],
          miniQuiz: {
            question: 'Manakah di bawah ini yang semuanya merupakan huruf vokal?',
            options: ['A, E, I, O, U', 'B, C, D, F, G', 'A, B, C, D, E'],
            correctIndex: 0,
            explanation: 'Huruf vokal bahasa Indonesia terdiri dari 5 huruf: A, I, U, E, dan O.'
          }
        },
        {
          id: 'k1-c2',
          title: 'Bab 2: Suku Kata Terbuka & Tertutup',
          category: 'Membaca',
          content: 'Suku kata terbuka berakhir dengan huruf vokal (seperti BA, KU, MA, NI). Suku kata tertutup berakhir dengan huruf konsonan (seperti MAK, AN, LAP, DING, MUM). Kombinasi suku kata membentuk kata penuh!',
          examples: [
            'Pola Kata BUKU: BU (Terbuka) + KU (Terbuka) = Terbuka-Terbuka',
            'Pola Kata MAKAN: MA (Terbuka) + KAN (Tertutup) = Terbuka-Tertutup',
            'Suku Kata "MUM": Berakhir huruf M (konsonan) -> Suku kata tertutup',
            'Suku Kata "SE-KO-LAH": SE (Terbuka) + KO (Terbuka) + LAH (Tertutup)'
          ],
          practicePrompt: 'Urai suku kata dari kata "SEKOLAH" dan tentukan jenis masing-masing suku katanya!',
          miniQuiz: {
            question: 'Suku kata "LAP" pada kata "BALAP" termasuk jenis suku kata apa?',
            options: ['Suku kata tertutup (berakhir konsonan P)', 'Suku kata terbuka', 'Huruf Vokal'],
            correctIndex: 0,
            explanation: 'Suku kata LAP berakhir dengan huruf konsonan P, sehingga merupakan suku kata tertutup.'
          }
        },
        {
          id: 'k1-c3',
          title: 'Bab 3: Kata Benda, Kata Kerja & Imbuhan Dasar',
          category: 'Menulis',
          content: 'Kata Benda menunjukkan nama barang, hewan, atau tempat (contoh: Meja, Kucing, Rumah). Kata Kerja menunjukkan tindakan atau kegiatan (contoh: Makan, Lari, Baca). Awalan me- dan ber- merubah kata dasar menjadi kata kerja berimbuhan.',
          examples: [
            'Kata Benda: Meja, Buku, Tas, Pensil, Rumah, Sekolah',
            'Kata Kerja Dasar: Makan, Minum, Lari, Tidur, Baca, Tulis',
            'Awalan me- + tulis = Menulis',
            'Awalan ber- + main = Bermain'
          ],
          practicePrompt: 'Tuliskan 1 kalimat yang memuat 1 kata benda dan 1 kata kerja berimbuhan (contoh: "Budi membaca buku").',
          writingGuide: [
            'Awali kalimat dengan huruf kapital',
            'Gunakan kata berimbuhan me- atau ber- untuk menyatakan kegiatan'
          ],
          miniQuiz: {
            question: 'Manakah kelompok kata yang semuanya merupakan KATA BENDA?',
            options: ['Pensil, Meja, Buku', 'Makan, Lari, Tidur', 'Menulis, Bermain, Membaca'],
            correctIndex: 0,
            explanation: 'Pensil, meja, dan buku adalah nama benda nyata.'
          }
        },
        {
          id: 'k1-c4',
          title: 'Bab 4: Tanda Baca Titik (.), Tanya (?) & Seru (!)',
          category: 'Menulis',
          content: 'Tanda titik (.) dipasang di akhir kalimat berita. Tanda tanya (?) dipasang di akhir kalimat pertanyaan. Tanda seru (!) dipasang di akhir kalimat perintah atau ajakan yang tegas.',
          examples: [
            'Kalimat Berita: "Budi membaca buku di perpustakaan."',
            'Kalimat Tanya: "Siapa namamu?"',
            'Kalimat Perintah: "Buka pintunya sekarang!"'
          ],
          practicePrompt: 'Tuliskan 1 contoh kalimat berita dan 1 kalimat tanya dengan tanda baca yang benar!',
          miniQuiz: {
            question: 'Tanda baca apakah yang tepat untuk kalimat: "Di mana rumahmu ..."',
            options: ['Tanda Tanya (?)', 'Tanda Titik (.)', 'Tanda Seru (!)'],
            correctIndex: 0,
            explanation: 'Kalimat pertanyaan wajib menggunakan tanda tanya (?).'
          }
        },
        {
          id: 'k1-c5',
          title: 'Bab 5: Antonim, Sinonim & Kata Dwipurwa',
          category: 'Membaca',
          content: 'Antonim adalah lawan kata (Tinggi >< Rendah, Besar >< Kecil). Sinonim adalah persamaan kata (Gembira = Senang, Pintar = Cerdas). Dwipurwa adalah pengulangan suku kata pertama dari kata dasar seperti ma-ma, pa-pa, bo-bo.',
          examples: [
            'Antonim: Tinggi >< Rendah, Terang >< Gelap, Banyak >< Sedikit',
            'Sinonim: Gembira = Senang, Cerdas = Pintar, Indah = Elok',
            'Dwipurwa: Ma-ma, Pa-pa, Leluhur (dari luhur), Dedaunan (dari daun)'
          ],
          practicePrompt: 'Tuliskan lawan kata dari: "Tinggi", "Terang", dan "Besar"!',
          miniQuiz: {
            question: 'Manakah di bawah ini yang merupakan contoh kata Dwipurwa?',
            options: ['Ma-ma', 'Berlari', 'Rumah-rumah'],
            correctIndex: 0,
            explanation: 'Ma-ma merupakan contoh kata dwipurwa yaitu pengulangan suku kata pertama.'
          }
        }
      ]
    },
    {
      id: 'k1-hitung-1',
      title: 'Panduan Matematika Cilik 1-20',
      coverColor: '#0284c7',
      accentColor: '#38bdf8',
      icon: '🔢',
      subtitle: 'Trik Nilai Tempat & Berhitung Cepat',
      description: 'Langkah mudah memahami nilai tempat puluhan/satuan, penjumlahan, pengurangan, dan mengenal bangun datar.',
      chapters: [
        {
          id: 'k1-m1',
          title: 'Bab 1: Nilai Tempat Puluhan & Satuan',
          category: 'Menghitung',
          content: 'Setiap bilangan dua angka terdiri dari Puluhan (sebelah kiri) dan Satuan (sebelah kanan). Angka 17 artinya 1 Puluhan (10) dan 7 Satuan.',
          examples: [
            '15 = 1 Puluhan + 5 Satuan',
            '17 = 1 Puluhan + 7 Satuan',
            '20 = 2 Puluhan + 0 Satuan',
            'Membandingkan: 8 lebih sedikit dari 12'
          ],
          practicePrompt: 'Tuliskan uraian nilai tempat dari angka 19 dan 14!',
          miniQuiz: {
            question: 'Angka 18 terdiri dari berapa Puluhan dan Satuan?',
            options: ['1 Puluhan + 8 Satuan', '8 Puluhan + 1 Satuan', '18 Puluhan'],
            correctIndex: 0,
            explanation: 'Angka 1 di depan adalah 1 Puluhan (10) dan 8 di belakang adalah 8 Satuan.'
          }
        },
        {
          id: 'k1-m2',
          title: 'Bab 2: Membandingkan & Mengurutkan Bilangan',
          category: 'Menghitung',
          content: 'Untuk membandingkan bilangan, lihat nilai puluhannya lalu satuannya. Gunakan kata "lebih banyak", "lebih sedikit", atau "sama dengan".',
          examples: [
            '8 buah apel lebih sedikit daripada 12 buah apel',
            '15 buah pensil lebih banyak daripada 9 buah pensil',
            'Urutan dari terkecil: 3, 6, 9, 12'
          ],
          practicePrompt: 'Urutkan bilangan berikut dari yang terkecil: 14, 5, 11, 8!',
          miniQuiz: {
            question: 'Manakah urutan bilangan dari TERKECIL yang tepat?',
            options: ['3, 6, 9, 12', '12, 9, 6, 3', '3, 9, 6, 12'],
            correctIndex: 0,
            explanation: '3, 6, 9, 12 adalah urutan naik dari angka terkecil ke terbesar.'
          }
        },
        {
          id: 'k1-m3',
          title: 'Bab 3: Penjumlahan & Pengurangan 1-20',
          category: 'Menghitung',
          content: 'Penjumlahan adalah menggabungkan kelompok benda menjadi lebih banyak. Pengurangan adalah mengambil sebagian benda sehingga jumlahnya berkurang.',
          examples: [
            '3 Apel + 2 Apel = 5 Apel',
            'Trik Ingat Angka Besar: Simpan 7 di mulut, buka 3 jari -> 8, 9, 10!',
            '15 - 6 = 9',
            '10 + 5 - 3 = 12 (hitung dari kiri ke kanan)'
          ],
          practicePrompt: 'Selesaikan soal ini di buku latihanmu: 8 + 5 = ... dan 15 - 6 = ...',
          miniQuiz: {
            question: 'Berapakah hasil dari 10 + 5 - 3?',
            options: ['12', '15', '10'],
            correctIndex: 0,
            explanation: '10 + 5 = 15, kemudian 15 - 3 = 12.'
          }
        },
        {
          id: 'k1-m4',
          title: 'Bab 4: Soal Cerita Penjumlahan & Pengurangan',
          category: 'Menghitung',
          content: 'Dalam soal cerita, perhatikan kata kuncinya. "Dibeli lagi", "diberi", "bertambah" berarti penjumlahan. "Dimakan", "pecah", "hilang" berarti pengurangan.',
          examples: [
            'Ani punya 7 permen, dibelikan ibu 5 permen lagi -> 7 + 5 = 12 permen',
            'Budi punya 15 balon, pecah 4 balon -> 15 - 4 = 11 balon'
          ],
          practicePrompt: 'Kiki memiliki 8 buku, lalu mendapatkan hadiah 6 buku lagi. Berapa jumlah buku Kiki sekarang?',
          miniQuiz: {
            question: 'Siti punya 12 kue, dimakan 4 kue oleh adiknya. Sisa kue Siti adalah...',
            options: ['8 kue', '16 kue', '10 kue'],
            correctIndex: 0,
            explanation: '12 - 4 = 8 kue.'
          }
        },
        {
          id: 'k1-m5',
          title: 'Bab 5: Bangun Datar, Bangun Ruang & Loncat Bilangan',
          category: 'Menghitung',
          content: 'Segitiga memiliki 3 sisi, persegi memiliki 4 sisi sama panjang. Benda berbentuk bola contohnya kelereng. Pola loncat 2 menambahkan 2 angka setiap langkah.',
          examples: [
            'Bangun Datar 3 Sisi = Segitiga',
            'Bangun Ruang Bulat = Bola (Kelereng, Bola Basket)',
            'Pola Loncat 2: 2, 4, 6, 8, 10'
          ],
          practicePrompt: 'Sebutkan 3 benda di rumahmu yang berbentuk bola atau tabung!',
          miniQuiz: {
            question: 'Lanjutkan pola loncat 2 berikut: 2, 4, 6, ..., 10',
            options: ['8', '7', '9'],
            correctIndex: 0,
            explanation: '6 + 2 = 8.'
          }
        }
      ]
    }
  ],
  'Kelas 2': [
    {
      id: 'k2-menulis-1',
      title: 'Buku Ejaan, Huruf Kapital & Kalimat Efektif',
      coverColor: '#059669',
      accentColor: '#34d399',
      icon: '📝',
      subtitle: 'Kaidah Penulisan Rapi & Tanda Baca',
      description: 'Pedoman lengkap penggunaan huruf kapital, tanda koma, awalan pe-/di-, serta sinonim dan kata sifat.',
      chapters: [
        {
          id: 'k2-c1',
          title: 'Bab 1: Struktur Kalimat S-P-O (Subjek, Predikat, Objek)',
          category: 'Menulis',
          content: 'Kalimat yang baik terdiri dari Subjek (S: pelaku), Predikat (P: kegiatan/kata kerja), dan Objek (O: yang dikenai tindakan). Contoh: "Ibu (S) memasak (P) nasi (O)".',
          examples: [
            'Ibu (Subjek) + memasak (Predikat) + nasi (Objek)',
            'Budi (Subjek) + membaca (Predikat) + buku (Objek)',
            'Ayah (Subjek) + membaca (Predikat) + koran (Objek)'
          ],
          practicePrompt: 'Tuliskan 1 kalimat S-P-O lengkap tentang kegiatanmu di sekolah!',
          writingGuide: [
            'Pastikan ada pelaku (Subjek) di awal kalimat',
            'Gunakan kata kerja aktif sebagai Predikat',
            'Sebutkan benda/hal yang dikerjakan sebagai Objek'
          ],
          miniQuiz: {
            question: 'Manakah yang merupakan Objek dalam kalimat: "Ayah membaca koran"?',
            options: ['koran', 'Ayah', 'membaca'],
            correctIndex: 0,
            explanation: 'Koran adalah Objek karena merupakan benda yang dibaca oleh Ayah.'
          }
        },
        {
          id: 'k2-c2',
          title: 'Bab 2: Aturan Penggunaan Huruf Kapital',
          category: 'Menulis',
          content: 'Huruf Kapital (Huruf Besar) WAJIB digunakan pada: (1) Awal kalimat, (2) Nama orang, (3) Nama hari, bulan, kota, dan agama. Jangan pernah memakai huruf kapital di tengah kata biasa!',
          examples: [
            'Awal Kalimat: "Hari ini hujan turun deras."',
            'Nama Orang & Tempat: "Budi dan Siti tinggal di Bandung."',
            'Nama Hari & Bulan: "Pada hari Senin di bulan Agustus."'
          ],
          practicePrompt: 'Perbaiki tulisan ini: "pada hari minggu budi pergi ke kota jakarta bersama siti."',
          miniQuiz: {
            question: 'Manakah penulisan kalimat yang BENAR sesuai kaidah huruf kapital?',
            options: [
              'Budi dan Siti pergi ke Surabaya.',
              'budi dan siti pergi ke surabaya.',
              'Budi Dan Siti Pergi Ke surabaya.'
            ],
            correctIndex: 0,
            explanation: 'Awal kalimat, nama orang (Budi, Siti), dan nama kota (Surabaya) harus diawali huruf kapital.'
          }
        },
        {
          id: 'k2-c3',
          title: 'Bab 3: Penggunaan Koma (,) & Awalan pe- / di-',
          category: 'Menulis',
          content: 'Tanda koma (,) dipakai untuk memisahkan unsur rincian dalam kalimat. Awalan pe- membentuk kata pelaku (pe + lari = pelari). Perhatikan perbedaan "di" kata depan tempat (dipisah: di rumah) dan "di" awalan (digabung: ditulis).',
          examples: [
            'Rincian Koma: "Siti membeli apel, jeruk, dan pisang."',
            'Awalan pe-: pe + lari = pelari, pe + lukis = pelukis, pe + nyanyi = penyanyi',
            'Kata Depan "di" (dipisah tempat): di sekolah, di pasar, di rumah',
            'Awalan "di" (digabung kata kerja): dibaca, ditulis, dimakan'
          ],
          practicePrompt: 'Tuliskan 1 kalimat rincian nama buah favoritmu memakai tanda koma (,)!',
          miniQuiz: {
            question: 'Manakah penulisan kata depan tempat "di" yang BENAR?',
            options: ['di sekolah', 'disekolah', 'di-sekolah'],
            correctIndex: 0,
            explanation: 'Kata depan "di" yang menunjukkan lokasi tempat harus ditulis DIPISAH.'
          }
        },
        {
          id: 'k2-c4',
          title: 'Bab 4: Kata Sifat & Ungkapan Bahasa',
          category: 'Membaca',
          content: 'Kata Sifat menerangkan kondisi atau keadaan suatu benda (contoh: Bersih, Cerdas, Tinggi, Harum). Ungkapan adalah gabungan kata yang memiliki arti khusus, seperti "Panjang tangan" (suka mencuri) atau "Buah hati" (anak kesayangan).',
          examples: [
            'Kata Sifat: Kelas yang bersih, Anak yang cerdas, Bunga yang harum',
            'Ungkapan "Buah hati" = Anak kesayangan',
            'Ungkapan "Kutu buku" = Orang yang suka membaca buku'
          ],
          practicePrompt: 'Buatlah kalimat menggunakan kata sifat "bersih" dan "rapi"!',
          miniQuiz: {
            question: 'Apakah arti dari ungkapan "Kutu buku"?',
            options: ['Orang yang sangat suka membaca', 'Serangga di dalam buku', 'Orang yang malas'],
            correctIndex: 0,
            explanation: 'Ungkapan kutu buku mengkiaskan seseorang yang gemar membaca buku.'
          }
        }
      ]
    },
    {
      id: 'k2-hitung-1',
      title: 'Buku Rahasia Perkalian & Pengukuran',
      coverColor: '#d97706',
      accentColor: '#fbbf24',
      icon: '✖️',
      subtitle: 'Penjumlahan Berulang, Pembagian & Jam',
      description: 'Konsep dasar perkalian, pembagian tanpa sisa, konversi meter-centimeter, dan membaca waktu jam.',
      chapters: [
        {
          id: 'k2-m1',
          title: 'Bab 1: Perkalian Sebagai Penjumlahan Berulang',
          category: 'Menghitung',
          content: 'Perkalian a x b berarti penjumlahan bilangan b sebanyak a kali. Contoh: 3 x 4 artinya 4 + 4 + 4 = 12.',
          examples: [
            '3 x 4 = 4 + 4 + 4 = 12',
            '5 x 2 = 2 + 2 + 2 + 2 + 2 = 10',
            'Angka dikali 1 hasilnya tetap: 7 x 1 = 7',
            'Angka dikali 0 hasilnya nol: 9 x 0 = 0'
          ],
          practicePrompt: 'Ubah perkalian 4 x 5 menjadi bentuk penjumlahan berulang dan hitung hasilnya!',
          miniQuiz: {
            question: 'Bentuk penjumlahan berulang dari 3 x 6 adalah...',
            options: ['6 + 6 + 6', '3 + 3 + 3 + 3 + 3 + 3', '3 + 6'],
            correctIndex: 0,
            explanation: '3 x 6 artinya penjumlahan angka 6 sebanyak 3 kali.'
          }
        },
        {
          id: 'k2-m2',
          title: 'Bab 2: Pembagian Sebagai Pengurangan Berulang',
          category: 'Menghitung',
          content: 'Pembagian a : b dilakukan dengan mengurangi a dengan b secara berulang sampai habis (hasil 0). Jumlah pengurangan b tersebut adalah jawabannya!',
          examples: [
            '12 : 4 -> 12 - 4 - 4 - 4 = 0 (ada 3 kali pengurangan) -> 12 : 4 = 3',
            '10 : 2 -> 10 - 2 - 2 - 2 - 2 - 2 = 0 (5 kali) -> 10 : 2 = 5'
          ],
          practicePrompt: 'Hitunglah 15 : 3 menggunakan metode pengurangan berulang!',
          miniQuiz: {
            question: 'Hasil dari 12 : 4 adalah...',
            options: ['3', '4', '2'],
            correctIndex: 0,
            explanation: '12 - 4 - 4 - 4 = 0, pengurangan dilakukan sebanyak 3 kali.'
          }
        },
        {
          id: 'k2-m3',
          title: 'Bab 3: Pengukuran Panjang, Berat & Waktu',
          category: 'Menghitung',
          content: 'Satuan panjang standar adalah meter (m) dan centimeter (cm). 1 meter = 100 cm. Satuan berat adalah kilogram (kg) dan gram. 1 kg = 1000 gram. 1 Jam = 60 menit.',
          examples: [
            '2 meter = 200 cm',
            '300 cm = 3 meter',
            '1 kg = 1000 gram',
            'Jarum pendek di angka 3, jarum panjang di angka 12 = Jam 03.00'
          ],
          practicePrompt: 'Jika papan tulis panjangnya 200 cm, berapa meter panjang papan tulis tersebut?',
          miniQuiz: {
            question: '2 meter sama dengan berapa centimeter?',
            options: ['200 cm', '20 cm', '2000 cm'],
            correctIndex: 0,
            explanation: '1 meter = 100 cm, maka 2 meter = 2 x 100 = 200 cm.'
          }
        },
        {
          id: 'k2-m4',
          title: 'Bab 4: Bangun Datar, Sisi, Sudut & Titik Sudut',
          category: 'Menghitung',
          content: 'Setiap bangun datar memiliki Sisi (garis tepi), Sudut (ruang antara dua garis), dan Titik Sudut (titik pertemuan dua garis). Persegi dan persegi panjang memiliki 4 sisi, 4 sudut, dan 4 titik sudut.',
          examples: [
            'Persegi: 4 sisi sama panjang, 4 sudut siku-siku, 4 titik sudut',
            'Segitiga: 3 sisi, 3 sudut, 3 titik sudut',
            'Lingkaran: 1 sisi melengkung, 0 sudut'
          ],
          practicePrompt: 'Gambarlah sebuah segitiga di buku catatanmu dan beri tanda pada 3 titik sudutnya!',
          miniQuiz: {
            question: 'Berapakah jumlah titik sudut pada bangun persegi?',
            options: ['4 titik sudut', '3 titik sudut', '6 titik sudut'],
            correctIndex: 0,
            explanation: 'Persegi memiliki 4 titik sudut di setiap pojoknya.'
          }
        }
      ]
    }
  ],
  'Kelas 3': [
    {
      id: 'k3-menulis-1',
      title: 'Seni Menyusun Paragraf & Kata Ulang',
      coverColor: '#7c3aed',
      accentColor: '#a78bfa',
      icon: '📚',
      subtitle: 'Gagasan Utama, Kata Ulang & Tanda Baca',
      description: 'Panduan lengkap menemukan gagasan utama, menulis kata ulang, serta memasang titik dua (:) dan tanda petik ("...").',
      chapters: [
        {
          id: 'k3-c1',
          title: 'Bab 1: Gagasan Utama & Kalimat Penjelas',
          category: 'Menulis',
          content: 'Setiap paragraf memiliki 1 Ide Pokok / Gagasan Utama yang terdapat pada Kalimat Utama. Kalimat-kalimat lainnya disebut Kalimat Penjelas / Pendukung yang bertugas memberi rincian.',
          examples: [
            'Kalimat Utama (Awal): "Kucing adalah hewan peliharaan yang sangat bersih."',
            'Kalimat Penjelas: "Setiap hari kucing menjilat bulunya. Kucing juga selalu buang air di tempat pasir khusus."',
            'Paragraf Deduktif: Gagasan utama berada di awal paragraf'
          ],
          practicePrompt: 'Tuliskan 1 paragraf dengan kalimat utama di awal tentang keindahan kebun bunga!',
          writingGuide: [
            'Awali paragraf dengan takuk / garis agak menjorok ke dalam',
            'Pastikan semua kalimat penjelas mendukung 1 topik utama saja'
          ],
          miniQuiz: {
            question: 'Dimanakah letak ide pokok pada paragraf deduktif?',
            options: ['Di awal paragraf', 'Di akhir paragraf', 'Di tengah paragraf'],
            correctIndex: 0,
            explanation: 'Paragraf deduktif memiliki ide pokok yang terletak pada awal paragraf.'
          }
        },
        {
          id: 'k3-c2',
          title: 'Bab 2: Tanda Petik ("...") & Titik Dua (:)',
          category: 'Menulis',
          content: 'Tanda petik ("...") digunakan untuk mengapit petikan langsung dari pembicaraan seseorang. Tanda titik dua (:) digunakan setelah kata yang menunjukkan perincian.',
          examples: [
            'Kalimat Langsung: Ibu berkata, "Jangan lupa cuci tangan sebelum makan!"',
            'Titik Dua Rincian: Bahan yang diperlukan: tepung, gula, dan telur.'
          ],
          practicePrompt: 'Tuliskan kalimat percakapan antara guru dan murid menggunakan tanda petik yang benar!',
          miniQuiz: {
            question: 'Manakah penulisan percakapan langsung yang BENAR?',
            options: [
              'Ibu berkata, "Ayo kita belajar bersama!"',
              'Ibu berkata Ayo kita belajar bersama!',
              'Ibu berkata: Ayo kita belajar bersama.'
            ],
            correctIndex: 0,
            explanation: 'Kalimat percakapan langsung wajib diapit tanda petik ganda ("...").'
          }
        },
        {
          id: 'k3-c3',
          title: 'Bab 3: Kata Ulang Utuh & Berimbuhan',
          category: 'Membaca',
          content: 'Kata Ulang Murni/Utuh adalah pengulangan seluruh kata dasar (contoh: Anak-anak, Rumah-rumah). Kata Ulang Berimbuhan mendapat awalan/akhiran (contoh: Berlari-lari, Bermain-main).',
          examples: [
            'Kata Ulang Utuh: Anak-anak, Buku-buku, Pohon-pohon',
            'Kata Ulang Berimbuhan: Lari -> Berlari-lari, Jalan -> Berjalan-jalan',
            'Kata Ulang Berubah Bunyi: Sayur-mayur, Lauk-pauk'
          ],
          practicePrompt: 'Buatlah 2 kalimat menggunakan kata ulang "anak-anak" dan "berlari-lari"!',
          miniQuiz: {
            question: 'Kata "buku-buku" merupakan contoh jenis kata ulang apa?',
            options: ['Kata ulang utuh/murni', 'Kata ulang berubah bunyi', 'Kata ulang berimbuhan'],
            correctIndex: 0,
            explanation: 'Buku-buku mengulang seluruh kata dasar buku tanpa perubahan bunyi atau imbuhan.'
          }
        },
        {
          id: 'k3-c4',
          title: 'Bab 4: Menulis Cerita Dongeng & Karangan',
          category: 'Menulis',
          content: 'Dongeng memiliki struktur Tokoh (pelaku), Latar Tempat & Waktu, Alur Cerita (Awal, Konflik, Akhir), dan Amanat (pesan kebaikan).',
          examples: [
            'Tokoh: Kancil yang cerdik dan Buaya yang loba',
            'Amanat: Kita harus menggunakan akal cerdas untuk hal baik dan tidak sombong'
          ],
          practicePrompt: 'Tuliskan 3 baris cerita dongeng kesukaanmu beserta amanat yang terkandung!',
          miniQuiz: {
            question: 'Pesan moral atau kebaikan yang ingin disampaikan penulis dalam dongeng disebut...',
            options: ['Amanat', 'Latar', 'Alur'],
            correctIndex: 0,
            explanation: 'Amanat adalah pesan moral/kebaikan yang dipetik dari cerita.'
          }
        }
      ]
    },
    {
      id: 'k3-hitung-1',
      title: 'Master Pecahan, Sudut & Bangun Datar',
      coverColor: '#2563eb',
      accentColor: '#60a5fa',
      icon: '🍕',
      subtitle: 'Pecahan 1/2, 1/4, Sudut & Keliling',
      description: 'Memahami pecahan pembilang/penyebut, jenis sudut (lancip, siku-siku, tumpul), serta rumus keliling bangun datar.',
      chapters: [
        {
          id: 'k3-m1',
          title: 'Bab 1: Pembilang, Penyebut & Pecahan Sederhana',
          category: 'Menghitung',
          content: 'Pecahan ditulis a/b. Angka atas (a) adalah Pembilang (bagian yang diarsir/diambil). Angka bawah (b) adalah Penyebut (total seluruh potongan sama besar).',
          examples: [
            '1/2 = 1 roti dipotong 2 bagian sama besar.',
            '3/4 = 3 dari 4 potong pizza (Pembilang = 3, Penyebut = 4).',
            'Pecahan Senilai: 1/2 senilai dengan 2/4'
          ],
          practicePrompt: 'Jika kue dipotong menjadi 8 bagian dan dimakan 3 bagian, berapa pecahan bagian yang dimakan?',
          miniQuiz: {
            question: 'Pada pecahan 3/5, angka 3 dinamakan...',
            options: ['Pembilang', 'Penyebut', 'Hasil bagi'],
            correctIndex: 0,
            explanation: 'Angka di atas garis pecahan adalah Pembilang.'
          }
        },
        {
          id: 'k3-m2',
          title: 'Bab 2: Jenis Sudut & Pengukurannya',
          category: 'Menghitung',
          content: 'Sudut terbentuk dari perpotongan dua garis lurus. Jenis Sudut: (1) Sudut Lancip (< 90°), (2) Sudut Siku-Siku (= 90°), (3) Sudut Tumpul (> 90°). Busur derajat digunakan untuk mengukur sudut.',
          examples: [
            'Sudut Pojok Meja / Buku = Sudut Siku-siku (90°)',
            'Sudut Atap Rumah / Jam 4 = Sudut Tumpul',
            'Sudut Jarum Jam 1 = Sudut Lancip'
          ],
          practicePrompt: 'Sebutkan jenis sudut yang dibentuk oleh jarum jam pada pukul 03.00!',
          miniQuiz: {
            question: 'Sudut yang besarnya tepat 90 derajat dinamakan...',
            options: ['Sudut Siku-siku', 'Sudut Lancip', 'Sudut Tumpul'],
            correctIndex: 0,
            explanation: 'Sudut siku-siku memiliki besar tepat 90°.'
          }
        },
        {
          id: 'k3-m3',
          title: 'Bab 3: Keliling & Luas Bangun Datar',
          category: 'Menghitung',
          content: 'Keliling adalah jumlah panjang seluruh sisi terluar. Keliling Persegi = 4 x sisi. Keliling Persegi Panjang = 2 x (panjang + lebar). Luas Persegi = s x s. Luas Persegi Panjang = p x l.',
          examples: [
            'Keliling Persegi sisi 5 cm = 4 x 5 cm = 20 cm',
            'Luas Persegi sisi 5 cm = 5 x 5 = 25 cm²',
            'Keliling Persegi Panjang (p=8, l=4) = 2 x (8 + 4) = 24 cm'
          ],
          practicePrompt: 'Hitung keliling lapangan berbentuk persegi panjang dengan panjang 10 m dan lebar 5 m!',
          miniQuiz: {
            question: 'Berapa keliling persegi yang memiliki panjang sisi 6 cm?',
            options: ['24 cm', '36 cm', '12 cm'],
            correctIndex: 0,
            explanation: 'Keliling persegi = 4 x sisi = 4 x 6 cm = 24 cm.'
          }
        },
        {
          id: 'k3-m4',
          title: 'Bab 4: Pengolahan Data & Tabel Turus',
          category: 'Menghitung',
          content: 'Data adalah kumpulan informasi yang diperoleh dari pencatatan atau wawancara. Turus (tally) menggunakan garis tegak (| | | | 𝌇) untuk mempermudah menghitung jumlah data.',
          examples: [
            'Turus |||| 𝌇 melambangkan jumlah 5',
            'Membaca Data: Buah favorit siswa (Apel: 8 orang, Jeruk: 5 orang)'
          ],
          practicePrompt: 'Buatlah tabel turus sederhana untuk mencatat 7 orang penyuka warna biru!',
          miniQuiz: {
            question: 'Satu kelompok garis turus dengan 4 garis tegak dan 1 garis miring melambangkan angka...',
            options: ['5', '4', '6'],
            correctIndex: 0,
            explanation: 'Garis turus terikat melambangkan 5 data.'
          }
        }
      ]
    }
  ],
  'Kelas 4': [
    {
      id: 'k4-menulis-1',
      title: 'Panduan Paragraf Deduktif, Induktif & Majas',
      coverColor: '#0d9488',
      accentColor: '#2dd4bf',
      icon: '🖋️',
      subtitle: 'Jenis Paragraf, EYD & Gaya Bahasa',
      description: 'Memahami letak ide pokok (Deduktif/Induktif), penulisan kata depan di/ke, majas personifikasi, dan laporan observasi.',
      chapters: [
        {
          id: 'k4-c1',
          title: 'Bab 1: Paragraf Deduktif vs Induktif',
          category: 'Menulis',
          content: 'Paragraf DEDUKTIF meletakkan ide pokok di AWAL paragraf. Paragraf INDUKTIF meletakkan ide pokok di AKHIR paragraf sebagai kesimpulan.',
          examples: [
            'Deduktif (Ide di awal): "Hutan memiliki banyak manfaat bagi bumi. Hutan menghasilkan oksigen dan mencegah banjir..."',
            'Induktif (Ide di akhir): "Akar pohon menyerap air, daunnya menyaring udara. Oleh sebab itu, hutan adalah paru-paru dunia."',
            'Majas Personifikasi (benda mati beraksi seperti manusia): "Nyiur melambai-lambai di tepi pantai."',
            'Kata depan "di" dipisah untuk tempat: di sekolah, di rumah, ke pasar'
          ],
          practicePrompt: 'Tuliskan 1 contoh paragraf deduktif bertema pentingnya sarapan pagi!',
          writingGuide: [
            'Sajikan bukti / contoh konkret pada kalimat pendukung',
            'Gunakan konjungsi antarkalimat seperti "Oleh karena itu", "Selain itu"'
          ],
          miniQuiz: {
            question: 'Paragraf yang ide pokoknya terletak di AKHIR dinamakan paragraf...',
            options: ['Induktif', 'Deduktif', 'Campuran'],
            correctIndex: 0,
            explanation: 'Paragraf Induktif meletakkan gagasan utama pada akhir paragraf.'
          }
        },
        {
          id: 'k4-c2',
          title: 'Bab 2: Majas Personifikasi & Hiperbola',
          category: 'Menulis',
          content: 'Majas adalah gaya bahasa kiasan. Majas Personifikasi menganggap benda mati dapat beraksi seperti manusia (contoh: "Angin membisikkan pesan"). Majas Hiperbola mengungkapkan sesuatu secara berlebihan (contoh: "Suaranya menggelegar membelah angkasa").',
          examples: [
            'Personifikasi: "Pena itu menari-nari di atas kertas putih."',
            'Hiperbola: "Dono menangis hingga menguras air mata seember."'
          ],
          practicePrompt: 'Buatlah 1 contoh kalimat majas personifikasi tentang sang surya atau ombak laut!',
          miniQuiz: {
            question: 'Kalimat "Ombak berkejaran di tepi pantai" menggunakan majas...',
            options: ['Personifikasi', 'Hiperbola', 'Metafora'],
            correctIndex: 0,
            explanation: 'Ombak (benda mati) dikatakan berkejaran seperti manusia, sehingga merupakan majas Personifikasi.'
          }
        },
        {
          id: 'k4-c3',
          title: 'Bab 3: Penulisan Kata Depan & Imbuhan Kompleks',
          category: 'Menulis',
          content: 'Kata depan (di, ke, dari) yang menunjukkan tempat HARUS ditulis dipisah dari kata setelahnya (contoh: di sekolah, ke kota, dari rumah). Imbuhan pe-an dan me-kan membentuk kata benda dan kata kerja transitif.',
          examples: [
            'Kata depan tempat: di laboratorium, ke museum, dari Bandung',
            'Imbuhan me-kan: me + bersihkan = membersihkan',
            'Imbuhan pe-an: pe + permukiman = pemukiman / permukiman'
          ],
          practicePrompt: 'Perbaiki kalimat berikut: "Budi pergi kesekolah lalu makan diwarung."',
          miniQuiz: {
            question: 'Manakah penulisan kata depan yang BENAR?',
            options: ['ke sekolah', 'kesekolah', 'ke-sekolah'],
            correctIndex: 0,
            explanation: 'Kata depan "ke" yang menunjukkan tujuan tempat wajib ditulis dipisah.'
          }
        }
      ]
    },
    {
      id: 'k4-hitung-1',
      title: 'Matematika Kelas 4: Pecahan, FPB & KPK',
      coverColor: '#0284c7',
      accentColor: '#38bdf8',
      icon: '📊',
      subtitle: 'Pecahan Senilai, Faktor & Kelipatan',
      description: 'Langkah menentukan pecahan desimal, FPB (Faktor Persekutuan Terbesar), KPK (Kelipatan Persekutuan Terkecil), dan diagram batang.',
      chapters: [
        {
          id: 'k4-m1',
          title: 'Bab 1: FPB & KPK dengan Pohon Faktor',
          category: 'Menghitung',
          content: 'KPK (Kelipatan Persekutuan Terkecil) digunakan untuk menghitung jadwal pertemuan berulang. FPB (Faktor Persekutuan Terbesar) digunakan untuk membagi benda ke beberapa wadah secara adil.',
          examples: [
            'KPK dari 4 dan 6: Kelipatan 4 (4,8,12,16), Kelipatan 6 (6,12,18). KPK = 12',
            'FPB dari 12 dan 18: Faktor 12 (1,2,3,4,6,12), Faktor 18 (1,2,3,6,9,18). FPB = 6',
            'Pecahan Desimal: 1/2 = 0,5 | 1/4 = 0,25 | 3/4 = 0,75'
          ],
          practicePrompt: 'Budi berenang setiap 3 hari dan Ani setiap 4 hari. Hari ke berapa mereka berenang bersama?',
          miniQuiz: {
            question: 'KPK dari 4 dan 6 adalah...',
            options: ['12', '24', '18'],
            correctIndex: 0,
            explanation: 'Kelipatan terkecil yang sama dari 4 dan 6 adalah 12.'
          }
        },
        {
          id: 'k4-m2',
          title: 'Bab 2: Desimal & Persen',
          category: 'Menghitung',
          content: 'Pecahan biasa dapat diubah ke pecahan desimal (bertanda koma) atau persen (per seratus). 1/2 = 0,5 = 50%. 1/4 = 0,25 = 25%. 3/4 = 0,75 = 75%.',
          examples: [
            '1/2 = 5/10 = 0,5 = 50%',
            '3/4 = 75/100 = 0,75 = 75%',
            'Penjumlahan Desimal: 0,5 + 0,25 = 0,75'
          ],
          practicePrompt: 'Ubah pecahan 3/5 menjadi bentuk persen dan desimal!',
          miniQuiz: {
            question: 'Pecahan 1/4 jika diubah ke bentuk desimal menjadi...',
            options: ['0,25', '0,5', '0,75'],
            correctIndex: 0,
            explanation: '1 dibagi 4 = 0,25.'
          }
        }
      ]
    }
  ],
  'Kelas 5': [
    {
      id: 'k5-menulis-1',
      title: 'Menulis Teks Eksplanasi, Pantun & Surat Resmi',
      coverColor: '#c026d3',
      accentColor: '#e879f9',
      icon: '✉️',
      subtitle: 'Format Surat, Pantun & Teks Ilmiah',
      description: 'Kaidah lengkap penulisan pantun bersajak a-b-a-b, teks eksplanasi sebab-akibat, dan bagian surat dinas resmi.',
      chapters: [
        {
          id: 'k5-c1',
          title: 'Bab 1: Struktur Pantun Nasihat & Rima A-B-A-B',
          category: 'Menulis',
          content: 'Pantun terdiri atas 4 baris dalam 1 bait. Baris 1 & 2 adalah SAMPIRAN (pengantar bunyi). Baris 3 & 4 adalah ISI (pesan utama). Rima wajib berpola A-B-A-B.',
          examples: [
            'Baris 1: Jalan-jalan ke kota Blitar (a) -> Sampiran',
            'Baris 2: Jangan lupa membeli sukun (b) -> Sampiran',
            'Baris 3: Jika kamu ingin pintar (a) -> Isi',
            'Baris 4: Belajarlah dengan tekun (b) -> Isi'
          ],
          practicePrompt: 'Buatlah 1 bait pantun nasihat tentang rajin membaca buku dengan rima A-B-A-B!',
          miniQuiz: {
            question: 'Baris ke-3 dan ke-4 pada pantun merupakan...',
            options: ['Isi pantun', 'Sampiran', 'Judul'],
            correctIndex: 0,
            explanation: 'Baris 3 dan 4 mengandung pesan utama atau isi dari pantun.'
          }
        },
        {
          id: 'k5-c2',
          title: 'Bab 2: Struktur Surat Resmi & Kata Baku',
          category: 'Menulis',
          content: 'Surat Resmi/Dinas wajib memiliki Kop Surat, Nomor Surat, Perihal, Tanggal, Alamat Tujuan, Salam Pembuka, Isi Surat, Salam Penutup, serta Tanda Tangan dan Stempel. Bahasa yang digunakan harus baku sesuai PUEBI.',
          examples: [
            'Kop Surat: Nama Lembaga / Sekolah & Alamat Lengkap',
            'Kata Baku: Apotek (bukan apotik), Jadwal (bukan jadual), Nasihat (bukan nasehat)'
          ],
          practicePrompt: 'Sebutkan 5 bagian utama yang harus ada dalam kop surat resmi!',
          miniQuiz: {
            question: 'Manakah kata di bawah ini yang merupakan KATA BAKU sesuai PUEBI?',
            options: ['Apotek', 'Apotik', 'Apotekh'],
            correctIndex: 0,
            explanation: 'Bentuk baku menurut PUEBI/KBBI adalah Apotek.'
          }
        }
      ]
    },
    {
      id: 'k5-hitung-1',
      title: 'Matematika Kelas 5: Skala, Kecepatan & Volume',
      coverColor: '#2563eb',
      accentColor: '#60a5fa',
      icon: '🚀',
      subtitle: 'Rumus Kecepatan, Skala Peta & Kubus',
      description: 'Penghitungan Kecepatan = Jarak / Waktu, Skala Peta = Jarak Peta / Jarak Sebenarnya, dan Volume Bangun Ruang.',
      chapters: [
        {
          id: 'k5-m1',
          title: 'Bab 1: Rumus Kecepatan & Skala Peta',
          category: 'Menghitung',
          content: 'Kecepatan (K) = Jarak (J) / Waktu (W). Skala 1 : 100.000 artinya 1 cm pada peta mewakili 100.000 cm (1 km) pada jarak sebenarnya di lapangan.',
          examples: [
            'Jarak 120 km ditempuh 2 jam -> Kecepatan = 120 / 2 = 60 km/jam',
            'Skala 1 : 500.000 | Jarak Peta = 4 cm -> Jarak Asli = 4 x 500.000 cm = 2.000.000 cm = 20 km',
            'Volume Kubus = s x s x s = s³ | Volume Balok = p x l x t'
          ],
          practicePrompt: 'Jika bus melaju 50 km/jam selama 3 jam, berapa kilometer jarak yang ditempuh?',
          miniQuiz: {
            question: 'Berapakah kecepatan kendaraan yang menempuh jarak 100 km dalam waktu 2 jam?',
            options: ['50 km/jam', '200 km/jam', '102 km/jam'],
            correctIndex: 0,
            explanation: 'Kecepatan = Jarak / Waktu = 100 / 2 = 50 km/jam.'
          }
        },
        {
          id: 'k5-m2',
          title: 'Bab 2: Volume Kubus & Balok',
          category: 'Menghitung',
          content: 'Volume menyatakan besarnya ruangan yang dapat ditempati suatu bangun ruang. Volume Kubus = s x s x s. Volume Balok = panjang x lebar x tinggi.',
          examples: [
            'Kubus dengan sisi 4 cm -> Volume = 4 x 4 x 4 = 64 cm³',
            'Balok (p=10, l=5, t=4) -> Volume = 10 x 5 x 4 = 200 cm³'
          ],
          practicePrompt: 'Hitunglah volume akuarium berbentuk balok dengan panjang 50 cm, lebar 30 cm, dan tinggi 40 cm!',
          miniQuiz: {
            question: 'Berapa volume kubus yang memiliki panjang rusuk 5 cm?',
            options: ['125 cm³', '25 cm³', '150 cm³'],
            correctIndex: 0,
            explanation: 'Volume kubus = 5 x 5 x 5 = 125 cm³.'
          }
        }
      ]
    }
  ],
  'Kelas 6': [
    {
      id: 'k6-menulis-1',
      title: 'Mahir Menulis Pidato, Argumentasi & PUEBI',
      coverColor: '#475569',
      accentColor: '#94a3b8',
      icon: '📜',
      subtitle: 'Naskah Pidato, Teks Argumentasi & Esai',
      description: 'Struktur naskah pidato perpisahan, tata cara debat argumentatif, dan penyuntingan kalimat efektif PUEBI/EYD.',
      chapters: [
        {
          id: 'k6-c1',
          title: 'Bab 1: Bagian-Bagian Naskah Pidato',
          category: 'Menulis',
          content: 'Naskah pidato yang lengkap harus memiliki 5 struktur utama: (1) Salam Pembuka, (2) Pendahuluan/Ungkapan Syukur, (3) Isi/Pesan Utama Pidato, (4) Penutup/Permohonan Maaf, (5) Salam Penutup.',
          examples: [
            '1. Salam Pembuka: "Assalamu’alaikum Wr. Wb. Selamat pagi Bapak/Ibu Guru..."',
            '2. Pendahuluan: "Puji dan syukur kita panjatkan ke hadirat Tuhan Yang Maha Esa..."',
            '3. Isi: "Enam tahun kita telah belajar bersama di sekolah tercinta ini..."',
            '4. Penutup: "Sekian pidato dari saya, apabila ada tutur kata yang salah mohon dimaafkan."',
            '5. Salam Penutup: "Wassalamu’alaikum Wr. Wb. Terima kasih."'
          ],
          practicePrompt: 'Tuliskan paragraf pembuka pidato perpisahan kelas 6 lengkap dengan salam dan rasa syukur!',
          writingGuide: [
            'Gunakan bahasa baku sesuai PUEBI',
            'Sampaikan isi pidato secara lugas dan sistematis'
          ],
          miniQuiz: {
            question: 'Urutan pembukaan pidato yang benar adalah...',
            options: [
              'Salam Pembuka lalu Pendahuluan / Ungkapan Syukur',
              'Isi Pidato lalu Salam Pembuka',
              'Penutup lalu Salam Pembuka'
            ],
            correctIndex: 0,
            explanation: 'Pidato selalu diawali dengan salam pembuka diikuti ungkapan syukur.'
          }
        },
        {
          id: 'k6-c2',
          title: 'Bab 2: Kalimat Efektif & Penyuntingan PUEBI',
          category: 'Menulis',
          content: 'Kalimat Efektif adalah kalimat yang hemat kata, tidak ambigu, dan sesuai dengan kaidah PUEBI. Hindari kata-kata yang mubazir seperti "Sangat amat sekali" atau "Banyak anak-anak".',
          examples: [
            'Mubazir: "Para anak-anak berkumpul" ❌ -> Efektif: "Anak-anak berkumpul" atau "Para anak berkumpul" ✅',
            'Mubazir: "Sangat cantik sekali" ❌ -> Efektif: "Sangat cantik" atau "Cantik sekali" ✅'
          ],
          practicePrompt: 'Sunting kalimat berikut agar efektif: "Banyak ibu-ibu sedang berbelanja sayur-sayuran di pasar."',
          miniQuiz: {
            question: 'Manakah pembenahan kalimat efektif yang BENAR dari "Sangat indah sekali"?',
            options: ['Sangat indah', 'Sangat indah sekali banget', 'Amat sangat indah sekali'],
            correctIndex: 0,
            explanation: 'Gunakan salah satu pemersatu kata penjelas ("sangat indah" atau "indah sekali") untuk menghindari kemubaziran.'
          }
        }
      ]
    },
    {
      id: 'k6-hitung-1',
      title: 'Matematika Kelas 6: Lingkaran & Pengolahan Data',
      coverColor: '#d97706',
      accentColor: '#fbbf24',
      icon: '🎯',
      subtitle: 'Luas Lingkaran, Mean, Median & Modus',
      description: 'Perhitungan Luas Lingkaran (π x r²), Keliling (2 x π x r), serta mencari Rata-Rata (Mean), Nilai Tengah (Median), dan Modus.',
      chapters: [
        {
          id: 'k6-m1',
          title: 'Bab 1: Lingkaran & Statistika Dasar',
          category: 'Menghitung',
          content: 'Luas Lingkaran = π x r x r (π = 22/7 atau 3.14). Mean = Total Nilai / Banyak Data. Median = Nilai tengah setelah data diurutkan. Modus = Nilai yang paling sering muncul.',
          examples: [
            'Jari-jari r = 7 cm -> Luas = 22/7 x 7 x 7 = 154 cm²',
            'Data: 6, 7, 8, 8, 9 -> Mean = (6+7+8+8+9)/5 = 38/5 = 7,6',
            'Modus data (6, 7, 8, 8, 9) = 8 (karena muncul terbanyak, yaitu 2 kali)'
          ],
          practicePrompt: 'Cari Mean dan Modus dari kelompok nilai: 7, 8, 9, 8, 10, 8, 6!',
          miniQuiz: {
            question: 'Nilai yang paling sering muncul dalam kelompok data dinamakan...',
            options: ['Modus', 'Mean', 'Median'],
            correctIndex: 0,
            explanation: 'Modus adalah angka / nilai yang frekuensi kemunculannya paling tinggi.'
          }
        },
        {
          id: 'k6-m2',
          title: 'Bab 2: Rata-Rata (Mean) & Nilai Tengah (Median)',
          category: 'Menghitung',
          content: 'Mean dihitung dengan menjumlahkan seluruh data lalu dibagi banyaknya data. Median dihitung dengan mengurutkan data dari terkecil ke terbesar, lalu mengambil nilai tepat di tengah.',
          examples: [
            'Data Nilai: 5, 7, 8, 8, 10 -> Jumlah = 38 -> Mean = 38 / 5 = 7,6',
            'Urutan Data: 4, 6, (7), 9, 10 -> Median = 7'
          ],
          practicePrompt: 'Tentukan Median dari data terurut berikut: 12, 15, 18, 20, 25!',
          miniQuiz: {
            question: 'Apakah nama lain untuk nilai tengah setelah data diurutkan?',
            options: ['Median', 'Mean', 'Modus'],
            correctIndex: 0,
            explanation: 'Median adalah nilai tengah dari kumpulan data yang telah diurutkan.'
          }
        }
      ]
    }
  ]
};
