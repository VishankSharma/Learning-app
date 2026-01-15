import HomeLayout from "../Layouts/homeLayout"
import abouttree from "../assets/tree.png"
import Carousal from "../Components/carousal"

const AboutUs = () => {
    return (
        <>
            <HomeLayout>
                <div className="pl-20 pt-8 flex flex-col text-white ">
                    <div className="flex items-center gap-5 mx-10">
                        <section className="w-1/2 space-y-10">
                            <h1 className="text-5xl text-yellow-500 font-semibold">
                                Affordable and quality education
                            </h1>
                            <p className="text-xl text-gray-200">
                                aur goal is to providethe affordable and quality education to the word.
                                we are providing the plateform for the aspiring teacher and students to share
                                their skills,creativity and knowledge to each other to empower in the growth and wellness of manking
                            </p>
                        </section>
                        <div className="w-1/2 ">
                            <img className="drop-shadow-2xl " src={abouttree} />
                        </div>
                    </div>
                    <Carousal/>
                </div>
            </HomeLayout>
        </>
    )
}
export default AboutUs