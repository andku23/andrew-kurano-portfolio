import React, {FC} from "react";

interface Props {
    title: string
}

export const SectionHeader: FC<Props> = ({title}) => { {
    return (
        <div className="w-full flex flex-col h-30 justify-center items-center text-center">
            <div className={"relative"}><h2>{title}</h2></div>
        </div>
    );
}}