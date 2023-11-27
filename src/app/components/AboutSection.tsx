import Image from 'next/image'

const AboutSection = () => {
    return (
        <section className='text-white mt-6'>
            <div className="px-4 lg:px-16 xl:px-[8vw] text-justify text-md md:text-lg">
                <div className='flex justify-center items-center'>
                    <div className='w-11/12 bg-neutral-400 h-[2px]' />
                    <h1 className='w-full mx-8 text-center py-10 font-bold text-2xl'>
                        About&nbsp;Me
                    </h1>
                    <div className='w-11/12 bg-neutral-400 h-[2px]' />
                </div>
                <Image
                    className="rounded-xl mr-4 w-44 md:w-60 float-left"
                    src="/images/me.png"
                    alt="my memoji"
                    height={280}
                    width={280} />
                <p>
                    <s>Hello, I&apos;m a React Developer specializing in...</s>
                </p>
                <br />
                <p>
                    Tired of the same old intros? Well, here&apos;s something different – I&apos;m not your typical <code>React Developer</code>. Yes, I bring hands-on experience with a diverse toolkit, including React, Redux, TypeScript, TailwindCSS, and more.
                </p>
                <br />
                <p>
                    <b>What truly sets me apart?</b>
                    <br />
                    Rapid growth.
                    <br /><br />
                    As you read this, I&apos;m actively enhancing my skills and expanding my toolkit to meet market demands. As a <strong>strong junior</strong>, my skills grow daily, ensuring adaptability.
                </p>
                <br />
                <div className="text-left">
                    {/* TODO: Cюда мы и засовываем доказательство, подкрепляя наши слова */}
                    <h1 className="text-xl font-bold">Recent Achievements</h1>
                    <b>Productivity</b>
                    <ul>
                        <li>- Achieved an impressive <strong>~50%</strong> boost in average productivity, utilizing advanced time management techniques.</li>
                        <li>- Realized a significant <strong>~20%</strong> acceleration in Redux development speed through a seamless transition to Redux Toolkit.</li>
                        <li>- Successfully achieved at least a twofold improvement in reducing debugging time by leveraging ChatGPT for thorough code reviews.</li>
                        <li>- Optimized the construction of website layouts with or without pre-made designs by mastering Firefox Developer Edition tools.</li>
                    </ul>
                    <br />
                    <b>Tool Proficiency</b>
                    <ul>
                        <li>- Mastered <strong>SASS</strong> for creative styling, successfully applied in a project.</li>
                        <li>- Seamlessly integrated <strong>TailwindCSS</strong> for streamlined and responsive designs.</li>
                        <li>- Initiated <strong>Next.JS</strong> development for this website, embracing advanced technology.</li>
                        <li>- Methodically documented bugs, implemented inventive solutions, and provided valuable feature insights.</li>
                    </ul>
                </div>
                <br /><br />
                Hiring me means not just immediate value but also the promise of a <strong>loyal middle developer</strong> and potential <strong>senior leader</strong> down the line. Invest in me today and get a strong asset for lasting success in a competitive market.
                <br />
                <p>
                    And hey, about salary expectations? Well, let&apos;s just say, my skills aren&apos;t the only thing growing every day!
                </p>
            </div>
        </section>
    )
}

export default AboutSection