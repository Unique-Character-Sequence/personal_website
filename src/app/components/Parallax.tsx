"use client"

import { motion, useAnimation, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const ShootingStars = ({ numStars }: { numStars: number }) => {
    const controls = useAnimation();

    const stars = Array.from({ length: numStars }).map((_, index) => ({
        id: index,
        x: Math.random() * 100 - 30, // Random horizontal position
        y: Math.random() * 17, // Random vertical position
    }));

    useEffect(() => {
        controls.start((i) => ({
            x: [`${stars[i].x}vw`, "150vw"], // Move from current x to 200vw (off the screen)
            y: [`${stars[i].y}vh`, "30vh"], // Move from current y to -100vh (off the screen)
            opacity: [1, 0],
            transition: {
                duration: Math.random() + 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
            },
        }));
    }, [controls, stars]);

    return (
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    custom={star.id} // Ensure each star has a unique custom key
                    animate={controls}
                    style={{
                        position: "absolute",
                        left: `${star.x}vw`,
                        top: `${star.y}vh`,
                    }}
                >
                    <svg viewBox="0 0 24 24" fill="white" width="24px" height="24px">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="1.3" />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
};

const Parallax = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    const sunY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "420%"])
    const mountainsY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
    const girlY = useTransform(scrollYProgress, [0, 1], ["0%", "2%"])

    return (
        <div
            ref={ref}
            className="w-full h-screen overflow-hidden relative grid place-items-center">
            <motion.h1
                style={{ y: textY }}
                className="font-bold
                drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
                text-white text-3xl sm:text-4xl md:text-5xl relative z-20">
                You&apos;ve come so far
            </motion.h1>
            <motion.div className="absolute inset-0 z-0"
                style={{
                    y: sunY,
                    backgroundImage: `url(/images/layer-sun-nogaps.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover"
                }} />
            <motion.div className="absolute inset-0 z-10"
                style={{
                    y: mountainsY,
                    backgroundImage: `url(/images/layer-mountains-nogaps.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }} />
            <motion.div className="absolute inset-0 z-20"
                style={{
                    y: girlY,
                    backgroundImage: `url(/images/Layer-girl.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover"
                }} />
            <ShootingStars numStars={14} />
        </div>
    )
}

export default Parallax