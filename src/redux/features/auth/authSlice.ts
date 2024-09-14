/* eslint-disable @typescript-eslint/no-explicit-any */
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import {jwtDecode} from "jwt-decode";


interface TInitialState  {
  user: string | null;
  token: string | null;
  role: string | null
};

const initialState: TInitialState = {
  user: null,
  token: null,
  role: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{
    setUser: (state, action)=>{
      const {user, token} = action.payload;
      state.user=user;
      state.token=token;
      if (token) {
        const decodedToken: any = jwtDecode(token); 
        state.role = decodedToken.role; 
      }
    },
    logoutUser: (state)=>{
      state.user = null;
      state.token = null;
      state.role = null;
    }
  }
});

export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
export const useCurrentToken = (state: RootState) => state.auth.token;
export const useCurrentUser = (state: RootState) => state.auth.user;
export const useCurrentRole = (state: RootState) => state.auth.role;