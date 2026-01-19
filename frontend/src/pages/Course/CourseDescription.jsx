import { Link, useLocation } from "react-router-dom";
import HomeLayout from "../../Layouts/homeLayout"
import image from "../../assets/image.png"
import image1 from "../../assets/image1.png"

const CourseDescription = () => {

  const location = useLocation();
  const element = location.state.element
  console.log(element)
  
  

  return (
    <HomeLayout>
      <div className="min-h-[100vh]  py-16 px-20 text-white ">
        <div className="flex flex-col border-x-2 border-white/10 shadow-md rounded-sm ">
          <div className="flex w-full border-b-[0.2px] border-white/10 bg-gradient-to-br from-[#121628] to-[#202246]">
            <div className="w-1/2 flex flex-col space-y-3 px-5 py-2">
              <p className="text-gray-200"><Link to='/'>Home</Link> / <Link to='/courses'>courses</Link> / {element.category}</p>
              <h1 className="text-white text-4xl font-semibold leading-tight">
               { element.title.split(" ").slice(0,3).join(" ")} <span className="text-yellow-500 block">{element.title.split(" ").slice(3).join(" ")}</span>
              </h1>
              <p className="text-gray-200 max-w-md">
                {element.description}
              </p>
              <div className="flex gap-4">
                <button className="px-4 py-1 bg-yellow-500 rounded-sm font-semibold hover:bg-yellow-600 cursor-pointer"> Enroll Now</button>
                <button className="px-5 py-1 rounded-sm border border-amber-500 text-yellow-400 font-semibold hover:hover:bg-yellow-500 hover:text-black cursor-pointer"> ₹ 999 </button>
              </div>
            </div>
            <div className="w-1/2 flex relative items-center justify-center drop-shadow-[0_0_60px_rgba(99,102,241,0.35)]">
              <img className="max-w-[480px] drop-shadow-[0_0_60px_rgba(99,102,241,0.35)] rounded-xl" src={image} alt="" />
            </div>
          </div>
          <div>
            <ul className="flex gap-2 items-center justify-between text-gray-200 h-15 text-xl px-4 border-b border-white/10 rounded-md bg-[#111528]">
              <li> { element.lectures.length }+ Video Lectures</li>
              <li> | </li>
              <li>{element.level}</li>
              <li> | </li>
              <li>{element?.time ? element.time : 24}+ Hours of Content</li>
              <li> | </li>
              <li>Language : {element.language}</li>
            </ul>
          </div>
          <div className="bg-[#121728] ">
            <div className="flex gap-4 py-2 px-4">
              <button >OverView</button>
              <button className="text-yellow-500">Curriculum</button>
            </div>
            <div className="flex gap-6 w-full text-white ">
              <div className="bg-[#191e32] shadow-lg w-[60%] pt-5 rounded-md flex flex-col px-4 pb-5" >
                <div className="space-y-2 text-gray-200">
                  <h1 className="text-lg font-semibold text-white">What you'll learn</h1>
                  {element.whatYouWillLearn.map((e)=>(
                      <p className="max-w-3xl">{e}</p>
                  ))}

                  
                </div>
                <div className="text-gray-200 space-y-4 py-5">
                  <h1 className="text-lg font-semibold text-white">About this Course</h1>
                  <div className="w-[90%] bg-[#1d2234] rounded-md flex shadow-xl">
                    <ul className=" space-y-1 px-6  pt-2 w-1/2  list-disc">
                      <li>Total Lectures: {element.lectures.length}+ <hr className="text-white/10" /></li>
                      <li>Levels: {element.level} <hr className="text-white/10" /></li>
                      <li>Total Duration: {element?.duration ? element?.duration : 24}+ hr <hr className="text-white/10" /></li>
                      <li>Language: {element.language} <hr className="text-white/10" /></li>
                      <li>Student Enroll: 1000+ <hr className="text-white/10" /></li>
                    </ul>
                    <div className="w-1/2 ">
                      <img className='h-[200px] drop-shadow-[0_0_60px_rgba(99,102,241,0.45)] rounded-r-md w-full p-1' src={image1} alt="" />
                    </div>
                  </div>

                </div>
                <div className="pb-2 text-gray-200 px-4 space-y-1">
                  <p>Training inve: 120+</p>
                  <p>Levels: {element.level}</p>
                  <p>Total Duration: {element?.duration ? element?.duration : 24}+ hr </p>
                  <p>Language: {element.language}</p>
                  <p>Student Enroll: 1000+</p>
                </div>
              </div>
              <div className=" flex flex-col w-[35%] text-gray-200 ">
                <div className="bg-[#191e32] max-h-[400px] px-4 pb-5 rounded-md shadow-lg overflow-hidden">
                  <h1 className="font-semibold text-white text-lg">Instructor</h1>
                  <div className="flex flex-col justify-center items-center">
                    <img className="rounded-full w-[120px] aspect-square object-cover object-center" src="https://tse1.mm.bing.net/th/id/OIP._1F70zmusmGw7AdTC8O9wAHaE8?pid=Api&P=0&h=180" alt="" />
                    <h1 className="font-semibold py-2">{element?.instructor?.name || "Vishank Sharma"}</h1>
                    <p>Full Stack Developer a instructor</p>
                  </div>
                  <div>
                    <hr className="text-white/10 p-1" />
                    <p>{element?.instructor?.bio || "Dr. john ninfuh fnsjafn fisdufnsdifnsdf sdfshifhndfnsddf sd nisdhfsdfn fjsoifjs afisdhdjfsdnfdnfjsdndsfs fiusdfhsdsf"}</p>
                  </div>
                </div>
                <ul className="grid lg:grid-cols-3 m-auto gap-4 md:grid-cols-2 mt-4">
                  {
                    element?.instructor?.skills.length > 0 ? element?.instructor?.skills.map((skill)=>(
                         <li className="px-4 py-1 rounded-lg border-2 -[#191e32]">{skill}</li>
                    )) : <li className="px-2 py-1 rounded-lg border-2 -[#191e32] ">Communication </li>
                  }
                    
                   
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}

export default CourseDescription