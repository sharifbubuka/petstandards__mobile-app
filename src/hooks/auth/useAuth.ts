import { useSelector, useDispatch } from 'react-redux';
import { InitialAuthState, signinWithEmailAndPassword, signout, signup } from 'redux/reducers/auth';

export default function useAuth() {
  const state = useSelector((state: any): InitialAuthState => state.auth);
  const loggedIn = state.loggedIn;
  const dispatch = useDispatch();
  
  const dispatchSignup = (data: {email: string, password: string, username: string}): void => {
    dispatch(signup(data));
  }

  const dispatchSigninWithEmailAndPassword = (email: string, password: string ): void => {
    
    dispatch(signinWithEmailAndPassword({ email, password }));
  }

  const dispatchSignout = (): void => {
    dispatch(signout());
  }

  return { loggedIn, dispatchSigninWithEmailAndPassword, dispatchSignup, dispatchSignout };
} 