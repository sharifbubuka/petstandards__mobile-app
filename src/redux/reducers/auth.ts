import { createSlice } from "@reduxjs/toolkit";
import { AuthService } from "services/firebase";

export type InitialAuthState = {
  loggedIn: boolean,
  user: any
}

const initialState: InitialAuthState = {
  loggedIn: true,
  user: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signup: (state: InitialAuthState, action: { payload: { email: string, password: string, username: string }, type: string }) => {
      const user = AuthService.createUserWithEmailAndPassword({ email: action.payload.email, password: action.payload.password})
    },
    signinWithEmailAndPassword: (state: InitialAuthState, action: { payload: {  }, type: string }) => {  
      state.loggedIn = true;
    },
    signout: (state: InitialAuthState) => {
      state.loggedIn = false;
    }
  }
});

export const {signinWithEmailAndPassword, signout, signup } = authSlice.actions; 

export const authReducer = authSlice.reducer;