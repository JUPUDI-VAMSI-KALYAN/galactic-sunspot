"use client"

import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"

interface MigrationGlobeProps {
    width?: number
    height?: number
    className?: string
}

export default function MigrationGlobe({ width = 800, height = 600, className = "" }: MigrationGlobeProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!canvasRef.current) return

        const canvas = canvasRef.current
        const context = canvas.getContext("2d")
        if (!context) return

        // Set up responsive dimensions
        const containerWidth = Math.min(width, window.innerWidth - 40)
        const containerHeight = Math.min(height, window.innerHeight - 100)
        const radius = Math.min(containerWidth, containerHeight) / 2.4

        const dpr = window.devicePixelRatio || 1
        canvas.width = containerWidth * dpr
        canvas.height = containerHeight * dpr
        canvas.style.width = `${containerWidth}px`
        canvas.style.height = `${containerHeight}px`
        context.scale(dpr, dpr)

        // Create projection and path generator for Canvas
        const projection = d3
            .geoOrthographic()
            .scale(radius)
            .translate([containerWidth / 2, containerHeight / 2])
            .clipAngle(90)

        const path = d3.geoPath().projection(projection).context(context)

        // Generate random migration routes
        const hubs = [
            [-74.006, 40.7128], // NY
            [-0.1276, 51.5074], // London
            [77.209, 28.6139], // Delhi
            [116.4074, 39.9042], // Beijing
            [151.2093, -33.8688], // Sydney
            [-46.6333, -23.5505], // Sao Paulo
            [31.2357, 30.0444], // Cairo
            [55.2708, 25.2048], // Dubai
            [-122.4194, 37.7749], // SF
            [139.6917, 35.6895], // Tokyo
            [103.8198, 1.3521], // Singapore
            [-79.3832, 43.6532], // Toronto
        ]

        const routes: { type: "LineString", coordinates: number[][] }[] = []
        for (let i = 0; i < hubs.length; i++) {
            for (let j = i + 1; j < hubs.length; j++) {
                if (Math.random() > 0.7) { // Connect some hubs
                    routes.push({
                        type: "LineString",
                        coordinates: [hubs[i], hubs[j]]
                    })
                }
            }
        }

        let landFeatures: any

        const render = () => {
            // Clear canvas
            context.clearRect(0, 0, containerWidth, containerHeight)

            const currentScale = projection.scale()
            const scaleFactor = currentScale / radius

            // Draw ocean (globe background)
            context.beginPath()
            context.arc(containerWidth / 2, containerHeight / 2, currentScale, 0, 2 * Math.PI)
            context.fillStyle = "#022c22"
            context.fill()

            // Draw atmosphere glow
            const gradient = context.createRadialGradient(
                containerWidth / 2, containerHeight / 2, currentScale * 0.8,
                containerWidth / 2, containerHeight / 2, currentScale * 1.2
            )
            gradient.addColorStop(0, "rgba(2, 44, 34, 0)")
            gradient.addColorStop(1, "rgba(2, 44, 34, 0.1)")
            context.fillStyle = gradient
            context.beginPath()
            context.arc(containerWidth / 2, containerHeight / 2, currentScale * 1.2, 0, 2 * Math.PI)
            context.fill()

            if (landFeatures) {
                // Draw graticule
                const graticule = d3.geoGraticule()
                context.beginPath()
                path(graticule())
                context.strokeStyle = "rgba(255, 255, 255, 0.05)"
                context.lineWidth = 0.5 * scaleFactor
                context.stroke()

                // Draw land
                context.beginPath()
                landFeatures.features.forEach((feature: any) => {
                    path(feature)
                })
                context.fillStyle = "rgba(255, 255, 255, 0.15)"
                context.fill()
                context.strokeStyle = "rgba(255, 255, 255, 0.2)"
                context.lineWidth = 0.5 * scaleFactor
                context.stroke()

                // Draw Migration Routes (Arcs)
                routes.forEach(route => {
                    context.beginPath()
                    path(route as any)
                    context.strokeStyle = "rgba(249, 115, 22, 0.4)" // Orange-500 with opacity
                    context.lineWidth = 1.5 * scaleFactor
                    context.stroke()
                })
            }
        }

        const loadWorldData = async () => {
            try {
                setIsLoading(true)
                const response = await fetch(
                    "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json",
                )
                if (!response.ok) throw new Error("Failed to load land data")
                landFeatures = await response.json()
                render()
                setIsLoading(false)
            } catch (err) {
                setError("Failed to load land map data")
                setIsLoading(false)
            }
        }

        // Set up rotation
        const rotation = [0, -20]
        let autoRotate = true
        const rotationSpeed = 0.3

        const rotate = () => {
            if (autoRotate) {
                rotation[0] += rotationSpeed
                projection.rotate(rotation as [number, number])
                render()
            }
        }

        const rotationTimer = d3.timer(rotate)

        // Interaction
        const handleMouseDown = (event: MouseEvent) => {
            autoRotate = false
            const startX = event.clientX
            const startY = event.clientY
            const startRotation = [...rotation]

            const handleMouseMove = (moveEvent: MouseEvent) => {
                const sensitivity = 0.5
                const dx = moveEvent.clientX - startX
                const dy = moveEvent.clientY - startY
                rotation[0] = startRotation[0] + dx * sensitivity
                rotation[1] = startRotation[1] - dy * sensitivity
                rotation[1] = Math.max(-90, Math.min(90, rotation[1]))
                projection.rotate(rotation as [number, number])
                render()
            }

            const handleMouseUp = () => {
                document.removeEventListener("mousemove", handleMouseMove)
                document.removeEventListener("mouseup", handleMouseUp)
                setTimeout(() => { autoRotate = true }, 1000)
            }

            document.addEventListener("mousemove", handleMouseMove)
            document.addEventListener("mouseup", handleMouseUp)
        }

        canvas.addEventListener("mousedown", handleMouseDown)
        loadWorldData()

        return () => {
            rotationTimer.stop()
            canvas.removeEventListener("mousedown", handleMouseDown)
        }
    }, [width, height])

    if (error) return <div className="text-red-400 p-4">{error}</div>

    return (
        <div className={`relative ${className} flex items-center justify-center`}>
            <canvas
                ref={canvasRef}
                className="w-full h-auto bg-transparent cursor-grab active:cursor-grabbing"
                style={{ maxWidth: "100%", height: "auto" }}
            />
        </div>
    )
}
