import { Link, useLocation } from "react-router-dom";
import HomeLayout from "../../Layouts/homeLayout"
import CourseDescriptionHero from "../../Components/CourseDescriptionHero";
import CourseOverView from "../../Components/CourseOverView";

const CourseDescription = () => {

  const location = useLocation();
  const element = location.state.element
  console.log(element)



  return (
    <HomeLayout>
      <div className="min-h-[100vh] py-16 px-20 m-auto text-white max-w-[95%] ">
        <div className="flex flex-col border-x-2 border-white/10 shadow-md rounded-sm ">
          <CourseDescriptionHero element={element} />
          <div>
            <ul className="flex gap-2 items-center justify-between text-gray-200 h-15 text-xl px-4 border-b border-white/10 rounded-md bg-[#111528]">
              <li> {element?.lectures?.length || 0}+ Video Lectures</li>
              <li> | </li>
              <li>{element?.level}</li>
              <li> | </li>
              <li>{element?.time || 24}+ Hours of Content</li>
              <li> | </li>
              <li>Language : {element.language}</li>
            </ul>
          </div>
          <CourseOverView element={element}/>
        </div>
      </div>
    </HomeLayout>
  )
}

export default CourseDescription