"use client";
import { ReactNode } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation'

//CSS
import style from "./nav-link.module.css";

interface Props {
    children: ReactNode,
    href: string,
    cssClass?: string
}
export default function NavLink({href, cssClass, children}: Props){
    const pathName = usePathname();
    return (
        <Link href={href} 
        className={pathName === href ? `${cssClass} ${style.active}`: cssClass}>{children}</Link>
    )

}