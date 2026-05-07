import Navbar from "@/sections/navbar";
import Hero from "@/sections/hero-section";
import About from "@/sections/about";
import Mission from "@/sections/mission";
import ComingSoon from "@/sections/coming-soon";
import Footer from "@/sections/footer";
import GetInvolved from "@/sections/get-involved";

export default function Home() {
    return (
        <div className="bg-primary antialiased">
            <Navbar />
            <Hero />
            <About />
            <GetInvolved />
            <Mission />
            <ComingSoon />
            <Footer />
        </div>
    );
}

