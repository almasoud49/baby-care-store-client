import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";


type TInitialState = {
  user: string | null;
  token: string | null;
};

const initialState: TInitialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{
    setUser: (state, action)=>{
      const {user, token} = action.payload;
      state.user=user;
      state.token=token;
    },
    logoutUser: (state)=>{
      state.user = null;
      state.token = null;
    }
  }
});

export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
export const useCurrentToken = (state: RootState) => state.auth.token;
export const useCurrentUser = (state: RootState) => state.auth.user;