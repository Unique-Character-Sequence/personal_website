import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
    return (
        <section className='text-white'>
            <div className="grid grid-cols-12 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <div className="flex col-span-4 justify-center md:items-center items-start">
                    <Image
                        src="/images/me.png"
                        alt="my memoji"
                        height={280}
                        width={280} />
                </div>
                <div className="col-span-8 text-md md:text-lg">
                    <p>
                        <s>Experienced React Developer specializing in...</s>
                    </p>
                    <br />
                    <p>
                        Tired of the same old intros? Well, here&apos;s something different – I&apos;m not your typical <code>React Developer</code>. Yes, I bring hands-on experience with a diverse toolkit, including React, Redux, TypeScript, TailwindCSS and more.
                    </p>
                    <br />
                    <p>
                        <b>What truly sets me apart?</b>
                        <br />
                        Rapid growth. As you read this, I&apos;m actively enhancing my skills and expanding my toolkit to meet evolving web development demands. I&apos;m not just an asset; I am <b>a strategic investment for your team</b>. My skills evolve daily, ensuring seamless alignment with the dynamic landscape. Invest in me, and position your team strategically for success in today&apos;s competitive market.
                    </p>
                    <br />
                    <p>
                        And hey, about salary expectations? Well, let&apos;s just say, my skills aren&apos;t the only thing growing every day!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection