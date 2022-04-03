import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { clearIndexedDbPersistence, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyB7aIE_nkgCcIrHRDJ6uR-2sjVyrGEoZPc',
    authDomain: 'iunity.firebaseapp.com',
    projectId: 'iunity',
    storageBucket: 'iunity.appspot.com',
    messagingSenderId: '15959200778',
    appId: '1:15959200778:web:117b7d836b958061d9fbf3',
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

export const firestore = getFirestore(app);
(async () => await clearIndexedDbPersistence(firestore))();
