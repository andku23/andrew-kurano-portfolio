import {configs} from "@/content/content";
import Landing from "@/content/landing.md";

function CustomUL({ children }) {
    return <ul className="relative m-0 p-0 flex justify-start items-start">{children}</ul>
}

function CustomLI({ children }) {
    return <li className="prose btn btn-ghost relative p-5 rounded-md text-center">{children}</li>
}

function CustomP1({ children }) {
    return <div className="prose"><p>{children}</p></div>
}


const overrideComponents = {
    li: CustomLI,
    p: CustomP1
}

export default function About() {
    return (
        <div className="flex justify-items-center flex-col md:flex-row relative p-10">
            <div className="flex flex-col justify-center relative grow md:w-200">
                <img
                    aria-hidden
                    src="/assets/headshot.jpg"
                    alt="headshot"
                    className = "rounded-md relative"
                />
            </div>
            <div className="flex flex-col grow-3 relative pl-10 pt-10 justify-start items-start">
                <div className="relative prose pb-5"><h1>{configs.common.name}</h1></div>
                <Landing components={overrideComponents}></Landing>
            </div>
        </div>
    );
}