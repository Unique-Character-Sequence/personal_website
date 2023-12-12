"use client";

import Image from "next/image"
import "./animate_gradient.scss"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-12 sm:grid-cols-12 h-screen">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-7 place-self-center text-left">
                    <div>
                        <h1 className="text-white mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                            <div className="mb-2 animate-gradient text-transparent bg-clip-text bg-gradient-to-br from-teal-200 via-indigo-400 via-40% to-teal-200">
                                Hello, I&apos;m{" "}
                            </div>
                            <TypeAnimation
                                className="sm:whitespace-nowrap absolute z-10"
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Pilici Rustam',
                                    2000, // wait 2s before replacing "Pilici Rustam" with "ReactJS Developer"
                                    'ReactJS Developer',
                                    900,
                                    'UI/UX Developer',
                                    900,
                                    'your ideal hire!',
                                    4000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                            <div className="mb-24 relative min-[360px]:mb-14 sm:mb-20 lg:mb-24" />
                        </h1>
                    </div>
                    <p className="text-[#ADB7BE] text-sm sm:text-lg lg:text-xl mb-6">
                        Still looking for a skilled React developer?<br />Your search ends here.
                    </p>

                    <div className="col-span-12 hidden sm:block">
                        {/* TODO: Кнопки снизу тут рановато так-то стоят. Сначала флексишь, потом просишь нанять  */}
                        <button className="sm:w-fit w-full rounded-full px-6 py-3 mr-4 transition-all duration-200 bg-center bg-[length:300%_100%] hover:bg-right bg-gradient-to-br from-indigo-500 via-red-600 via-75% hover:via-45% to-yellow-400 text-white">
                            Hire Me
                        </button>
                        <button className="sm:w-fit w-full px-[22px] py-2.5 mt-3 border-2 bg-transparent hover:bg-sky-200 hover:text-black transition duration-200 text-white rounded-full">
                            Download CV
                        </button>
                    </div>
                </motion.div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] sm:ml-12 w-[120px] h-[120px] sm:w-[250px] sm:h-[250px] lg:w-[312px] lg:h-[312px] relative">
                        <Image
                            className="absolute h-auto w-[95px] sm:w-[200px] lg:w-[250px] hover:scale-105 hover:rotate-6 transition duration-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            src="/images/Memoji_Boy.webp"
                            alt="my memoji"
                            height={250}
                            width={250}
                        />
                    </div>
                </div>
                <div className="col-span-12 flex h-max sm:hidden">
                    {/* TODO: Кнопки снизу тут рановато так-то стоят. Сначала флексишь, потом просишь нанять  */}
                    <button className="text-sm w-1/2 rounded-full px-6 py-3 mt-3 mr-4 transition-all duration-200 bg-center bg-[length:300%_100%] hover:bg-right bg-gradient-to-br from-indigo-500 via-red-600 via-75% hover:via-45% to-yellow-400 text-white">Hire Me</button>
                    <button className="text-sm w-1/2 px-[22px] py-2.5 mt-3 border-2 bg-transparent hover:bg-sky-200 hover:text-black transition duration-200 text-white rounded-full">Download CV</button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection