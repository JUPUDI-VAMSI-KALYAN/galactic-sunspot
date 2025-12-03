"use client";

import { motion } from "framer-motion";
import { BarChart3, Users, Bell, Search, Settings, Check, TrendingUp, ShieldCheck, AlertCircle } from "lucide-react";

export function AdminDashboard() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-emerald-600 uppercase bg-emerald-50 rounded-md"
                    >
                        Unified Command Center
                    </motion.div>
                    <h2 className="text-3xl font-bold tracking-tight text-[#022c22] sm:text-4xl mb-4">
                        A Single Source of Truth
                    </h2>
                    <p className="text-lg text-gray-600">
                        Monitor student engagement, track immigration status, and manage support tickets from a single, unified dashboard.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative max-w-5xl mx-auto"
                >
                    {/* Dashboard Mockup Container - Dark Mode */}
                    <div className="rounded-[2rem] bg-[#0b0f19] border-[6px] border-gray-800 shadow-2xl overflow-hidden relative min-h-[600px]">
                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10 pointer-events-none" />

                        {/* Header */}
                        <div className="h-16 border-b border-gray-800 flex items-center justify-between px-6 bg-[#0b0f19] relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">B</div>
                                <span className="font-semibold text-white">University Portal</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="relative hidden md:block">
                                    <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                                    <input type="text" placeholder="Search students..." className="pl-9 pr-4 py-1.5 bg-gray-900 border border-gray-800 rounded-lg text-sm text-gray-300 focus:outline-none focus:border-emerald-500/50 w-64 placeholder:text-gray-600" />
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center relative">
                                    <Bell className="w-4 h-4 text-gray-400" />
                                    <span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                                </div>
                            </div>
                        </div>

                        <div className="flex h-full relative z-10">
                            {/* Sidebar */}
                            <div className="w-64 border-r border-gray-800 bg-[#0b0f19] p-4 hidden md:block h-[600px]">
                                <div className="space-y-1">
                                    <SidebarItem icon={BarChart3} label="Overview" active />
                                    <SidebarItem icon={Users} label="Students" />
                                    <SidebarItem icon={Bell} label="Communications" badge="12" />
                                    <SidebarItem icon={ShieldCheck} label="Compliance" />
                                    <div className="pt-8">
                                        <SidebarItem icon={Settings} label="Settings" />
                                    </div>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 p-8 bg-[#0b0f19]/50 overflow-y-auto h-[600px]">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <StatCard title="Total Students" value="2,543" change="+12%" positive />
                                    <StatCard title="Pending I-20s" value="14" change="-5%" positive={false} />
                                    <StatCard title="Avg. Response" value="1.2m" change="-18%" positive />
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    {/* Recent Activity */}
                                    <div className="lg:col-span-2 bg-[#111827] rounded-xl border border-gray-800 p-6">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="font-semibold text-white">Live Inquiries</h3>
                                            <button className="text-xs text-emerald-500 font-medium hover:text-emerald-400">View All</button>
                                        </div>
                                        <div className="space-y-3">
                                            <InquiryRow student="Alex Chen" topic="OPT Application" status="AI Handling" time="Just now" />
                                            <InquiryRow student="Sarah Johnson" topic="Visa Renewal" status="Escalated" time="5m ago" isEscalated />
                                            <InquiryRow student="Miguel Rodriguez" topic="Housing Question" status="Resolved" time="12m ago" />
                                            <InquiryRow student="Priya Patel" topic="CPT Eligibility" status="AI Handling" time="24m ago" />
                                        </div>
                                    </div>

                                    {/* Compliance Health */}
                                    <div className="bg-[#111827] rounded-xl border border-gray-800 p-6">
                                        <h3 className="font-semibold text-white mb-6">Compliance Health</h3>
                                        <div className="flex flex-col items-center justify-center py-4">
                                            <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                                                <svg className="w-full h-full transform -rotate-90">
                                                    <circle cx="64" cy="64" r="56" stroke="#1f2937" strokeWidth="8" fill="transparent" />
                                                    <circle cx="64" cy="64" r="56" stroke="#10b981" strokeWidth="8" fill="transparent" strokeDasharray="351.86" strokeDashoffset="35" />
                                                </svg>
                                                <div className="absolute flex flex-col items-center">
                                                    <span className="text-3xl font-bold text-white">98%</span>
                                                    <span className="text-xs text-emerald-500 font-medium">Compliant</span>
                                                </div>
                                            </div>
                                            <div className="w-full space-y-3">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-gray-400">At Risk</span>
                                                    <span className="text-red-400 font-medium">12 Students</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-gray-400">Action Needed</span>
                                                    <span className="text-amber-400 font-medium">45 Students</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function SidebarItem({ icon: Icon, label, active, badge }: { icon: any, label: string, active?: boolean, badge?: string }) {
    return (
        <div className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${active ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'}`}>
            <div className="flex items-center gap-3">
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{label}</span>
            </div>
            {badge && <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-medium border border-emerald-500/20">{badge}</span>}
        </div>
    );
}

function StatCard({ title, value, change, positive }: { title: string, value: string, change: string, positive: boolean }) {
    return (
        <div className="bg-[#111827] p-5 rounded-xl border border-gray-800">
            <h4 className="text-xs text-gray-500 font-medium mb-2 uppercase tracking-wider">{title}</h4>
            <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-white">{value}</span>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${positive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                    {change}
                </span>
            </div>
        </div>
    );
}

function InquiryRow({ student, topic, status, time, isEscalated }: { student: string, topic: string, status: string, time: string, isEscalated?: boolean }) {
    return (
        <div className="flex items-center justify-between p-3 rounded-lg bg-[#1f2937]/50 border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs font-medium text-gray-400 border border-gray-700">
                    {student.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-200">{student}</p>
                    <p className="text-xs text-gray-500">{topic}</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${isEscalated ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'}`}>
                    {status}
                </span>
                <span className="text-xs text-gray-600">{time}</span>
            </div>
        </div>
    );
}
