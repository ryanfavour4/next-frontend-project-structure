import Icon from "@/components/ui/icon";
import { motion } from "motion/react";
import Link from "next/link";

const letters = ["R", "A", "C", "E"];
const letterColors = [
    "text-primary",
    "text-primary",
    "text-yellow-400",
    "text-primary",
];
const words = ["Reaching", "All", "Children", "Everywhere"];

export default function Hero() {
    return (
        <div className="min-h-screen py-48 pt-36 bg-linear-to-br from-background via-background-fade to-background relative overflow-y-hidden overflow-x-hidden">
            {/* Radial glow */}
            <div className="absolute inset-0 pointer-events-none min-h-screen">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute top-1/3 left-1/3 w-75 h-75 rounded-full bg-secondary/10 blur-2xl" />
            </div>

            {/* Speed lines */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"
                    style={{
                        top: `${15 + i * 10}%`,
                        width: "60%",
                        left: "20%",
                    }}
                    animate={{
                        scaleX: [0, 1, 0],
                        x: ["-20%", "-10%", "20%", "60%"],
                    }}
                    transition={{
                        duration: 2.5 + i * 0.3,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* 20th anniversary badge */}
            <motion.div
                className="flex w-fit items-center gap-2 bg-primary/10 backdrop-blur-sm border border-text/20 rounded-full px-4 py-1.5 mb-8 mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-text/75 text-xs font-semibold tracking-widest uppercase">
                    20th Anniversary Edition
                </span>
            </motion.div>

            {/* Organization label */}
            <motion.p
                className="text-primary/95 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
            >
                The InnerCity Mission for Children presents
            </motion.p>

            {/* RACE letters */}
            <div className="flex items-center justify-center gap-1 md:gap-3 mb-2">
                {letters.map((letter, i) => (
                    <motion.span
                        key={letter}
                        className={`font-black leading-none select-none ${letterColors[i]}`}
                        style={{
                            fontSize: "clamp(5rem, 18vw, 14rem)",
                            // textShadow:
                            // i === 2
                            //     ? "0 0 60px rgba(250,204,21,0.0), 0 4px 30px rgba(0,0,0,0.0)"
                            //     : "0 0 60px rgba(9, 76, 240, 0.0), 0 4px 30px rgba(0,0,0,0.0)",
                            fontFamily: "Impact, Arial Black, sans-serif",
                        }}
                        initial={{ opacity: 0, y: 60, scale: 0.7 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.3 + i * 0.1,
                            type: "spring",
                            stiffness: 150,
                        }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>

            {/* Red slash accent */}
            <motion.div
                className="relative mx-auto mb-6"
                style={{
                    width: "clamp(280px, 70vw, 600px)",
                    height: "4px",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-red-500 to-transparent rounded-full" />
            </motion.div>

            {/* Subtitle word grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-2 max-w-xs md:max-w-xl mx-auto mb-10">
                {words.map((word, i) => (
                    <motion.div
                        key={word}
                        className="flex flex-col items-center gap-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 + i * 0.1 }}
                    >
                        <span className="text-text/50 text-[10px] font-bold tracking-[0.2em] uppercase">
                            {letters[i]}
                        </span>
                        <span className="text-text font-semibold text-sm md:text-base tracking-wide">
                            {word}
                        </span>
                    </motion.div>
                ))}
            </div>
            {/* Conference label */}
            <motion.p
                className="text-primary/50 text-lg  text-center md:text-xl font-bold tracking-[0.4em] uppercase mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
            >
                Conference
            </motion.p>

            {/* CTA */}
            <motion.div
                className="flex flex-col gap-4 justify-center items-center md:flex-row md:max-w-2xl mx-auto px-6 mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.55 }}
            >
                <Link
                    href="#about"
                    className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3.5 rounded-full text-sm tracking-wider uppercase transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/35"
                >
                    Discover More
                </Link>
                <Link
                    href="https://www.theinnercitymission.ngo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-primary/50 hover:border-primary/50 text-primary font-medium px-8 py-3.5 rounded-full text-sm tracking-wider uppercase transition-all hover:bg-white/5"
                >
                    Visit Website
                </Link>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/50 flex flex-col items-center gap-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <span className="text-[10px] tracking-widest uppercase">
                    Scroll
                </span>
                <Icon
                    icon={"lucide:arrow-down"}
                    className="size-4 text-primary"
                />
            </motion.div>
        </div>
    );
}
