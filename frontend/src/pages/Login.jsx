import { BsPersonCircle } from "react-icons/bs"
import HomeLayout from "../Layouts/homeLayout"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import toast from 'react-hot-toast'
import { useDispatch } from "react-redux"
import { login } from "../Redux/Slices/AuthSlice";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    function handleUserInput(e) {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    async function loginAccount(event) {
        event.preventDefault()
        if (!loginData.password || !loginData.email ) {
            toast.error("Please fill all the details")
            return
        }

        const response = await dispatch(login(loginData))
        console.log(response)

        if (response?.payload?.status ==='success')
            navigate("/")

        setLoginData({
            email: "",
            password: "",
        })

    }

    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">
                <form noValidate onSubmit={loginAccount} className="flex flex-col justify-center gap-3 rounded-lg text-white w-96 shadow-[0_0_32px_black] p-5 ">
                    <h1 className="text-center text-2xl font-bold"> Login </h1>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">Email :</label>
                        <input type="email" name="email" id="email" required placeholder="Enter your email" className="bg-transparent px-2 py-2 border-2"
                            onChange={handleUserInput}
                            value={loginData.email} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="font-semibold">Password :</label>
                        <input type="Password" name="password" id="password" required placeholder="Enter your password" className="bg-transparent px-2 py-2 border-2"
                            onChange={handleUserInput}
                            value={loginData.password} />
                    </div>

                    <button type="submit" className="bg-yellow-600 mt-4 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer rounded-sm py-2 font-semibold text-lg">
                        SignIn
                    </button>

                    <p className="text-center">
                        Don't have account ? <Link to='/signup' className="link text-accent cursor-pointer">Sign Up</Link>
                    </p>
                </form>
            </div>
        </HomeLayout>
    )
}

export default Login