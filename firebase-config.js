// firebase-config.js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "your_sender_id",
  appId: "your_app_id"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
