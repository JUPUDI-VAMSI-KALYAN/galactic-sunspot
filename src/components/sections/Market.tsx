import MigrationGlobe from "@/components/ui/MigrationGlobe";

export function Market() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-left">
                        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-[#5e6ad2] uppercase bg-[#5e6ad2]/10 rounded-md">
                            Why Now
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            The Migration Century
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We are witnessing the largest movement of human capital in history. Yet, the infrastructure to support it is stuck in the past. Begin OS is the digital bridge for the 281 million people seeking a better life.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-1 bg-[#022c22] rounded-full" />
                                <div>
                                    <div className="text-4xl font-bold text-gray-900">281 Million</div>
                                    <div className="text-gray-500">Global Migrants</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-1 bg-[#022c22]/50 rounded-full" />
                                <div>
                                    <div className="text-4xl font-bold text-gray-900">1 Million+</div>
                                    <div className="text-gray-500">Intl. Students in US</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[500px] flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#022c22]/5 to-transparent rounded-2xl blur-2xl -z-10" />
                        <MigrationGlobe width={550} height={550} />
                    </div>
                </div>
            </div>
        </section>
    );
}
