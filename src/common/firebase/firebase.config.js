import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDoriymah91QopGR62C5zueBPt4KuRWMLI',
    authDomain: 'noctur.firebaseapp.com',
    projectId: 'noctur',
    storageBucket: 'noctur.appspot.com',
    messagingSenderId: '856855486155',
    appId: '1:856855486155:web:15837afea83e50b37c054e',
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

export const firestore = getFirestore(app);
