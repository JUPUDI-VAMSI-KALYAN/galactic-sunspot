"use client";

import { motion } from "framer-motion";
import { Shield, Lock, EyeOff, FileCheck, Server, CheckCircle, Check } from "lucide-react";
import { ReactNode } from "react";

export function Security() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Main Dark Card Container */}
                <div className="relative bg-[#0b0f19] rounded-[2.5rem] overflow-hidden border border-gray-800 shadow-2xl">

                    {/* Background Grid & Effects */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.07] pointer-events-none" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 px-8 py-20 md:p-24">

                        {/* Header Content */}
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-block px-4 py-1.5 mb-8 text-xs font-semibold tracking-widest text-blue-300 uppercase bg-blue-500/10 rounded-md"
                            >
                                Security First
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight"
                            >
                                Bank-grade security. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600">
                                    Uncompromised privacy.
                                </span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-gray-400 text-lg md:text-xl leading-relaxed"
                            >
                                Managing your life across borders requires trust. We protect your financial assets and immigration data with military-grade security.
                            </motion.p>
                        </div>

                        {/* Feature Cards Grid */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <SecurityCard
                                visual={<EncryptionVisual />}
                                title="Bank-Grade Encryption"
                                description="Your money and documents are protected by AES-256 encryption—the same standard used by the US government and major banks."
                                delay={0.3}
                            />
                            <SecurityCard
                                visual={<PrivacyVisual />}
                                title="Zero-Data Sales"
                                description="Your privacy is our business model. We never sell your personal data, immigration history, or spending habits to advertisers."
                                delay={0.4}
                            />
                            <SecurityCard
                                visual={<ComplianceVisual />}
                                title="Full Regulatory Compliance"
                                description="We partner with FDIC-insured banks and licensed attorneys to ensure your setup is fully compliant with US laws."
                                delay={0.5}
                            />
                        </div>

                        {/* Bottom Trust Indicators - Removed */}
                    </div>
                </div>
            </div>
        </section>
    );
}

function SecurityCard({ visual, title, description, delay }: { visual: ReactNode, title: string, description: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 text-center"
        >
            <div className="h-32 mb-6 flex items-center justify-center">
                {visual}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
                {description}
            </p>
        </motion.div>
    );
}

// Mock UI Components

function EncryptionVisual() {
    return (
        <div className="relative w-full max-w-[200px] bg-gray-900 rounded-xl border border-white/10 p-4 shadow-xl">
            <div className="flex items-center justify-between mb-3">
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                <div className="px-2 py-0.5 rounded text-[10px] bg-blue-500/20 text-blue-400 font-mono">AES-256</div>
            </div>
            <div className="space-y-2">
                <div className="h-2 w-3/4 bg-white/10 rounded animate-pulse" />
                <div className="h-2 w-1/2 bg-white/10 rounded animate-pulse delay-75" />
                <div className="h-2 w-full bg-white/10 rounded animate-pulse delay-150" />
            </div>
            <div className="absolute -right-3 -bottom-3 bg-blue-600 rounded-lg p-2 shadow-lg border border-white/10">
                <Lock className="w-4 h-4 text-white" />
            </div>
        </div>
    );
}

function PrivacyVisual() {
    return (
        <div className="relative w-full max-w-[200px] bg-gray-900 rounded-xl border border-white/10 p-4 shadow-xl">
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <span className="text-[10px] text-gray-400">Data Sharing</span>
                    <div className="w-8 h-4 bg-gray-700 rounded-full relative">
                        <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-gray-400 rounded-full" />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-[10px] text-gray-400">Ad Targeting</span>
                    <div className="w-8 h-4 bg-gray-700 rounded-full relative">
                        <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-gray-400 rounded-full" />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-[10px] text-gray-400">3rd Party Access</span>
                    <div className="w-8 h-4 bg-gray-700 rounded-full relative">
                        <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-gray-400 rounded-full" />
                    </div>
                </div>
            </div>
            <div className="absolute -right-3 -top-3 bg-green-600 rounded-lg p-2 shadow-lg border border-white/10">
                <EyeOff className="w-4 h-4 text-white" />
            </div>
        </div>
    );
}

function ComplianceVisual() {
    return (
        <div className="relative w-full max-w-[200px] bg-gray-900 rounded-xl border border-white/10 p-4 shadow-xl flex flex-col gap-2">
            <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg border border-white/5">
                <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-green-500" />
                </div>
                <span className="text-[10px] text-gray-300 font-medium">FDIC Insured</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg border border-white/5">
                <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-green-500" />
                </div>
                <span className="text-[10px] text-gray-300 font-medium">Licensed Attorneys</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg border border-white/5">
                <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-green-500" />
                </div>
                <span className="text-[10px] text-gray-300 font-medium">SOC 2 Type II</span>
            </div>
        </div>
    );
}
