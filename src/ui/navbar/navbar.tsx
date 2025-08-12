import {configs} from "@/content/content";
import Link from "next/link";

const links = [
    { name: 'LinkedIn', href: configs.common.linkedin },
    { name: 'Resume', href: configs.common.resume  },
];

export default function NavBar() {
    return (
        <div className = "navbar z-50 bg-neutral text-neutral-content w-full flex flex-col md:flex-row md:fixed justify-between px-0 md:px-20" data-aos="fade-down">
            <div className="flex h-(--navbar-height) items-center px-10 md:px-0">
            </div>

            <div className = "flex flex-col md:flex-row">
                {links.map((link) => {
                    return (
                        <Link key={link.name} href={link.href}
                              className="btn btn-ghost flex h-(--navbar-height) rounded-md justfy-center items-center font-medium hover:bg-sky-100 hover:text-blue-600 md:justify-start md:p-2 px-10 md:px-3">
                            <h3>{link.name}</h3>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}