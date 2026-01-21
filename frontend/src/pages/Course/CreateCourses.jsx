import { useState } from "react"
import toast from "react-hot-toast"
import { createNewCourse } from "../../Redux/Slices/CourseSlice"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import HomeLayout from "../../Layouts/homeLayout"
import { FaRupeeSign } from "react-icons/fa";
import upload from '../../assets/upload.png'


const CreateCourses = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [userInput, setUserInput] = useState({
        title: "",
        description: "",
        category: "",
        price: "",
        language: "ENGLISH",
        level: "BEGINNER",
        whatYouWillLearn: "",
        thumbnail: null,
        previewImage: ""
    })

    function handleUserINput(e) {
        const { name, value } = e.target

        setUserInput({
            ...userInput,
            [name]: value
        })
    }

    function handleUerImage(e) {
        e.preventDefault()
        const uploadedImage = e.target.files[0];
        if (uploadedImage) {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(uploadedImage)
            fileReader.addEventListener('load', (e) => {
                setUserInput({
                    ...userInput,
                    thumbnail: uploadedImage,
                    previewImage: e.target.result
                })
            })
        }
    }

    async function onFormSubmit(e) {
        e.preventDefault()

        const {
            title,
            description,
            category,
            price,
            whatYouWillLearn,
            thumbnail
        } = userInput;

        if (!title || !description || !category || !price || !whatYouWillLearn || !thumbnail) {
            toast.error("All fields are required")
            return
        }

        const response = await dispatch(createNewCourse(userInput))

        if (response?.payload?.success) {
            navigate('/courses')
        }
    }

    return (
        <HomeLayout>
            <div className="flex flex-col items-center justify-center pt-8 px-20 w-full ">
                <h1 className="text-4xl font-semibold text-yellow-500 mb-4">Create Courses</h1>
                <div className="bg-[#121728] w-[70%] rounded-md p-4 shadow-2xl my-4">
                    <form onSubmit={onFormSubmit} className="  text-white flex gap-6">
                        <div className="bg-[#191e32] w-[60%] space-y-3 py-1 px-2 rounded-md shadow-md">
                            <div className="space-y-1 flex flex-col">
                                <label htmlFor="title">Course Title </label>
                                <input onChange={handleUserINput} value={userInput.title} className="px-3 py-1 bg-[#1d2234] border border-white/10" type="text" name="title" />
                            </div>
                            <div className="space-y-1 flex flex-col">
                                <label htmlFor="description">Course Description </label>
                                <input onChange={handleUserINput} value={userInput.description} className="px-3 py-1 bg-[#1d2234] border border-white/10" type="text" name="description" />
                            </div>
                            <div className="space-y-1 flex flex-col">
                                <label htmlFor="Category"> Category</label>
                                <select id="Category" name="category" value={userInput.category} onChange={handleUserINput} className="border border-white/10 px-2 py-1 bg-[#1d2234]" >
                                    <option value="">Select Category</option>
                                    <option value="Data Science">Data Science</option>
                                    <option value="Frontend">Frontend</option>
                                    <option value="Backend">Backend</option> 
                                    <option value="DSA">DSA</option> 
                                </select>
                            </div>
                            <div className="flex mt-2 items-center justify-between">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="Language">Language</label>
                                    <select name="language" value={userInput.language} onChange={handleUserINput} id="Language" className="border border-white/10 px-2 py-1 bg-[#1d2234] ">
                                        <option value="English">English</option>
                                        <option value="English">Hindi</option>
                                        <option value="Hinglish">Hinglish</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="level">LEVEL</label>
                                    <select name="level" value={userInput.level} onChange={handleUserINput} id="level" className="border border-white/10 px-2 py-1 bg-[#1d2234] ">
                                        <option value="BEGINNER">BEGINNER</option>
                                        <option value="INTERMEDIATE">INTERMEDATE</option>
                                        <option value="ADVANCE">ADVANCE</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="price">PRICE</label>
                                    <div className="flex items-center justify-center">
                                        <span className="px-3 py-2 border border-white/10 text-yellow-500"><FaRupeeSign /></span>
                                        <input onChange={handleUserINput} value={userInput.price} type="number" name="price" id="price" className="px-3 py-1 bg-[#1d2234] border border-white/10 focus:outline-none" />
                                    </div>
                                </div>

                            </div>
                            <div className="flex flex-col space-y-1">
                                <label htmlFor="learningkeypoint">Learning Key Points</label>
                                <textarea name="whatYouWillLearn"  value={userInput.whatYouWillLearn} onChange={handleUserINput} placeholder="React, Node, MongoDB, Projects" className="border border-white/10 resize-none py-1 px-2" rows="9" id="learningkeypoint"></textarea>
                            </div>
                        </div>
                        <div className="bg-[#191e32] w-[40%]  max-h-[400px] space-y-4 py-1 px-4 rounded-md shadow-md">
                            <label htmlFor="thumbnail" >Thumbnail</label>
                            <div className="px-2 py-1 flex flex-col items-center justify-center bg-[#1d2234] relative mt-2 rounded-md">
                                <label htmlFor="thumbnail"><img src={upload} alt="" />
                                    <h1 className="absolute bottom-9 left-7">Drag and drop or upload Thumbnail (png,jpg,,max(50 mb))</h1></label>
                                <input name="thumbnail" accept="image/*" onChange={handleUerImage} className="absolute hidden" type="file" id="thumbnail" />
                            </div>
                            <div className="flex items-center justify-center">
                                <button className="px-3 py-1 bg-yellow-500 font-semibold rounded-md hover:bg-yellow-600 cursor-pointer" type="submit">
                                    Create Course
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </HomeLayout>
    )
}

export default CreateCourses