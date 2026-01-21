import HomeLayout from "../../Layouts/homeLayout"
import { FaLock } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { IoIosCamera } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";


const UserProfile = () => {
   
    const dispatch = useDispatch();
    const data = useSelector((state)=>state.auth.data)
    console.log(data)

    return (
        <HomeLayout>
            <div className="min-h-screen pt-15 flex flex-col items-center w-full space-y-3">
                <h1 className="text-4xl text-yellow-500 font-semibold">Profile</h1>
                <div className="w-[30%] bg-[#191e32] text-gray-200 shadow-md rounded-md px-3 py-2" >
                    <div className="flex gap-4 items-center">
                        <div className="relative">
                            <img src="https://tse1.mm.bing.net/th/id/OIP._1F70zmusmGw7AdTC8O9wAHaE8?pid=Api&P=0&h=180" alt="" className="w-[120px] aspect-square py-0.5 my-1 rounded-full object-cover object-center"/>
                            <IoIosCamera className="text-gray-200 text-3xl absolute right-0 bottom-4"/>
                        </div>
                        <div className="">
                            <h1 className="text-white font-semibold">{data.name}</h1>
                            <p>{data.email}</p>
                        </div>
                     
                    </div>
                    <div className="flex justify-between px-3 py-3 bg-[#1d2234] border border-y-white/10 border-x-0">
                        <p>Full Name :</p>
                        <h1 className="text-yellow-500 font-semibold">{data.name}</h1>
                    </div>
                    <div className="flex justify-between px-3 py-3 bg-[#1d2234] border border-y-white/10 border-x-0">
                        <p>Email :</p>
                        <h1>{data.email}</h1>
                    </div>
                    <div className="flex justify-between px-3 py-2 bg-[#1d2234] border border-y-white/10 border-x-0">
                        <p>Role :</p>
                        <h1 className="border px-2 py-0.5 rounded-md bg-[#191e32]">{data.role}</h1>
                    </div>
                    <div className="flex flex-col w-full items-start space-y-3 mt-3">
                        <button className="flex items-center px-3 py-3 gap-2 bg-[#1d2234] w-full">
                            <span><FaLock /></span> Update Password
                        </button>
                        <button className="flex items-center px-3 py-3 gap-2 bg-[#1d2234] w-full">
                            <span> <MdModeEditOutline /></span> Update Profile
                        </button>
                        <button className="flex items-center justify-center px-3 py-3 gap-2 bg-red-600 w-full rounded-md">
                             Cancle Subscription
                        </button>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default UserProfile