import Link from "next/link"

const hoverMenuItem = "hover:text-white hover:text-underline transition duration-150"

const Navbar = () => {
    return (
        <nav className="fixed w-full bg-[#121212] bg-opacity-95 z-20 sm:text-xl lg:text-2xl">
            <div className="flex flex-wrap items-center mx-auto px-[8vw] py-3.5 justify-between">
                <Link href={"/"} className="text-white">Logo</Link>
                <div className="hidden sm:flex justify-between text-neutral-300 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[380px]">
                    <Link className={hoverMenuItem} href={"#about"}>About</Link>
                    <Link className={hoverMenuItem} href={"#projects"}>Projects</Link>
                    <Link className={hoverMenuItem} href={"#contacts"}>Contacts</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar