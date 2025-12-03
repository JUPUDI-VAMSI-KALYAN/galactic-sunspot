"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MessageSquare, Users, Scale, ArrowRight, CheckCircle2, Shield, Zap } from "lucide-react";

const features = [
    {
        title: "AI Student Support",
        description: "Deflect 80% of routine queries about campus life, enrollment, and immigration rules with our 24/7 AI agents.",
        icon: MessageSquare,
        className: "md:col-span-2",
        visual: (
            <div className="mt-6 h-56 w-full rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-[0.05]" />

                {/* Mock Chat Interface */}
                <div className="w-4/5 space-y-4 relative z-10">
                    <div className="flex gap-3 animate-in fade-in slide-in-from-bottom-2 duration-700">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs text-blue-600 border border-blue-100 shadow-sm">S</div>
                        <div className="bg-white p-3 rounded-2xl rounded-tl-none text-xs text-gray-600 border border-blue-50 shadow-sm">
                            Can I work off-campus on F-1 visa?
                        </div>
                    </div>
                    <div className="flex gap-3 flex-row-reverse animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs text-white shadow-lg shadow-blue-900/20">AI</div>
                        <div className="bg-blue-600 p-3 rounded-2xl rounded-tr-none text-xs text-white shadow-md">
                            Generally, no. Off-campus employment requires specific authorization like CPT or OPT.
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "DSO Copilot",
        description: "Automate I-20 drafts and track student status changes in real-time.",
        icon: Zap,
        className: "md:col-span-1",
        visual: (
            <div className="mt-6 h-56 w-full rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-100 flex flex-col p-5 relative overflow-hidden">

                <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                        <span>Recent Actions</span>
                        <span className="text-emerald-600 font-medium">Live</span>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-emerald-100/50 flex items-center gap-3 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <div className="space-y-1">
                            <div className="h-1.5 w-24 bg-gray-200 rounded" />
                            <div className="h-1.5 w-16 bg-gray-100 rounded" />
                        </div>
                    </div>
                    <div className="bg-white/60 rounded-lg p-3 border border-emerald-100/30 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <div className="space-y-1">
                            <div className="h-1.5 w-20 bg-gray-200 rounded" />
                            <div className="h-1.5 w-12 bg-gray-100 rounded" />
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Legal Infrastructure",
        description: "Provide liability-free legal referrals to vetted immigration attorneys.",
        icon: Shield,
        className: "md:col-span-1",
        visual: (
            <div className="mt-6 h-56 w-full rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-100 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent" />

                <div className="text-center relative z-10">
                    <div className="w-16 h-16 bg-white rounded-2xl border border-orange-100 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-900/5">
                        <Scale className="w-8 h-8 text-orange-500" />
                    </div>
                    <div className="flex items-center justify-center gap-2 text-orange-600 text-xs font-bold tracking-wide uppercase">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Vetted Network</span>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Unified Dashboard",
        description: "One view for all your international student data and communications.",
        icon: Users,
        className: "md:col-span-2",
        visual: (
            <div className="mt-6 h-56 w-full rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 flex items-center justify-center relative overflow-hidden group shadow-inner">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40" />

                {/* Mini Dashboard Mockup - Light Mode */}
                <div className="w-3/4 h-3/4 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 shadow-xl flex flex-col overflow-hidden relative z-10 group-hover:scale-[1.02] transition-transform duration-500">
                    {/* Header */}
                    <div className="h-8 border-b border-gray-100 flex items-center px-3 gap-2 bg-white">
                        <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-400" />
                            <div className="w-2 h-2 rounded-full bg-yellow-400" />
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                        </div>
                        <div className="ml-auto w-16 h-1.5 bg-gray-100 rounded-full" />
                    </div>
                    {/* Content */}
                    <div className="p-3 grid grid-cols-3 gap-3 h-full bg-gray-50/50">
                        {/* Sidebar */}
                        <div className="col-span-1 space-y-2">
                            <div className="h-2 w-12 bg-gray-200 rounded" />
                            <div className="h-1.5 w-full bg-gray-100 rounded" />
                            <div className="h-1.5 w-3/4 bg-gray-100 rounded" />
                            <div className="h-1.5 w-5/6 bg-gray-100 rounded" />
                        </div>
                        {/* Main Area */}
                        <div className="col-span-2 space-y-3">
                            <div className="flex gap-2">
                                <div className="h-12 w-full bg-white border border-emerald-100 rounded flex items-center justify-center shadow-sm">
                                    <div className="text-center">
                                        <div className="text-[10px] text-emerald-600 font-bold">98%</div>
                                        <div className="h-0.5 w-6 bg-emerald-100 rounded mx-auto mt-1" />
                                    </div>
                                </div>
                                <div className="h-12 w-full bg-white border border-blue-100 rounded flex items-center justify-center shadow-sm">
                                    <div className="text-center">
                                        <div className="text-[10px] text-blue-600 font-bold">2.4k</div>
                                        <div className="h-0.5 w-6 bg-blue-100 rounded mx-auto mt-1" />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <div className="h-6 w-full bg-white rounded border border-gray-100 flex items-center px-2 gap-2 shadow-sm">
                                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                                    <div className="h-1 w-12 bg-gray-200 rounded" />
                                    <div className="ml-auto h-1 w-4 bg-emerald-100 rounded" />
                                </div>
                                <div className="h-6 w-full bg-white rounded border border-gray-100 flex items-center px-2 gap-2 shadow-sm">
                                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                                    <div className="h-1 w-16 bg-gray-200 rounded" />
                                    <div className="ml-auto h-1 w-4 bg-amber-100 rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
];

export function Features() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6 tracking-tight">
                        The Infrastructure for <br />
                        Global Education.
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        Replace fragmented tools with a single, intelligent operating system designed for the modern international student office.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={feature.className}
                        >
                            <Card className="h-full bg-white border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 group overflow-hidden rounded-[2rem]">
                                <CardHeader className="pb-2">
                                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-[#022c22] transition-colors duration-300">
                                        <feature.icon className="h-5 w-5 text-gray-900 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-[#022c22]">{feature.title}</CardTitle>
                                    <CardDescription className="text-base pt-2 text-gray-500 leading-relaxed">
                                        {feature.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {feature.visual}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
