import Instructor from "./Instructor"
import image1 from "../assets/image1.png"

const CourseOverView = ({element}) =>{
    return (
        <div className="bg-[#121728] ">
            <div className="flex gap-4 py-2 px-4">
              <button >OverView</button>
              <button className="text-yellow-500">Curriculum</button>
            </div>
            <div className="flex gap-6 w-full text-white ">
              <div className="bg-[#191e32] shadow-lg w-[60%] pt-5 rounded-md flex flex-col px-4 pb-5" >
                <div className="space-y-2 text-gray-200">
                  <h1 className="text-lg font-semibold text-white">What you'll learn</h1>
                  {element.whatYouWillLearn.map((e) => (
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
              <Instructor Instructor={element?.Instructor} />
            </div>
          </div>
    )
}

export default CourseOverView