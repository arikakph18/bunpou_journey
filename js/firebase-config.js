// 1) Firebase Console > Project settings > Your apps > Web app.
// 2) Salin nilai dari object firebaseConfig milik project kamu.
// 3) Ganti SEMUA nilai contoh di bawah. Jangan mengubah nama properti atau menghapus firebaseReady.
export const firebaseConfig = {
  apiKey: "AIzaSyAmkumzCwvcpJt5yhZOx4GJ41224IkoQJA",
  authDomain: "bunpou-journey.firebaseapp.com",
  projectId: "bunpou-journey",
  storageBucket: "bunpou-journey.firebasestorage.app",
  messagingSenderId: "277036034096",
  appId: "1:277036034096:web:26031d224bfa30b87ba5f5"
};
// Initialize Firebase
export const firebaseReady = !Object.values(firebaseConfig).some(v => v.startsWith("GANTI_"));
