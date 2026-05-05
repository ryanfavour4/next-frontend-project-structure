import { useInView, motion } from "motion/react";
import { useRef } from "react";

const milestones = [
    {
        year: "2005",
        label: "Founded",
        desc: "Inner City Mission established with a bold vision for vulnerable children.",
    },
    {
        year: "2010",
        label: "First Expansion",
        desc: "Programs extended across 5 nations, reaching 10,000 children.",
    },
    {
        year: "2015",
        label: "Global Reach",
        desc: "Partnerships with 50+ organizations across 20 countries.",
    },
    {
        year: "2025",
        label: "RACE Conference",
        desc: "Celebrating 20 years — sprinting together into the next chapter.",
    },
];

export default function Mission() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            id="mission"
            className="py-24 bg-linear-to-b from-[#061233] to-[#03091a] overflow-hidden"
        >
            <div className="max-w-6xl mx-auto px-5">
                {/* Section header */}
                <motion.div
                    ref={ref}
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-yellow-400 text-xs font-bold tracking-[0.3em] uppercase mb-3 block">
                        20 Years of Purpose
                    </span>
                    <h2 className="text-white text-4xl md:text-5xl font-black mb-4">
                        Running Towards
                        <br />
                        <span className="text-blue-400">A Better World</span>
                    </h2>
                    <div className="w-16 h-1 bg-linear-to-r from-yellow-400 to-blue-500 rounded-full mx-auto mb-6" />
                    <p className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
                        For two decades, Inner City Mission for Children has
                        been relentlessly running toward a world where every
                        child knows dignity, opportunity, and love.
                    </p>
                </motion.div>

                {/* Quote banner */}
                <motion.div
                    className="relative bg-linear-to-r from-blue-600/20 to-yellow-400/10 border border-white/10 rounded-3xl p-10 md:p-14 mb-20 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    {/* Background RACE watermark */}
                    <span
                        className="absolute -bottom-8 -right-4 text-[180px] font-black text-white/3 select-none pointer-events-none leading-none"
                        style={{
                            fontFamily: "Impact, Arial Black, sans-serif",
                        }}
                    >
                        RACE
                    </span>
                    <div className="relative z-10 text-center">
                        <span className="text-5xl text-blue-400 font-serif leading-none">
                            &quot;
                        </span>
                        <p className="text-white text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto -mt-3">
                            We don&apos;t just walk toward change — we{" "}
                            <span className="text-yellow-400 font-bold">
                                run
                            </span>
                            . Because the children waiting cannot afford for us
                            to slow down.
                        </p>
                        <p className="text-blue-400 text-sm font-semibold mt-5 tracking-wide">
                            — Inner City Mission for Children
                        </p>
                    </div>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-linear-to-b from-blue-500/50 via-yellow-400/30 to-transparent" />

                    <div className="flex flex-col gap-10">
                        {milestones.map((m, i) => (
                            <motion.div
                                key={m.year}
                                className={`flex flex-col md:flex-row items-center gap-5 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                                initial={{
                                    opacity: 0,
                                    x: i % 2 === 0 ? -40 : 40,
                                }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.3 + i * 0.12,
                                }}
                            >
                                <div
                                    className={`flex-1 ${i % 2 === 1 ? "md:text-right" : "md:text-left"}`}
                                >
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-colors">
                                        <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">
                                            {m.year}
                                        </span>
                                        <h4 className="text-white font-bold text-lg mt-1 mb-2">
                                            {m.label}
                                        </h4>
                                        <p className="text-white/55 text-sm leading-relaxed">
                                            {m.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Dot */}
                                <div className="relative shrink-0 w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30 z-10">
                                    <span className="text-white text-xs font-bold">
                                        {i + 1}
                                    </span>
                                </div>

                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
