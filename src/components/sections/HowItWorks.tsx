"use client";

import { motion } from "framer-motion";
import { ArrowDown, Check, X, Shield } from "lucide-react";

export function HowItWorks() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-[#5e6ad2] uppercase bg-[#5e6ad2]/10 rounded-md"
                    >
                        How It Works
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-[#022c22] mb-6 tracking-tight"
                    >
                        One missed deadline can <br className="hidden md:block" />
                        derail years of planning.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                    >
                        Replace scattered information, disconnected services, and complex rules with a single, unified operating system.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {/* Left Side: Current Process (Vertical Flow) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#f9fafb] rounded-[2rem] p-8 md:p-12 border border-gray-100 flex flex-col items-center text-center"
                    >
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Student Experience is Broken</h3>
                        <p className="text-gray-400 mb-12">Manual research, disconnected services, and anxiety.</p>

                        <div className="w-full max-w-sm space-y-4 relative">
                            {/* Connecting Line */}
                            <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-gray-200 -translate-x-1/2 z-0" />

                            <ProcessStep text="Scattered information" />
                            <ProcessStep text="Disconnected essential services" />
                            <ProcessStep text="Navigating complex rules" />
                            <ProcessStep text="No expert legal help" />
                            <ProcessStep text="Risk of deportation" isLast isError />
                        </div>
                    </motion.div>

                    {/* Right Side: Begin OS (Unified Card) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#0b0f19] rounded-[2rem] p-8 md:p-12 border border-gray-800 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[600px]"
                    >
                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none" />

                        <div className="relative z-10 flex flex-col items-center h-full justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold text-white mb-2">With Begin OS</h3>
                                <p className="text-gray-400 mb-12">A single platform to manage your entire journey.</p>
                            </div>

                            {/* Central Visual */}
                            <div className="relative mb-12">
                                <div className="w-64 h-64 rounded-full bg-gradient-to-b from-[#022c22] to-[#064e3b] flex items-center justify-center border border-white/10 shadow-2xl shadow-green-900/20 relative">
                                    <div className="absolute inset-0 rounded-full border border-white/5 animate-ping opacity-20" />
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-white mb-1">Begin</div>
                                        <div className="text-xs text-green-400 tracking-widest uppercase">Operating System</div>
                                    </div>

                                    {/* Orbiting Elements */}
                                    <OrbitingLabel text="Essentials" angle={270} />
                                    <OrbitingLabel text="Banking" angle={342} />
                                    <OrbitingLabel text="Legal" angle={54} />
                                    <OrbitingLabel text="Credit" angle={126} />
                                    <OrbitingLabel text="Identity" angle={198} />
                                </div>
                            </div>

                            <div className="bg-[#1f2937] border border-green-900/30 rounded-xl px-6 py-3 flex items-center gap-3 shadow-lg shadow-green-900/20">
                                <div className="p-1.5 bg-green-500/10 rounded-full">
                                    <Shield className="w-4 h-4 text-green-500" />
                                </div>
                                <span className="text-white font-medium tracking-wide">Compliance Shield</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ProcessStep({ text, isLast = false, isError = false }: { text: string, isLast?: boolean, isError?: boolean }) {
    return (
        <div className={`relative z-10 bg-white border ${isError ? 'border-red-100' : 'border-gray-200'} rounded-xl p-4 shadow-sm flex items-center justify-center gap-3 transition-transform hover:scale-105 duration-300`}>
            {isError ? (
                <X className="w-5 h-5 text-red-500" />
            ) : (
                <div className="w-2 h-2 rounded-full bg-gray-300" />
            )}
            <span className={`font-medium ${isError ? 'text-red-600' : 'text-gray-600'}`}>{text}</span>
        </div>
    );
}

function OrbitingLabel({ text, angle }: { text: string, angle: number }) {
    return (
        <div
            className="absolute bg-white/90 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs text-black font-semibold shadow-lg whitespace-nowrap"
            style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${angle}deg) translate(165px) rotate(-${angle}deg)`
            }}
        >
            {text}
        </div>
    );
}
