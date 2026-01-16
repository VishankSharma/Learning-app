import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../helpers/axiosInstance";

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
    role: localStorage.getItem('role') || "",
    data: JSON.parse(localStorage.getItem('data')) || {}
}

export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
    try {
        const res = axiosInstance.post("user/register", data)
        toast.promise(res, {
            loading: "Wait! creating your account",
            success: (data) => {
                return data?.data?.message
            },
            error: "Failed to create account"
        })

        return (await res).data
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const login = createAsyncThunk("/auth/signin", async (data) => {
    try {
        const res = axiosInstance.post("user/login", data)
        toast.promise(res, {
            loading: "Wait! logging in",
            success: (data) => {
                return data?.data?.message
            },
            error: "Failed to create account"
        })

        return (await res).data
    } catch (error) {
        toast.error(error?.response?.data?.message)
        return rejectWithValue(error?.response?.data);
    }
})
export const logout = createAsyncThunk("/auth/signout", async () => {
    try {
        const res = axiosInstance.get("user/logout")
        toast.promise(res, {
            loading: "Wait! logout is processing",
            success: (data) => {
                return data?.data?.message
            },
            error: "Failed to Logout"
        })

    return (await res).data
    } catch (error) {
        toast.error(error?.response?.data?.message)
        return rejectWithValue(error?.response?.data);
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            localStorage.setItem("isLoggedIn","true");
            localStorage.setItem("data", JSON.stringify(action.payload?.user));
            localStorage.setItem("role", action.payload?.user?.role);

            state.isLoggedIn = true
            state.role = action?.payload?.user?.role
            state.data = action?.payload?.user
        })
            .addCase(login.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.role = "";
                state.data = {};

                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("data");
                localStorage.removeItem("role");
            })
            .addCase(logout.fulfilled,(state,action)=>{
                localStorage.clear()
                state.data = {}
                state.isLoggedIn = false
                state.role = ""
            })
    }
})

export const { } = authSlice.actions;
export default authSlice.reducer;