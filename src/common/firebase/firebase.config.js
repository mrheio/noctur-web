import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { clearIndexedDbPersistence, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDATCvIYHjnOrXYb--_aeo-qaZA2vVCtYw',
    authDomain: 'deqlify.firebaseapp.com',
    projectId: 'deqlify',
    storageBucket: 'deqlify.appspot.com',
    messagingSenderId: '774918295106',
    appId: '1:774918295106:web:d5c3d9eb9c5612b31c27db',
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

export const firestore = getFirestore(app);
(async () => await clearIndexedDbPersistence(firestore))();
