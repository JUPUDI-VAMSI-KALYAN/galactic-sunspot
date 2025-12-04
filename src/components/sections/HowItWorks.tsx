"use client";

import { motion } from "framer-motion";
import { ArrowDown, Check, X, Shield, CreditCard, TrendingUp, ShieldCheck } from "lucide-react";

export function HowItWorks() {
    return (
        <section id="how" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-[#5e6ad2] uppercase bg-[#5e6ad2]/10 rounded-md"
                    >
                        Why BeginOS
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
                        We remember the anxiety. That's why we built the relief.
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
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">The Current System is Broken</h3>
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

                    {/* Right Side: BeginOS (Unified Card) */}
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
                                <h3 className="text-2xl font-semibold text-white mb-2">With BeginOS</h3>
                                <p className="text-gray-400 mb-12">A single platform to manage your entire journey.</p>
                            </div>

                            {/* Central Visual - Unified Dashboard */}
                            <div className="relative mb-12 w-full max-w-md mx-auto">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="bg-[#0b0f19] rounded-[2.5rem] border-[6px] border-gray-800 overflow-hidden shadow-2xl relative"
                                >
                                    {/* Status Bar Mock */}
                                    <div className="h-6 bg-[#0b0f19] flex items-center justify-between px-6 pt-2">
                                        <div className="text-[10px] text-white font-medium">9:41</div>
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 bg-white rounded-full" />
                                            <div className="w-3 h-3 bg-white rounded-full" />
                                        </div>
                                    </div>

                                    {/* App Header */}
                                    <div className="px-6 pt-6 pb-4 flex justify-between items-center">
                                        <div>
                                            <div className="text-xs text-gray-400">Good morning,</div>
                                            <div className="text-lg font-bold text-white">Alex</div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-xs font-bold text-white">
                                            AS
                                        </div>
                                    </div>

                                    {/* Dashboard Grid */}
                                    <div className="px-4 pb-12 space-y-3">
                                        {/* Banking Widget */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="bg-[#1f2937] p-4 rounded-2xl border border-white/5 relative overflow-hidden group"
                                        >
                                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                                <CreditCard className="w-12 h-12 text-white" />
                                            </div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="p-1.5 bg-blue-500/20 rounded-lg">
                                                    <CreditCard className="w-3.5 h-3.5 text-blue-400" />
                                                </div>
                                                <span className="text-xs font-medium text-gray-300">Total Balance</span>
                                            </div>
                                            <div className="text-2xl font-bold text-white mb-1">$12,450.00</div>
                                            <div className="text-[10px] text-green-400 flex items-center gap-1">
                                                <TrendingUp className="w-3 h-3" /> +$2,100 this month
                                            </div>
                                        </motion.div>

                                        <div className="grid grid-cols-2 gap-3">
                                            {/* Credit Widget */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4 }}
                                                className="bg-[#1f2937] p-4 rounded-2xl border border-white/5 flex flex-col justify-between h-40 relative overflow-hidden"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <div className="p-1.5 bg-purple-500/20 rounded-lg">
                                                        <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
                                                    </div>
                                                    <span className="text-xs font-medium text-gray-300">Credit</span>
                                                </div>

                                                <div className="relative flex items-center justify-center py-2">
                                                    <svg className="w-16 h-16 transform -rotate-90">
                                                        <circle cx="32" cy="32" r="28" stroke="#374151" strokeWidth="4" fill="transparent" />
                                                        <circle cx="32" cy="32" r="28" stroke="#a855f7" strokeWidth="4" fill="transparent" strokeDasharray="175.9" strokeDashoffset="35" />
                                                    </svg>
                                                    <div className="absolute text-center">
                                                        <div className="text-lg font-bold text-white">720</div>
                                                    </div>
                                                </div>
                                                <div className="text-[10px] text-center text-purple-300">Excellent</div>
                                            </motion.div>

                                            {/* Compliance Widget */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 }}
                                                className="bg-[#1f2937] p-4 rounded-2xl border border-white/5 flex flex-col justify-between h-40 relative overflow-hidden"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <div className="p-1.5 bg-green-500/20 rounded-lg">
                                                        <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
                                                    </div>
                                                    <span className="text-xs font-medium text-gray-300">Status</span>
                                                </div>

                                                <div className="flex flex-col items-center justify-center py-1">
                                                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-1 border border-green-500/20">
                                                        <Check className="w-5 h-5 text-green-500" />
                                                    </div>
                                                    <div className="text-sm font-bold text-white">Active</div>
                                                </div>
                                                <div className="text-[10px] text-center text-green-300">F-1 Visa Compliant</div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
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
