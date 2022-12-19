import { firebase } from "config/firebase";
import { 
  Auth, 
  getAuth, 
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  SignInMethod 
} from 'firebase/auth';

class AuthService {
  private static auth: Auth;

  public static createUserWithEmailAndPassword = async (data: { email: string, password: string }) => {
    const userCred = await signInWithEmailAndPassword(this.auth, data.email, data.password);
    console.log(userCred);
  } 
}

export default AuthService;

