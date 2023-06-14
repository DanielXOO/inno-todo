import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import firebaseConfig from './FirebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const fireStore = getFirestore(firebaseApp);
