"use client";

import { motion } from "framer-motion";

const universities = [
    "Auburn University",
    "Auburn University at Montgomery",
    "Faulkner University",
    "Louisiana State University",
    "Pace University",
    "Southern University and A&M College",
    "Syracuse University",
    "Troy University",
    "University at Buffalo",
    "University of North Carolina at Charlotte",
    "Webster University"
];

export default function UniversityTicker() {
    return (
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex flex-none gap-8 pr-8"
            >
                {[...universities, ...universities].map((uni, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <span className="text-sm font-medium text-white/70 whitespace-nowrap">
                            {uni}
                        </span>
                        <span className="text-white/20">•</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
