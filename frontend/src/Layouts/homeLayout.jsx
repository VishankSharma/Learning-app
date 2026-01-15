import { FiMenu } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

const HomeLayout = ({ children }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn)
    const role = useSelector((state) => state?.auth?.role)

    function hideDrawer() {
        const element = document.getElementsByClassName("drawer-toggle")
        element[0].checked = false
    }

    function handleLogout (e){
        e.preventDefault();

        // const res = await dispatch(logout());
        // if(res?.payload?.success)
        navigate('/');
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#020617] flex flex-col">
            <div className="drawer fixed z-50 ">
                <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-1" className="cursor-pointer relative"><FiMenu size={"32px"} className="m-4 font-bold text-white" /></label>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu min-h-full w-48 sm:w-80 p-4 text-base-content relative  bg-gray-800 text-white text-xl">
                        {/* Sidebar content here */}
                        <li className="w-fit absolute z-50 right-2">
                            <button onClick={hideDrawer}>
                                <RxCrossCircled size={"32px"} />
                            </button>
                        </li>
                        <li><Link to='/'>Home</Link></li>
                        {isLoggedIn && role === 'ADMIN' && (
                        <li>
                            <Link to='/admin/dashboard'>Admin Dashboard</Link>
                        </li>
                        )}
                        <li><Link to='/courses'>All Courses</Link></li>
                        <li><Link to='/contect'>Contect Us</Link></li>
                        <li><Link to='/about'>About us</Link></li>
                        { 
                         !isLoggedIn && (
                            <div className="flex items-center justify-center w-full gap-4 absolute bottom-5 left-0">
                                <button className="px-4 py-1 font-semibold text-xl rounded-lg bg-blue-500 hover:bg-blue-700 hover:cursor-pointer border-2 border-blue-500">
                                    Sign In
                                </button>
                                <button className="px-4 py-1 font-semibold text-xl rounded-lg hover:bg-blue-600 border-2 border-blue-500 hover:cursor-pointer">
                                    Sign Up
                                </button>
                            </div>
                         )
                        }
                        { 
                         isLoggedIn && (
                            <div className="flex items-center justify-center w-full gap-4 absolute bottom-5 left-0">
                                <button className="px-4 py-1 font-semibold text-xl rounded-lg bg-blue-500 hover:bg-blue-700 hover:cursor-pointer border-2 border-blue-500">
                                    Profile
                                </button>
                                <button onClick={handleLogout} className="px-4 py-1 font-semibold text-xl rounded-lg hover:bg-blue-600 border-2 border-blue-500 hover:cursor-pointer">
                                    Sign Out
                                </button>
                            </div>
                         )
                        }
                    </ul>
                </div>
            </div>
            {children}
            <Footer />
        </div>
    )
}

export default HomeLayout
