import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="fixed w-full bg-[#121212] z-20 sm:text-xl lg:text-2xl">
            <div className="flex flex-wrap items-center mx-auto px-14 py-2 justify-between">
                <Link href={"/"} className="text-white">Logo</Link>
                <div className="hidden sm:flex justify-between text-neutral-300 w-[220px] sm:w-[260px] md:w-[340px] lg:-[300px]">
                    <Link href={"#about"}>About</Link>
                    <Link href={"#projects"}>Projects</Link>
                    <Link href={"#contacts"}>Contacts</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar