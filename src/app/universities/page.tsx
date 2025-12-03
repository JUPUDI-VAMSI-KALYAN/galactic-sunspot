"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/universities/Hero";
import { Features } from "@/components/sections/universities/Features";
import { AdminDashboard } from "@/components/sections/universities/AdminDashboard";

export default function UniversitiesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <Features />
            <AdminDashboard />
            <Footer />
        </main>
    );
}
