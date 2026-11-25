BUNPOU JOURNEY — PANDUAN SETUP FIREBASE + GITHUB PAGES
====================================================

PENTING
- ZIP ini berisi source code aplikasi, bukan aplikasi yang sudah online.
- Tombol Daftar/Masuk baru aktif setelah Firebase Web App config diisi.
- GitHub Pages untuk menampilkan website; Firebase untuk daftar/login dan menyimpan progres.
- Jangan upload file ZIP ke GitHub. Ekstrak ZIP, lalu upload ISI folder project.

BAGIAN A — BUAT FIREBASE (WAJIB)
1. Buka https://console.firebase.google.com/ lalu login dengan akun Google.
2. Klik Add project / Create a project. Nama: bunpou-journey (atau nama lain).
3. Ikuti langkah sampai project selesai dibuat.
4. Di halaman Overview project, klik ikon Web </> (Add app).
5. App nickname: Bunpou Journey. Klik Register app.
6. Firebase menampilkan firebaseConfig. Salin nilai dari object firebaseConfig:
   apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId.
   Jika ada measurementId, tidak perlu dipakai.
7. Buka file js/firebase-config.js di folder project. Ganti nilai GANTI_... dengan nilai dari Firebase.
   Contoh format (gunakan NILAI MILIK PROJECT KAMU, jangan salin contoh ini):

   export const firebaseConfig = {
     apiKey: "AIza...",
     authDomain: "nama-project.firebaseapp.com",
     projectId: "nama-project",
     storageBucket: "nama-project.firebasestorage.app",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abcdef"
   };
   export const firebaseReady = !Object.values(firebaseConfig).some(v => v.startsWith("GANTI_"));

   Jangan hapus baris export const firebaseReady.

BAGIAN B — AKTIFKAN PENDAFTARAN EMAIL/PASSWORD
8. Firebase Console > Build > Authentication > Get started.
9. Buka Sign-in method (atau tab Sign-in providers).
10. Pilih Email/Password, aktifkan Email/Password, lalu Save.

BAGIAN C — BUAT DATABASE PROGRES
11. Firebase Console > Build > Firestore Database > Create database.
12. Pilih lokasi database yang dekat dengan pengguna (misalnya asia-southeast2 jika tersedia).
13. Selesaikan pembuatan database.
14. Buka tab Rules. Ganti rules yang ada dengan isi file firestore.rules di ZIP ini, lalu klik Publish.

ISI firestore.rules:
- Pengguna yang login hanya dapat membaca/mengubah dokumen users/{uid} miliknya sendiri.
- Jangan mengganti rules menjadi allow read, write: if true.

BAGIAN D — UPLOAD KE GITHUB
15. Buka https://github.com/ lalu buat repository baru bernama bunpou-journey.
16. Pilih Public (agar GitHub Pages bisa dipakai pada konfigurasi gratis standar), lalu Create repository.
17. Di repository, klik Add file > Upload files.
18. Dari folder hasil ekstrak, upload semua ISI folder project: index.html, folder css, folder js,
    firestore.rules, dan README.txt. Pastikan index.html berada di root repository, bukan di dalam
    folder tambahan.
19. Klik Commit changes.

BAGIAN E — AKTIFKAN GITHUB PAGES
20. Repository > Settings > Pages.
21. Build and deployment: Source = Deploy from a branch.
22. Branch = main dan folder = / (root). Klik Save.
23. Tunggu deployment selesai. Alamat website biasanya:
    https://USERNAME.github.io/bunpou-journey/
    Ganti USERNAME dengan username GitHub kamu.

BAGIAN F — IZINKAN DOMAIN GITHUB DI FIREBASE (PENTING UNTUK LOGIN)
24. Kembali ke Firebase Console > Authentication > Settings > Authorized domains.
25. Klik Add domain dan masukkan: USERNAME.github.io
    Masukkan hostname saja, tanpa https:// dan tanpa /bunpou-journey/.
    Ganti USERNAME dengan username GitHub kamu. Simpan.
26. Buka URL GitHub Pages. Refresh halaman, pilih Daftar, lalu coba buat akun dengan email dan
    password minimal 6 karakter.

JIKA TOMBOL DAFTAR MASIH TIDAK AKTIF
- Pastikan js/firebase-config.js sudah diubah dan tidak ada teks GANTI_... yang tersisa.
- Pastikan file yang sudah diedit ikut di-upload ke GitHub (commit perubahan).
- Tunggu GitHub Pages selesai deploy, lalu refresh keras / buka tab incognito.

JIKA PENDAFTARAN GAGAL
- auth/operation-not-allowed: Email/Password belum diaktifkan di Firebase Authentication.
- auth/unauthorized-domain: USERNAME.github.io belum ditambahkan ke Authorized domains.
- auth/email-already-in-use: email tersebut sudah pernah didaftarkan.
- auth/weak-password: password kurang dari 6 karakter.
- Missing or insufficient permissions: Firestore Rules belum dipublikasikan dengan benar.

CATATAN KEAMANAN DAN FITUR
- Firebase Web API key memang berada di frontend. Keamanan data harus dijaga dengan Authentication
  dan Firestore Security Rules, bukan dengan menyembunyikan API key.
- Jangan pernah membagikan password akun Firebase/GitHub.
- Materi awal berisi 20 pola N5 dalam 4 paket, belum seluruh silabus N5.
- N4–N2, kanji lengkap, voice recognition, leaderboard online, dan validasi reward backend belum dibuat.
- Kredit: Made with love by Arika Karpina.
