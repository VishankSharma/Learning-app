import aboutCrousal from "../Constant/aboutCarosal";
const Carousal = () => {

    const data = aboutCrousal;

    return (
        <div className="carousel w-1/3 py-16 mx-auto ">
            {data.map((d, index) => {

                const prev = index === 0 ? data.length : index;
                const next = index === data.length - 1 ? 1 : index + 2;

                return (
                <div id={`side${index + 1}`} className="carousel-item relative w-full ">
                    <div className="flex flex-col justify-center items-center">
                        <img
                            src={d.image}
                            className="w-full max-w-[250px] aspect-square rounded-full border-2 border-gray-200 mx-auto md:max-w-xs" />
                        <p className="text-xl py-2 text-gray-200">
                            {d.quote}
                        </p>
                        <h1 className="font-semibold text-2xl text-yellow-500">
                            {d.name}
                        </h1>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href={`#side${prev}`} className="btn btn-circle">❮</a>
                            <a href={`#side${next}`} className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>)
            })}
        </div>
    )
}

export default Carousal;