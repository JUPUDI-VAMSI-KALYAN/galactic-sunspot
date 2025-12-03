"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-white/80 backdrop-blur-md border-gray-200 py-4"
                    : "bg-transparent border-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center">
                    <Link
                        href="/"
                        className={cn(
                            "text-2xl font-bold tracking-tight transition-colors",
                            scrolled ? "text-gray-900" : "text-white"
                        )}
                    >
                        Begin
                    </Link>
                    <span className={cn(
                        "ml-3 px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider border backdrop-blur-sm",
                        scrolled
                            ? "bg-gray-100 border-gray-200 text-gray-600"
                            : "bg-white/10 border-white/20 text-white/80"
                    )}>
                        Launching Soon
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="#product"
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-primary",
                            scrolled ? "text-gray-600" : "text-gray-300"
                        )}
                    >
                        Product
                    </Link>
                    <Link
                        href="#features"
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-primary",
                            scrolled ? "text-gray-600" : "text-gray-300"
                        )}
                    >
                        Features
                    </Link>
                    <Link
                        href="mailto:founders@thinkarc.ai"
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-primary",
                            scrolled ? "text-gray-600" : "text-gray-300"
                        )}
                    >
                        Contact
                    </Link>
                </div>

                <div className="flex items-center gap-4">

                    <Button
                        onClick={() => {
                            const element = document.getElementById('waitlist-form');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                setTimeout(() => {
                                    window.dispatchEvent(new Event('trigger-waitlist-glow'));
                                }, 500);
                            }
                        }}
                        className={cn(
                            "transition-colors",
                            scrolled
                                ? "bg-[#022c22] text-white hover:bg-[#022c22]/90"
                                : "bg-white text-[#022c22] hover:bg-gray-100"
                        )}
                    >
                        Get Early Access
                    </Button>
                </div>
            </div>
        </nav>
    );
}
