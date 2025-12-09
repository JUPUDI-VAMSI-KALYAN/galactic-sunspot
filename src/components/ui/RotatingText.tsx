"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
    "For International Students", // English
    "专为国际留学生打造", // Chinese
    "Para Estudiantes Internacionales", // Spanish
    "अंतर्राष्ट्रीय छात्रों के लिए", // Hindi
    "Für Internationale Studierende", // German
    "Pour les Étudiants Internationaux", // French
    "Per Studenti Internazionali", // Italian
    "Para Estudantes Internacionais", // Portuguese
    "留学生のために", // Japanese
    "유학생을 위한", // Korean
    "Dành Cho Du Học Sinh", // Vietnamese
];

export function RotatingText() {
    const [currentLang, setCurrentLang] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentLang((prev) => (prev + 1) % languages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-full w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentLang}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="whitespace-nowrap"
                >
                    {languages[currentLang]}
                </motion.span>
            </AnimatePresence>
        </div>
    );
}
