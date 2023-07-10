'use client'
import Link, { LinkProps } from 'next/link'
import {usePathname} from "next/navigation";
import React from "react";

type ActiveLinkProps = LinkProps & {
    className?: string
    activeClassName: string
    children: React.ReactNode
}

const ActiveLink = ({activeClassName, className, href, children, ...props}: ActiveLinkProps) => {
    const path= usePathname();
    const active = path === href;
    return (
        <Link className={active ? activeClassName : className} href={href} {...props}>
            {children}
        </Link>
    )
}

export default ActiveLink