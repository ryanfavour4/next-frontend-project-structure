"use client";
import Navbar from "@/sections/navbar";
import Hero from "@/sections/hero-section";
import About from "@/sections/about";
import Pillars from "@/sections/pillars";
import Mission from "@/sections/mission";
import ComingSoon from "@/sections/coming-soon";
import Footer from "@/sections/footer";

export default function App() {
    return (
        <div className="bg-[#03091a] antialiased">
            <Navbar />
            <Hero />
            <About />
            <Pillars />
            <Mission />
            <ComingSoon />
            <Footer />
        </div>
    );
}
