import HomeLayout from "../Layouts/homeLayout"
import { Link } from "react-router-dom";
import homePageMainImage from '../assets/homePageMainImage.png'

const HomePage = () => {
    return (
        <>
            <HomeLayout>
                <div className="pt-10 text-white flex items-center justify-center gap-10 mx-20 min-h-[90vh] ">
                    <div className="w-1/2 space-y-6">
                        <h1 className="text-5xl font-semibold">
                            Find out Best 
                            <span className="text-yellow-500 font-bold">
                                Online Courses
                            </span>
                        </h1>
                        <p className="text-xl text-gray-200">
                            we have a large library of courses taught by higher skilled and qualified faculties at a very affordable cost
                        </p>
                        
                        <div className="space-x-6">
                           <Link>
                              <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg hover:bg-yellow-600 cursor-pointer">
                                Explore courses
                              </button>
                           </Link>
                           <Link>
                              <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg hover:bg-yellow-600 cursor-pointer">
                                Contact us
                              </button>
                           </Link>
                        </div>

                    </div>
                    <div className="w-1/2 flex justify-center items-center">
                        <img src={homePageMainImage} alt="" />
                    </div>
                </div>
            </HomeLayout>
        </>
    )
}

export default HomePage