"use client";

import { motion } from "framer-motion";

import Image from "next/image";

export function Tagline() {
    return (
        <section className="py-8 px-4">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-[1.5rem] overflow-hidden p-8 md:p-12 text-center shadow-xl"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/tagline-bg.png"
                            alt="Background"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/10" /> {/* Overlay for contrast */}
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-6">
                        <span className="text-2xl font-bold tracking-tight text-white">Begin</span>
                        <h2 className="text-lg md:text-2xl font-serif font-medium text-white/90 leading-relaxed tracking-wide max-w-2xl mx-auto">
                            &quot;Moving countries is hard. Everything else shouldn&apos;t be. That&apos;s why we built Begin.&quot;
                        </h2>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                </motion.div>
            </div>
        </section>
    );
}
