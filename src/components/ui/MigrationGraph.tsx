"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

export function MigrationGraph() {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!svgRef.current) return;

        const width = 600;
        const height = 400;

        // Clear previous render
        d3.select(svgRef.current).selectAll("*").remove();

        const svg = d3.select(svgRef.current)
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("class", "w-full h-full");

        // Generate random nodes
        const numNodes = 20;
        const nodes = Array.from({ length: numNodes }, (_, i) => ({
            id: i,
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 5 + 3 // Radius 3-8
        }));

        // Generate links (connect close nodes)
        const links: { source: any; target: any }[] = [];
        for (let i = 0; i < numNodes; i++) {
            for (let j = i + 1; j < numNodes; j++) {
                if (Math.random() > 0.7) { // 30% chance of connection
                    links.push({ source: nodes[i], target: nodes[j] });
                }
            }
        }

        // Simulation
        const simulation = d3.forceSimulation(nodes as any)
            .force("link", d3.forceLink(links).id((d: any) => d.id).distance(100))
            .force("charge", d3.forceManyBody().strength(-100))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("collide", d3.forceCollide().radius(20));

        // Draw links
        const link = svg.append("g")
            .selectAll("line")
            .data(links)
            .enter().append("line")
            .attr("stroke", "#e5e7eb") // Gray-200
            .attr("stroke-width", 1)
            .attr("opacity", 0.6);

        // Draw nodes
        const node = svg.append("g")
            .selectAll("circle")
            .data(nodes)
            .enter().append("circle")
            .attr("r", (d) => d.r)
            .attr("fill", "#022c22") // Dark Green
            .attr("stroke", "#fff")
            .attr("stroke-width", 2);

        // Animation loop
        simulation.on("tick", () => {
            link
                .attr("x1", (d: any) => d.source.x)
                .attr("y1", (d: any) => d.source.y)
                .attr("x2", (d: any) => d.target.x)
                .attr("y2", (d: any) => d.target.y);

            node
                .attr("cx", (d: any) => d.x)
                .attr("cy", (d: any) => d.y);
        });

        // Particle Animation (Migration Flow)
        const particleGroup = svg.append("g");

        function spawnParticle() {
            if (links.length === 0) return;
            const randomLink = links[Math.floor(Math.random() * links.length)];
            const duration = 1000 + Math.random() * 2000; // 1-3s duration

            const particle = particleGroup.append("circle")
                .attr("r", 3)
                .attr("fill", "#f97316") // Orange-500
                .attr("opacity", 0.8);

            // Animate along the link
            const source = randomLink.source as any;
            const target = randomLink.target as any;

            // Determine direction (randomly swap source/target for variety)
            const [start, end] = Math.random() > 0.5 ? [source, target] : [target, source];

            particle
                .attr("cx", start.x)
                .attr("cy", start.y)
                .transition()
                .duration(duration)
                .ease(d3.easeLinear)
                .attr("cx", end.x)
                .attr("cy", end.y)
                .on("end", function () {
                    d3.select(this).remove();
                });
        }

        // Spawn particles periodically
        const interval = setInterval(spawnParticle, 300);

        return () => {
            simulation.stop();
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="w-full h-full bg-gray-50 rounded-xl overflow-hidden">
            <svg ref={svgRef} className="w-full h-full"></svg>
        </div>
    );
}
