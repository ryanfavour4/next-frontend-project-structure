import Icon from "@/components/ui/icon";
import { useInView, motion } from "motion/react";
import { useRef } from "react";
// import { Package, Zap, Users, ArrowRight } from "lucide-react";

const pillars = [
    {
        letter: "R",
        word: "Resources",
        color: "from-blue-500 to-blue-700",
        glow: "shadow-blue-500/30",
        icon: "lucide:package",
        desc: "Equipping frontline NGOs and community leaders with the tools, funding insights, and practical knowledge to maximize their impact on vulnerable children.",
    },
    {
        letter: "A",
        word: "Accelerate",
        color: "from-cyan-500 to-blue-600",
        glow: "shadow-cyan-500/30",
        icon: "lucide:zap",
        desc: "Fast-tracking sustainable development programs that directly improve the lives of underprivileged children and families across communities.",
    },
    {
        letter: "C",
        word: "Collaborate",
        color: "from-yellow-400 to-orange-500",
        glow: "shadow-yellow-400/30",
        icon: "lucide:users",
        desc: "Building powerful networks between NGOs, governments, businesses, and communities to amplify collective action for children in need.",
    },
    {
        letter: "E",
        word: "Extend",
        color: "from-blue-500 to-indigo-700",
        glow: "shadow-blue-500/30",
        icon: "lucide:arrow-right",
        desc: "Expanding reach beyond borders — scaling proven models, replicating successes, and bringing life-changing programs to more children globally.",
    },
];

function PillarCard({
    pillar,
    index,
}: {
    pillar: (typeof pillars)[0];
    index: number;
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const icon = pillar.icon;

    return (
        <motion.div
            ref={ref}
            className="relative group bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-white/25 transition-all duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.12 }}
        >
            {/* Big letter watermark */}
            <span
                className="absolute -top-4 -right-2 text-8xl font-black opacity-5 select-none pointer-events-none"
                style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
            >
                {pillar.letter}
            </span>

            {/* Icon */}
            <div
                className={`w-12 h-12 rounded-xl bg-linear-to-br ${pillar.color} flex items-center justify-center mb-5 shadow-lg ${pillar.glow}`}
            >
                <Icon icon={icon} className="text-white size-6" />
            </div>

            {/* Label */}
            <div className="flex items-baseline gap-2 mb-3">
                <span
                    className={`text-2xl font-black bg-linear-to-r ${pillar.color} bg-clip-text text-transparent`}
                    style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
                >
                    {pillar.letter}
                </span>
                <h3 className="text-white font-bold text-lg">{pillar.word}</h3>
            </div>

            <p className="text-white/60 text-sm leading-relaxed">
                {pillar.desc}
            </p>

            {/* Hover glow */}
            <div
                className={`absolute inset-0 rounded-2xl bg-linear-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
            />
        </motion.div>
    );
}

export default function Pillars() {
    const titleRef = useRef(null);
    const inView = useInView(titleRef, { once: true, margin: "-60px" });

    return (
        <section
            id="pillars"
            className="py-24 bg-linear-to-b from-[#0a1e5e] to-[#061233]"
        >
            <div className="max-w-6xl mx-auto px-5">
                <motion.div
                    ref={titleRef}
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase mb-3 block">
                        Conference Framework
                    </span>
                    <h2
                        className="text-white text-4xl md:text-5xl font-black mb-4"
                        style={{
                            fontFamily: "Impact, Arial Black, sans-serif",
                        }}
                    >
                        The Four Pillars
                    </h2>
                    <div className="w-16 h-1 bg-linear-to-r from-blue-500 to-yellow-400 rounded-full mx-auto mb-5" />
                    <p className="text-white/60 max-w-xl mx-auto text-base leading-relaxed">
                        Every letter in{" "}
                        <span className="text-white font-bold">RACE</span>{" "}
                        represents a core commitment — together they form the
                        blueprint for transforming children&apos;s futures.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {pillars.map((p, i) => (
                        <PillarCard key={p.word} pillar={p} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
