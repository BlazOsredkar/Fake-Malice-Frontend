import {createSlice} from '@reduxjs/toolkit';

//create user slice redux
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoading: false,
  },
  reducers: {
    userLogin(state, action) {
      state.user = action.payload;
    },
    userLogout(state) {
      state.user = null;
    },
    setUserLoading(state, action) {
      state.isLoading = action.payload;
    }
  },
});

export const { userLogin, userLogout, setUserLoading } = userSlice.actions;

export default userSlice.reducer;
export const selectUser = (state) => state.user.user;
export const selectUserLoading = (state) => state.user.isLoading;
