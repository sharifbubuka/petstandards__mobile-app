
import * as firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { 
  FIREBASE_API_KEY, 
  FIREBASE_APP_ID, 
  FIREBASE_AUTH_DOMAIN, 
  FIREBASE_DATABASE_URL, 
  FIREBASE_MEASUREMENT_ID, 
  FIREBASE_MESSAGING_SENDER_ID, 
  FIREBASE_PROJECT_ID, 
  FIREBASE_STORAGE_BUCKET 
} from '@env';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID
};


let app; //!firebase.getApps().length && firebase.initializeApp(firebaseConfig);
if (!firebase.getApps().length) firebase.initializeApp(firebaseConfig);

// const auth = app && getAuth(app);
// const storage = app && getStorage(app)
// const firestore = app && getFirestore(app);

// export { auth, storage, firestore }
export { firebase };