import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Icon from "@/components/ui/icon";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();
    const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);

    useEffect(() => {
        const unsub = scrollY.on("change", (v) => setScrolled(v > 60));
        return unsub;
    }, [scrollY]);

    const links = ["About", "Pillars", "Mission", "Register"];

    console.log(bgOpacity);

    return (
        <motion.header
            className="fixed top-0 inset-x-0 z-50"
            style={{
                backgroundColor: `rgba(10,25,60,${scrolled ? 0.97 : 0})`,
                backdropFilter: scrolled ? "blur(12px)" : "none",
                transition: "background-color 0.3s, backdrop-filter 0.3s",
            }}
        >
            <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
                <motion.a
                    href="#"
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14H8V8h2v8zm4 0h-2V8h2v8z" />
                        </svg>
                    </div>
                    <span className="font-bold text-white text-sm tracking-wider uppercase">
                        Inner City Mission
                    </span>
                </motion.a>

                <nav className="hidden md:flex items-center gap-8">
                    {links.map((l, i) => (
                        <motion.a
                            key={l}
                            href={`#${l.toLowerCase()}`}
                            className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i + 0.3 }}
                        >
                            {l}
                        </motion.a>
                    ))}
                    <motion.a
                        href="#register"
                        className="bg-yellow-400 text-blue-900 font-bold text-sm px-5 py-2 rounded-full hover:bg-yellow-300 transition-colors"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        Watch Out
                    </motion.a>
                </nav>

                <button
                    className="md:hidden text-white"
                    onClick={() => setOpen(!open)}
                >
                    {open ? (
                        <Icon icon={"lucide:menu"} className="size-6" />
                    ) : (
                        <Icon icon={"lucide:x"} className="size-6" />
                    )}
                </button>
            </div>

            {open && (
                <motion.div
                    className="md:hidden bg-blue-950 px-5 py-4 flex flex-col gap-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {links.map((l) => (
                        <a
                            key={l}
                            href={`#${l.toLowerCase()}`}
                            className="text-white/80 hover:text-white text-sm font-medium"
                            onClick={() => setOpen(false)}
                        >
                            {l}
                        </a>
                    ))}
                </motion.div>
            )}
        </motion.header>
    );
}
