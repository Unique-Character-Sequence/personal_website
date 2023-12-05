import Image from "next/image"
import motion from "framer-motion"

const ContactsSection = () => {
    return (
        <section className="grid text-white my-12 py-24 mx-12">
            <div>
                <h5 className="text-xl font-bold my-2">Let&apos;s Connect</h5>
                <div className="text-[#ADB7BE] mb-4 max-w-md">
                    Fuel your front-end success! 🚀<br />
                    Boost your team with my proven productivity,
                    continuous growth, and expertise in the latest tech stack.<br />
                    Want to enhance your front-end team&apos;s performance
                    and build trust for your company?
                    <p className="mt-1 font-bold">It&apos;s simple – contact me:</p>
                </div>
            </div>
            <div className="text-lg">
                <a href="mailto:pilici.rustam@gmail.com">
                    pilici.rustam@gmail.com
                </a>
                <br />
                +373 76 755 782
            </div>
            <div className="flex flex-row gap-2">
                <a href="https://github.com/Unique-Character-Sequence">
                    <Image
                        className=""
                        src="/images/github-icon.svg"
                        alt="my memoji"
                        height={50}
                        width={50}
                    />
                </a>
                <a href="https://linkedin.com/in/rustam-pilici/">
                    <Image
                        className=""
                        src="/images/linkedin-icon.svg"
                        alt="my memoji"
                        height={50}
                        width={50}
                    />
                </a>
            </div>
            <div className="place-self-center">
                asdasdasd
            </div>
        </section>
    )
}

export default ContactsSection