import { firebase } from "config/firebase";
import { 
  getAuth, 
  GoogleAuthProvider,
  ApplicationVerifier,
  applyActionCode,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signInWithPhoneNumber,
  signOut,
  deleteUser,
  getIdToken,
  getIdTokenResult,
  confirmPasswordReset,
  verifyBeforeUpdateEmail,
  verifyPasswordResetCode ,
  updateCurrentUser,
  User,
  UserCredential,
} from 'firebase/auth';
import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";

type ContextState = {
  currentUser: User | null
  signup: (email: string, password: string) => void
  signin: (email: string, password: string) => Promise<UserCredential>
  signinWithGoogle: () => void
  signout: () => Promise<void>
}

const AuthContext = createContext({} as ContextState);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(firebase.getApp());
  auth.useDeviceLanguage();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    })

    return unsubscribe;
  }, []);

  const signup = async (email: string, password: string) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(user);
  }

  const signin = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signinWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    provider.addScope('profile');
    provider.addScope('email');

    await signInWithRedirect(auth, provider);
  }

  const signout = () => signOut(auth);

  const values: ContextState = {
    currentUser,
    signup,
    signin,
    signinWithGoogle,
    signout
  }

  return (
    <AuthContext.Provider value={values}>
      {!loading && children }
    </AuthContext.Provider>
  )
}
