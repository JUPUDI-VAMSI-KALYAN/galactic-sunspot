import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-32">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="text-2xl font-bold text-white tracking-tight mb-4 block">
                            Begin
                        </Link>
                        <p className="text-sm text-gray-400 max-w-sm mb-6">
                            The first New Country Operating System for migrants. Banking, payments, and legal support in one app.
                        </p>
                        <div className="flex gap-2">
                            <Input
                                placeholder="Enter your email"
                                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-orange-500/50 focus:ring-orange-500/20"
                            />
                            <Button className="bg-white text-[#022c22] hover:bg-gray-100 font-semibold">Subscribe</Button>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Banking</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Payments</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Legal</Link></li>
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
