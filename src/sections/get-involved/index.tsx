import RegisterModal from "@/components/modal/register-modal";
import Icon from "@/components/ui/icon";
import { useInView, motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

function PillarCard({
    pillar,
    index,
}: {
    pillar: {
        letter: string;
        word: string;
        color: string;
        glow: string;
        icon: string;
        desc: string;
        button: string;
        function: () => void;
    };
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

            <div className="flex gap-2">
                {/* Icon */}
                <div
                    className={`w-8 h-8 rounded-xl bg-linear-to-br ${pillar.color} flex items-center justify-center mb-5 shadow-lg ${pillar.glow}`}
                >
                    <Icon icon={icon} className="text-text size-5" />
                </div>

                {/* Label */}
                <div className="flex items-baseline gap-2 mb-3">
                    <span
                        className={`text-2xl font-black bg-linear-to-r ${pillar.color} bg-clip-text text-transparent hidden`}
                        style={{
                            fontFamily: "Impact, Arial Black, sans-serif",
                        }}
                    >
                        {pillar.letter}
                    </span>
                    <h3 className="text-white font-bold md:text-xl text-lg">
                        {pillar.word}
                    </h3>
                </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed">
                {pillar.desc}
            </p>

            <button
                onClick={pillar.function}
                className="btn-secondary w-full mt-6"
            >
                <span>{pillar.button}</span>
                <Icon icon={"lucide:arrow-right"} />
            </button>

            {/* Hover glow */}
            <div
                className={`absolute inset-0 rounded-2xl bg-linear-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
            />
        </motion.div>
    );
}

export default function GetInvolved() {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const pillars = [
        {
            letter: "R",
            word: "Register",
            color: "from-secondary/75 to-secondary",
            glow: "shadow-secondary/30",
            icon: "lucide:user-plus-2",
            desc: "Sign up to participate and also get updated about the conference information. Join the RACE.",
            button: "Register",
            function: () => setOpen(true),
        },
        {
            letter: "A",
            word: "Watch Event Live",
            color: "from-secondary/75 to-secondary",
            glow: "shadow-secondary/30",
            icon: "lucide:video",
            desc: "Click the button below to participate live in the RACE Conference.",
            button: "WATCH NOW",
            function: () => router.push("/watch-live"),
        },
    ];

    const titleRef = useRef(null);
    const inView = useInView(titleRef, { once: true, margin: "-60px" });

    return (
        <>
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
                            Get Involved
                        </h2>
                        <div className="w-16 h-1 bg-linear-to-r from-blue-500 to-yellow-400 rounded-full mx-auto mb-5" />
                        <p className="text-white/60 max-w-xl mx-auto text-base leading-relaxed">
                            Every Process represents a core commitment. Together
                            we form the blueprint for transforming our
                            children&apos;s futures.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-3xl mx-auto">
                        {pillars.map((p, i) => (
                            <PillarCard key={p.word} pillar={p} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            <RegisterModal open={open} onClose={() => setOpen(false)} />
        </>
    );
}
