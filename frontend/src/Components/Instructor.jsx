const Instructor = ({ instructor })=> {
    return (
        <div className=" flex flex-col w-[35%] text-gray-200 ">
            <div className="bg-[#191e32] max-h-[400px] px-4 pb-5 rounded-md shadow-lg overflow-hidden">
                <h1 className="font-semibold text-white text-lg">Instructor</h1>
                <div className="flex flex-col justify-center items-center">
                    <img className="rounded-full w-[120px] aspect-square object-cover object-center" src="https://tse1.mm.bing.net/th/id/OIP._1F70zmusmGw7AdTC8O9wAHaE8?pid=Api&P=0&h=180" alt="" />
                    <h1 className="font-semibold py-2">{instructor?.name || "Vishank Sharma"}</h1>
                    <p>Full Stack Developer a instructor</p>
                </div>
                <div>
                    <hr className="text-white/10 p-1" />
                    <p>{instructor?.bio || "Dr. john ninfuh fnsjafn fisdufnsdifnsdf sdfshifhndfnsddf sd nisdhfsdfn fjsoifjs afisdhdjfsdnfdnfjsdndsfs fiusdfhsdsf"}</p>
                </div>
            </div>
            <ul className="grid lg:grid-cols-3 m-auto gap-4 md:grid-cols-2 mt-4">
                {
                    instructor?.skills.length > 0 ? instructor?.skills.map((skill) => (
                        <li className="px-4 py-1 rounded-lg border-2 -[#191e32]">{skill}</li>
                    )) : <li className="px-2 py-1 rounded-lg border-2 -[#191e32] overflow-hidden">Communication</li>
                }
            </ul>
        </div>
    )
}

export default Instructor