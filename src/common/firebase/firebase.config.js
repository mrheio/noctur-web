import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { clearIndexedDbPersistence, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDdwb_MM9Wcjl5USpMSTlC0pUwv4FYVymA',
    authDomain: 'juxtaposify.firebaseapp.com',
    projectId: 'juxtaposify',
    storageBucket: 'juxtaposify.appspot.com',
    messagingSenderId: '150158279519',
    appId: '1:150158279519:web:7fca3175d945c5f4032cea',
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

export const firestore = getFirestore(app);
(async () => await clearIndexedDbPersistence(firestore))();
