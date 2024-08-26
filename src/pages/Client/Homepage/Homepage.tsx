import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Homepage() {
    return (
        <>
            <header className="bg-[#212121] text-white">
                <Navbar />
                <Hero />
            </header>
        </>
    )
}
