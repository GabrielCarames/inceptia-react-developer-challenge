import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { signIn } from "@/services/login"
import { FormDataProps } from "@/types/interfaces"

export interface AuthState {
  user: {
    email: string | null
  }
}

const initialState: AuthState = {
  user: {
    email: localStorage.getItem("user_email") ?? null
  }
}

export const handleSignIn = createAsyncThunk(
  "auth/signin",
  async ({ data }: FormDataProps) => {
    const response = await signIn({ data })
    return response
  }
)

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleSignOut: state => {
      localStorage.clear()
      state.user.email = null
    }
  },
  extraReducers: builder => {
    builder.addCase(handleSignIn.fulfilled, (state, action) => {
      if (!action?.payload?.error) {
        state.user.email = action?.payload?.data?.email
      }
    })
  }
})

export const { handleSignOut } = authSlice.actions

export default authSlice.reducer
