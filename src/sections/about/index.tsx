import Icon from "@/components/ui/icon";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

const stats = [
    { value: "20+", label: "Years of Impact", icon: "lucide:star" },
    { value: "50K+", label: "Children Reached", icon: "lucide:heart" },
    { value: "30+", label: "Countries", icon: "lucide:globe" },
    { value: "100+", label: "Partner NGOs", icon: "lucide:trending-up" },
];

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            id="about"
            className="py-24 bg-linear-to-b from-[#03091a] to-[#0a1e5e]"
        >
            <div className="max-w-6xl mx-auto px-5">
                <div className="grid lg:grid-cols-2 gap-14 items-center">
                    {/* Left: text */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase mb-3 block">
                            About The Conference
                        </span>
                        <h2 className="text-white text-4xl md:text-5xl font-black mb-6 leading-tight">
                            A Global Sprint
                            <br />
                            <span className="text-blue-400">
                                For Children&apos;s
                            </span>
                            <br />
                            <span className="text-yellow-400">Futures</span>
                        </h2>
                        <div className="w-16 h-1 bg-linear-to-r from-blue-500 to-yellow-400 rounded-full mb-7" />
                        <p className="text-white/70 text-base leading-relaxed mb-5">
                            The RACE Conference is Inner City Mission for
                            Children&apos;s flagship gathering — bringing
                            together NGOs, ministry leaders, policymakers, and
                            change-makers on a shared sprint to Resource,
                            Accelerate, Collaborate, and Extend the reach of
                            transformational work in underserved communities.
                        </p>
                        <p className="text-white/60 text-sm leading-relaxed mb-8">
                            Celebrating 20 years of relentless pursuit, this
                            conference is more than a gathering — it is a
                            declaration that every child deserves a future, and
                            together we will run to make it happen.
                        </p>
                        <a
                            href="https://www.theinnercitymission.ngo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors group"
                        >
                            <span>Learn more at theinnercitymission.ngo</span>
                            <span className="group-hover:translate-x-1 transition-transform">
                                →
                            </span>
                        </a>
                    </motion.div>

                    {/* Right: stats grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((s, i) => {
                            const icon = s.icon;
                            return (
                                <motion.div
                                    key={s.label}
                                    className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 group"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.2 + i * 0.1,
                                    }}
                                >
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                                        <Icon
                                            icon={icon}
                                            className="text-blue-400 size-5"
                                        />
                                    </div>
                                    <div className="text-3xl font-black text-white mb-1">
                                        {s.value}
                                    </div>
                                    <div className="text-white/50 text-xs font-medium tracking-wide">
                                        {s.label}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
