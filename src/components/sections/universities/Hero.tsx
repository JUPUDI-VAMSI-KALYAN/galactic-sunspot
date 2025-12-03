"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, Globe, ShieldCheck, Users, MessageSquare, Scale } from "lucide-react";
import { MouseEvent, useState } from "react";
import RotatingEarth from "@/components/ui/RotatingEarth";

export function Hero() {
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

            {/* Background Layer (Globe) */}
            <div className="absolute inset-0 flex items-center justify-end overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center translate-x-1/4 opacity-40">
                    <RotatingEarth width={3200} height={3200} className="opacity-80" />
                </div>
            </div>

            {/* Mask Overlay */}
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
                            For Forward-Thinking Universities
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                            The Operating System for <br />
                            Modern Universities
                        </h1>
                        <p className="text-sm text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Empower your international student body with AI-driven support, automated DSO workflows, and instant legal guidance.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start max-w-md mx-auto lg:mx-0"
                    >
                        <Button
                            size="lg"
                            className="bg-white text-[#022c22] hover:bg-gray-100 border-0"
                        >
                            Partner with Begin
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-white/20 text-white hover:bg-white/10"
                        >
                            Schedule Demo
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="pt-6 flex items-center justify-center lg:justify-start gap-6 text-gray-400 text-xs"
                    >
                        <div className="flex items-center gap-2">
                            <Users className="h-3 w-3 text-white/60" />
                            <span>DSO Copilot</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MessageSquare className="h-3 w-3 text-white/60" />
                            <span>AI Support</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Scale className="h-3 w-3 text-white/60" />
                            <span>Legal Access</span>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="relative w-full flex justify-center lg:justify-end lg:pr-20"
                >
                    {/* Dashboard Visual - Reusing the style but with University context if possible, 
                        for now using a placeholder or the same dashboard image as it fits the "OS" theme */}
                    <div className="relative w-[280px] flex-none">
                        <div className="relative rounded-[1.5rem] overflow-hidden border-[4px] border-gray-900 shadow-2xl bg-white">
                            {/* Ideally we'd have a specific university dashboard image here. 
                                 Using the existing one for consistency in style, or generating a new one. 
                                 For this step, I will use the existing one to ensure it works, 
                                 but I'll add a note that this should be updated. */}
                            <Image
                                src="/hero-dashboard.png"
                                alt="University Admin Dashboard"
                                width={320}
                                height={640}
                                className="w-full h-auto"
                                priority
                            />
                        </div>

                        {/* Floating Stats Cards for University Context */}
                        <div className="absolute -left-12 top-20 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl flex items-center gap-3 animate-float-slow">
                            <div className="p-2 rounded-lg bg-emerald-500/20">
                                <Users className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-medium text-white/40 uppercase tracking-wider">Active Students</span>
                                <span className="text-sm font-semibold text-white/90">2,543</span>
                            </div>
                        </div>

                        <div className="absolute -right-8 bottom-32 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl flex items-center gap-3 animate-float-slower">
                            <div className="p-2 rounded-lg bg-blue-500/20">
                                <MessageSquare className="w-5 h-5 text-blue-400" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-medium text-white/40 uppercase tracking-wider">Queries Resolved</span>
                                <span className="text-sm font-semibold text-white/90">98.5%</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
