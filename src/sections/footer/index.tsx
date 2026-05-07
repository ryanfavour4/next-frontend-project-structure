// import { motion } from "motion";

import Icon from "@/components/ui/icon";

export default function Footer() {
    return (
        <footer className="bg-[#03091a] border-t border-white/10 py-10">
            <div className="max-w-6xl mx-auto px-5">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <span
                            className="text-white font-black text-lg tracking-wider"
                            style={{
                                fontFamily: "Impact, Arial Black, sans-serif",
                            }}
                        >
                            RACE{" "}
                            <span className="text-blue-400">Conference</span>
                        </span>
                        <span className="text-white/40 text-xs">
                            The InnerCity Mission for Children — 20th
                            Anniversary
                        </span>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6">
                        <a
                            href="https://www.theinnercitymission.ngo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-white/50 hover:text-white text-xs transition-colors"
                        >
                            <Icon icon={"lucide:globe"} className="size-3.5" />
                            <span>theinnercitymission.ngo</span>
                        </a>
                        <a
                            href="mailto:info@theinnercitymission.ngo"
                            className="flex items-center gap-1.5 text-white/50 hover:text-white text-xs transition-colors"
                        >
                            <Icon icon={"lucide:mail"} className="size-3.5" />
                            <span>Contact</span>
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-white/25 text-xs">
                        &copy; {new Date().getFullYear()} The InnerCity Mission
                        for Children. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
