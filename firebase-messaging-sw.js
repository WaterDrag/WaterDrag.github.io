importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js');

// ZDE VLOŽ SVŮJ FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyADuzLjk-9pp56rDCphkG20GGghNI2ZOCY",
  authDomain: "penzionmanagement.firebaseapp.com",
  databaseURL: "https://penzionmanagement-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "penzionmanagement",
  storageBucket: "penzionmanagement.firebasestorage.app",
  messagingSenderId: "1018503993863",
  appId: "1:1018503993863:web:158eff0909b699b27d28a2",
  measurementId: "G-Y2R5S6WJEP"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Zde se chytají notifikace, když je aplikace na pozadí
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Přijata zpráva na pozadí: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // Pokud máš, můžeš přidat cestu k logu penzionu
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});