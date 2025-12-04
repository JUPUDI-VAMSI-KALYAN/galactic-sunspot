"use client";

import { CreditCard, Scale, ShieldCheck, Home, Send, User, ChevronRight, Check } from "lucide-react";

export function DashboardMockup() {
    return (
        <div className="w-full max-w-[240px] mx-auto transform scale-75 lg:scale-85">
            {/* Phone Frame */}
            <div className="relative bg-white rounded-[1.5rem] shadow-2xl border-[4px] border-gray-900 overflow-hidden">
                {/* Status Bar */}
                <div className="bg-white px-6 pt-3 pb-2 flex items-center justify-between">
                    <span className="text-xs font-semibold">9:41</span>
                    <div className="flex items-center gap-1">
                        <div className="w-4 h-3 border border-gray-900 rounded-sm relative">
                            <div className="absolute inset-0.5 bg-gray-900 rounded-sm" />
                        </div>
                    </div>
                </div>

                {/* App Content */}
                <div className="bg-gradient-to-b from-gray-50 to-white px-4 pb-4 min-h-[420px]">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <p className="text-sm text-gray-500">Welcome back,</p>
                            <h2 className="text-2xl font-bold text-gray-900">Alex</h2>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#022c22] to-[#064e3b] flex items-center justify-center text-white font-bold">
                            A
                        </div>
                    </div>

                    {/* Balance Card */}
                    <div className="relative mb-6 bg-gradient-to-br from-[#022c22] to-[#064e3b] rounded-3xl p-6 text-white shadow-xl overflow-hidden">
                        {/* Decorative Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <p className="text-sm text-white/70 mb-1">Total Balance</p>
                                    <h3 className="text-4xl font-bold">$12,450</h3>
                                </div>
                                <div className="px-3 py-1.5 bg-green-400 text-[#022c22] rounded-full text-xs font-bold flex items-center gap-1">
                                    <Check className="w-3 h-3" />
                                    Compliant
                                </div>
                            </div>

                            {/* Virtual Card Preview */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm font-semibold">BeginOS Card</span>
                                    <CreditCard className="w-5 h-5" />
                                </div>
                                <div className="flex gap-2 mb-3">
                                    <div className="w-10 h-2 bg-white/30 rounded" />
                                    <div className="w-10 h-2 bg-white/30 rounded" />
                                    <div className="w-10 h-2 bg-white/30 rounded" />
                                    <div className="w-10 h-2 bg-white/30 rounded" />
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-white/80">ALEXANDER SMITH</span>
                                    <span className="text-white/60">12/27</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Services</h3>
                        <div className="grid grid-cols-3 gap-3">
                            {/* Banking */}
                            <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                                    <CreditCard className="w-6 h-6 text-purple-600" />
                                </div>
                                <span className="text-xs font-semibold text-gray-900">Banking</span>
                            </div>

                            {/* Legal */}
                            <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-2">
                                    <Scale className="w-6 h-6 text-orange-600" />
                                </div>
                                <span className="text-xs font-semibold text-gray-900">Legal</span>
                            </div>

                            {/* Compliance */}
                            <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                                    <ShieldCheck className="w-6 h-6 text-green-600" />
                                </div>
                                <span className="text-xs font-semibold text-gray-900">Visa</span>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Recent</h3>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                        <div className="space-y-2">
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                        <Check className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">Tuition Payment</p>
                                        <p className="text-xs text-gray-500">Dec 1, 2024</p>
                                    </div>
                                </div>
                                <span className="text-sm font-bold text-gray-900">-$4,500</span>
                            </div>

                            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Scale className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">Legal Consultation</p>
                                        <p className="text-xs text-gray-500">Nov 28, 2024</p>
                                    </div>
                                </div>
                                <span className="text-sm font-bold text-gray-900">-$49</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="bg-white border-t border-gray-200 px-6 py-4 flex items-center justify-between">
                    <button className="flex flex-col items-center gap-1 text-[#022c22]">
                        <Home className="w-6 h-6" />
                        <span className="text-[10px] font-semibold">Home</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-gray-400">
                        <Send className="w-6 h-6" />
                        <span className="text-[10px] font-medium">Pay</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-gray-400">
                        <Scale className="w-6 h-6" />
                        <span className="text-[10px] font-medium">Legal</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-gray-400">
                        <User className="w-6 h-6" />
                        <span className="text-[10px] font-medium">Profile</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
