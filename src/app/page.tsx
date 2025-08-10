import Image from "next/image";
import About from "@/ui/landing/about";
import Projects from "@/ui/projects/projects";

export default function Home() {
    return (
        <div>
            <main>
                <About/>
                <Projects/>
            </main>
        </div>
    );
}
