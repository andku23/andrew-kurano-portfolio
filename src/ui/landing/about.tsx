import {configs} from "@/content/content";
import Landing from "@/content/landing.md";
import {ReactNode} from "react";

function CustomUL({ children }: Props) {
    return <ul className="relative m-0 p-0 flex justify-start items-start">{children}</ul>
}

function CustomLI({ children }: Props) {
    return <li className="btn relative p-5 mb-3 rounded-md text-center"><h4>{children}</h4></li>
}

function CustomP1({ children }: Props) {
    return <div className="mb-5"><p>{children}</p></div>
}

interface Props {
    children?: ReactNode
}

const overrideComponents = {
    li: CustomLI,
    p: CustomP1
}

export default function About() {
    return (
        <div className="flex justify-items-center flex-col md:flex-row relative p-10">
            <div className="flex flex-col justify-center relative grow md:w-300">
                <img
                    aria-hidden
                    src="/assets/headshot.jpg"
                    alt="headshot"
                    className = "rounded-md relative"
                />
            </div>
            <div className="flex flex-col grow relative pl-10 pt-10 justify-start items-start">
                <div className="relative pb-5"><h1>{configs.common.name}</h1></div>
                <Landing components={overrideComponents}></Landing>
            </div>
        </div>
    );
}