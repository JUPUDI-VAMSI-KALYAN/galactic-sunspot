"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Landmark, ArrowRightLeft, Scale, CreditCard, GraduationCap } from "lucide-react";

import Image from "next/image";

const features = [
    {
        title: "Cross-Border Finance",
        description: "Open a US bank account before you arrive. No SSN required. Build credit from day one.",
        icon: Landmark,
        className: "md:col-span-2",
        visual: (
            <div className="mt-4 h-32 w-full rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center relative overflow-hidden">
                <Image
                    src="https://placehold.co/600x300/10b981/ffffff?text=Green+Debit+Card"
                    alt="Green Debit Card"
                    width={600}
                    height={300}
                    className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                />
            </div>
        )
    },
    {
        title: "Cross-Border Payments",
        description: "Pay tuition and send money home with low fees (1.75%). No hidden markups.",
        icon: ArrowRightLeft,
        className: "md:col-span-1",
        visual: (
            <div className="mt-4 h-32 w-full rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
                <Image
                    src="https://placehold.co/300x300/ffffff/10b981?text=Transfer+App"
                    alt="Transfer App"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                />
            </div>
        )
    },
    {
        title: "Immigration Infrastructure",
        description: "Access licensed attorneys and automated visa compliance tools to protect your status.",
        icon: Scale,
        className: "md:col-span-1",
        visual: (
            <div className="mt-4 h-32 w-full rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
                <Image
                    src="https://placehold.co/300x300/ffffff/022c22?text=Legal+Call"
                    alt="Legal Call"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                />
            </div>
        )
    },
    {
        title: "Student Focused",
        description: "Tailored for international students. We understand the F-1 visa journey.",
        icon: GraduationCap,
        className: "md:col-span-2",
        visual: (
            <div className="mt-4 h-32 w-full rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center relative overflow-hidden">
                <Image
                    src="https://placehold.co/600x300/34d399/022c22?text=Student+Visa+Journey"
                    alt="Student Visa Journey"
                    width={600}
                    height={300}
                    className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                />
            </div>
        )
    }
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-gray-50 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Everything you need to Begin{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                            Immigration Infrastructure.
                        </span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-base">
                        We solve the three biggest challenges for new migrants: Banking, Payments, and Legal compliance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={feature.className}
                        >
                            <Card className="h-full bg-white border-gray-200 shadow-sm hover:border-primary/50 transition-colors duration-300 group">
                                <CardHeader>
                                    <feature.icon className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform duration-300" />
                                    <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                                    <CardDescription className="text-base pt-2 text-gray-600">
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
