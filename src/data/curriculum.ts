import { CurriculumType } from '../types';

export const CURRICULUM: CurriculumType = {
  "Kelas 1": {
    icon: "🌱",
    theme: "Hutan Tunas",
    desc: "15 Pos: Fonem, kata dasar, hingga operasi 1-20",
    "Membaca": {
      name: "🏔️ Gunung Fonem (15 Pos)",
      positions: [
        {
          title: "Pos 1: Huruf Vokal",
          material: "Huruf vokal adalah A, I, U, E, O. Vokal bisa diucapkan tanpa hambatan udara.",
          question: "Kelompok yang SELURUHNYA huruf vokal adalah?",
          options: ["A, E, I, O, U", "A, B, C, D, E", "I, U, M, N, O"],
          correct: 0,
          explanation: "Benar! A, E, I, O, U adalah 5 huruf vokal bahasa Indonesia."
        },
        {
          title: "Pos 2: Huruf Konsonan",
          material: "Huruf konsonan adalah huruf selain vokal (B, C, D, F, G, H, dst).",
          question: "Manakah yang semuanya huruf konsonan?",
          options: ["B, C, D, F", "A, E, I, O", "B, C, E, U"],
          correct: 0,
          explanation: "Tepat! B, C, D, F adalah huruf konsonan."
        },
        {
          title: "Pos 3: Suku Kata Terbuka",
          material: "Suku kata terbuka berakhir dengan huruf vokal. Contoh: BA, KU, MA, NI.",
          question: "Suku kata yang berakhir vokal dinamakan?",
          options: ["Suku Kata Terbuka", "Suku Kata Tertutup", "Suku Kata Terpisah"],
          correct: 0,
          explanation: "Benar! Suku kata berakhir vokal adalah suku kata terbuka."
        },
        {
          title: "Pos 4: Suku Kata Tertutup",
          material: "Suku kata tertutup berakhir dengan huruf konsonan. Contoh: MAK, AN, LAP, DING.",
          question: "Suku kata 'MUM' termasuk suku kata?",
          options: ["Terbuka", "Tertutup", "Dwipurwa"],
          correct: 1,
          explanation: "Tepat! Berakhir huruf M (konsonan), jadi tertutup."
        },
        {
          title: "Pos 5: Pola Suku Kata 'BUKU'",
          material: "Pola BU (terbuka) + KU (terbuka).",
          question: "Kata 'BUKU' memiliki pola suku kata?",
          options: ["Tertutup-Terbuka", "Terbuka-Terbuka", "Terbuka-Tertutup"],
          correct: 1,
          explanation: "Benar! BU dan KU keduanya berakhir vokal = Terbuka-Terbuka."
        },
        {
          title: "Pos 6: Kata Nama Benda",
          material: "Kata benda adalah nama barang, hewan, atau tempat. Contoh: Meja, Kucing, Rumah.",
          question: "Manakah yang merupakan kata nama benda?",
          options: ["Meja", "Lari", "Cantik"],
          correct: 0,
          explanation: "Benar! Meja adalah kata benda."
        },
        {
          title: "Pos 7: Kata Kerja Sederhana",
          material: "Kata kerja menunjukkan tindakan. Contoh: Lari, Makan, Tidur.",
          question: "Kata yang menunjukkan tindakan adalah?",
          options: ["Makan", "Buku", "Besar"],
          correct: 0,
          explanation: "Tepat! 'Makan' adalah kata kerja."
        },
        {
          title: "Pos 8: Membaca Kalimat Sederhana",
          material: "Kalimat terdiri dari kata yang disusun rapi. Contoh: Budi baca buku.",
          question: "Susunan kalimat yang tepat adalah?",
          options: ["Budi baca buku", "Buku Budi baca", "Baca buku Budi"],
          correct: 0,
          explanation: "Hebat! 'Budi baca buku' adalah susunan paling teratur."
        },
        {
          title: "Pos 9: Awalan Me- Sederhana",
          material: "Awalan me- ditempel di kata kerja: me + baca = membaca.",
          question: "Kata 'tulis' jika diberi awalan 'me-' menjadi?",
          options: ["Menulis", "Memtulis", "Metulis"],
          correct: 0,
          explanation: "Benar! Me- bertemu tulis menjadi menulis."
        },
        {
          title: "Pos 10: Awalan Ber- Sederhana",
          material: "Awalan ber- ditempel di kata kerja: ber + lari = berlari.",
          question: "Kata 'main' diberi awalan 'ber-' menjadi?",
          options: ["Bermain", "Berimain", "Memain"],
          correct: 0,
          explanation: "Tepat! Ber- + main = bermain."
        },
        {
          title: "Pos 11: Tanda Baca Titik (.)",
          material: "Tanda titik (.) digunakan di akhir kalimat berita.",
          question: "Tanda baca di akhir kalimat berita adalah?",
          options: ["Tanda Titik (.)", "Tanda Tanya (?)", "Tanda Seru (!)"],
          correct: 0,
          explanation: "Benar! Kalimat berita diakhiri tanda titik."
        },
        {
          title: "Pos 12: Tanda Baca Tanya (?)",
          material: "Tanda tanya (?) digunakan di akhir kalimat pertanyaan.",
          question: "Tanda baca untuk kalimat 'Siapa namamu' adalah?",
          options: ["Tanda Titik (.)", "Tanda Tanya (?)", "Tanda Seru (!)"],
          correct: 1,
          explanation: "Tepat! Kalimat pertanyaan menggunakan tanda tanya."
        },
        {
          title: "Pos 13: Lawan Kata (Antonim Dasar)",
          material: "Antonim adalah lawan kata. Contoh: Besar lawan kata Kecil.",
          question: "Lawan kata dari 'Tinggi' adalah?",
          options: ["Rendah", "Panjang", "Kecil"],
          correct: 0,
          explanation: "Benar! Lawan dari tinggi adalah rendah."
        },
        {
          title: "Pos 14: Persamaan Kata (Sinonim Dasar)",
          material: "Sinonim adalah kata dengan arti sama. Contoh: Pintar = Cerdas.",
          question: "Persamaan kata dari 'Gembira' adalah?",
          options: ["Sedih", "Senang", "Marah"],
          correct: 1,
          explanation: "Tepat! Gembira sama artinya dengan senang."
        },
        {
          title: "🚩 Pos 15: Puncak Dwipurwa",
          material: "Dwipurwa = pengulangan suku kata pertama: ma-ma, pa-pa, bo-bo.",
          question: "Manakah contoh kata dwipurwa?",
          options: ["Berlari", "Ma-ma", "Rumah"],
          correct: 1,
          explanation: "Hebat! Ma-ma mengulang suku kata pertama."
        }
      ]
    },
    "Menghitung": {
      name: "🌲 Hutan Bilangan 1-20 (15 Pos)",
      positions: [
        {
          title: "Pos 1: Nilai Tempat Puluhan & Satuan",
          material: "15 = 1 puluhan + 5 satuan.",
          question: "Angka 17 terdiri dari?",
          options: ["7 puluhan + 1 satuan", "1 puluhan + 7 satuan", "17 puluhan"],
          correct: 1,
          explanation: "Benar! 17 = 1 puluhan dan 7 satuan."
        },
        {
          title: "Pos 2: Membandingkan Banyak Benda",
          material: "Gunakan simbol lebih banyak, lebih sedikit, atau sama dengan.",
          question: "8 apel dibanding 12 apel adalah?",
          options: ["Lebih sedikit", "Lebih banyak", "Sama banyak"],
          correct: 0,
          explanation: "Tepat! 8 lebih sedikit daripada 12."
        },
        {
          title: "Pos 3: Mengurutkan Bilangan",
          material: "Urutkan bilangan dari yang terkecil: 3, 5, 8, 12.",
          question: "Urutan angka dari TERKECIL: 9, 3, 6, 12 yang benar?",
          options: ["3, 6, 9, 12", "12, 9, 6, 3", "3, 9, 6, 12"],
          correct: 0,
          explanation: "Benar! 3 < 6 < 9 < 12."
        },
        {
          title: "Pos 4: Penjumlahan Sederhana (1-10)",
          material: "Hitung maju dari angka awal.",
          question: "Berapa hasil dari 5 + 4?",
          options: ["8", "9", "10"],
          correct: 1,
          explanation: "Tepat! 5 + 4 = 9."
        },
        {
          title: "Pos 5: Penjumlahan (11-20)",
          material: "Jumlahkan satuan terlebih dahulu.",
          question: "14 + 3 = ?",
          options: ["17", "18", "16"],
          correct: 0,
          explanation: "Benar! 4 + 3 = 7, jadi 17."
        },
        {
          title: "Pos 6: Pengurangan Sederhana (1-10)",
          material: "Hitung mundur dari angka awal.",
          question: "Berapa hasil dari 9 - 4?",
          options: ["5", "6", "4"],
          correct: 0,
          explanation: "Tepat! 9 - 4 = 5."
        },
        {
          title: "Pos 7: Pengurangan (11-20)",
          material: "Kurangi satuan dengan satuan.",
          question: "18 - 6 = ?",
          options: ["11", "12", "13"],
          correct: 1,
          explanation: "Benar! 8 - 6 = 2, jadi 12."
        },
        {
          title: "Pos 8: Operasi Campuran + dan -",
          material: "Hitung urut dari kiri ke kanan.",
          question: "10 + 5 - 3 = ?",
          options: ["12", "15", "10"],
          correct: 0,
          explanation: "Hebat! 10 + 5 = 15, lalu 15 - 3 = 12."
        },
        {
          title: "Pos 9: Soal Cerita Penjumlahan",
          material: "Kata kunci: dibeli lagi, diberi, bertambah.",
          question: "Ani punya 7 permen, dibelikan ibu 5 permen lagi. Total permen Ani?",
          options: ["11", "12", "13"],
          correct: 1,
          explanation: "Benar! 7 + 5 = 12 permen."
        },
        {
          title: "Pos 10: Soal Cerita Pengurangan",
          material: "Kata kunci: dimakan, hilang, pecah, diberikan.",
          question: "Budi punya 15 balon, pecah 4 balon. Balon yang tersisa?",
          options: ["11", "10", "12"],
          correct: 0,
          explanation: "Tepat! 15 - 4 = 11 balon."
        },
        {
          title: "Pos 11: Mengenal Bangun Datar",
          material: "Segitiga punya 3 sisi. Persegi punya 4 sisi sama panjang.",
          question: "Bangun datar yang memiliki 3 sisi dinamakan?",
          options: ["Segitiga", "Persegi", "Lingkaran"],
          correct: 0,
          explanation: "Benar! Segitiga memiliki 3 sisi."
        },
        {
          title: "Pos 12: Mengenal Bangun Ruang",
          material: "Bola berbentuk bulat sempurna. Tabung memiliki alas lingkaran.",
          question: "Benda yang berbentuk bola adalah?",
          options: ["Kelereng", "Kotak Pensil", "Buku"],
          correct: 0,
          explanation: "Tepat! Kelereng berbentuk bola."
        },
        {
          title: "Pos 13: Pola Bilangan Loncat",
          material: "Loncat 2: 2, 4, 6, 8... Tambahkan 2 setiap langkah.",
          question: "Lanjutkan pola loncat 2: 2, 4, 6, ..., 10",
          options: ["7", "8", "9"],
          correct: 1,
          explanation: "Benar! 6 + 2 = 8."
        },
        {
          title: "Pos 14: Mengukur Panjang Sederhana",
          material: "Penggaris digunakan untuk mengukur panjang.",
          question: "Alat untuk mengukur panjang buku adalah?",
          options: ["Penggaris", "Timbangan", "Jam"],
          correct: 0,
          explanation: "Tepat! Penggaris digunakan untuk mengukur panjang."
        },
        {
          title: "🚩 Pos 15: Puncak Problem Solving",
          material: "Gabungkan penjumlahan dan pemahaman bilangan.",
          question: "12 buku + 7 buku = ?",
          options: ["19", "18", "20"],
          correct: 0,
          explanation: "Hebat! 12 + 7 = 19 buku."
        }
      ]
    },
    "Menulis": {
      name: "✏️ Lembah Pena & Huruf (15 Pos)",
      positions: [
        {
          title: "Pos 1: Menulis Huruf Vokal A",
          material: "Latih gerakan jemari membentuk huruf 'A'. Tarik garis miring kiri, miring kanan, dan garis datar di tengah.",
          question: "Tuliskan huruf vokal 'A' besar pada lembar kertas tulis!",
          options: ["Huruf A", "Huruf B", "Huruf E"],
          correct: 0,
          explanation: "Benar! 'A' adalah huruf vokal pertama yang kamu tulis."
        },
        {
          title: "Pos 2: Menulis Suku Kata 'BA'",
          material: "Suku kata BA dibentuk dari konsonan B dan vokal A.",
          question: "Tuliskan suku kata 'BA' pada lembar kertas tulis!",
          options: ["BA", "AB", "BU"],
          correct: 0,
          explanation: "Tepat! B + A dibaca BA."
        },
        {
          title: "Pos 3: Menyusun Kata 'BUKU'",
          material: "Tulis kata 'BUKU' secara berurutan: B-U-K-U.",
          question: "Tuliskan kata 'BUKU' secara berurutan pada lembar kertas!",
          options: ["B - U - K - U", "K - U - B - U", "B - K - U - U"],
          correct: 0,
          explanation: "Hebat! B-U-K-U membentuk kata BUKU."
        },
        {
          title: "Pos 4: Menulis Huruf Tegak Bersambung Dasar",
          material: "Garis tegak bersambung mengaitkan huruf tanpa terputus.",
          question: "Cobalah tuliskan huruf tegak bersambung 'a' di lembar kertas!",
          options: ["Huruf 'a' bersambung", "Huruf 'b' kaku", "Huruf 'c' kotak"],
          correct: 0,
          explanation: "Benar! Membentuk lengkungan halus bersambung."
        },
        {
          title: "Pos 5: Menulis Kata 'SAYA'",
          material: "Tuliskan S - A - Y - A dengan jarak huruf yang rapi.",
          question: "Tuliskan kata 'SAYA' pada lembar kertas tulis!",
          options: ["Kata SAYA", "Kata KAMI", "Kata KITA"],
          correct: 0,
          explanation: "Tepat! SAYA terdiri dari 4 huruf S-A-Y-A."
        },
        {
          title: "Pos 6: Menulis Huruf Kapital Awal Kalimat",
          material: "Huruf pertama di setiap awal kalimat WAJIB ditulis dengan huruf kapital (besar).",
          question: "Tuliskan huruf 'B' kapital (besar) untuk awal kata 'Budi'!",
          options: ["Huruf B Kapital", "Huruf b kecil", "Huruf d kecil"],
          correct: 0,
          explanation: "Benar! 'Budi' diawali huruf B kapital."
        },
        {
          title: "Pos 7: Menulis Tanda Baca Titik (.)",
          material: "Tuliskan tanda titik (.) di paling akhir kalimat.",
          question: "Tuliskan tanda titik (.) di akhir kalimat pada lembar kertas!",
          options: ["Tanda Titik (.)", "Tanda Tanya (?)", "Tanda Seru (!)"],
          correct: 0,
          explanation: "Tepat! Tanda titik ditulis di akhir kalimat."
        },
        {
          title: "Pos 8: Menulis Nama Sendiri",
          material: "Nama diri ditulis menggunakan huruf kapital di awal kata.",
          question: "Tuliskan nama diri 'ANI' dengan huruf awal kapital di kertas!",
          options: ["Ani", "ani", "aNi"],
          correct: 0,
          explanation: "Benar! Huruf pertama 'Ani' diawali kapital."
        },
        {
          title: "Pos 9: Menulis Kata Benda 'PENSIL'",
          material: "Ejaan P-E-N-S-I-L harus lengkap tanpa ada huruf yang tertinggal.",
          question: "Tuliskan kata benda 'PENSIL' secara utuh pada lembar kertas!",
          options: ["PENSIL", "PENCIL", "PENKIL"],
          correct: 0,
          explanation: "Tepat! Huruf S melengkapi PENSIL."
        },
        {
          title: "Pos 10: Menulis Kalimat Singkat",
          material: "Beri jarak (spasi) antar kata agar tulisan mudah dibaca.",
          question: "Tuliskan dua kata 'BACA BUKU' dengan spasi rapi di lembar kertas!",
          options: ["BACA BUKU (Spasi rapi)", "BACABUKU (Tanpa spasi)", "B A C A B U K U"],
          correct: 0,
          explanation: "Benar! Spasi membuat kata terpisah rapi."
        },
        {
          title: "Pos 11: Menulis Huruf Konsonan Ganda 'NY'",
          material: "Suku kata NYA, NYI, NYU, NYE, NYO ditulis dengan dua huruf konsonan berdampingan.",
          question: "Tuliskan suku kata konsonan ganda 'NYA' pada lembar kertas!",
          options: ["NYA", "NYI", "NA"],
          correct: 0,
          explanation: "Tepat! N-Y-A adalah suku kata NYA."
        },
        {
          title: "Pos 12: Menulis Huruf Konsonan Ganda 'NG'",
          material: "BUNYI 'NG' terdapat pada kata bunga, mangga, kangkung.",
          question: "Tuliskan kata 'BUNGA' dengan huruf NG pada lembar kertas!",
          options: ["BUNGA", "BUNKA", "BUNYA"],
          correct: 0,
          explanation: "Benar! Bunga ditulis dengan huruf NG."
        },
        {
          title: "Pos 13: Menulis Kata Ulang 'KUPU-KUPU'",
          material: "Kata ulang ditulis menggunakan tanda hubung (-) di tengahnya.",
          question: "Tuliskan kata ulang 'KUPU-KUPU' memakai tanda hubung (-)!",
          options: ["KUPU-KUPU", "KUPU KUPU", "KUPUKUPU"],
          correct: 0,
          explanation: "Tepat! Menggunakan tanda hubung (-) di tengahnya."
        },
        {
          title: "Pos 14: Menulis Kalimat Perintah Sederhana",
          material: "Kalimat perintah diakhiri dengan tanda seru (!). Contoh: Duduklah!",
          question: "Tuliskan kata perintah 'BUKA!' lengkap dengan tanda seru (!)",
          options: ["BUKA!", "BUKA.", "BUKA?"],
          correct: 0,
          explanation: "Benar! Menggunakan tanda seru (!)."
        },
        {
          title: "🚩 Pos 15: Puncak Guratan Cerdas",
          material: "Gabungkan huruf kapital, spasi rapi, dan tanda titik di akhir kalimat.",
          question: "Tuliskan kalimat lengkap 'Saya membaca buku.' pada lembar kertas!",
          options: ["Saya membaca buku.", "saya membaca buku", "Saya Membaca Buku"],
          correct: 0,
          explanation: "Hebat! Huruf awal kapital, spasi teratur, dan diakhiri titik."
        }
      ]
    }
  },
  "Kelas 2": {
    icon: "🏘️",
    theme: "Desa Ilmu",
    desc: "15 Pos: Kalimat S-P-O, tanda baca, hingga perkalian & pembagian",
    "Membaca": {
      name: "🏘️ Desa Kalimat (15 Pos)",
      positions: [
        {
          title: "Pos 1: Subjek dalam Kalimat",
          material: "Subjek (S) adalah pelaku yang melakukan kegiatan. Contoh: Ayah, Ani, Kucing.",
          question: "Subjek dalam 'Ibu memasak nasi' adalah?",
          options: ["Ibu", "memasak", "nasi"],
          correct: 0,
          explanation: "Benar! 'Ibu' adalah pelaku (Subjek)."
        },
        {
          title: "Pos 2: Predikat dalam Kalimat",
          material: "Predikat (P) adalah kata kerja/kegiatan yang dilakukan Subjek.",
          question: "Predikat dalam 'Budi membaca buku' adalah?",
          options: ["Budi", "membaca", "buku"],
          correct: 1,
          explanation: "Tepat! 'Membaca' adalah kegiatan (Predikat)."
        },
        {
          title: "Pos 3: Objek dalam Kalimat",
          material: "Objek (O) adalah hal yang dikenai kegiatan oleh Subjek.",
          question: "Objek dalam 'Ayah membaca koran' adalah?",
          options: ["Ayah", "membaca", "koran"],
          correct: 2,
          explanation: "Benar! 'Koran' adalah Objek."
        },
        {
          title: "Pos 4: Tanda Baca Titik & Tanya",
          material: ". untuk kalimat berita, ? untuk kalimat tanya.",
          question: "Tanda baca tepat untuk 'Di mana rumahmu' adalah?",
          options: ["Titik (.)", "Tanya (?)", "Seru (!)"],
          correct: 1,
          explanation: "Tepat! Pertanyaan menggunakan tanda tanya."
        },
        {
          title: "Pos 5: Tanda Seru (!)",
          material: "Tanda seru (!) digunakan untuk perintah atau ajakan kuat.",
          question: "Tanda baca untuk 'Tutup pintunya!' adalah?",
          options: ["Titik (.)", "Tanya (?)", "Seru (!)"],
          correct: 2,
          explanation: "Benar! Kalimat perintah menggunakan tanda seru."
        },
        {
          title: "Pos 6: Kata Depan Tempat 'di'",
          material: "Kata depan 'di' ditulis pisah jika menunjukkan tempat: di rumah, di pasar.",
          question: "Penulisan kata depan tempat yang benar adalah?",
          options: ["di sekolah", "disekolah", "di-sekolah"],
          correct: 0,
          explanation: "Tepat! Diikuti nama tempat ditulis terpisah: di sekolah."
        },
        {
          title: "Pos 7: Huruf Kapital Nama Orang",
          material: "Nama orang harus diawali huruf kapital.",
          question: "Penulisan nama orang yang tepat adalah?",
          options: ["budi santoso", "Budi Santoso", "BUDI santoso"],
          correct: 1,
          explanation: "Benar! Budi Santoso diawali huruf besar."
        },
        {
          title: "Pos 8: Huruf Kapital Hari & Bulan",
          material: "Nama hari dan bulan diawali huruf kapital: Senin, Agustus.",
          question: "Penulisan hari yang tepat adalah?",
          options: ["hari senin", "Hari senin", "hari Senin"],
          correct: 2,
          explanation: "Tepat! Nama hari 'Senin' harus huruf besar."
        },
        {
          title: "Pos 9: Kata Sinonim",
          material: "Sinonim = persamaan makna kata.",
          question: "Sinonim kata 'Pengalas' atau 'Pakaian'?",
          options: ["Baju", "Sepatu", "Topi"],
          correct: 0,
          explanation: "Benar! Pakaian sinonimnya baju."
        },
        {
          title: "Pos 10: Kata Antonim",
          material: "Antonim = lawan makna kata.",
          question: "Antonim dari kata 'Rajin' adalah?",
          options: ["Pintar", "Malas", "Giat"],
          correct: 1,
          explanation: "Tepat! Lawan kata rajin adalah malas."
        },
        {
          title: "Pos 11: Ungkapan 'Panjang Tangan'",
          material: "Ungkapan 'panjang tangan' artinya suka mencuri.",
          question: "Arti ungkapan 'Panjang tangan' adalah?",
          options: ["Suka mencuri", "Suka memberi", "Tangannya panjang"],
          correct: 0,
          explanation: "Benar! 'Panjang tangan' kiasan untuk suka mencuri."
        },
        {
          title: "Pos 12: Ungkapan 'Bintang Lapangan'",
          material: "Bintang lapangan artinya pemain terbaik.",
          question: "Arti ungkapan 'Bintang lapangan' adalah?",
          options: ["Pemain terbaik", "Bintang di langit", "Anak kecil"],
          correct: 0,
          explanation: "Tepat! Bintang lapangan = pemain paling jago."
        },
        {
          title: "Pos 13: Kata Ulang Sederhana",
          material: "Kata ulang utuh: anak-anak, ibu-ibu, buku-buku.",
          question: "Penulisan kata ulang utuh yang tepat?",
          options: ["Anak anak", "Anak-anak", "Anak2"],
          correct: 1,
          explanation: "Benar! Ditulis menggunakan tanda hubung (-)."
        },
        {
          title: "Pos 14: Kalimat Ajakan",
          material: "Kalimat ajakan menggunakan kata 'Ayo' atau 'Mari'.",
          question: "Manakah yang merupakan kalimat ajakan?",
          options: ["Ayo kita belajar bersama!", "Jangan membuang sampah!", "Siapa namamu?"],
          correct: 0,
          explanation: "Tepat! Menggunakan kata 'Ayo'."
        },
        {
          title: "🚩 Pos 15: Puncak Kata Majemuk",
          material: "Kata majemuk gabungan dua kata membentuk arti baru.",
          question: "Manakah yang merupakan kata majemuk?",
          options: ["Tas sekolah", "Kambing hitam", "Sepatu baru"],
          correct: 1,
          explanation: "Hebat! Kambing hitam = orang yang disalahkan."
        }
      ]
    },
    "Menghitung": {
      name: "🏞️ Sungai Operasi Campuran (15 Pos)",
      positions: [
        {
          title: "Pos 1: Penjumlahan Menyimpan",
          material: "Satuan dijumlahkan dulu. Jika ≥10, simpan puluhannya.",
          question: "27 + 15 = ?",
          options: ["42", "32", "41"],
          correct: 0,
          explanation: "Benar! 7+5=12 (tulis 2 simpan 1). 2+1+1=4 → 42."
        },
        {
          title: "Pos 2: Pengurangan Meminjam",
          material: "Pinjam 1 puluhan jika satuan kurang.",
          question: "43 - 18 = ?",
          options: ["25", "35", "15"],
          correct: 0,
          explanation: "Tepat! 13 - 8 = 5, 3 - 1 = 2 → 25."
        },
        {
          title: "Pos 3: Konsep Perkalian",
          material: "Perkalian adalah penjumlahan berulang.",
          question: "5 × 4 sama artinya dengan?",
          options: ["5 + 5 + 5 + 5", "4 + 4 + 4 + 4 + 4", "5 + 4"],
          correct: 1,
          explanation: "Benar! 5 × 4 artinya angka 4 dijumlahkan 5 kali."
        },
        {
          title: "Pos 4: Perkalian 2 dan 3",
          material: "Hitung hasil perkalian dasar.",
          question: "6 × 3 = ?",
          options: ["18", "15", "12"],
          correct: 0,
          explanation: "Tepat! 6 × 3 = 18."
        },
        {
          title: "Pos 5: Perkalian 5 dan 10",
          material: "Perkalian 5 berakhiran 0 atau 5. Perkalian 10 berakhiran 0.",
          question: "7 × 5 = ?",
          options: ["30", "35", "40"],
          correct: 1,
          explanation: "Benar! 7 × 5 = 35."
        },
        {
          title: "Pos 6: Konsep Pembagian",
          material: "Pembagian adalah pengurangan berulang sampai habis (0).",
          question: "12 ÷ 3 = ?",
          options: ["3", "4", "5"],
          correct: 1,
          explanation: "Tepat! 12 - 3 - 3 - 3 - 3 = 0 (4 kali dikurang)."
        },
        {
          title: "Pos 7: Pembagian Dasar",
          material: "Hitung hasil pembagian.",
          question: "20 ÷ 5 = ?",
          options: ["4", "5", "6"],
          correct: 0,
          explanation: "Benar! 20 ÷ 5 = 4."
        },
        {
          title: "Pos 8: Satuan Panjang Meter & Cm",
          material: "1 meter (m) = 100 sentimeter (cm).",
          question: "2 meter sama dengan berapa cm?",
          options: ["20 cm", "200 cm", "2000 cm"],
          correct: 1,
          explanation: "Tepat! 2 m = 200 cm."
        },
        {
          title: "Pos 9: Satuan Berat Kg & Gram",
          material: "1 kilogram (kg) = 1.000 gram.",
          question: "3 kg sama dengan berapa gram?",
          options: ["30 gram", "300 gram", "3.000 gram"],
          correct: 2,
          explanation: "Benar! 3 kg = 3.000 gram."
        },
        {
          title: "Pos 10: Membaca Jam Tepat",
          material: "Jarum pendek ke angka jam, jarum panjang ke angka 12.",
          question: "Jarum pendek di 4, jarum panjang di 12 menunjukkan pukul?",
          options: ["04.00", "12.04", "04.12"],
          correct: 0,
          explanation: "Tepat! Menunjukkan Pukul 04.00."
        },
        {
          title: "Pos 11: Membaca Jam Setengah (30 Menit)",
          material: "Jarum panjang di angka 6 menunjukkan 30 menit.",
          question: "Jarum pendek antara 2 dan 3, jarum panjang di 6 menunjukkan pukul?",
          options: ["02.30", "03.30", "02.06"],
          correct: 0,
          explanation: "Benar! Menunjukkan Pukul 02.30."
        },
        {
          title: "Pos 12: Bangun Datar Persegi Panjang",
          material: "Memiliki 4 sisi, sisi berhadapan sama panjang.",
          question: "Jumlah sisi persegi panjang adalah?",
          options: ["3", "4", "5"],
          correct: 1,
          explanation: "Tepat! Persegi panjang memiliki 4 sisi."
        },
        {
          title: "Pos 13: Simetri Lipat",
          material: "Garis yang membagi bangun datar jadi dua bagian sama persis.",
          question: "Berapa jumlah simetri lipat persegi?",
          options: ["2", "3", "4"],
          correct: 2,
          explanation: "Benar! Persegi memiliki 4 simetri lipat."
        },
        {
          title: "Pos 14: Operasi Campuran + dan ×",
          material: "Kerjakan PERKALIAN dahulu sebelum penjumlahan!",
          question: "4 + 2 × 3 = ?",
          options: ["10", "18", "12"],
          correct: 0,
          explanation: "Tepat! 2 × 3 = 6 dahulu, lalu 4 + 6 = 10."
        },
        {
          title: "🚩 Pos 15: Puncak Dua Langkah",
          material: "Kerjakan perkalian/pembagian dulu, baru penjumlahan.",
          question: "5 + 3 × 2 = ?",
          options: ["16", "11", "10"],
          correct: 1,
          explanation: "Hebat! 3 × 2 = 6, lalu 5 + 6 = 11."
        }
      ]
    },
    "Menulis": {
      name: "✍️ Sanggar Penulisan Kalimat (15 Pos)",
      positions: [
        {
          title: "Pos 1: Menulis Kalimat S-P-O",
          material: "Kalimat efektif minimal memiliki Subjek (pelaku), Predikat (kegiatan), dan Objek.",
          question: "Tuliskan kalimat 'Ibu memasak nasi.' pada lembar kertas!",
          options: ["Ibu memasak nasi.", "ibu memasak nasi", "Ibu Memasak Nasi"],
          correct: 0,
          explanation: "Benar! Ibu (S), memasak (P), nasi (O)."
        },
        {
          title: "Pos 2: Menulis Huruf Kapital Nama Hari & Bulan",
          material: "Nama hari dan bulan ditulis awal huruf besar: Senin, Maret, Oktober.",
          question: "Tuliskan nama hari 'Senin, 17 Agustus' dengan huruf kapital rapi!",
          options: ["Senin, 17 Agustus", "senin, 17 agustus", "Senin, 17 agustus"],
          correct: 0,
          explanation: "Tepat! 'Senin' dan 'Agustus' diawali huruf besar."
        },
        {
          title: "Pos 3: Menulis Kata Depan Tempat 'di'",
          material: "Kata 'di' yang menunjukkan tempat ditulis TERPISAH. Contoh: di pasar, di rumah.",
          question: "Tuliskan kata depan tempat 'di kebun' terpisah pada lembar kertas!",
          options: ["di kebun", "dikebun", "di-kebun"],
          correct: 0,
          explanation: "Benar! Kata depan tempat ditulis terpisah."
        },
        {
          title: "Pos 4: Menulis Imbuhan 'me-' pada Kata 'baca'",
          material: "Kata dasar 'baca' ditambah 'me-' menjadi 'membaca'.",
          question: "Tuliskan kata berimbuhan 'Membaca' pada lembar kertas!",
          options: ["Membaca", "Mebaca", "Mem-baca"],
          correct: 0,
          explanation: "Tepat! Me- + baca = membaca."
        },
        {
          title: "Pos 5: Menulis Tanda Koma (,) dalam Rincian",
          material: "Gunakan tanda koma (,) untuk memisahkan barang dalam rincian.",
          question: "Tuliskan rincian 'Apel, jeruk, dan pisang' memakai koma!",
          options: ["Apel, jeruk, dan pisang", "Apel dan jeruk dan pisang", "Apel jeruk pisang"],
          correct: 0,
          explanation: "Benar! Memakai koma dan 'dan' di akhir rincian."
        },
        {
          title: "Pos 6: Menulis Kata Depan 'ke'",
          material: "Kata depan 'ke' untuk arah tempat ditulis terpisah: ke sekolah, ke pasar.",
          question: "Tuliskan tujuan 'ke sekolah' secara terpisah pada lembar kertas!",
          options: ["ke sekolah", "kesekolah", "ke-sekolah"],
          correct: 0,
          explanation: "Tepat! 'ke' diikuti tempat ditulis terpisah."
        },
        {
          title: "Pos 7: Menulis Kalimat Tanya",
          material: "Kalimat tanya ditulis dengan kata tanya (Apa, Siapa, Di mana) & akhiran tanda tanya (?).",
          question: "Tuliskan kalimat tanya 'Di mana rumahmu?' dengan tanda tanya!",
          options: ["Di mana rumahmu?", "Di mana rumahmu.", "Dimana rumahmu!"],
          correct: 0,
          explanation: "Benar! Diawali kata tanya dan diakhiri (?)."
        },
        {
          title: "Pos 8: Menulis Kalimat Ajakan 'Ayo'",
          material: "Gunakan 'Ayo' atau 'Mari' untuk menulis ajakan positif.",
          question: "Tuliskan kalimat ajakan 'Ayo menjaga kebersihan!' pada lembar kertas!",
          options: ["Ayo menjaga kebersihan!", "Jangan kotor!", "Siapa yang menyapu?"],
          correct: 0,
          explanation: "Tepat! Menggunakan kata 'Ayo'."
        },
        {
          title: "Pos 9: Menulis Kata Berimbuhan 'ber-'",
          material: "Imbuhan 'ber-' + 'main' = 'bermain'.",
          question: "Tuliskan kata 'Berlari' pada lembar kertas!",
          options: ["Berlari", "Belari", "Ber-lari"],
          correct: 0,
          explanation: "Benar! 'Ber' + 'lari' = berlari."
        },
        {
          title: "Pos 10: Menulis Kata Sapaan Rapi",
          material: "Kata sapaan diawali huruf besar: Selamat pagi, Selamat siang.",
          question: "Tuliskan kata sapaan 'Selamat pagi, Budi!' dengan tanda baca rapi!",
          options: ["Selamat pagi, Budi!", "selamat pagi budi", "SELAMAT PAGI BUDI"],
          correct: 0,
          explanation: "Tepat! Diawali huruf kapital dan diberi koma."
        },
        {
          title: "Pos 11: Menyusun Kalimat Acak menjadi Rapi",
          material: "Susun kata acak: [buku - Budi - membaca - perpustakaan - di]",
          question: "Tuliskan susunan kalimat 'Budi membaca buku di perpustakaan.' di kertas!",
          options: ["Budi membaca buku di perpustakaan.", "Membaca Budi buku di perpustakaan.", "Di perpustakaan Budi buku membaca."],
          correct: 0,
          explanation: "Benar! S-P-O Keterangan Tempat teratur."
        },
        {
          title: "Pos 12: Menulis Kata Berawalan 'pe-'",
          material: "Pe- + lukis = pelukis (orang yang melukis).",
          question: "Tuliskan kata profesi 'Penulis' di lembar kertas!",
          options: ["Penulis", "Pentulis", "Pelulis"],
          correct: 0,
          explanation: "Tepat! Pen- + tulis = penulis."
        },
        {
          title: "Pos 13: Menulis Kalimat Berita",
          material: "Kalimat berita memberikan informasi dan diakhiri tanda titik (.).",
          question: "Tuliskan kalimat berita 'Hujan turun dengan deras.' di kertas!",
          options: ["Hujan turun dengan deras.", "Hujan turun dengan deras?", "hujan turun deras"],
          correct: 0,
          explanation: "Benar! Huruf kapital diawal, diakhiri titik."
        },
        {
          title: "Pos 14: Menulis Puisi Pendek",
          material: "Puisi disusun berbait-bait dengan baris indah.",
          question: "Tuliskan kata 'Bait' atau 'Larik' pada lembar kertas!",
          options: ["Bait / Larik", "Paragraf", "Bab"],
          correct: 0,
          explanation: "Tepat! Baris puisi disebut larik."
        },
        {
          title: "🚩 Pos 15: Puncak Karangan Sederhana",
          material: "Gabungkan 3 kalimat menjadi satu paragraf cerita mini yang padu.",
          question: "Tuliskan urutan cerita 'Pada hari Minggu, Budi pergi ke pantai.' di kertas!",
          options: ["Pada hari Minggu, Budi pergi ke pantai. Ia bermain pasir. Hatinya sangat gembira.", "Budi bermain pasir. Ia pergi ke pantai. Pada hari Minggu.", "Pantai itu indah. Budi membaca buku. Ibu memasak."],
          correct: 0,
          explanation: "Hebat! Kalimat-kalimatnya runtut dan padu."
        }
      ]
    }
  },
  "Kelas 3": {
    icon: "🏞️",
    theme: "Lembah Paragraf",
    desc: "15 Pos: Paragraf deduktif-induktif hingga pecahan & keliling",
    "Membaca": {
      name: "🏞️ Sungai Paragraf (15 Pos)",
      positions: [
        {
          title: "Pos 1: Gagasan Pokok Paragraf",
          material: "Gagasan pokok adalah ide utama pembangun paragraf.",
          question: "Kalimat yang memuat gagasan pokok disebut?",
          options: ["Kalimat Utama", "Kalimat Penjelas", "Kalimat Pengungkit"],
          correct: 0,
          explanation: "Benar! Kalimat utama memuat gagasan pokok."
        },
        {
          title: "Pos 2: Paragraf Deduktif",
          material: "Paragraf deduktif memiliki kalimat utama di AWAL paragraf.",
          question: "Paragraf yang kalimat utamanya di awal disebut?",
          options: ["Deduktif", "Induktif", "Campuran"],
          correct: 0,
          explanation: "Tepat! Deduktif = Depan (Awal)."
        },
        {
          title: "Pos 3: Paragraf Induktif",
          material: "Paragraf induktif memiliki kalimat utama di AKHIR paragraf.",
          question: "Paragraf yang kalimat utamanya di akhir disebut?",
          options: ["Deduktif", "Induktif", "Campuran"],
          correct: 1,
          explanation: "Benar! Induktif = Akhir."
        },
        {
          title: "Pos 4: Kalimat Penjelas",
          material: "Kalimat penjelas berfungsi rincian pendukung gagasan utama.",
          question: "Fungsi dari kalimat penjelas adalah?",
          options: ["Mendukung dan memperjelas kalimat utama", "Mengganti judul", "Menyimpulkan isi"],
          correct: 0,
          explanation: "Tepat! Memperjelas poin kalimat utama."
        },
        {
          title: "Pos 5: Teks Petunjuk",
          material: "Teks petunjuk menggunakan kata kerja perintah berurutan.",
          question: "Kata kerja perintah berikut yang biasa ada di teks petunjuk?",
          options: ["Aduklah", "Memakan", "Berjalan"],
          correct: 0,
          explanation: "Benar! 'Aduklah' adalah kata kerja perintah (imperatif)."
        },
        {
          title: "Pos 6: Unsur Dongeng - Tokoh",
          material: "Tokoh adalah pelaku dalam cerita/dongeng.",
          question: "Pelaku dalam cerita dongeng dinamakan?",
          options: ["Tokoh", "Latar", "Alur"],
          correct: 0,
          explanation: "Tepat! Pelaku dinamakan tokoh."
        },
        {
          title: "Pos 7: Unsur Dongeng - Watak",
          material: "Watak adalah sifat tokoh (baik, jahat, penolong).",
          question: "Sifat atau karakter tokoh dalam cerita disebut?",
          options: ["Watak/Penokohan", "Latar tempat", "Judul"],
          correct: 0,
          explanation: "Benar! Sifat dinamakan watak."
        },
        {
          title: "Pos 8: Watak Protagonis",
          material: "Protagonis adalah tokoh berwatak baik.",
          question: "Tokoh utama yang memiliki sifat baik disebut?",
          options: ["Protagonis", "Antagonis", "Tritagonis"],
          correct: 0,
          explanation: "Tepat! Protagonis = tokoh baik."
        },
        {
          title: "Pos 9: Watak Antagonis",
          material: "Antagonis adalah tokoh berwatak jahat/penentang.",
          question: "Tokoh yang memicu konflik/berwatak jahat disebut?",
          options: ["Protagonis", "Antagonis", "Tritagonis"],
          correct: 1,
          explanation: "Benar! Antagonis = tokoh jahat."
        },
        {
          title: "Pos 10: Latar Cerita",
          material: "Latar meliputi tempat, waktu, dan suasana cerita.",
          question: "Di hutan pada sore hari termasuk unsur?",
          options: ["Latar tempat dan waktu", "Watak tokoh", "Amanat"],
          correct: 0,
          explanation: "Tepat! Hutan (tempat), sore hari (waktu)."
        },
        {
          title: "Pos 11: Peribahasa Sederhana",
          material: "Besar pasak daripada tiang = pengeluaran lebih besar dari pendapatan.",
          question: "Arti peribahasa 'Besar pasak daripada tiang' adalah?",
          options: ["Pengeluaran lebih besar dari pendapatan", "Suka menabung", "Rumahnya besar"],
          correct: 0,
          explanation: "Benar! Boros atau belanja melebihi kemampuan."
        },
        {
          title: "Pos 12: Kata Berimbuhan Pe-an",
          material: "Imbuhan pe-an membentuk kata benda proses/tempat.",
          question: "Kata 'pemukiman' berasal dari kata dasar?",
          options: ["Mukim", "Kirim", "Muka"],
          correct: 0,
          explanation: "Tepat! Pe-an + mukim = pemukiman."
        },
        {
          title: "Pos 13: Kalimat Langsung (Tanda Petik)",
          material: "Kalimat langsung menggunakan tanda petik dua (\"... \").",
          question: "Tanda baca untuk mengutip percakapan langsung?",
          options: ["Tanda Petik (\")", "Tanda Kurung ()", "Tanda Hubung (-)"],
          correct: 0,
          explanation: "Benar! Percakapan dipapit tanda petik."
        },
        {
          title: "Pos 14: Paragraf Deskripsi",
          material: "Paragraf deskripsi menggambarkan objek sehingga pembaca seolah melihat.",
          question: "Paragraf yang melukiskan objek secara jelas dinamakan?",
          options: ["Deskripsi", "Narasi", "Persuasi"],
          correct: 0,
          explanation: "Tepat! Deskripsi melukiskan objek."
        },
        {
          title: "🚩 Pos 15: Puncak Kesimpulan Paragraf",
          material: "Kesimpulan harus objektif, ringkas, dan merangkum ide pokok.",
          question: "Syarat kesimpulan yang baik adalah?",
          options: ["Tambah opini pribadi", "Ringkas dan objektif", "Menyalin kalimat pertama saja"],
          correct: 1,
          explanation: "Hebat! Ringkas, jelas, dan sesuai fakta paragraf."
        }
      ]
    },
    "Menghitung": {
      name: "🕳️ Gua × dan ÷ (15 Pos)",
      positions: [
        {
          title: "Pos 1: Hubungan Perkalian & Pembagian",
          material: "Jika 6 × 7 = 42, maka 42 ÷ 6 = 7.",
          question: "6 × 7 = 42 → 42 ÷ 6 = ?",
          options: ["6", "7", "8"],
          correct: 1,
          explanation: "Benar! Perkalian dan pembagian saling berkebalikan."
        },
        {
          title: "Pos 2: Perkalian Puluhan & Ratusan",
          material: "Gunakan cara bersusun pendek.",
          question: "120 × 4 = ?",
          options: ["480", "420", "500"],
          correct: 0,
          explanation: "Tepat! 120 × 4 = 480."
        },
        {
          title: "Pos 3: Pembagian Bersisa",
          material: "Sisa pembagian harus lebih kecil dari pembagi.",
          question: "17 ÷ 5 = ?",
          options: ["3 sisa 2", "3 sisa 1", "2 sisa 7"],
          correct: 0,
          explanation: "Benar! 5 × 3 = 15, 17 - 15 = sisa 2."
        },
        {
          title: "Pos 4: Mengenal Pecahan Sederhana",
          material: "Pecahan a/b: a = pembilang, b = penyebut.",
          question: "Pada pecahan 3/4, angka 3 dinamakan?",
          options: ["Pembilang", "Penyebut", "Pembagi"],
          correct: 0,
          explanation: "Tepat! Angka atas = pembilang."
        },
        {
          title: "Pos 5: Penyebut Pecahan",
          material: "Angka di bawah tanda per adalah penyebut.",
          question: "Pada pecahan 2/5, angka 5 dinamakan?",
          options: ["Pembilang", "Penyebut", "Persen"],
          correct: 1,
          explanation: "Benar! Angka bawah = penyebut."
        },
        {
          title: "Pos 6: Membandingkan Pecahan Penyebut Sama",
          material: "Penyebut sama? Pembilang lebih besar bernilai lebih besar.",
          question: "Manakah yang lebih besar: 3/5 atau 1/5?",
          options: ["3/5", "1/5", "Sama besar"],
          correct: 0,
          explanation: "Tepat! 3 > 1, jadi 3/5 lebih besar."
        },
        {
          title: "Pos 7: Penjumlahan Pecahan Penyebut Sama",
          material: "Jumlahkan pembilangnya saja, penyebut tetap!",
          question: "2/7 + 3/7 = ?",
          options: ["5/7", "5/14", "1/7"],
          correct: 0,
          explanation: "Benar! (2+3)/7 = 5/7."
        },
        {
          title: "Pos 8: Pengurangan Pecahan Penyebut Sama",
          material: "Kurangi pembilangnya saja.",
          question: "5/8 - 2/8 = ?",
          options: ["3/8", "3/0", "7/8"],
          correct: 0,
          explanation: "Tepat! (5-2)/8 = 3/8."
        },
        {
          title: "Pos 9: Keliling Persegi",
          material: "Keliling Persegi = 4 × sisi (s).",
          question: "Persegi dengan panjang sisi 6 cm memiliki keliling?",
          options: ["24 cm", "36 cm", "12 cm"],
          correct: 0,
          explanation: "Benar! Keliling = 4 × 6 = 24 cm."
        },
        {
          title: "Pos 10: Keliling Persegi Panjang",
          material: "Keliling = 2 × (panjang + lebar).",
          question: "Persegi panjang p = 8 cm, l = 4 cm. Kelilingnya?",
          options: ["24 cm", "32 cm", "12 cm"],
          correct: 0,
          explanation: "Tepat! 2 × (8 + 4) = 2 × 12 = 24 cm."
        },
        {
          title: "Pos 11: Luas Persegi Dasar",
          material: "Luas Persegi = sisi × sisi (s²).",
          question: "Persegi dengan sisi 5 cm memiliki luas?",
          options: ["20 cm²", "25 cm²", "10 cm²"],
          correct: 1,
          explanation: "Benar! Luas = 5 × 5 = 25 cm²."
        },
        {
          title: "Pos 12: Luas Persegi Panjang Dasar",
          material: "Luas Persegi Panjang = panjang × lebar.",
          question: "Persegi panjang p = 6 cm, l = 3 cm. Luasnya?",
          options: ["18 cm²", "9 cm²", "12 cm²"],
          correct: 0,
          explanation: "Tepat! Luas = 6 × 3 = 18 cm²."
        },
        {
          title: "Pos 13: Konversi Jam ke Menit",
          material: "1 jam = 60 menit.",
          question: "2 jam sama dengan berapa menit?",
          options: ["120 menit", "100 menit", "600 menit"],
          correct: 0,
          explanation: "Benar! 2 × 60 = 120 menit."
        },
        {
          title: "Pos 14: Penjumlahan Ribuan",
          material: "Jumlahkan secara bersusun dari satuan.",
          question: "1.200 + 1.500 = ?",
          options: ["2.700", "2.500", "3.000"],
          correct: 0,
          explanation: "Tepat! 1.200 + 1.500 = 2.700."
        },
        {
          title: "🚩 Pos 15: Puncak Multi-Langkah",
          material: "Selesaikan perkalian dulu lalu pengurangan.",
          question: "3 × 8 apel, dimakan 5. Sisa apel?",
          options: ["19", "24", "16"],
          correct: 0,
          explanation: "Hebat! 3 × 8 = 24, lalu 24 - 5 = 19."
        }
      ]
    },
    "Menulis": {
      name: "✍️ Bukit Paragraf & Ejaan (15 Pos)",
      positions: [
        {
          title: "Pos 1: Menulis Gagasan Utama",
          material: "Gagasan utama adalah inti cerita yang dituangkan dalam kalimat utama.",
          question: "Di mana posisi kalimat utama dalam paragraf deduktif?",
          options: ["Awal paragraf", "Akhir paragraf", "Tengah paragraf"],
          correct: 0,
          explanation: "Benar! Paragraf deduktif menempatkan ide utama di awal."
        },
        {
          title: "Pos 2: Menulis Imbuhan 'me-kan'",
          material: "Imbuhan me-kan menyatakan membuat jadi... Contoh: me- + bersihkan = membersihkan.",
          question: "Penulisan kata 'bersih' + 'me-kan' yang tepat adalah?",
          options: ["Membersihkan", "Membersihkan", "Me-bersihkan"],
          correct: 0,
          explanation: "Tepat! Me- + bersih + kan = membersihkan."
        },
        {
          title: "Pos 3: Menulis Kalimat Efektif",
          material: "Kalimat efektif tidak boros kata dan mudah dipahami pembaca.",
          question: "Manakah contoh tulisan kalimat yang efektif?",
          options: ["Siswa belajar di kelas.", "Para siswa-siswa semuanya belajar di kelas.", "Siswa-siswa sangat belajar sekali di kelas."],
          correct: 0,
          explanation: "Benar! Kalimat pertama hemat kata dan padat."
        },
        {
          title: "Pos 4: Menulis Tanda Koma Sebelum Kata Hubung",
          material: "Tanda koma digunakan sebelum kata 'tetapi' atau 'melainkan'.",
          question: "Penulisan pertentangan yang tepat adalah?",
          options: ["Budi pintar, tetapi ia tetap rendah hati.", "Budi pintar tetapi ia tetap rendah hati", "Budi pintar tetapi, ia tetap rendah hati"],
          correct: 0,
          explanation: "Tepat! Diberi koma sebelum kata 'tetapi'."
        },
        {
          title: "Pos 5: Menulis Kata Baku 'Aktif'",
          material: "Kata baku sesuai pedoman KBBI / PUEBI. Contoh baku: 'aktif', bukan 'aktip'.",
          question: "Bentuk kata baku tulisan berikut adalah?",
          options: ["Aktif", "Aktip", "Aktiv"],
          correct: 0,
          explanation: "Benar! Kata baku yang tepat adalah 'aktif'."
        },
        {
          title: "Pos 6: Menulis Imbuhan 'pe-an'",
          material: "Pe-an + pemandangan = pemandangan.",
          question: "Penulisan imbuhan 'pe-an' pada kata 'pandang' adalah?",
          options: ["Pemandangan", "Pempandangan", "Pempandangan"],
          correct: 0,
          explanation: "Tepat! Pe-an + pandang = pemandangan."
        },
        {
          title: "Pos 7: Menulis Kalimat Langsung dengan Tanda Petik (\")",
          material: "Kalimat langsung diapit tanda petik ganda (\"). Contoh: Ibu berkata, \"Ayo makan.\"",
          question: "Penulisan petikan ucapan langsung yang benar?",
          options: ["Ibu berkata, \"Ayo makan!\"", "Ibu berkata Ayo makan!", "Ibu berkata 'Ayo makan'"],
          correct: 0,
          explanation: "Benar! Diapit tanda petik ganda (\")."
        },
        {
          title: "Pos 8: Menulis Paragraf Deskripsi",
          material: "Paragraf deskripsi menggambarkan objek dengan panca indra.",
          question: "Paragraf yang melukiskan bentuk dan warna dinamakan?",
          options: ["Paragraf Deskripsi", "Paragraf Narasi", "Paragraf Persuasi"],
          correct: 0,
          explanation: "Tepat! Deskripsi melukiskan ciri fisik."
        },
        {
          title: "Pos 9: Menulis Kata Hubung 'Sehingga'",
          material: "Kata hubung 'sehingga' menyatakan hubungan sebab-akibat.",
          question: "Budi rajin belajar ... ia mendapat nilai sepuluh.",
          options: ["sehingga", "tetapi", "atau"],
          correct: 0,
          explanation: "Benar! Menyatakan akibat (sehingga)."
        },
        {
          title: "Pos 10: Menulis Kata Berulang Berimbuhan",
          material: "Contoh: lari-lari, melompat-lompat, buah-buahan.",
          question: "Penulisan kata ulang berimbuhan yang tepat adalah?",
          options: ["Tumbuh-tumbuhan", "Tumbuh tumbuhan", "Tumbuhan-tumbuhan"],
          correct: 0,
          explanation: "Tepat! Tumbuh-tumbuhan."
        },
        {
          title: "Pos 11: Menulis Kata Baku 'Izin'",
          material: "Bentuk baku 'izin' memakai huruf z, bukan 'ijin'.",
          question: "Penulisan kata yang sesuai EYD adalah?",
          options: ["Izin", "Ijin", "Idzin"],
          correct: 0,
          explanation: "Benar! Kata baku adalah 'izin'."
        },
        {
          title: "Pos 12: Menulis Kerangka Karangan",
          material: "Kerangka karangan memuat poin-poin utama sebelum mulai menulis.",
          question: "Fungsi utama membuat kerangka karangan adalah?",
          options: ["Agar tulisan terstruktur dan tidak melenceng", "Agar kertas cepat habis", "Agar tidak perlu merevisi"],
          correct: 0,
          explanation: "Tepat! Membantu menjaga alur penulisan."
        },
        {
          title: "Pos 13: Menulis Surat Pribadi Pendek",
          material: "Surat pribadi berisi salam pembuka, isi, salam penutup, dan nama pengirim.",
          question: "Bagian awal surat pribadi biasanya memuat?",
          options: ["Salam pembuka dan menanyakan kabar", "Daftar belanja", "Kesimpulan lapor"],
          correct: 0,
          explanation: "Benar! Dimulai dengan salam hangat."
        },
        {
          title: "Pos 14: Menulis Ringkasan Cerita",
          material: "Ringkasan mencatat ide-ide pokok tanpa mengubah isi asli.",
          question: "Saat menulis ringkasan cerita, kita harus?",
          options: ["Mengambil inti ide pokok cerita", "Menambah cerita baru", "Mengubah nama tokoh"],
          correct: 0,
          explanation: "Tepat! Mengambil poin-poin utama."
        },
        {
          title: "🚩 Pos 15: Puncak Karangan Narasi",
          material: "Tulisan narasi berisi urutan peristiwa bermakna dengan alur jelas.",
          question: "Ciri utama karangan narasi yang baik adalah?",
          options: ["Memiliki alur cerita, tokoh, dan urutan waktu", "Memuat rumus matematika", "Hanya berisi daftar kata benda"],
          correct: 0,
          explanation: "Hebat! Narasi bercerita tentang peristiwa."
        }
      ]
    }
  },
  "Kelas 4": {
    icon: "🏜️",
    theme: "Gurun Semantik",
    desc: "15 Pos: Antonim-sinonim-hiponim hingga FPB, KPK & pecahan",
    "Membaca": {
      name: "🏜️ Lembah Semantik (15 Pos)",
      positions: [
        {
          title: "Pos 1: Sinonim Lanjutan",
          material: "Sinonim = persamaan arti kata.",
          question: "Sinonim dari kata 'Flora' adalah?",
          options: ["Tumbuhan", "Hewan", "Batuan"],
          correct: 0,
          explanation: "Benar! Flora berarti dunia tumbuhan."
        },
        {
          title: "Pos 2: Antonim Lanjutan",
          material: "Antonim = lawan kata.",
          question: "Antonim dari kata 'Fauna' adalah?",
          options: ["Flora (Tumbuhan)", "Hewan", "Alam"],
          correct: 0,
          explanation: "Tepat! Fauna (hewan) berpasangan dengan Flora (tumbuhan)."
        },
        {
          title: "Pos 3: Hiponim (Kata Khusus)",
          material: "Hiponim adalah anggota spesifik dari kategori umum (hipernim).",
          question: "Merpati terhadap kata 'Burung' kedudukannya adalah?",
          options: ["Hiponim (Kata khusus)", "Hipernim (Kata umum)", "Sinonim"],
          correct: 0,
          explanation: "Benar! Merpati adalah contoh khusus (hiponim) dari burung."
        },
        {
          title: "Pos 4: Awalan Me- (Perubahan Bentuk)",
          material: "me- + baca = membaca; me- + potong = memotong.",
          question: "Awalan me- ditambah 'pukul' menjadi?",
          options: ["Memukul", "Mepukul", "Menyukul"],
          correct: 0,
          explanation: "Tepat! me- bertemu P melebur jadi memukul."
        },
        {
          title: "Pos 5: Awalan Ber- (Perubahan Bentuk)",
          material: "ber- + renang = berenang (r melebur).",
          question: "Awalan ber- ditambah 'renang' menjadi?",
          options: ["Berenang", "Berrenang", "Berenang-renang"],
          correct: 0,
          explanation: "Benar! Huruf r melebur menjadi berenang."
        },
        {
          title: "Pos 6: Awalan Di- Kata Kerja vs Kata Depan",
          material: "Awalan di- kata kerja digabung (dimakan); di- tempat dipisah (di pasar).",
          question: "Penulisan kata kerja pasif yang benar?",
          options: ["dimakan", "di makan", "di-makan"],
          correct: 0,
          explanation: "Tepat! Kata kerja pasif digabung: dimakan."
        },
        {
          title: "Pos 7: Teks Wawancara 5W+1H",
          material: "Apa, Siapa, Kapan, Di mana, Mengapa, Bagaimana.",
          question: "Kata tanya untuk menanyakan sebab/alasan adalah?",
          options: ["Mengapa", "Di mana", "Kapan"],
          correct: 0,
          explanation: "Benar! 'Mengapa' menanyakan sebab/alasan."
        },
        {
          title: "Pos 8: Kata Tanya 'Bagaimana'",
          material: "Bagaimana menanyakan cara, proses, atau keadaan.",
          question: "Kata tanya untuk menanyakan cara/proses adalah?",
          options: ["Bagaimana", "Siapa", "Berapa"],
          correct: 0,
          explanation: "Tepat! 'Bagaimana' menanyakan proses/cara."
        },
        {
          title: "Pos 9: Unsur Cerita - Alur",
          material: "Alur adalah rangkaian peristiwa dalam cerita.",
          question: "Jalan cerita/rangkaian peristiwa dinamakan?",
          options: ["Alur/Plot", "Latar", "Tema"],
          correct: 0,
          explanation: "Benar! Rangkaian peristiwa disebut alur."
        },
        {
          title: "Pos 10: Denotatif (Makna Sebenarnya)",
          material: "Makna denotatif = lugas/sesuai kamus.",
          question: "Manakah kalimat bermakna denotatif?",
          options: ["Budi makan pisang", "Budi menjadi anak emas", "Budi gigit jari"],
          correct: 0,
          explanation: "Tepat! 'Makan pisang' bermakna sebenarnya."
        },
        {
          title: "Pos 11: Konotatif (Makna Kiasan)",
          material: "Makna konotatif = kiasan/sindiran.",
          question: "Manakah kalimat bermakna konotatif?",
          options: ["Ia adalah bunga desa", "Bunga itu berwarna merah", "Taman penuh bunga"],
          correct: 0,
          explanation: "Benar! 'Bunga desa' kiasan gadis paling cantik."
        },
        {
          title: "Pos 12: Kata Baku",
          material: "Kata baku sesuai standar Ejaan Bahasa Indonesia.",
          question: "Bentuk baku dari kata tidak resmi 'apotik' adalah?",
          options: ["Apotek", "Apotik", "Apotekh"],
          correct: 0,
          explanation: "Tepat! Bentuk baku adalah Apotek."
        },
        {
          title: "Pos 13: Kata Baku 'Izin'",
          material: "Penggunaan huruf z dalam kata baku.",
          question: "Manakah kata baku yang tepat?",
          options: ["Izin", "Ijin", "Idjin"],
          correct: 0,
          explanation: "Benar! Kata baku adalah Izin."
        },
        {
          title: "Pos 14: Konjungsi 'Namun' & 'Tetapi'",
          material: "Konjungsi pertentangan untuk menghubungkan ide berlawanan.",
          question: "Kata hubung pertentangan yang tepat adalah?",
          options: ["Tetapi", "Dan", "Sehingga"],
          correct: 0,
          explanation: "Tepat! 'Tetapi' menyatakan pertentangan."
        },
        {
          title: "🚩 Pos 15: Puncak Evaluasi Teks",
          material: "Evaluasi teks memerlukan kecermatan memahami gagasan.",
          question: "Paragraf yang memuat pokok pikiran di awal dinamakan?",
          options: ["Deduktif", "Induktif", "Narasi"],
          correct: 0,
          explanation: "Hebat! Paragraf deduktif menaruh pokok pikiran di awal."
        }
      ]
    },
    "Menghitung": {
      name: "💧 Danau Pecahan (15 Pos)",
      positions: [
        {
          title: "Pos 1: Pecahan Senilai",
          material: "Kalikan/bagikan pembilang & penyebut dengan angka sama.",
          question: "Bentuk sederhana dari 12/18 adalah?",
          options: ["2/3", "4/6", "6/9"],
          correct: 0,
          explanation: "Benar! Dibagi FPB (6) menjadi 2/3."
        },
        {
          title: "Pos 2: Penjumlahan Pecahan Beda Penyebut",
          material: "Samakan penyebut dulu menggunakan KPK!",
          question: "1/2 + 1/3 = ?",
          options: ["5/6", "2/5", "1/6"],
          correct: 0,
          explanation: "Tepat! KPK=6. (3+2)/6 = 5/6."
        },
        {
          title: "Pos 3: Pengurangan Pecahan Beda Penyebut",
          material: "Samakan penyebut dengan KPK.",
          question: "3/4 - 1/2 = ?",
          options: ["1/4", "2/2", "2/4"],
          correct: 0,
          explanation: "Benar! KPK=4. 3/4 - 2/4 = 1/4."
        },
        {
          title: "Pos 4: Menentukan FPB",
          material: "FPB = Faktor Persekutuan Terbesar.",
          question: "FPB dari 12 dan 18 adalah?",
          options: ["6", "3", "36"],
          correct: 0,
          explanation: "Tepat! Faktor bersama terbesar adalah 6."
        },
        {
          title: "Pos 5: Menentukan KPK",
          material: "KPK = Kelipatan Persekutuan Terkecil.",
          question: "KPK dari 4 dan 6 adalah?",
          options: ["12", "24", "2"],
          correct: 0,
          explanation: "Benar! Kelipatan terkecil bersama adalah 12."
        },
        {
          title: "Pos 6: Mengubah Pecahan ke Desimal",
          material: "Ubah penyebut ke 10, 100, atau bagi langsung.",
          question: "Pecahan 1/4 dalam desimal adalah?",
          options: ["0.25", "0.4", "0.5"],
          correct: 0,
          explanation: "Tepat! 1/4 = 25/100 = 0.25."
        },
        {
          title: "Pos 7: Mengubah Pecahan ke Persen",
          material: "Persen = per seratus (%). Kalikan pecahan dengan 100%.",
          question: "Pecahan 2/5 sama dengan berapa persen?",
          options: ["40%", "20%", "50%"],
          correct: 0,
          explanation: "Benar! (2/5) × 100% = 40%."
        },
        {
          title: "Pos 8: Pembulatan Desimal",
          material: "Jika angka belakang ≥5 bulatkan ke atas.",
          question: "Hasil pembulatan 3.7 ke satuan terdekat adalah?",
          options: ["4", "3", "3.5"],
          correct: 0,
          explanation: "Tepat! Angka 7 ≥ 5, jadi dibulatkan ke 4."
        },
        {
          title: "Pos 9: Jenis-Jenis Sudut",
          material: "Lancip (<90°), Siku-siku (=90°), Tumpul (>90°).",
          question: "Sudut yang besarnya persis 90° dinamakan?",
          options: ["Sudut Siku-Siku", "Sudut Lancip", "Sudut Tumpul"],
          correct: 0,
          explanation: "Benar! Sudut 90° adalah sudut siku-siku."
        },
        {
          title: "Pos 10: Sudut Lancip",
          material: "Besar sudut lancip kurang dari 90°.",
          question: "Sudut besarnya 45° termasuk jenis sudut?",
          options: ["Lancip", "Siku-Siku", "Tumpul"],
          correct: 0,
          explanation: "Tepat! 45° < 90° = sudut lancip."
        },
        {
          title: "Pos 11: Luas Persegi Panjang",
          material: "Luas = panjang × lebar.",
          question: "Persegi panjang p = 8 cm, l = 5 cm. Luasnya?",
          options: ["40 cm²", "26 cm²", "13 cm²"],
          correct: 0,
          explanation: "Benar! Luas = 8 × 5 = 40 cm²."
        },
        {
          title: "Pos 12: Keliling Persegi Panjang",
          material: "Keliling = 2 × (p + l).",
          question: "Persegi panjang p = 10 cm, l = 6 cm. Kelilingnya?",
          options: ["32 cm", "60 cm²", "16 cm"],
          correct: 0,
          explanation: "Tepat! 2 × (10 + 6) = 32 cm."
        },
        {
          title: "Pos 13: Diagram Batang Dasar",
          material: "Membaca tinggi batang untuk mengetahui nilai data.",
          question: "Siswa suka Apel=10, Jeruk=15, Mangga=8. Buah paling favorit?",
          options: ["Jeruk", "Apel", "Mangga"],
          correct: 0,
          explanation: "Benar! Jeruk memiliki batang paling tinggi (15)."
        },
        {
          title: "Pos 14: Operasi Hitung Pecahan Campuran",
          material: "Ubah ke pecahan biasa terlebih dahulu.",
          question: "Hasil dari 1 1/2 + 1/2 = ?",
          options: ["2", "1.5", "2.5"],
          correct: 0,
          explanation: "Tepat! 1.5 + 0.5 = 2."
        },
        {
          title: "🚩 Pos 15: Puncak Konversi Pecahan",
          material: "3/4 = 0.75 = 75%.",
          question: "Bentuk persen dari pecahan 3/4 adalah?",
          options: ["75%", "50%", "80%"],
          correct: 0,
          explanation: "Hebat! (3/4) × 100% = 75%."
        }
      ]
    },
    "Menulis": {
      name: "✍️ Lembah Karangan Eksposisi (15 Pos)",
      positions: [
        {
          title: "Pos 1: Menulis Paragraf Eksposisi",
          material: "Paragraf eksposisi bertujuan memaparkan fakta atau informasi jelas.",
          question: "Tujuan utama tulisan eksposisi adalah?",
          options: ["Menjelaskan informasi dan pengetahuan berdasarkan fakta", "Menghibur dengan cerita fiktif", "Memaksa orang membeli barang"],
          correct: 0,
          explanation: "Benar! Eksposisi memaparkan fakta dan pengetahuan."
        },
        {
          title: "Pos 2: Menulis Imbuhan 'ber-an'",
          material: "Imbuhan ber-an menyatakan kegiatan berbalasan / banyak. Contoh: berlarian, berdatangan.",
          question: "Penulisan imbuhan 'ber-an' pada 'lari' adalah?",
          options: ["Berlarian", "Berlarikan", "Berlari-larian"],
          correct: 0,
          explanation: "Tepat! Ber- + lari + an = berlarian."
        },
        {
          title: "Pos 3: Menulis Kata Baku 'Kualitas'",
          material: "Kata baku yang tepat adalah 'kualitas' (bukan 'kwalitas').",
          question: "Ejaan baku yang tepat adalah?",
          options: ["Kualitas", "Kwalitas", "Kualitets"],
          correct: 0,
          explanation: "Benar! Bentuk baku adalah 'kualitas'."
        },
        {
          title: "Pos 4: Menulis Tanda Titik Dua (:)",
          material: "Tanda titik dua (:) digunakan pada akhir pernyataan yang diikuti rincian.",
          question: "Penulisan titik dua yang tepat adalah?",
          options: ["Ibu membeli alat tulis: pensil, buku, dan penggaris.", "Ibu membeli: alat tulis pensil", "Ibu membeli alat tulis, : pensil"],
          correct: 0,
          explanation: "Tepat! Digunakan sebelum rincian."
        },
        {
          title: "Pos 5: Menulis Kata Penghubung Antarkalimat 'Oleh karena itu'",
          material: "Kata 'Oleh karena itu' diawali huruf besar dan selalu diikuti tanda koma (,).",
          question: "Penulisan penutup simpulan yang benar adalah?",
          options: ["Oleh karena itu, kita harus rajin belajar.", "Oleh karena itu kita harus belajar", "oleh karena itu, kita harus belajar"],
          correct: 0,
          explanation: "Benar! 'Oleh karena itu,' diikuti tanda koma."
        },
        {
          title: "Pos 6: Menulis Laporan Hasil Wawancara",
          material: "Laporan wawancara memuat nama narasumber, pewawancara, waktu, dan hasil.",
          question: "Orang yang memberikan informasi dalam wawancara disebut?",
          options: ["Narasumber", "Pewawancara", "Notulis"],
          correct: 0,
          explanation: "Tepat! Narasumber memberikan informasi."
        },
        {
          title: "Pos 7: Menulis Puisi Bebas",
          material: "Puisi bebas tidak terikat jumlah suku kata baku.",
          question: "Pilihan kata yang indah dalam puisi disebut?",
          options: ["Diksi", "Rima", "Bait"],
          correct: 0,
          explanation: "Benar! Diksi adalah pemilihan kata."
        },
        {
          title: "Pos 8: Menulis Poster Edukasi",
          material: "Bahasa poster harus singkat, padat, dan persuasif (mengajak).",
          question: "Ciri tulisan pada poster yang baik adalah?",
          options: ["Singkat, menarik, dan mudah diingat", "Sangat panjang dan penuh paragraf", "Menggunakan bahasa rumit"],
          correct: 0,
          explanation: "Tepat! Singkat, komunikatif, dan menarik."
        },
        {
          title: "Pos 9: Menulis Kata Baku 'Sistem'",
          material: "Bentuk baku yang tepat adalah 'sistem' (bukan 'sistim').",
          question: "Ejaan KBBI yang baku adalah?",
          options: ["Sistem", "Sistim", "Sistema"],
          correct: 0,
          explanation: "Benar! Kata baku adalah 'sistem'."
        },
        {
          title: "Pos 10: Menulis Imbuhan 'ter-'",
          material: "Imbuhan ter- menyatakan tidak sengaja atau paling. Contoh: terbesar, tertidur.",
          question: "Kata 'terpandai' memiliki arti?",
          options: ["Paling pandai", "Tidak sengaja pandai", "Akan pandai"],
          correct: 0,
          explanation: "Tepat! 'Ter-' pada terpandai artinya paling."
        },
        {
          title: "Pos 11: Menulis Kalimat Tanggapan",
          material: "Kalimat tanggapan disampaikan dengan santun dan disertai alasan.",
          question: "Cara memberikan tanggapan tulisan teman yang baik adalah?",
          options: ["Menyampaikan kelebihan dan saran perbaikan dengan santun", "Mencela tulisan teman", "Acuh tak acuh"],
          correct: 0,
          explanation: "Benar! Disampaikan dengan sopan disertai solusi."
        },
        {
          title: "Pos 12: Menulis Paragraf Persuasi",
          material: "Persuasi bertujuan membujuk atau mempengaruhi pembaca.",
          question: "Kata penanda tulisan persuasi contohnya?",
          options: ["Marilah, hendaknya, ayo", "Kemarin, besok, lusa", "Satu, dua, tiga"],
          correct: 0,
          explanation: "Tepat! Menggunakan kata ajakan (marilah, hendaknya)."
        },
        {
          title: "Pos 13: Menulis Surat Resmi Sekolah",
          material: "Surat resmi menggunakan kop surat, nomor surat, perihal, dan stempel.",
          question: "Bagian paling atas surat resmi dinamakan?",
          options: ["Kop Surat / Kepala Surat", "Salam Penutup", "Isi Surat"],
          correct: 0,
          explanation: "Benar! Bagian paling atas adalah Kop Surat."
        },
        {
          title: "Pos 14: Menulis Tanda Garis Miring (/)",
          material: "Garis miring digunakan dalam nomor surat, alamat, atau pengganti kata 'atau'.",
          question: "Arti garis miring pada 'Rp10.000/lembar' adalah?",
          options: ["Tiap / Setiap", "Atau", "Dan"],
          correct: 0,
          explanation: "Tepat! Berarti tiap atau setiap lembar."
        },
        {
          title: "🚩 Pos 15: Puncak Menyunting Teks",
          material: "Menyunting adalah memperbaiki kesalahan ejaan, tanda baca, dan kata tidak efektif.",
          question: "Proses merapikan tulisan sebelum diterbitkan dinamakan?",
          options: ["Menyunting / Mengedit", "Membaca nyaring", "Menghafal"],
          correct: 0,
          explanation: "Hebat! Menyunting memperbaiki ejaan dan susunan kalimat."
        }
      ]
    }
  },
  "Kelas 5": {
    icon: "🌳",
    theme: "Hutan Majas",
    desc: "15 Pos: Gaya bahasa, teks eksplanasi hingga bangun ruang & debit",
    "Membaca": {
      name: "🌳 Hutan Majas (15 Pos)",
      positions: [
        {
          title: "Pos 1: Majas Personifikasi",
          material: "Personifikasi = menganggap benda mati berprilaku seperti manusia.",
          question: "'Nyiur meliuk-liuk melambai di pantai'. Termasuk majas?",
          options: ["Personifikasi", "Metafora", "Hiperbola"],
          correct: 0,
          explanation: "Benar! Nyiur (pohon kelapa) seolah melambai seperti manusia."
        },
        {
          title: "Pos 2: Majas Metafora",
          material: "Metafora = perbandingan langsung tanpa kata pembanding.",
          question: "'Raja siang telah terbit'. Termasuk majas?",
          options: ["Metafora", "Personifikasi", "Hiperbola"],
          correct: 0,
          explanation: "Tepat! Raja siang perbandingan langsung untuk Matahari."
        },
        {
          title: "Pos 3: Majas Hiperbola",
          material: "Hiperbola = ungkapan berlebihan.",
          question: "'Suaranya menggelegar membelah angkasa'. Termasuk majas?",
          options: ["Hiperbola", "Metafora", "Personifikasi"],
          correct: 0,
          explanation: "Benar! Sangat berlebihan (membelah angkasa)."
        },
        {
          title: "Pos 4: Teks Prosedur - Struktur",
          material: "Tujuan → Material/Bahan → Langkah-Langkah.",
          question: "Bagian teks prosedur yang memuat urutan tindakan adalah?",
          options: ["Langkah-Langkah", "Tujuan", "Judul"],
          correct: 0,
          explanation: "Tepat! Langkah-langkah memuat urutan."
        },
        {
          title: "Pos 5: Teks Eksplanasi - Karakter",
          material: "Teks eksplanasi menjelaskan sebab-akibat fenomena secara ilmiah.",
          question: "Teks yang menjelaskan proses terbentuknya pelangi adalah?",
          options: ["Teks Eksplanasi", "Teks Narasi", "Teks Dongeng"],
          correct: 0,
          explanation: "Benar! Menjelaskan fenomena alam secara ilmiah."
        },
        {
          title: "Pos 6: Meringkas Paragraf",
          material: "Gunakan ide-ide pokok setiap paragraf untuk membuat ringkasan.",
          question: "Langkah awal meringkas teks adalah?",
          options: ["Membaca seluruh teks cermat", "Menghapus judul", "Mengarang cerita"],
          correct: 0,
          explanation: "Tepat! Membaca seluruh teks adalah langkah awal."
        },
        {
          title: "Pos 7: Kalimat Efektif - Hemat Kata",
          material: "Hindari kata-kata mubazir.",
          question: "Manakah contoh kalimat efektif?",
          options: ["Para tamu sudah hadir", "Para tamu-tamu sudah hadir", "Sangat banyak tamu sekali"],
          correct: 0,
          explanation: "Benar! 'Para tamu' sudah menunjukkan jamak (hemat kata)."
        },
        {
          title: "Pos 8: Arti Idiom 'Buah Tangan'",
          material: "Buah tangan artinya oleh-oleh.",
          question: "Arti dari idiom 'Buah tangan' adalah?",
          options: ["Oleh-oleh", "Hasil karya", "Anak kecil"],
          correct: 0,
          explanation: "Tepat! Buah tangan = oleh-oleh."
        },
        {
          title: "Pos 9: Arti Idiom 'Buah Bibir'",
          material: "Buah bibir artinya bahan pembicaraan orang banyak.",
          question: "Arti idiom 'Buah bibir' adalah?",
          options: ["Bahan pembicaraan", "Oleh-oleh", "Makanan lezat"],
          correct: 0,
          explanation: "Benar! Buah bibir = bahan obrolan."
        },
        {
          title: "Pos 10: Teks Narasi Sejarah",
          material: "Teks narasi sejarah memuat informasi fakta peristiwa masa lalu.",
          question: "Unsur penting dalam teks sejarah adalah?",
          options: ["Tokoh, tempat, dan waktu peristiwa nyata", "Khayalan", "Dongeng fiktif"],
          correct: 0,
          explanation: "Tepat! Memuat fakta peristiwa nyata."
        },
        {
          title: "Pos 11: Tanda Baca Titik Dua (:)",
          material: "Titik dua digunakan sesudah kata yang memerlukan pemerincian.",
          question: "Tanda baca tepat sebelum daftar rincian barang adalah?",
          options: ["Titik Dua (:)", "Koma (,)", "Titik Koma (;)"],
          correct: 0,
          explanation: "Benar! Titik dua digunakan sebelum perincian."
        },
        {
          title: "Pos 12: Kata Baku 'Aktif'",
          material: "Bentuk baku menggunakan huruf f.",
          question: "Manakah bentuk kata baku yang benar?",
          options: ["Aktif", "Aktip", "Aktiph"],
          correct: 0,
          explanation: "Tepat! Bentuk baku adalah Aktif."
        },
        {
          title: "Pos 13: Membaca Tabel & Infografis",
          material: "Cermati judul baris dan kolom tabel.",
          question: "Tujuan utama infografis adalah?",
          options: ["Menyampaikan informasi secara visual dan mudah", "Menghias buku", "Membuat cerita fiksi"],
          correct: 0,
          explanation: "Benar! Menyampaikan data visual menarik."
        },
        {
          title: "Pos 14: Kalimat Tanggapan Kritis",
          material: "Tanggapan harus disertai alasan logis dan santun.",
          question: "Ciri tanggapan yang baik adalah?",
          options: ["Disertai alasan logis dan bahasa santun", "Marah-marah", "Tanpa alasan"],
          correct: 0,
          explanation: "Tepat! Menggunakan alasan logis & santun."
        },
        {
          title: "🚩 Pos 15: Puncak Bahasa Sastra",
          material: "Pahami idiom 'Gigit jari'.",
          question: "Arti idiom 'Gigit jari' adalah?",
          options: ["Kecewa", "Senang", "Gembira"],
          correct: 0,
          explanation: "Hebat! Gigit jari berarti merasa kecewa."
        }
      ]
    },
    "Menghitung": {
      name: "🏔️ Gunung Bangun Ruang (15 Pos)",
      positions: [
        {
          title: "Pos 1: Sifat-Sifat Kubus",
          material: "6 sisi persegi kongruen, 12 rusuk sama panjang, 8 titik sudut.",
          question: "Berapa jumlah rusuk pada kubus?",
          options: ["12", "6", "8"],
          correct: 0,
          explanation: "Benar! Kubus memiliki 12 rusuk sama panjang."
        },
        {
          title: "Pos 2: Titik Sudut Kubus",
          material: "Kubus memiliki 8 titik sudut.",
          question: "Jumlah titik sudut pada kubus adalah?",
          options: ["8", "12", "6"],
          correct: 0,
          explanation: "Tepat! Memiliki 8 titik sudut."
        },
        {
          title: "Pos 3: Sifat-Sifat Balok",
          material: "Memiliki 6 sisi berbentuk persegi panjang (3 pasang sejajar).",
          question: "Berapa jumlah pasang sisi sejajar pada balok?",
          options: ["3 pasang", "6 pasang", "2 pasang"],
          correct: 0,
          explanation: "Benar! Terdapat 3 pasang sisi kongruen sejajar."
        },
        {
          title: "Pos 4: Jaring-Jaring Kubus",
          material: "Terdiri dari 6 persegi kongruen.",
          question: "Berapa banyak persegi pada jaring-jaring kubus?",
          options: ["6", "4", "8"],
          correct: 0,
          explanation: "Tepat! Ada 6 persegi."
        },
        {
          title: "Pos 5: Volume Kubus",
          material: "Volume = s × s × s = s³.",
          question: "Kubus dengan panjang rusuk 5 cm memiliki volume?",
          options: ["125 cm³", "25 cm³", "150 cm³"],
          correct: 0,
          explanation: "Benar! 5 × 5 × 5 = 125 cm³."
        },
        {
          title: "Pos 6: Volume Balok",
          material: "Volume = p × l × t.",
          question: "Balok p = 10 cm, l = 5 cm, t = 4 cm. Volumenya?",
          options: ["200 cm³", "100 cm³", "19 cm³"],
          correct: 0,
          explanation: "Tepat! 10 × 5 × 4 = 200 cm³."
        },
        {
          title: "Pos 7: Mencar Sisi dari Volume Kubus",
          material: "s = ∛Volume.",
          question: "Kubus volumenya 64 cm³. Panjang sisinya?",
          options: ["4 cm", "8 cm", "16 cm"],
          correct: 0,
          explanation: "Benar! 4 × 4 × 4 = 64, jadi sisinya 4 cm."
        },
        {
          title: "Pos 8: Rumus Skala Peta",
          material: "Skala = Jarak Pada Peta ÷ Jarak Sebenarnya.",
          question: "Skala 1 : 100.000 artinya 1 cm peta mewakili berapa cm sebenarnya?",
          options: ["100.000 cm", "1.000 cm", "10 cm"],
          correct: 0,
          explanation: "Tepat! 1 cm mewakili 100.000 cm (1 km)."
        },
        {
          title: "Pos 9: Menghitung Jarak Sebenarnya",
          material: "Jarak Sebenarnya = Jarak Peta × Skala.",
          question: "Skala 1 : 200.000, jarak peta 3 cm. Jarak sebenarnya?",
          options: ["6 km", "60 km", "600 m"],
          correct: 0,
          explanation: "Benar! 3 × 200.000 = 600.000 cm = 6 km."
        },
        {
          title: "Pos 10: Rumus Kecepatan",
          material: "Kecepatan (K) = Jarak (J) ÷ Waktu (W).",
          question: "Jarak 120 km ditempuh dalam 2 jam. Kecepatannya?",
          options: ["60 km/jam", "240 km/jam", "100 km/jam"],
          correct: 0,
          explanation: "Tepat! 120 ÷ 2 = 60 km/jam."
        },
        {
          title: "Pos 11: Rumus Debit Air",
          material: "Debit = Volume ÷ Waktu.",
          question: "Air mengalir 60 Liter dalam 2 menit. Debit air?",
          options: ["30 L/menit", "120 L/menit", "15 L/menit"],
          correct: 0,
          explanation: "Benar! 60 ÷ 2 = 30 L/menit."
        },
        {
          title: "Pos 12: Luas Segitiga",
          material: "Luas Segitiga = (alas × tinggi) ÷ 2.",
          question: "Segitiga alas = 10 cm, tinggi = 8 cm. Luasnya?",
          options: ["40 cm²", "80 cm²", "20 cm²"],
          correct: 0,
          explanation: "Tepat! (10 × 8) ÷ 2 = 40 cm²."
        },
        {
          title: "Pos 13: Luas Jajar Genjang",
          material: "Luas Jajar Genjang = alas × tinggi.",
          question: "Jajar genjang alas = 12 cm, tinggi = 5 cm. Luasnya?",
          options: ["60 cm²", "30 cm²", "17 cm²"],
          correct: 0,
          explanation: "Benar! Luas = 12 × 5 = 60 cm²."
        },
        {
          title: "Pos 14: Pengolahan Data - Modus",
          material: "Modus adalah nilai data yang paling sering muncul.",
          question: "Data nilai: 7, 8, 8, 9, 8, 10. Modusnya adalah?",
          options: ["8", "7", "9"],
          correct: 0,
          explanation: "Tepat! Nilai 8 muncul 3 kali."
        },
        {
          title: "🚩 Pos 15: Puncak Problem Solving",
          material: "Evaluasi konversi debit.",
          question: "30 L/menit sama dengan berapa L/detik?",
          options: ["0.5 L/detik", "2 L/detik", "5 L/detik"],
          correct: 0,
          explanation: "Hebat! 30 ÷ 60 detik = 0.5 L/detik."
        }
      ]
    },
    "Menulis": {
      name: "✍️ Sanggar Penulisan Laporan & Teks Eksplanasi (15 Pos)",
      positions: [
        {
          title: "Pos 1: Menulis Teks Eksplanasi Ilmiah",
          material: "Teks eksplanasi menjelaskan proses terjadinya fenomena alam/sosial secara logis.",
          question: "Struktur utama tulisan teks eksplanasi secara berurutan adalah?",
          options: ["Pernyataan Umum - Deretan Penjelas - Simpulan/Interpretasi", "Abstraksi - Orientasi - Koda", "Tesis - Argumentasi - Rekomendasi"],
          correct: 0,
          explanation: "Benar! Dimulai pernyataan umum, deretan penjelas, dan simpulan."
        },
        {
          title: "Pos 2: Menulis Kata Baku 'Aktivitas'",
          material: "Kata baku yang tepat adalah 'aktivitas' (pakai v, bukan f).",
          question: "Penulisan kata baku KBBI yang benar adalah?",
          options: ["Aktivitas", "Aktifitas", "Aktifity"],
          correct: 0,
          explanation: "Tepat! Kata baku adalah 'aktivitas'."
        },
        {
          title: "Pos 3: Menulis Ringkasan Laporan Pengamatan",
          material: "Ringkasan memuat fakta lokasi, waktu, objek, dan hasil pengamatan.",
          question: "Bahasa dalam tulisan laporan pengamatan harus bersifat?",
          options: ["Obyektif, lugas, dan sesuai fakta", "Subyektif dan penuh perasaan", "Fiktif dan rekaan"],
          correct: 0,
          explanation: "Benar! Laporan harus obyektif sesuai fakta."
        },
        {
          title: "Pos 4: Menulis Konjungsi Kausalitas 'Sebab'",
          material: "Konjungsi kausalitas menghubungkan sebab dan akibat. Contoh: karena, sebab, oleh karena.",
          question: "Kata hubung yang menyatakan alasan sebab adalah?",
          options: ["karena", "sebelum", "meskipun"],
          correct: 0,
          explanation: "Tepat! 'Karena' menyatakan hubungan sebab."
        },
        {
          title: "Pos 5: Menulis Kata Berimbuhan 'meng-kan'",
          material: "Meng-kan + tuju = mengarahkan/menujukan.",
          question: "Imbuhan 'meng-kan' + 'kabul' ditulis?",
          options: ["Mengabulkan", "Mengkabulkan", "Meng-kabulkan"],
          correct: 0,
          explanation: "Benar! K lebur menjadi ng -> mengabulkan."
        },
        {
          title: "Pos 6: Menulis Teks Formulir Pendaftaran",
          material: "Formulir diisi dengan data diri lengkap, jujur, dan jelas.",
          question: "Penulisan nomor telepon pada formulir sebaiknya ditulis?",
          options: ["Jelas dan tepat angka-angkanya", "Diperkirakan saja", "Dikosongkan"],
          correct: 0,
          explanation: "Tepat! Harus jelas dan akurat."
        },
        {
          title: "Pos 7: Menulis Teks Iklan Komersial",
          material: "Iklan memuat keunggulan produk dengan bahasa persuasif dan jujur.",
          question: "Syarat kalimat tulisan iklan yang baik adalah?",
          options: ["Persuasif, padat, dan menarik minat", "Panjang dan berbelit-belit", "Menggunakan istilah asing yang membingungkan"],
          correct: 0,
          explanation: "Benar! Harus persuasif dan menarik minat pembaca."
        },
        {
          title: "Pos 8: Menulis Tanda Kurung ( )",
          material: "Tanda kurung ( ) digunakan untuk mengapit keterangan tambahan atau singkatan.",
          question: "Penulisan singkatan dengan tanda kurung yang benar?",
          options: ["Puskesmas (Pusat Kesehatan Masyarakat)", "Puskesmas [Pusat Kesehatan Masyarakat]", "Puskesmas {Pusat Kesehatan Masyarakat}"],
          correct: 0,
          explanation: "Tepat! Memakai tanda kurung biasa ( )."
        },
        {
          title: "Pos 9: Menulis Kata Baku 'Analisis'",
          material: "Bentuk baku KBBI adalah 'analisis' (bukan 'analisa').",
          question: "Penulisan kata baku yang benar adalah?",
          options: ["Analisis", "Analisa", "Analisa-nya"],
          correct: 0,
          explanation: "Benar! Bentuk baku sesuai KBBI adalah 'analisis'."
        },
        {
          title: "Pos 10: Menulis Karangan Narasi Sejarah",
          material: "Karangan narasi sejarah menyusun riwayat peristiwa berdasarkan garis waktu (kronologis).",
          question: "Urutan peristiwa dalam tulisan sejarah disusun secara?",
          options: ["Kronologis (sesuai urutan waktu)", "Acak tanpa aturan", "Dari masa depan ke masa lalu"],
          correct: 0,
          explanation: "Tepat! Berurutan sesuai garis waktu (kronologis)."
        },
        {
          title: "Pos 11: Menulis Surat Undangan Resmi",
          material: "Surat undangan resmi memuat hari, tanggal, waktu, tempat, dan perihal acara.",
          question: "Di mana letak tanda tangan pembuat surat dalam undangan resmi?",
          options: ["Bagian bawah kanan atau kiri pengirim", "Di paling atas surat", "Di belakang amplop saja"],
          correct: 0,
          explanation: "Benar! Di bagian bawah surat bersama nama dan jabatan."
        },
        {
          title: "Pos 12: Menulis Pantun Nasihat",
          material: "Pantun terdiri dari 4 baris: baris 1-2 sampiran, baris 3-4 isi dengan rima a-b-a-b.",
          question: "Bagian yang memuat pesan moral atau tujuan pada pantun adalah?",
          options: ["Isi (Baris ke-3 dan ke-4)", "Sampiran (Baris ke-1 dan ke-2)", "Judul pantun"],
          correct: 0,
          explanation: "Tepat! Isi berada di baris 3 dan 4."
        },
        {
          title: "Pos 13: Menulis Paragraf Campuran (Deduktif-Induktif)",
          material: "Paragraf campuran menempatkan gagasan utama di awal dan ditegaskan lagi di akhir.",
          question: "Di mana letak penegasan gagasan utama pada paragraf campuran?",
          options: ["Awal dan akhir paragraf", "Hanya di tengah", "Tidak ada gagasan utama"],
          correct: 0,
          explanation: "Benar! Gagasan utama ada di awal dan akhir."
        },
        {
          title: "Pos 14: Menulis Kata Baku 'Nasihat'",
          material: "Kata baku yang benar adalah 'nasihat' (memakai i, bukan e).",
          question: "Penulisan kata baku KBBI yang benar adalah?",
          options: ["Nasihat", "Nasehat", "Nasihatnya"],
          correct: 0,
          explanation: "Tepat! Bentuk baku adalah 'nasihat'."
        },
        {
          title: "🚩 Pos 15: Puncak Penulisan Teks Laporan Utuh",
          material: "Menyusun tulisan laporan utuh dengan ejaan baku, tata bahasa baik, dan struktur rapi.",
          question: "Kriteria tulisan laporan ilmiah yang bernilai tinggi adalah?",
          options: ["Memuat data akurat, ejaan baku, dan sistematika rapi", "Banyak hiasan kata tanpa fakta", "Menggunakan bahasa gaul"],
          correct: 0,
          explanation: "Hebat! Laporan ilmiah membutuhkan data akurat dan bahasa baku."
        }
      ]
    }
  },
  "Kelas 6": {
    icon: "🏖️",
    theme: "Pantai Literasi",
    desc: "15 Pos: Analisis kritis, fakta-opini hingga statistik & peluang",
    "Membaca": {
      name: "🏖️ Pantai Literasi Kritis (15 Pos)",
      positions: [
        {
          title: "Pos 1: Paragraf Argumentasi",
          material: "Argumentasi bertujuan meyakinkan pembaca dengan data dan alasan logis.",
          question: "Paragraf yang menyajikan fakta pendukung argumen dinamakan?",
          options: ["Argumentasi", "Narasi", "Deskripsi"],
          correct: 0,
          explanation: "Benar! Argumentasi didukung argumen & fakta."
        },
        {
          title: "Pos 2: Paragraf Persuasi",
          material: "Persuasi bertujuan membujuk/mengajak pembaca melakukan sesuatu.",
          question: "Paragraf ajakan membeli produk dinamakan?",
          options: ["Persuasi", "Argumentasi", "Eksplanasi"],
          correct: 0,
          explanation: "Tepat! Persuasi bertujuan membujuk/mengajak."
        },
        {
          title: "Pos 3: Menyimpulkan Inferensi",
          material: "Inferensi adalah simpulan tersirat berdasarkan petunjuk teks.",
          question: "Seseorang membawa payung basah dan bajunya menetes. Inferensinya?",
          options: ["Baru saja kehujanan", "Membeli payung baru", "Suka mandi"],
          correct: 0,
          explanation: "Benar! Petunjuk menunjukkan baru saja kehujanan."
        },
        {
          title: "Pos 4: Membedakan Fakta",
          material: "Fakta dapat dibuktikan kebenarannya secara objektif.",
          question: "Manakah kalimat yang merupakan FAKTA?",
          options: ["Indonesia merdeka tahun 1945", "Bunga mawar adalah bunga indah", "Es krim ini enak"],
          correct: 0,
          explanation: "Tepat! Tahun kemerdekaan 1945 adalah fakta objektif."
        },
        {
          title: "Pos 5: Membedakan Opini",
          material: "Opini berisi pendapat/penilaian subjektif seseorang.",
          question: "Manakah kalimat yang merupakan OPINI?",
          options: ["Pelajaran Matematika sangat menyenangkan", "Bumi mengelilingi matahari", "Kucing adalah hewan mamalia"],
          correct: 0,
          explanation: "Benar! Menyenangkan adalah penilaian subjektif (opini)."
        },
        {
          title: "Pos 6: Teks Pidato - Salam & Pendahuluan",
          material: "Pendahuluan berisi ucapan syukur dan penghormatan.",
          question: "Puji syukur kehadirat Tuhan ditempatkan pada bagian?",
          options: ["Pendahuluan Pidato", "Isi Pidato", "Penutup Pidato"],
          correct: 0,
          explanation: "Tepat! Diletakkan di pendahuluan pidato."
        },
        {
          title: "Pos 7: Teks Pidato - Penutup",
          material: "Penutup berisi kesimpulan, permohonan maaf, dan harapan.",
          question: "Ucapan 'Mohon maaf bila ada kata yang kurang berkenan' ada di?",
          options: ["Penutup Pidato", "Pendahuluan Pidato", "Isi Pidato"],
          correct: 0,
          explanation: "Benar! Terdapat pada penutup pidato."
        },
        {
          title: "Pos 8: Analisis Karakter Tritagonis",
          material: "Tritagonis adalah tokoh pembantu/penengah.",
          question: "Tokoh penengah antara protagonis dan antagonis dinamakan?",
          options: ["Tritagonis", "Protagonis", "Figuran"],
          correct: 0,
          explanation: "Tepat! Tritagonis berperan sebagai penengah."
        },
        {
          title: "Pos 9: Kredibilitas Informasi (Hoaks)",
          material: "Ciri hoaks: judul provokatif, tanpa sumber resmi, menyebar kepanikan.",
          question: "Ciri berita hoaks yang harus diwaspadai adalah?",
          options: ["Judul provokatif tanpa sumber resmi", "Ditulis lembaga resmi", "Ada daftar pustaka"],
          correct: 0,
          explanation: "Benar! Provokatif tanpa rujukan resmi adalah ciri hoaks."
        },
        {
          title: "Pos 10: Teks Biografi",
          material: "Teks biografi mengisahkan riwayat hidup tokoh inspiratif.",
          question: "Teks yang menceritakan riwayat hidup B.J. Habibie disebut?",
          options: ["Teks Biografi", "Teks Autografi", "Teks Novel"],
          correct: 0,
          explanation: "Tepat! Teks biografi ditulis orang lain tentang tokoh."
        },
        {
          title: "Pos 11: Makna Tersirat Cerita",
          material: "Makna tersirat tidak tertulis langsung, harus disimpulkan.",
          question: "Makna yang harus disimpulkan dari jalan cerita disebut makna?",
          options: ["Tersirat", "Tersurat", "Denotatif"],
          correct: 0,
          explanation: "Benar! Tersirat = tidak tertulis langsung."
        },
        {
          title: "Pos 12: Makna Tersurat Cerita",
          material: "Makna tersurat tertulis jelas langsung di dalam teks.",
          question: "Informasi yang tertulis jelas di dalam teks dinamakan informasi?",
          options: ["Tersurat", "Tersirat", "Konotatif"],
          correct: 0,
          explanation: "Tepat! Tersurat = tertulis eksplisit."
        },
        {
          title: "Pos 13: Tanggapan Kritik Santun",
          material: "Kritik harus membangun dan disampaikan sopan.",
          question: "Manakah kritik yang santun?",
          options: ["Karyamu bagus, namun akan lebih rapi jika ditambahkan bingkai", "Karyamu jelek sekali", "Aku tidak suka"],
          correct: 0,
          explanation: "Benar! Disertai pujian dan saran membangun."
        },
        {
          title: "Pos 14: Unsur Ekstrinsik Cerita",
          material: "Unsur di luar cerita: latar belakang penulis, kondisi sosial.",
          question: "Latar belakang kehidupan pengarang termasuk unsur?",
          options: ["Ekstrinsik", "Intrinsik", "Antagonis"],
          correct: 0,
          explanation: "Tepat! Unsur luar = ekstrinsik."
        },
        {
          title: "🚩 Pos 15: Puncak Evaluasi Kritis",
          material: "Evaluasi berita secara cermat.",
          question: "Sikap terbaik saat menerima informasi baru di media sosial adalah?",
          options: ["Memeriksa kebenaran sumber sebelum menyebarkan", "Langsung menyebarkan", "Percaya begitu saja"],
          correct: 0,
          explanation: "Hebat! Cek dan verifikasi fakta terlebih dahulu."
        }
      ]
    },
    "Menghitung": {
      name: "🏛️ Kuil Statistika (15 Pos)",
      positions: [
        {
          title: "Pos 1: Mean (Rata-Rata)",
          material: "Mean = Jumlah seluruh data ÷ Banyak data.",
          question: "Nilai: 6, 7, 8, 9, 10. Berapa nilai rata-ratanya (Mean)?",
          options: ["8", "7", "9"],
          correct: 0,
          explanation: "Benar! (6+7+8+9+10)/5 = 40/5 = 8."
        },
        {
          title: "Pos 2: Median (Nilai Tengah)",
          material: "Urutkan data dari terkecil, pilih angka di tengah.",
          question: "Data terurut: 5, 6, 7, 8, 9. Berapa Median-nya?",
          options: ["7", "6", "8"],
          correct: 0,
          explanation: "Tepat! Angka tepat di tengah adalah 7."
        },
        {
          title: "Pos 3: Modus (Paling Sering Muncul)",
          material: "Modus adalah data dengan frekuensi terbanyak.",
          question: "Data: 5, 7, 3, 7, 8, 7. Modusnya adalah?",
          options: ["7", "5", "8"],
          correct: 0,
          explanation: "Benar! Angka 7 muncul 3 kali."
        },
        {
          title: "Pos 4: Diagram Batang - Selisih Data",
          material: "Selisih = Data Tertinggi - Data Terendah.",
          question: "Data tertinggi 50, data terendah 20. Berapa selisihnya?",
          options: ["30", "70", "25"],
          correct: 0,
          explanation: "Tepat! 50 - 20 = 30."
        },
        {
          title: "Pos 5: Diagram Lingkaran Persentase",
          material: "Satu lingkaran penuh = 100%. Siku-siku = 25%.",
          question: "Bagian siku-siku pada diagram lingkaran bernilai berapa persen?",
          options: ["25%", "50%", "75%"],
          correct: 0,
          explanation: "Benar! 90°/360° = 1/4 = 25%."
        },
        {
          title: "Pos 6: Diagram Lingkaran Derajat",
          material: "Satu lingkaran penuh = 360°.",
          question: "Setengah lingkaran (50%) sama dengan berapa derajat?",
          options: ["180°", "90°", "360°"],
          correct: 0,
          explanation: "Tepat! 1/2 × 360° = 180°."
        },
        {
          title: "Pos 7: Perkalian Bilangan Bulat Negatif",
          material: "(+) × (-) = (-) ; (-) × (-) = (+).",
          question: "Hasil dari 6 × (-4) = ?",
          options: ["-24", "24", "-10"],
          correct: 0,
          explanation: "Benar! Positif dikali negatif = negatif (-24)."
        },
        {
          title: "Pos 8: Perkalian Dua Negatif",
          material: "Negatif dikali negatif hasilnya positif.",
          question: "Hasil dari (-5) × (-4) = ?",
          options: ["20", "-20", "-9"],
          correct: 0,
          explanation: "Tepat! Negatif × Negatif = Positif (20)."
        },
        {
          title: "Pos 9: Pembagian Bilangan Bulat",
          material: "(-) ÷ (+) = (-).",
          question: "Hasil dari (-20) ÷ 5 = ?",
          options: ["-4", "4", "-5"],
          correct: 0,
          explanation: "Benar! Negatif dibagi positif = negatif (-4)."
        },
        {
          title: "Pos 10: Luas Permukaan Tabung",
          material: "Selimut tabung = 2 × π × r × t.",
          question: "Jika r = 7 cm, t = 10 cm, berapa luas selimut tabung? (π=22/7)",
          options: ["440 cm²", "220 cm²", "140 cm²"],
          correct: 0,
          explanation: "Tepat! 2 × (22/7) × 7 × 10 = 440 cm²."
        },
        {
          title: "Pos 11: Volume Tabung",
          material: "Volume Tabung = π × r² × t.",
          question: "Tabung r = 7 cm, t = 10 cm. Volumenya? (π=22/7)",
          options: ["1.540 cm³", "440 cm³", "770 cm³"],
          correct: 0,
          explanation: "Benar! (22/7) × 49 × 10 = 1.540 cm³."
        },
        {
          title: "Pos 12: Volume Kerucut",
          material: "Volume Kerucut = 1/3 × π × r² × t.",
          question: "Volume kerucut adalah berapa bagian dari volume tabung dengan alas & tinggi sama?",
          options: ["1/3 bagian", "1/2 bagian", "1/4 bagian"],
          correct: 0,
          explanation: "Tepat! Volume kerucut = 1/3 volume tabung."
        },
        {
          title: "Pos 13: Peluang Kejadian Sederhana",
          material: "Peluang = Kejadian dicari ÷ Total seluruh kemungkinan.",
          question: "Peluang muncul angka genap pada pelemparan 1 dadu (1-6)?",
          options: ["1/2", "1/3", "1/6"],
          correct: 0,
          explanation: "Benar! Angka genap {2,4,6} ada 3 dari 6 = 3/6 = 1/2."
        },
        {
          title: "Pos 14: Peluang Koin",
          material: "Koin punya 2 sisi: Angka dan Gambar.",
          question: "Peluang muncul sisi Angka pada 1 koin adalah?",
          options: ["1/2", "1/4", "1"],
          correct: 0,
          explanation: "Tepat! 1 sisi dari 2 kemungkinan = 1/2."
        },
        {
          title: "🚩 Pos 15: Puncak Analisis Statistika",
          material: "Statistika membantu mengolah data kehidupan sehari-hari.",
          question: "Modus dari data nilai 8, 9, 7, 9, 10, 9 adalah?",
          options: ["9", "8", "10"],
          correct: 0,
          explanation: "Hebat! Angka 9 muncul paling sering (3 kali)."
        }
      ]
    },
    "Menulis": {
      name: "✍️ Istana Pidato & Karangan Kritis (15 Pos)",
      positions: [
        {
          title: "Pos 1: Menulis Teks Pidato - Salam Pembuka",
          material: "Naskah pidato diawali dengan salam pembuka, rasa syukur, dan sapaan hormat.",
          question: "Urutan awal dalam tulisan pidato resmi yang santun adalah?",
          options: ["Salam pembuka - Ungkapan syukur - Sapaan penghormatan", "Langsung penutup - Salam", "Isi pidato - Salam pembuka"],
          correct: 0,
          explanation: "Benar! Diawali salam pembuka dan ungkapan rasa syukur."
        },
        {
          title: "Pos 2: Menulis Teks Pidato - Bagian Isi",
          material: "Bagian isi pidato memuat argumen, pesan utama, dan ajakan yang jelas.",
          question: "Tujuan utama bagian isi dalam pidato persuasi adalah?",
          options: ["Sampaikan poin pesan utama dan ajakan positif", "Menceritakan lelucon panjang", "Menulis riwayat hidup"],
          correct: 0,
          explanation: "Tepat! Menyampaikan pesan utama dan ajakan."
        },
        {
          title: "Pos 3: Menulis Teks Pidato - Salam Penutup",
          material: "Bagian penutup berisi kesimpulan, permohonan maaf, ucapan terima kasih, dan salam penutup.",
          question: "Elemen wajib di akhir naskah pidato adalah?",
          options: ["Simpulan, ucapan terima kasih, dan salam penutup", "Daftar pustaka", "Nomor telepon"],
          correct: 0,
          explanation: "Benar! Ditutup dengan terima kasih dan salam."
        },
        {
          title: "Pos 4: Menulis Kalimat Efektif Kelogisan Logic",
          material: "Kalimat harus masuk akal (logis). Contoh tidak logis: 'Waktu dan tempat kami persilakan.'",
          question: "Perbaikan kalimat 'Waktu dan tempat kami persilakan' menjadi logis adalah?",
          options: ["Bapak Kepala Sekolah kami persilakan.", "Waktu dan tempat silakan maju.", "Persilakan waktu dan tempat."],
          correct: 0,
          explanation: "Tepat! Yang dipersilakan adalah orangnya (Bapak Kepala Sekolah)."
        },
        {
          title: "Pos 5: Menulis Kata Baku 'Efektif'",
          material: "Bentuk baku KBBI adalah 'efektif' (bukan 'efektip').",
          question: "Ejaan baku yang tepat adalah?",
          options: ["Efektif", "Efektip", "Efektive"],
          correct: 0,
          explanation: "Benar! Bentuk baku adalah 'efektif'."
        },
        {
          title: "Pos 6: Menulis Teks Ceramah Singkat",
          material: "Teks ceramah memuat informasi petunjuk kebaikan secara sistematis.",
          question: "Struktur teks ceramah terdiri dari?",
          options: ["Pendahuluan - Isi (Isi ceramah) - Penutup", "Orientasi - Konflik - Resolusi", "Koda - Reorientasi - Tesis"],
          correct: 0,
          explanation: "Tepat! Pendahuluan, Isi, dan Penutup."
        },
        {
          title: "Pos 7: Menulis Kata Berimbuhan 'ke-an'",
          material: "Imbuhan ke-an + adil = keadilan.",
          question: "Penulisan imbuhan 'ke-an' pada kata 'sejahtera' adalah?",
          options: ["Kesejahteraan", "Kesejateraan", "Ke-sejahteraan"],
          correct: 0,
          explanation: "Benar! Ke-an + sejahtera = kesejahteraan."
        },
        {
          title: "Pos 8: Menulis Teks Cerpen - Resolusi",
          material: "Resolusi dalam narasi cerpen adalah bagian penyelesaian masalah.",
          question: "Bagian cerpen yang berisi tahap penyelesaian konflik dinamakan?",
          options: ["Resolusi", "Komplikasi", "Orientasi"],
          correct: 0,
          explanation: "Tepat! Resolusi memuat penyelesaian konflik."
        },
        {
          title: "Pos 9: Menulis Kata Baku 'Karakteristik'",
          material: "Bentuk baku KBBI adalah 'karakteristik' (bukan 'karakteristik-nya' atau 'karakterisitik').",
          question: "Ejaan kata baku yang tepat adalah?",
          options: ["Karakteristik", "Karakterisitik", "Karakterisik"],
          correct: 0,
          explanation: "Benar! 'Karakteristik' sesuai KBBI."
        },
        {
          title: "Pos 10: Menulis Resensi Buku Sederhana",
          material: "Resensi buku memuat identitas buku, kelebihan, kekurangan, dan kesimpulan rekomendasi.",
          question: "Tujuan utama menulis resensi buku adalah?",
          options: ["Memberikan ulasan dan penilaian objektif terhadap karya buku", "Menyalin ulang isi buku secara utuh", "Membuat cerita fiktif baru"],
          correct: 0,
          explanation: "Tepat! Memberikan ulasan dan masukan objektif."
        },
        {
          title: "Pos 11: Menulis Kata Hubung Pertentangan 'Meskipun demikian'",
          material: "'Meskipun demikian' digunakan di awal kalimat dan selalu diikuti koma (,).",
          question: "Penulisan konjungsi antarkalimat yang tepat adalah?",
          options: ["Meskipun demikian, kita tidak boleh menyerah.", "Meskipun demikian kita tidak menyerah", "meskipun demikian, kita tidak menyerah"],
          correct: 0,
          explanation: "Benar! 'Meskipun demikian,' diawali kapital dan diikuti koma."
        },
        {
          title: "Pos 12: Menulis Kalimat Opini yang Santun",
          material: "Opini disampaikan dengan ungkapan 'Menurut pendapat saya,...' atau 'Saya sependapat bahwa,...'.",
          question: "Ungkapan penulisan opini yang santun adalah?",
          options: ["Menurut pendapat saya, ide tersebut sangat baik untuk diterapkan.", "Pendapatmu jelek sekali.", "Saya tidak mau peduli."],
          correct: 0,
          explanation: "Tepat! Disampaikan dengan sopan dan teratur."
        },
        {
          title: "Pos 13: Menulis Surat Pembaca / Tanggapan Berita",
          material: "Surat pembaca dimuat di media massa untuk memberikan masukan ke publik.",
          question: "Ciri tulisan surat pembaca adalah?",
          options: ["Berisi keluhan/saran membangun untuk kepentingan publik", "Rahasia dan pribadi", "Surat izin sakit"],
          correct: 0,
          explanation: "Benar! Berisi tanggapan/masukan untuk umum."
        },
        {
          title: "Pos 14: Menulis Esai Pendek Argumen",
          material: "Esai memuat pandangan penulis yang didukung analisis bukti faktual.",
          question: "Unsur terpenting dalam memperkuat esai argumentasi adalah?",
          options: ["Data dan bukti faktual yang valid", "Pendapat tanpa bukti", "Gambar dekoratif semata"],
          correct: 0,
          explanation: "Tepat! Didukung data dan bukti faktual."
        },
        {
          title: "🚩 Pos 15: Puncak Penulis Cilik Berprestasi",
          material: "Menguasai struktur karangan, ejaan baku, tata bahasa efektif, dan daya cipta gagasan.",
          question: "Gelar Penulis Cilik Berprestasi dicapai dengan?",
          options: ["Konsisten berlatih menulis dengan ejaan baku dan gagasan bermanfaat", "Hanya menyalin karya orang lain", "Jarang membaca buku"],
          correct: 0,
          explanation: "Sempurna! Terus berlatih menulis karya yang bermanfaat."
        }
      ]
    }
  }
};
