import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB11Qts3HJvtkg0vLK1M4JBGF0M-Uy1MW8",
    authDomain: "compcondocs.firebaseapp.com",
    projectId: "compcondocs",
    storageBucket: "compcondocs.appspot.com",
    messagingSenderId: "152166035319",
    appId: "1:152166035319:web:076e7f6237aba76e48bb72",
    measurementId: "G-E17KLYBKNH"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
