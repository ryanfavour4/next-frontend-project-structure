"use client";
import { useState, useEffect } from "react";
import { motion, useScroll } from "motion/react";
import Icon from "@/components/ui/icon";
import Logo from "@/components/logo";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        const unsub = scrollY.on("change", (v) => setScrolled(v > 60));
        return unsub;
    }, [scrollY]);

    const links = ["About", "Pillars", "Mission", "Register"];

    return (
        <motion.header
            className={`fixed top-0 inset-x-0 z-50 ${scrolled ? "bg-primary/5" : "bg-primary/0"}`}
            style={{
                backdropFilter: scrolled ? "blur(12px)" : "none",
                transition: "background-color 0.3s, backdrop-filter 0.3s",
            }}
        >
            <div className="max-w-6xl mx-auto px-5 h-20 flex items-center justify-between">
                <motion.a
                    href="#"
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Logo className="w-28" />
                </motion.a>

                <nav className="hidden md:flex items-center gap-8">
                    {links.map((l, i) => (
                        <motion.a
                            key={l}
                            href={`#${l.toLowerCase()}`}
                            className="text-primary/80 hover:text-primary text-sm font-medium tracking-wide transition-colors"
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
                            className="text-primary/80 hover:text-primary text-sm font-medium"
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
