'use client'

import {FC, useState} from "react";
import clsx from "clsx";
import * as motion from "motion/react-client"
import type { Variants } from "motion/react"

export interface LiveDemoButtonProps {
    name: string;
    url: string;
}

export enum ImagePosition {
    Right,
    Left,
}

interface Props {
    id: string;
    title: string;
    location: string;
    demo?: LiveDemoButtonProps[];
    triggerSiteOverview?: string;
    tags: string[];
    description: string;
    readMore?: string;
    image: string;
    imagePosition: ImagePosition;
    jpg: string;
    video: string;
    bgcolor: string;
    textcolor: string;
}

const ProjectVariantLeft: Variants = {
    offscreen: {
        x: "-100%",
    },
    onscreen: {
        x: "0",
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.8,
        },
    },
}

const ProjectVariantRight: Variants = {
    offscreen: {
        x: "100%",
    },
    onscreen: {
        x: "0",
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.8,
        },
    },
}


export const ProjectDisplay: FC<Props> = ({
                                              id,
                                              title,
                                              demo,
                                              triggerSiteOverview,
                                              tags,
                                              description,
                                              readMore,
                                              image,
                                              imagePosition,
                                              location,
                                              jpg,
                                              video,
                                              bgcolor,
                                              textcolor
                                          }) => {

    const [isHovered, setIsHovered] = useState<"inactive" | "active">(
        "inactive"
    );

    const handleMouseEnter = () => {
        setIsHovered("active");
    };

    const handleMouseLeave = () => {
        setIsHovered("inactive");
    };

    return (
        <motion.div initial="offscreen"
                    whileInView="onscreen"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    viewport={{ amount: 0.3 }}>
            <motion.div variants={
                (imagePosition === ImagePosition.Right) ? ProjectVariantLeft : ProjectVariantRight} className={clsx(
                `flex flex-col py-10`,
                {
                    'md:flex-row-reverse justify-end': imagePosition === ImagePosition.Right,
                    'md:flex-row justify-start': imagePosition === ImagePosition.Left,
                },
            )}

                        style={{backgroundColor: bgcolor, color: textcolor}}>


                <div className="md:w-150 relative px-5">
                    <motion.div
                        animate={isHovered}
                        variants={{
                            inactive: {scale: 1.0},
                            active: {scale: 1.1}
                        }}
                    >
                        <img
                            src={image}
                            className="rounded-md relative"
                        />
                    </motion.div>

                </div>

                <div className={clsx(
                    `md:w-full mt-5 md:mt-0 relative flex flex-col px-5 grow`,
                    {
                        'text-right items-end': imagePosition === ImagePosition.Right,
                        'text-left items-start': imagePosition === ImagePosition.Left,
                    },
                )}>
                    <div className={"md:max-w-220"}>
                        <h3 className={"mb-5"} style={{color: textcolor}}>{title}</h3>
                        <p style={{color: textcolor}}>{description}</p>
                    </div>

                    <div className={clsx(
                        `flex flex-row mt-5 relative`,
                        {
                            'justify-end': imagePosition === ImagePosition.Right,
                            'justify-start': imagePosition === ImagePosition.Left,
                        },
                    )}>
                        <a href={triggerSiteOverview} target="_blank"
                           className="btn rounded-md flex justify-items-center font-medium hover:bg-accent hover:text-white-600">
                            <h4 className={"relative m-0 p-0"}>Overview</h4>
                        </a>
                        {demo?.map((itm, idx) => (
                            <a href={itm.url} target="_blank" key={idx}
                               className="btn mx-3 rounded-md flex justify-items-center font-medium hover:bg-accent hover:text-white-600">
                                <h4 className={"relative m-0 p-0"}>{itm.name}</h4>
                            </a>
                    ))}
                </div>
            </div>
        </motion.div>
</motion.div>
)
    ;
}
