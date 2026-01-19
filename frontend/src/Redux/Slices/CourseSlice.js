import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../helpers/axiosInstance"
import toast from "react-hot-toast"

const initialState = {
    courseData: []
}

export const courseList = createAsyncThunk('/courses', async() => {
    try {
        const course = axiosInstance.get('/courses')
        toast.promise(course, {
            loading: "Loading courses...",
            success:"Courses loaded successfully",
            error: "Failed to load courses"
        })
    return(await course).data?.courses

    } catch(error) {
        toast.error(error?.response?.data?.message)
    }
})

const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
       builder.addCase(courseList.fulfilled,(state,action)=>{
        if(action.payload){
            state.courseData = [...action.payload]
        }
       })
    }
})

export const { } = courseSlice.actions;

export default courseSlice.reducer