"use client";

import "./animate_appearing.scss"
import Link from "next/link"
import { useEffect, useState } from "react";

const hoverMenuItem = "hover:text-white transition duration-150"

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true)

    const handleScroll = () => {
        const currentScrollPos = window.scrollY
        if (currentScrollPos > prevScrollPos) {
            setVisible(false)
        } else {
            setVisible(true)
        }
        setPrevScrollPos(currentScrollPos)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <nav id="navbar" className={`appearing_transition ${visible ? 'top-0' : 'top-[-100px]'} sticky w-full bg-[#121212] bg-opacity-95 z-20`}>
            <div className="transition duration-300 flex flex-wrap items-center mx-auto px-[8vw] py-3.5 justify-between  sm:text-xl lg:text-2xl">
                <Link href={"/"} className="text-white">Logo</Link>
                <div className="hidden sm:flex justify-between text-neutral-300 w-[220px] sm:w-[280px] md:w-[300px] lg:w-[380px]">
                    <Link className={hoverMenuItem} href={"#about"}>About</Link>
                    <Link className={hoverMenuItem} href={"#projects"}>Projects</Link>
                    <Link className={hoverMenuItem} href={"#contacts"}>Contacts</Link>
                </div>

            </div>
        </nav>
    )
}

export default Navbar