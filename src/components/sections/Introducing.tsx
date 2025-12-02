"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, CreditCard, Scale, Check, Compass, ListTodo } from "lucide-react";

const features = [
    {
        id: "banking",
        icon: CreditCard,
        title: "Banking Solutions",
        description: "Onboard with home country ID. Access banking, credit, and insurance seamlessly.",
        color: "from-[#8b7be8] to-[#6c5ce7]",
        visual: (
            <div className="relative w-full h-full flex items-center justify-center p-8">
                {/* Banking Mock UI */}
                <div className="relative w-full max-w-md">
                    {/* Credit Card */}
                    <div className="absolute top-0 right-0 w-72 h-44 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-6 text-white border border-white/10 transform rotate-6 z-10">
                        <div className="flex justify-between items-start mb-8">
                            <div className="text-lg font-bold tracking-wider">Begin</div>
                            <div className="w-10 h-6 bg-white/20 rounded-md" />
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-2">
                                <div className="w-12 h-2 bg-white/20 rounded" />
                                <div className="w-12 h-2 bg-white/20 rounded" />
                                <div className="w-12 h-2 bg-white/20 rounded" />
                                <div className="w-12 h-2 bg-white/20 rounded" />
                            </div>
                            <div className="flex justify-between items-end">
                                <div>
                                    <div className="text-[10px] text-gray-400 uppercase mb-1">Card Holder</div>
                                    <div className="text-sm font-medium tracking-wide">ALEXANDER SMITH</div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/20" />
                            </div>
                        </div>
                    </div>

                    {/* App Balance Card */}
                    <div className="w-72 bg-white rounded-2xl shadow-xl p-6 border border-white/10 transform -rotate-3 mt-12">
                        <div className="text-sm text-gray-500 mb-1">Total Balance</div>
                        <div className="text-3xl font-bold text-gray-900 mb-6">$12,450.00</div>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    <div className="text-sm font-medium text-gray-900">Tuition Paid</div>
                                </div>
                                <span className="text-sm font-bold text-gray-900">-$4,500</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "legal",
        icon: Scale,
        title: "Expert Assistance",
        description: "Get instant answers to your quick legal questions. No expensive retainers, just help when you need it.",
        color: "from-[#e69b7e] to-[#d37651]",
        visual: (
            <div className="relative w-full h-full flex items-center justify-center p-8">
                {/* Legal Mock UI */}
                <div className="relative w-full max-w-2xl flex items-center justify-center">

                    {/* Left Side: Document & Attorney (Shifted Left) */}
                    <div className="relative w-full max-w-md transform -translate-x-20 md:-translate-x-32 transition-transform duration-500">
                        {/* Legal Query Card */}
                        <div className="absolute top-0 right-0 w-72 h-56 bg-white rounded-2xl shadow-2xl p-6 border border-white/20 transform rotate-6 z-10">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                                        <Scale className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 uppercase font-semibold">Inquiry #2049</div>
                                        <div className="text-sm font-bold text-gray-900">Travel on OPT?</div>
                                    </div>
                                </div>
                                <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded uppercase tracking-wide">
                                    Answered
                                </div>
                            </div>
                            <div className="space-y-3 opacity-50">
                                <div className="h-2 w-full bg-gray-200 rounded" />
                                <div className="h-2 w-full bg-gray-200 rounded" />
                                <div className="h-2 w-3/4 bg-gray-200 rounded" />
                                <div className="h-2 w-full bg-gray-200 rounded" />
                                <div className="h-2 w-5/6 bg-gray-200 rounded" />
                            </div>

                            {/* Signature Area */}
                            <div className="mt-6 flex items-end gap-3">
                                <div className="h-8 w-24 border-b border-gray-300 relative">
                                    <div className="absolute bottom-1 left-0 text-blue-600 font-script text-lg italic">Sarah Jenkins</div>
                                </div>
                                <div className="text-[10px] text-gray-400">Attorney Signature</div>
                            </div>
                        </div>

                        {/* Attorney Profile Card */}
                        <div className="w-64 bg-gray-900 text-white rounded-2xl shadow-xl p-5 border border-white/10 transform -rotate-3 mt-24 relative z-20">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-bold text-white">
                                        SJ
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-gray-900 rounded-full" />
                                </div>
                                <div>
                                    <div className="font-bold text-sm">Sarah Jenkins</div>
                                    <div className="text-xs text-gray-400">Immigration Attorney</div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-xs text-gray-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    <span>Avg. Response: 15m</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    <span>Bar License Verified</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Transparent Chat */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-24 w-72 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl z-0 transform rotate-3">
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex-shrink-0" />
                                <div className="bg-white/10 rounded-2xl rounded-tl-none p-3 text-sm text-white/90 border border-white/10">
                                    <p>Can I travel to Canada while my OPT is pending?</p>
                                </div>
                            </div>
                            <div className="flex gap-3 flex-row-reverse">
                                <div className="w-8 h-8 rounded-full bg-[#022c22] border border-white/20 flex-shrink-0" />
                                <div className="bg-[#022c22]/80 rounded-2xl rounded-tr-none p-3 text-sm text-white border border-white/10">
                                    <p>It's risky. I recommend waiting until you have your EAD card.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex-shrink-0" />
                                <div className="bg-white/10 rounded-2xl rounded-tl-none p-3 text-sm text-white/90 border border-white/10">
                                    <p>Understood, thanks!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    },
    {
        id: "essentials",
        icon: Compass,
        title: "Life Essentials",
        description: "Master your move. From getting your SSN and housing to understanding local culture.",
        color: "from-[#4b8add] to-[#2d5a9e]",
        visual: (
            <div className="relative w-full h-full flex items-center justify-center p-8">
                {/* Life Essentials Mock UI */}
                <div className="relative w-full max-w-md">
                    {/* Settling In Checklist */}
                    <div className="absolute top-0 left-0 w-72 h-64 bg-white rounded-2xl shadow-2xl p-6 border border-white/20 transform -rotate-3 z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                <ListTodo className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-gray-900">Settling In</div>
                                <div className="text-xs text-gray-500">Your first 30 days</div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-2 bg-green-50 rounded-lg border border-green-100">
                                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm font-medium text-gray-700 line-through">Get SIM Card</span>
                            </div>
                            <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg border border-gray-100">
                                <div className="w-5 h-5 border-2 border-blue-500 rounded-full" />
                                <span className="text-sm font-medium text-gray-900">Apply for SSN</span>
                            </div>
                            <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg border border-gray-100">
                                <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
                                <span className="text-sm font-medium text-gray-500">Open Bank Account</span>
                            </div>
                        </div>
                    </div>

                    {/* Community Event Card */}
                    <div className="absolute bottom-[-20px] right-[-20px] w-64 bg-gray-900 text-white rounded-2xl shadow-xl p-5 border border-white/10 transform rotate-6 z-20">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-xs font-bold text-orange-400 uppercase tracking-wider">Upcoming Event</div>
                            <div className="px-2 py-1 bg-white/10 rounded text-[10px]">Tomorrow</div>
                        </div>
                        <div className="mb-4">
                            <div className="text-lg font-bold mb-1">City Welcome Mixer</div>
                            <div className="text-sm text-gray-400">Meet other international students</div>
                        </div>
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-gray-900" />
                            <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-gray-900" />
                            <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-gray-900" />
                            <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-900 flex items-center justify-center text-xs font-bold">+12</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
];

export function Introducing() {
    const [activeindex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % features.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-32 my-12 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-[#5e6ad2] uppercase bg-[#5e6ad2]/10 rounded-md"
                    >
                        Introducing Begin OS
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-[#022c22] mb-6 tracking-tight"
                    >
                        The complete platform with <br className="hidden md:block" />
                        integrated services.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                    >
                        AI compliance, banking, and legal—one platform that keeps students legal and operational.
                    </motion.p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Top Visual Area */}
                    <div className="mb-8 rounded-[2.5rem] overflow-hidden bg-gray-50 h-[500px] md:h-[600px] relative">
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={activeindex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className={`absolute inset-0 bg-gradient-to-br ${features[activeindex].color}`}
                            >
                                {features[activeindex].visual}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Bottom Tabs */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {features.map((feature, index) => {
                            const isActive = index === activeindex;
                            return (
                                <button
                                    key={feature.id}
                                    onClick={() => setActiveIndex(index)}
                                    className="h-full focus:outline-none"
                                >
                                    <div className={`relative text-left p-6 transition-all duration-300 border-t-2 h-full min-h-[180px] flex flex-col ${isActive
                                        ? "border-[#022c22] bg-gray-50/30"
                                        : "border-transparent hover:bg-gray-50/30"
                                        }`}>

                                        {/* Progress Bar for Active Tab */}
                                        {isActive && (
                                            <div className="absolute top-[-2px] left-0 right-0 h-0.5 bg-transparent overflow-hidden rounded-full">
                                                <motion.div
                                                    initial={{ width: "0%" }}
                                                    animate={{ width: "100%" }}
                                                    transition={{ duration: 8, ease: "linear" }}
                                                    className="h-full bg-[#022c22]"
                                                />
                                            </div>
                                        )}

                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`p-2 rounded-lg ${isActive ? "bg-white shadow-sm" : "bg-gray-100"}`}>
                                                <feature.icon className={`w-5 h-5 ${isActive ? "text-[#022c22]" : "text-gray-500"}`} />
                                            </div>
                                            <h3 className={`font-semibold ${isActive ? "text-[#022c22]" : "text-gray-600"}`}>
                                                {feature.title}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-gray-500 leading-relaxed pl-12">
                                            {feature.description}
                                        </p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
