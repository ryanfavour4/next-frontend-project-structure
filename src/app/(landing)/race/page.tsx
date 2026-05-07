"use client";
import Navbar from "@/sections/navbar";
import Hero from "@/sections/hero-section";
import About from "@/sections/about";
import Pillars from "@/sections/pillars";
import Mission from "@/sections/mission";
import ComingSoon from "@/sections/coming-soon";
import Footer from "@/sections/footer";
import GetInvolved from "@/sections/get-involved";

export default function App() {
    return (
        <div className="bg-primary antialiased">
            <Navbar />
            <Hero />
            <About />
            <GetInvolved />
            <Pillars />
            <Mission />
            <ComingSoon />
            <Footer />
        </div>
    );
}
