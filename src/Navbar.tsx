import react, { ReactNode, ReactElement } from 'react';
import React from "react";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar({items, render} : {items: {link: string, path: string}[], render: (url: string) => ReactNode }) {
    return (
        <nav>
        <ul className='nav'>
            {items && items.map((item, index) => (
                <CustomLink key={index} to={item.path}>{render(item.link)}</CustomLink>
            ))}
        </ul>
        </nav>
    )
}

const CustomLink = ({to, children, ...props} : {to: string, children: ReactNode, props?: ReactNode }) => {
    // this way below does not work anymore since with Link element the window location pathname doesnt provide
    // trustworthy result
    // const path = window.location.pathname;
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? 'active' : '' }>
        <Link  to={to} {...props}>{children}</Link>
        </li>
    )
}