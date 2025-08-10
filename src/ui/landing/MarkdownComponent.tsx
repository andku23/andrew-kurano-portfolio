'use client'

import {FC, useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";

interface Props {
    markdownFile: string
}

export const MarkdownComponent: FC<Props> = ({markdownFile}) => {
    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        fetch(markdownFile)
            .then((response) => response.text())
            .then((text) => setMarkdownContent(text));
    }, []);

    return (
        <section>
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </section>
    );
}