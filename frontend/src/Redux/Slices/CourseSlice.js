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

export const createNewCourse = createAsyncThunk('/courses/create',async(data)=>{

    const learnData = data?.whatYouWillLearn.split(",").map((item)=>(item.trim()))
    try {
        let formData = new FormData()
        formData.append('title',data?.title)
        formData.append('description',data?.description)
        formData.append('price',data?.price)
        formData.append('language',data?.language)
        formData.append('level',data.level)
        formData.append('category',data?.category)
        formData.append('whatYouWillLearn',JSON.stringify(learnData))
        formData.append('thumbnail',data?.thumbnail)

        const response = axiosInstance.post('/courses',formData)
        toast.promise(response,{
            loading:"create new courses",
            success:"Course Created",
            error:"Failed to create new course"
        })

        return (await response).data

    } catch (error) {
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