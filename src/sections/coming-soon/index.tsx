import Icon from "@/components/ui/icon";
import { useInView, motion } from "motion/react";
import { useRef, useState } from "react";
// import { Bell, CheckCircle } from "lucide-react";

export default function ComingSoon() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (email.trim()) {
            setSubmitted(true);
            setEmail("");
        }
    }

    return (
        <section
            id="register"
            className="py-24 relative overflow-hidden bg-linear-to-br from-[#03091a] via-[#0a1e5e] to-[#03091a]"
        >
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-blue-600/15 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-75 h-75 rounded-full bg-yellow-400/8 blur-2xl" />
            </div>

            <div
                className="max-w-4xl mx-auto px-5 text-center relative z-10"
                ref={ref}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 bg-yellow-400/15 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-8">
                        <Icon
                            icon="lucide:bell"
                            className="text-yellow-400 size-3"
                        />
                        <span className="text-yellow-300 text-xs font-bold tracking-widest uppercase">
                            Details Coming Soon
                        </span>
                    </div>

                    <h2
                        className="text-white text-5xl md:text-7xl font-black mb-4 leading-none"
                        style={{
                            fontFamily: "Impact, Arial Black, sans-serif",
                        }}
                    >
                        WATCH OUT
                    </h2>
                    <p className="text-blue-300 text-lg font-bold tracking-[0.3em] uppercase mb-6">
                        For More Details
                    </p>

                    <div className="flex items-center justify-center gap-3 mb-10">
                        <div className="h-px w-16 bg-white/20" />
                        <span className="text-yellow-400 italic text-xl">
                            ...coming soon...
                        </span>
                        <div className="h-px w-16 bg-white/20" />
                    </div>

                    <p className="text-white/60 max-w-xl mx-auto mb-12 text-base leading-relaxed">
                        Be the first to know when registration opens, speakers
                        are announced, and full conference details are revealed.
                        Join the RACE.
                    </p>

                    {/* Email form */}
                    {!submitted ? (
                        <motion.form
                            onSubmit={handleSubmit}
                            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 }}
                        >
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                required
                                className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3.5 text-white placeholder-white/40 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                            />
                            <button
                                type="submit"
                                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-7 py-3.5 rounded-full text-sm tracking-wide transition-all hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30 whitespace-nowrap"
                            >
                                Notify Me
                            </button>
                        </motion.form>
                    ) : (
                        <motion.div
                            className="flex items-center justify-center gap-2 text-green-400 mb-8"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <Icon
                                icon="lucide:check-circle"
                                className="text-green-400 size-5"
                            />
                            <span className="font-semibold">
                                You&quot;re on the list! We&quot;ll be in touch
                                soon.
                            </span>
                        </motion.div>
                    )}

                    {/* Website URL */}
                    <motion.a
                        href="https://www.theinnercitymission.ngo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 font-bold text-sm tracking-[0.15em] uppercase transition-colors"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 }}
                    >
                        www.theinnercitymission.ngo
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
