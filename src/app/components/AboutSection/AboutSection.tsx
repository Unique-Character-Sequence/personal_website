"use client";

import Image from 'next/image'
import { useState, useTransition } from 'react';
import Link from 'next/link';
import TabButton from './TabButton';

const AboutSection = () => {
    const [activeTab, setActiveTab] = useState("skills")
    const [isPending, startTransition] = useTransition()
    const handleTabChange = (id: string) => {
        console.log(id)
        startTransition(() => {
            setActiveTab(id)
        })
    }

    return (
        <section className='text-white mt-6'>
            <div className="px-4 lg:px-16 xl:px-[8vw] text-md md:text-lg">
                <div className='flex justify-center items-center'>
                    <div className='w-11/12 bg-neutral-400 h-[2px]' />
                    <h1 className='w-full mx-8 text-center py-10 font-bold text-2xl'>
                        About&nbsp;Me
                    </h1>
                    <div className='w-11/12 bg-neutral-400 h-[2px]' />
                </div>

                <div className='lg:h-[380px]'>
                    <Image
                        className="rounded-xl shadow-lg mr-4 w-[28vw] sm:w-44 md:w-60 float-left"
                        src="/images/me.png"
                        alt="my photo"
                        height={280}
                        width={280} />
                    <p>
                        <s>Hello, I&apos;m a React Developer specializing in...</s>
                    </p>
                    <br />
                    <p>
                        Tired of the same old intros? Well, here&apos;s something different – I&apos;m not your typical
                        <code> React Developer</code>. Yes, I bring hands-on experience with a diverse toolkit,
                        <> including React, Redux, TypeScript, TailwindCSS, and <Link className='text-blue-500 hover:underline cursor-pointer' href={"#about"}>more</Link></>.
                    </p>
                    <br />
                    <p>
                        <b>What truly sets me apart?</b>
                        <br />
                        Rapid growth.
                        <br /><br />
                        As you read this, I&apos;m actively enhancing my skills and expanding my toolkit to meet market demands. As a <strong>strong junior</strong>, my skills grow daily, ensuring adaptability.
                    </p>
                </div>

                <div className="bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-md mt-3 md:mt-4 lg:mt-5">
                    <Image
                        className='absolute h-auto min-w-[65px] w-[12vw] md:w-[90px] lg:w-[95px] -translate-x-1/2 -translate-y-[52%] left-1/2'
                        src="/images/push-pin-icon.png"
                        alt="push pin"
                        height={90}
                        width={90}
                    />
                    <h1 className="text-2xl md:text-3xl font-extrabold text-center mb-6 mt-4 text-yellow-300">🚀 Recent Achievements</h1>

                    <div className="text-white">
                        <b>Productivity</b>
                        <ul className="list-disc pl-6 mt-2">
                            <li className="mb-2">Achieved an impressive <strong className="text-green-500">~50%</strong> boost in average productivity, utilizing advanced time management techniques.</li>
                            <li className="mb-2">Realized a significant <strong className="text-green-500">~20%</strong> acceleration in Redux development speed through a seamless transition to Redux Toolkit.</li>
                            <li className="mb-2">Successfully achieved at least a <strong className="text-green-500">twofold</strong> improvement in reducing debugging time by leveraging ChatGPT for thorough code reviews.</li>
                            <li className="mb-2">Optimized the construction of website layouts with and without pre-made designs by mastering Firefox Developer Edition tools.</li>
                            <li className="mb-2">Methodically documented bugs, implemented solutions and valuable feature insights thus reducing future debugging time.</li>
                        </ul>
                    </div>

                    <div className="text-white mt-4">
                        <b>Tech Stack</b>
                        <ul className="list-disc pl-6 mt-2">
                            <li className="mb-1.5">Mastered <strong className="text-green-500">SASS</strong> for creative styling, successfully applied in a project.</li>
                            <li className="mb-1.5">Seamlessly integrated <strong className="text-green-500">TailwindCSS</strong> for streamlined and responsive designs.</li>
                            <li className="mb-1.5">Initiated <strong className="text-green-500">Next.JS</strong> development for this website, embracing advanced technology.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <TabButton activeTab={activeTab} selectTab={handleTabChange}>Skills</TabButton>
                    <TabButton activeTab={activeTab} selectTab={handleTabChange}>Education</TabButton>
                    <TabButton activeTab={activeTab} selectTab={handleTabChange}>Experience</TabButton>
                </div>

                <div className="text-left mt-6 text-gray-300">
                    <p className="text-2xl font-semibold mb-4">
                        🌟 Hiring me means:
                    </p>

                    <div className="space-x-4 mb-6">
                        <div className="w-6 h-6 absolute stroke-black bg-green-600 rounded-full flex items-center justify-center text-white">
                            <span className="font-bold">1</span>
                        </div>
                        <p className="text-lg pl-5">
                            Immediate boost for your front-end team performance.
                        </p>
                    </div>

                    <div className="space-x-4 mb-6">
                        <div className="w-6 h-6 absolute bg-green-600 rounded-full flex items-center justify-center text-white">
                            <span className="font-bold">2</span>
                        </div>
                        <p className="text-lg pl-5">
                            The assurance of a future <strong>loyal middle developer</strong>.
                        </p>
                    </div>

                    <div className="space-x-4 mb-6">
                        <div className="w-6 h-6 absolute bg-green-600 rounded-full flex items-center justify-center text-white">
                            <span className="font-bold">3</span>
                        </div>
                        <p className="text-lg pl-5">
                            Securing potential <strong>dedicated senior leader</strong>.
                        </p>
                    </div>

                    <p className="text-lg">
                        Hire me today and secure a powerful asset for lasting success in a competitive market.
                    </p>

                    <p className="text-lg mt-4">
                        And about salary expectations? Well, let&apos;s just say, my skills aren&apos;t the only thing growing every day! 💸
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection