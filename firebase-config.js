// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBP_X_AZ_ZyBiwPcjXWAemNN-5JEvkeBFI",
    authDomain: "unilocate-3d2c3.firebaseapp.com",
    projectId: "unilocate-3d2c3",
    storageBucket: "unilocate-3d2c3.firebasestorage.app",
    messagingSenderId: "551304412181",
    appId: "1:551304412181:web:9fca5ec8a5d76f7d13e21c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);