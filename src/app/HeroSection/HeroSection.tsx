import Image from "next/image"

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        Hello, I&apos;m Pilici Rustam
                    </h1>
                    <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6">
                        And I am your perfect match, consectetur adipisicing elit.
                        Possimus similique asperiores, molestias temporibus, nulla vel,
                        saepe sint assumenda nostrum iste eveniet porro modi voluptatibus
                        velit a veniam? Ut, repudiandae voluptas.
                    </p>
                    <div>
                        <button className="sm:w-fit w-full rounded-full px-6 py-3 mr-4 transition-all duration-200 bg-center bg-[length:300%_100%] hover:bg-right bg-gradient-to-br from-blue-500 via-purple-500 to-lime-500 text-white">Hire Me</button>
                        <button className="sm:w-fit w-full px-[22px] py-2.5 mt-3 border-2 bg-transparent hover:bg-sky-200 hover:text-black transition duration-200 text-white rounded-full">Download CV</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] sm:ml-12 w-[250px] lg:w-[400px] h-[250px] lg:h-[400px] relative">
                        <Image
                            className="absolute hover:scale-105 hover:rotate-6 transition duration-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            src="/images/Memoji_Boy.png"
                            alt="my memoji"
                            height={400}
                            width={400}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection