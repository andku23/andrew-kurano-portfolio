'use client'

import {configs} from "@/content/content";
import {ImagePosition, ProjectDisplay} from "@/ui/projects/project-display";

export default function Projects() {
    return (
        <div className="">
            {configs.featuredProjects.map((project, idx) => (
                <ProjectDisplay
                    imagePosition={idx % 2 === 0 ? ImagePosition.Right : ImagePosition.Left}
                    key={project.id}
                    {...project}
                />
            ))}
        </div>
    );
}