'use client'
import Link from "next/link";
import { logo, body } from "../ui/fonts";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function NavMenu() {
    const [clientWindowHeight, setClientWindowHeight] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    return (
        <div
            className="sticky top-0 w-full"
        >
            <nav
                className={
                    clsx(
                        "flex flex-row items-center justify-between mt-6 rounded-md w-full transition-all duration-500",
                        {
                            'bg-primary': clientWindowHeight === 0
                        },
                        {
                            'bg-secondary': clientWindowHeight !== 0
                        }
                    )
                }
            >
                <Link
                    href='/'
                    className={
                        clsx(
                            `${logo.className} text-2xl flex justify-center text-text rounded-md p-4 w-full h-full transition-all duration-500 ease-out`,
                            {
                                'hover:bg-secondary text-white hover:text-black': clientWindowHeight === 0
                            },
                            {
                                'hover:bg-primary text-text hover:text-white': clientWindowHeight !== 0
                            }
                        )
                    }
                >
                    pocketchange
                </Link>
                <Link
                    href='/discover'
                    className={
                        clsx(
                            `${body.className} text-xl flex justify-center text-text rounded-md p-4 w-1/2 h-[64px] transition-all duration-500 ease-out`,
                            {
                                'hover:bg-secondary text-white hover:text-black': clientWindowHeight === 0
                            },
                            {
                                'hover:bg-primary text-text hover:text-white': clientWindowHeight !== 0
                            }
                        )
                    }
                >
                    discover
                </Link>
                <Link
                    href='/connections'
                    className={
                        clsx(
                            `${body.className} text-xl flex justify-center text-text rounded-md p-4 w-1/2  h-[64px] transition-all duration-500 ease-out`,
                            {
                                'hover:bg-secondary text-white hover:text-black': clientWindowHeight === 0
                            },
                            {
                                'hover:bg-primary text-text hover:text-white': clientWindowHeight !== 0
                            }
                        )
                    }
                >
                    connections
                </Link>
                <Link
                    href='/inbox'
                    className={
                        clsx(
                            `${body.className} text-xl flex justify-center text-text rounded-md p-4 w-1/2 h-[64px] transition-all duration-500 ease-out`,
                            {
                                'hover:bg-secondary text-white hover:text-black': clientWindowHeight === 0
                            },
                            {
                                'hover:bg-primary text-text hover:text-white': clientWindowHeight !== 0
                            }
                        )
                    }
                >
                    messages
                </Link>
            </nav>
        </div >
    )
}
