import { useDispatch, useSelector } from "react-redux"
import HomeLayout from "../../Layouts/homeLayout"
import { useEffect } from "react";
import { courseList } from "../../Redux/Slices/CourseSlice";
import CourseCard from "../../Components/CourseCard";
import { useNavigate } from "react-router-dom";

const CourseList = ()=>{
    
     const navigate = useNavigate()
     const dispatch = useDispatch()
     const {courseData} = useSelector((state)=> state.courses);

     useEffect(()=>{
        dispatch(courseList())
     },[dispatch])

    return (
        <HomeLayout>
            <div className="min-h-[90vh] text-white px-20 py-8">
                <div>
                   <h1 className="text-4xl font-extrabold">Popular <span className="text-yellow-500">Courses</span> </h1>
                   <p className="text-gray-200 my-4">Explore our most popular and high-rated courses to enhance your skills </p>
                </div>
               <div className="grid grid-cols-4 gap-4 m-auto">
                 {
                    courseData.map((element)=>(
                        <CourseCard key={element._id} course = {element} onClick={()=>navigate("/courses/description",{state:{element}})}/>
                    ))
                }
               </div>
            </div> 
        </HomeLayout>
    )
}

export default CourseList
