"use client";

import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";

export function Comparison() {
    const features = [
        {
            name: "Account Setup",
            banks: "In-person visits",
            legal: "N/A",
            begin: "Instant (In-app)",
        },
        {
            name: "Cross-border Payments",
            banks: "High FX fees (3-5%)",
            legal: "N/A",
            begin: "Low cost & Instant",
        },
        {
            name: "Compliance",
            banks: "None",
            legal: "Expensive ($300+/hr)",
            begin: "Included / AI-powered",
        },
        {
            name: "Credit Building",
            banks: "Requires SSN/History",
            legal: "N/A",
            begin: "Day 1 Access",
        },
        {
            name: "Platform Experience",
            banks: "Legacy App",
            legal: "Paper / Email",
            begin: "Modern AI OS",
        },
    ];

    return (
        <section id="why" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
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
                        className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900"
                    >
                        More than a bank. Smarter than a law firm.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-500 max-w-2xl mx-auto"
                    >
                        Why settle for fragmented services when you can have it all in one OS?
                    </motion.p>
                </div>

                <div className="max-w-5xl mx-auto relative">
                    {/* Desktop View */}
                    <div className="hidden md:grid grid-cols-4 relative z-10">
                        {/* Dark Card Background - Positioned absolutely relative to the grid container */}
                        <div className="absolute top-0 bottom-0 right-0 w-1/4 bg-[#0c0c0c] rounded-[2rem] shadow-2xl -z-10" />

                        {/* Header Row */}
                        <div className="col-span-1 py-8 pl-8"></div>
                        <div className="text-center font-medium text-xl text-gray-900 py-8 border-b border-gray-200">Traditional Banks</div>
                        <div className="text-center font-medium text-xl text-gray-900 py-8 border-b border-gray-200">Legal Firms</div>
                        <div className="text-center font-bold text-white text-xl py-8 border-b border-white/10">BeginOS</div>

                        {/* Rows */}
                        {features.map((feature, index) => (
                            <div key={feature.name} className="contents group">
                                <div className="col-span-1 py-6 pl-8 font-medium text-gray-500 border-b border-gray-200">
                                    {feature.name}
                                </div>
                                <div className="py-6 text-center text-gray-400 border-b border-gray-200 flex justify-center items-center">
                                    {feature.banks === "N/A" ? <Minus className="w-5 h-5 opacity-20" /> : feature.banks}
                                </div>
                                <div className="py-6 text-center text-gray-400 border-b border-gray-200 flex justify-center items-center">
                                    {feature.legal === "N/A" ? <Minus className="w-5 h-5 opacity-20" /> : feature.legal}
                                </div>
                                <div className="py-6 text-center border-b border-white/10 flex justify-center items-center">
                                    <span className="font-bold text-white flex items-center gap-2">
                                        <Check className="w-5 h-5 text-white" />
                                        {feature.begin}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile View (Cards) */}
                    <div className="md:hidden space-y-8">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4 text-center">Traditional Banks</h3>
                            <div className="space-y-4">
                                {features.map(f => (
                                    <div key={f.name} className="flex justify-between text-sm">
                                        <span className="text-gray-500">{f.name}</span>
                                        <span className="font-medium text-gray-900">{f.banks}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4 text-center">Legal Firms</h3>
                            <div className="space-y-4">
                                {features.map(f => (
                                    <div key={f.name} className="flex justify-between text-sm">
                                        <span className="text-gray-500">{f.name}</span>
                                        <span className="font-medium text-gray-900">{f.legal}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#022c22] p-8 rounded-2xl shadow-xl text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
                            <h3 className="font-bold text-xl mb-6 text-center">BeginOS</h3>
                            <div className="space-y-5">
                                {features.map(f => (
                                    <div key={f.name} className="flex justify-between items-center text-sm border-b border-white/10 pb-3 last:border-0 last:pb-0">
                                        <span className="text-white/60">{f.name}</span>
                                        <span className="font-bold text-white flex items-center gap-2">
                                            <Check className="w-3 h-3 text-emerald-400" />
                                            {f.begin}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
