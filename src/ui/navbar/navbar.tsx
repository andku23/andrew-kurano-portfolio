import {configs} from "@/content/content";
import Link from "next/link";
import clsx from "clsx";
import { Button } from "@chakra-ui/react";

const links = [
    { name: 'LinkedIn', href: configs.common.linkedin },
    { name: 'Resume', href: configs.common.resume  },
];

export default function NavBar() {
    return (
        <div className = "bg-blue-500 text-white flex flex-col md:flex-row justify-between px-0 md:px-20" data-aos="fade-down">
            <div className="flex h-[48px] items-center px-10 md:px-0">
                <b>{configs.common.name}</b>
            </div>

            <div className = "flex flex-col md:flex-row">
                {links.map((link) => {
                    return (
                        <Link key={link.name} href={link.href}
                              className="flex h-[48px] rounded-md justfy-center items-center font-medium hover:bg-sky-100 hover:text-blue-600 md:justify-start md:p-2 px-10 md:px-3">
                            <p>{link.name}</p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}