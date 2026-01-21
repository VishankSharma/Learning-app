import { Link } from "react-router-dom"
import image from "../assets/image.png"

const CourseDescriptionHero = ({element})=>{
    return (
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
                <button className="px-5 py-1 rounded-sm border border-amber-500 text-yellow-400 font-semibold hover:hover:bg-yellow-500 hover:text-black cursor-pointer"> ₹ {element.price || 999} </button>
              </div>
            </div>
            <div className="w-1/2 flex relative items-center justify-center drop-shadow-[0_0_60px_rgba(99,102,241,0.35)]">
              <img className="w-[480px]  rounded-xl max-h-[280px]" src={element?.thumbnail?.secure_url} alt="" />
            </div>
          </div>
    )
}

export default CourseDescriptionHero