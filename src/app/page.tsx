import Image from "next/image";
import About from "@/ui/landing/about";
import Projects from "@/ui/projects/projects";
import PlayCanvasGame from "@/playcanvas/playcanvasgame";
import {SectionHeader} from "@/ui/landing/section-header";

export default function Home() {
    return (
        <div>
            <main>
                <About/>
                <SectionHeader title={"Work Projects"}/>
                <Projects/>
                <SectionHeader title={"Personal Projects"}/>
                <PlayCanvasGame/>
            </main>
        </div>
    );
}
