import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAc74O5626ICOtBM1K5_k3Vte_UVOl4Sww",
  authDomain: "vm-pdf.firebaseapp.com",
  projectId: "vm-pdf",
  storageBucket: "vm-pdf.appspot.com",
  messagingSenderId: "275570449153",
  appId: "1:275570449153:web:8bf645759bfd1cf5e39900",
  measurementId: "G-1FXBRJVPY4",
});

const db = firebaseApp.firestore();

export default db;
