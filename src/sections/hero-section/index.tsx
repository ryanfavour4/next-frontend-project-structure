import Icon from "@/components/ui/icon";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const letters = ["R", "A", "C", "E"];
const letterColors = [
    "text-blue-400",
    "text-blue-400",
    "text-yellow-400",
    "text-blue-400",
];
const words = ["Resources", "Accelerate", "Collaborate", "Extend"];

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-[#03091a] via-[#061233] to-[#0a1e5e]"
        >
            {/* Radial glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full bg-blue-600/10 blur-3xl" />
                <div className="absolute top-1/3 left-1/3 w-75 h-75 rounded-full bg-yellow-400/5 blur-2xl" />
            </div>

            {/* Speed lines */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute h-px bg-linear-to-r from-transparent via-blue-400/30 to-transparent"
                    style={{
                        top: `${15 + i * 10}%`,
                        width: "60%",
                        left: "20%",
                    }}
                    animate={{ scaleX: [0, 1, 0], x: ["-20%", "20%", "60%"] }}
                    transition={{
                        duration: 2.5 + i * 0.3,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut",
                    }}
                />
            ))}

            <motion.div
                className="relative z-10 text-center px-5 max-w-5xl mx-auto"
                style={{ y, opacity }}
            >
                {/* 20th anniversary badge */}
                <motion.div
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                    <span className="text-white/90 text-xs font-semibold tracking-widest uppercase">
                        20th Anniversary Edition
                    </span>
                </motion.div>

                {/* Organization label */}
                <motion.p
                    className="text-blue-300 text-sm font-semibold tracking-[0.3em] uppercase mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    Inner City Mission for Children presents
                </motion.p>

                {/* RACE letters */}
                <div className="flex items-center justify-center gap-1 md:gap-3 mb-2">
                    {letters.map((letter, i) => (
                        <motion.span
                            key={letter}
                            className={`font-black leading-none select-none ${letterColors[i]}`}
                            style={{
                                fontSize: "clamp(5rem, 18vw, 14rem)",
                                textShadow:
                                    i === 2
                                        ? "0 0 60px rgba(250,204,21,0.5), 0 4px 30px rgba(0,0,0,0.5)"
                                        : "0 0 60px rgba(59,130,246,0.4), 0 4px 30px rgba(0,0,0,0.5)",
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-2 max-w-2xl mx-auto mb-10">
                    {words.map((word, i) => (
                        <motion.div
                            key={word}
                            className="flex flex-col items-center gap-1"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 + i * 0.1 }}
                        >
                            <span className="text-white/50 text-[10px] font-bold tracking-[0.2em] uppercase">
                                {letters[i]}
                            </span>
                            <span className="text-white font-semibold text-sm md:text-base tracking-wide">
                                {word}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Conference label */}
                <motion.p
                    className="text-blue-200 text-lg md:text-xl font-bold tracking-[0.4em] uppercase mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                >
                    Conference
                </motion.p>

                {/* Coming soon tag */}
                <motion.div
                    className="flex items-center justify-center gap-3 mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                >
                    <div className="h-px w-12 bg-white/30" />
                    <span className="text-yellow-400 italic font-medium text-base md:text-lg">
                        ...coming soon...
                    </span>
                    <div className="h-px w-12 bg-white/30" />
                </motion.div>

                {/* CTA */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.55 }}
                >
                    <a
                        href="#about"
                        className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-3.5 rounded-full text-sm tracking-wider uppercase transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
                    >
                        Discover More
                    </a>
                    <a
                        href="https://www.theinnercitymission.ngo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white/30 hover:border-white/60 text-white font-medium px-8 py-3.5 rounded-full text-sm tracking-wider uppercase transition-all hover:bg-white/5"
                    >
                        Visit Website
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <span className="text-[10px] tracking-widest uppercase">
                    Scroll
                </span>
                <Icon icon={"lucide:lucide:arrow-down"} className="size-4" />
            </motion.div>
        </section>
    );
}
