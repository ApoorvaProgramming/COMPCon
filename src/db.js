// db.js

const firebaseConfig = {
    apiKey: "AIzaSyB11Qts3HJvtkg0vLK1M4JBGF0M-Uy1MW8",
    authDomain: "compcondocs.firebaseapp.com",
    projectId: "compcondocs",
    storageBucket: "compcondocs.appspot.com",
    messagingSenderId: "152166035319",
    appId: "1:152166035319:web:076e7f6237aba76e48bb72",
    measurementId: "G-E17KLYBKNH"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

const db = {
  getDocumentation: async (path) => {
    const docRef = firestore.collection('docs').where('path', '==', path);
    const docSnapshot = await docRef.get();

    if (docSnapshot.empty) {
      return null;
    }

    return docSnapshot.docs[0].data();
  },

  getSidebar: async () => {
    const sidebarRef = firestore.collection('docs').select('path');
    const sidebarSnapshot = await sidebarRef.get();

    return sidebarSnapshot.docs.map((doc) => doc.data().path);
  },
};
