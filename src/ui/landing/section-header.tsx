import {FC} from "react";

interface Props {
    title: string
}

export const SectionHeader: FC<Props> = ({title}) => { {
    return (
        <div className="w-full flex flex-col h-30 justify-center items-center text-center">
            <div className={"prose relative"}><h1>{title}</h1></div>
        </div>
    );
}}