"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, Globe, ShieldCheck, CreditCard, DollarSign, Euro, PoundSterling, JapaneseYen, Bitcoin, IndianRupee } from "lucide-react";
import { MouseEvent, useEffect, useState } from "react";
import RotatingEarth from "@/components/ui/RotatingEarth";
import UniversityTicker from "@/components/ui/UniversityTicker";

import { useWaitlist } from "@/hooks/useWaitlist";

export function Hero() {
    const { email, setEmail, loading, message, success, submitWaitlist } = useWaitlist();
    const [isGlowing, setIsGlowing] = useState(false);

    useEffect(() => {
        const handleGlow = () => {
            setIsGlowing(true);
            setTimeout(() => setIsGlowing(false), 2500);
        };

        window.addEventListener('trigger-waitlist-glow', handleGlow);
        return () => window.removeEventListener('trigger-waitlist-glow', handleGlow);
    }, []);


    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <section
            className="relative min-h-[calc(100vh-2rem)] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#022c22] text-white m-2 rounded-[1.5rem] border border-white/10 shadow-2xl group"
            onMouseMove={handleMouseMove}
        >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03] pointer-events-none" />

            {/* Background Layer (Globe + Icons) - Hidden by default, revealed by mask */}
            <div className="absolute inset-0 flex items-center justify-end overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center translate-x-1/4 opacity-40">
                    <RotatingEarth width={3200} height={3200} className="opacity-80" />
                </div>

                {/* Floating Currency Cards */}
                <div className="absolute inset-0 pointer-events-none">
                    <CurrencyCard
                        icon={DollarSign}
                        label="USD"
                        amount="$1,000"
                        className="top-[20%] left-[15%] rotate-12 delay-0"
                    />
                    <CurrencyCard
                        icon={Euro}
                        label="EUR"
                        amount="€850"
                        className="top-[15%] right-[9%] -rotate-12 delay-75"
                    />
                    <CurrencyCard
                        icon={PoundSterling}
                        label="GBP"
                        amount="£720"
                        className="bottom-[25%] left-[25%] rotate-6 delay-150"
                    />
                    <CurrencyCard
                        icon={JapaneseYen}
                        label="JPY"
                        amount="¥100k"
                        className="top-[50%] right-[5%] -rotate-6 delay-200"
                    />
                    <CurrencyCard
                        icon={Bitcoin}
                        label="BTC"
                        amount="0.05"
                        className="bottom-[20%] right-[30%] rotate-12 delay-300"
                    />
                    <CurrencyCard
                        icon={IndianRupee}
                        label="INR"
                        amount="₹50k"
                        className="top-[45%] left-[45%] -translate-x-1/2 rotate-3 delay-100"
                    />
                </div>
            </div>

            {/* Mask Overlay - Dark Green with Transparent Hole at Mouse */}
            <motion.div
                className="absolute inset-0 bg-[#022c22] pointer-events-none"
                style={{
                    maskImage: useMotionTemplate`radial-gradient(
                        300px circle at ${mouseX}px ${mouseY}px,
                        transparent 0%,
                        black 100%
                    )`,
                    WebkitMaskImage: useMotionTemplate`radial-gradient(
                        300px circle at ${mouseX}px ${mouseY}px,
                        transparent 0%,
                        black 100%
                    )`,
                }}
            />

            <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center flex-grow">
                <div className="text-center lg:text-left space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/20 text-white/80 text-xs font-medium mb-6 backdrop-blur-sm">
                            For International Students & Global Citizens
                        </div>
                        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
                            The First New Country
                            <br />
                            Operating System
                        </h1>
                        <p className="text-sm text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Begin gives international students the financial tools <br className="hidden md:block" />
                            and legal confidence to thrive from day one.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start max-w-md mx-auto lg:mx-0"
                    >
                        <form
                            id="waitlist-form"
                            className={`flex w-full gap-2 transition-all duration-700 ${isGlowing ? 'ring-2 ring-white/30 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.2)]' : ''}`}
                            onSubmit={submitWaitlist}
                        >
                            <div className="flex-1 relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    disabled={loading || success}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all disabled:opacity-50"
                                />
                                {message && (
                                    <span className={`absolute -bottom-6 left-0 text-xs ${success ? 'text-green-400' : 'text-red-400'}`}>
                                        {message}
                                    </span>
                                )}
                            </div>
                            <Button
                                type="submit"
                                size="sm"
                                disabled={loading || success}
                                className="text-sm px-5 h-full bg-white text-[#022c22] hover:bg-gray-100 border-0 whitespace-nowrap disabled:opacity-70"
                            >
                                {loading ? 'Joining...' : success ? 'Joined!' : 'Join Waitlist'}
                                {!success && !loading && <ArrowRight className="ml-2 h-3 w-3" />}
                            </Button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="pt-6 flex items-center justify-center lg:justify-start gap-6 text-gray-400 text-xs"
                    >
                        <div className="flex items-center gap-2">
                            <Globe className="h-3 w-3 text-white/60" />
                            <span>Banking</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="h-3 w-3 text-white/60" />
                            <span>Compliance</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CreditCard className="h-3 w-3 text-white/60" />
                            <span>Credit</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-8"
                    >
                        <p className="text-[10px] text-gray-500 mb-3 uppercase tracking-wider font-medium text-center lg:text-left">Backed By</p>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
                            <span className="text-base font-bold text-white tracking-tight">gener8tor</span>
                            <span className="text-base font-bold text-white tracking-tight">IDEABANK</span>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="relative w-full flex justify-center lg:justify-end lg:pr-40"
                >
                    {/* Dashboard Visual */}
                    <div className="relative w-[240px] flex-none">
                        <div className="relative rounded-[1.5rem] overflow-hidden border-[4px] border-gray-900 shadow-2xl bg-white">
                            <Image
                                src="/hero-dashboard.png"
                                alt="Begin App Dashboard"
                                width={320}
                                height={640}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Trusted By Section */}
            <div className="container mx-auto px-4 relative z-10 mt-20 border-t border-white/10 pt-8">
                <p className="text-center text-sm text-gray-400 mb-6 uppercase tracking-wider">Trusted by students from</p>
                <div className="max-w-4xl mx-auto">
                    <UniversityTicker />
                </div>
            </div>
        </section>
    );
}

function CurrencyCard({
    icon: Icon,
    label,
    amount,
    className
}: {
    icon: any,
    label: string,
    amount: string,
    className?: string
}) {
    return (
        <div className={`absolute p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl flex items-center gap-3 ${className}`}>
            <div className="p-2 rounded-lg bg-white/10">
                <Icon className="w-5 h-5 text-white/80" />
            </div>
            <div className="flex flex-col">
                <span className="text-[10px] font-medium text-white/40 uppercase tracking-wider">{label}</span>
                <span className="text-sm font-semibold text-white/90">{amount}</span>
            </div>
        </div>
    );
}

