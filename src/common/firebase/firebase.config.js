import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBUh8KT89MBBTdJqDsOUy8e8ngmBoloOps',
    authDomain: 'iechipele.firebaseapp.com',
    projectId: 'iechipele',
    storageBucket: 'iechipele.appspot.com',
    messagingSenderId: '705011922894',
    appId: '1:705011922894:web:ad1866491e66aebf2c9d9f',
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const firestore = getFirestore(app);
