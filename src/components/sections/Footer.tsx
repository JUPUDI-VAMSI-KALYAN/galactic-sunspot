"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useWaitlist } from "@/hooks/useWaitlist";

export function Footer() {
    const { email, setEmail, loading, message, success, submitWaitlist } = useWaitlist();
    return (
        <footer className="bg-black border-t border-white/10 py-32">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="text-2xl font-bold text-white tracking-tight mb-4 block">
                            BeginOS
                        </Link>
                        <p className="text-sm text-gray-400 max-w-sm mb-6">
                            The first New Country Operating System. Built by two international students who lived the chaos—so you don't have to.
                        </p>
                        <form onSubmit={submitWaitlist} className="flex gap-2 relative">
                            <div className="flex-1">
                                <Input
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={loading || success}
                                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-orange-500/50 focus:ring-orange-500/20 disabled:opacity-50"
                                />
                                {message && (
                                    <span className={`absolute -bottom-6 left-0 text-xs ${success ? 'text-green-400' : 'text-red-400'}`}>
                                        {message}
                                    </span>
                                )}
                            </div>
                            <Button
                                type="submit"
                                disabled={loading || success}
                                className="bg-white text-[#022c22] hover:bg-gray-100 font-semibold disabled:opacity-70"
                            >
                                {loading ? '...' : success ? 'Done' : 'Subscribe'}
                            </Button>
                        </form>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Banking</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Payments</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Compliance</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col gap-1 text-center md:text-left">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} ThinkARC Inc. All rights reserved.
                        </p>
                        <p className="text-gray-600 text-xs">
                            Made with ❤️ in Alabama, USA
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
