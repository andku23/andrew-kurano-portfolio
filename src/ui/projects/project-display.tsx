import {FC} from "react";
import clsx from "clsx";
import Link from "next/link";

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
    triggerSiteOverview?: Url;
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
    return (
        <div className={clsx(
            `flex flex-col py-10 `,
            {
                'md:flex-row-reverse justify-end': imagePosition === ImagePosition.Right,
                'md:flex-row justify-start': imagePosition === ImagePosition.Left,
            },
        )}
             style={{backgroundColor: bgcolor, color: textcolor}}>
            <div className="md:w-150 relative px-5">
                <img
                    src={image}
                    className="rounded-md relative"
                />
            </div>

            <div className={clsx(
                `md:w-full mt-5 md:mt-0 relative flex flex-col px-5 grow`,
                {
                    'text-right items-end': imagePosition === ImagePosition.Right,
                    'text-left items-start': imagePosition === ImagePosition.Left,
                },
            )}>
                <div className={"prose"}>
                    <h2 style={{color: textcolor}}>{title}</h2>
                    <h4 style={{color: textcolor}}>{description}</h4>
                </div>

                <div className={clsx(
                         `flex flex-row mt-5 relative`,
                         {
                             'justify-end': imagePosition === ImagePosition.Right,
                             'justify-start': imagePosition === ImagePosition.Left,
                         },
                     )}>
                    <a href={triggerSiteOverview} target="_blank"
                          className="btn rounded-md flex justify-items-center bg-primary font-medium hover:bg-sky-100 hover:text-blue-600">
                        <h4 className={"relative m-0 p-0"}>Overview</h4>
                    </a>
                </div>
            </div>
        </div>
    );
}
