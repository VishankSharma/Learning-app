import { BsPersonCircle } from "react-icons/bs"
import HomeLayout from "../Layouts/homeLayout"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import toast from 'react-hot-toast'
import { useDispatch } from "react-redux"
import { createAccount } from "../Redux/Slices/AuthSlice";

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [previewImage, setPreviewImage] = useState("")

    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: "",
        avatar: ""
    })

    function handleUserInput(e) {
        const { name, value } = e.target;
        setSignupData({
            ...signupData,
            [name]: value
        })
    }

    function getImage(event) {
        event.preventDefault()
        const uploadedImage = event.target.files[0]

        if (uploadedImage) {
            setSignupData({
                ...signupData, avatar: uploadedImage
            });
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage)
            fileReader.addEventListener("load", function () {
                setPreviewImage(this.result)
            })
        }
    }

    async function createNewAccount(event) {
        event.preventDefault()
        if (!signupData.name || !signupData.email || !signupData.password || !signupData.avatar) {
            toast.error("Please fill all the details")
            return
        }

        if (signupData.name.length < 4) {
            toast.error("Name should be greater then 4 characters")
            return
        }
        if (!signupData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            toast.error("Please enter valid email")
            return
        }
        if (!signupData.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/)) {
            toast.error("Input Password and Submit [8 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter")
            return
        }

        const formData = new FormData()
        formData.append("name", signupData.name)
        formData.append("email", signupData.email)
        formData.append("password", signupData.password)
        formData.append("avatar", signupData.avatar)

        const response = await dispatch(createAccount(formData))

        if (response?.payload?.success)
            navigate("/")

        setSignupData({
            name: "",
            email: "",
            password: "",
            avatar: ""
        })

        setPreviewImage("")

    }

    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">
                <form noValidate onSubmit={createNewAccount} className="flex flex-col justify-center gap-3 rounded-lg text-white w-96 shadow-[0_0_32px_black] p-5 ">
                    <h1 className="text-center text-2xl font-bold"> Registration Page</h1>

                    <label htmlFor="image_uploads" className="cursor-pointer">
                        {previewImage ? (<img className="w-24 h-24 rounded-full m-auto" src={previewImage} />) : (<BsPersonCircle className="w-24 h-24 rounded-full m-auto" />)}
                    </label>
                    <input type="file" className="hidden" id="image_uploads" name='avatar' accept=".jpg, .jpeg, .png, .svg"
                        onChange={getImage} />

                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="font-semibold">FullName :</label>
                        <input type="text" name="name" id="name" required placeholder="Enter your FullName" className="bg-transparent px-2 py-2 border-2"
                            onChange={handleUserInput}
                            value={signupData.name} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">Email :</label>
                        <input type="email" name="email" id="email" required placeholder="Enter your email" className="bg-transparent px-2 py-2 border-2"
                            onChange={handleUserInput}
                            value={signupData.email} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="font-semibold">Password :</label>
                        <input type="Password" name="password" id="password" required placeholder="Enter your password" className="bg-transparent px-2 py-2 border-2"
                            onChange={handleUserInput}
                            value={signupData.password} />
                    </div>

                    <button type="submit" className="bg-yellow-600 mt-4 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer rounded-sm py-2 font-semibold text-lg">
                        Create account
                    </button>

                    <p className="text-center">
                        Already have an account ? <Link to='/login' className="link text-accent cursor-pointer">Login</Link>
                    </p>
                </form>
            </div>
        </HomeLayout>
    )
}

export default SignUp