import React, { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, Github, ExternalLink } from "lucide-react";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    techStack: string[];
    codeUrl: string;
    demoUrl: string;
    externalLink?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Decentralized Donate Platform",
        description: "DonateChain is a decentralized fundraising platform that enables transparent and secure blockchain-based donations for charitable causes.",
        image: "/donate.webp",
        techStack: ["Solidity", "Ethereum", "IPFS", "D3.js"],
        codeUrl: "https://github.com/ZackHu-2001/DecentralizedDonation",
        demoUrl: "https://donate-chain.com/",
        externalLink: "https://donate-chain.com/"
    },
    {
        id: 2,
        title: "Tetris AI Challenge",
        description: "A Tetris game built using React and NextJS with TypeScript. The backend is hosted on EC2 with Nginx, while also featuring an AI mode incorporating both DQN and heuristic-based approaches.",
        image: "/Tetris.gif",
        techStack: ["React", "Zustand", "Deep-Q-Learning"],
        codeUrl: "https://github.com/ZackHu-2001/Tetris-AI",
        demoUrl: "https://tetris.zackhu.com/",
        externalLink: "https://www.youtube.com/watch?v=qv6hDonEBK4&t=316s"
    },
    // {
    //     id: 3,
    //     title: "E-commerce Platform",
    //     description: "A modern e-commerce platform built with microservices architecture, featuring real-time inventory management and AI-powered recommendations.",
    //     image: "",
    //     techStack: ["React", "Node.js", "MongoDB", "Docker"],
    //     codeUrl: "https://github.com/example/ecommerce",
    //     demoUrl: "https://demo.example.com/ecommerce"
    // },
    // {
    //     id: 4,
    //     title: "AI Chat Application",
    //     description: "An intelligent chat application with real-time translation and sentiment analysis capabilities.",
    //     image: "/api/placeholder/800/600",
    //     techStack: ["TypeScript", "OpenAI", "WebSocket", "Redis"],
    //     codeUrl: "https://github.com/example/ai-chat",
    //     demoUrl: "https://demo.example.com/ai-chat"
    // },
    // {
    //     id: 5,
    //     title: "Analytics Dashboard",
    //     description: "A comprehensive analytics dashboard with interactive visualizations and real-time data processing.",
    //     image: "/api/placeholder/800/600",
    //     techStack: ["Next.js", "GraphQL", "PostgreSQL", "D3.js"],
    //     codeUrl: "https://github.com/example/analytics",
    //     demoUrl: "https://demo.example.com/analytics"
    // },
];

const AUTOPLAY_INTERVAL = 8000;

const ProjectCarousel = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!api) return;
        api.on("select", () => {
            setCurrentIndex(api.selectedScrollSnap());
        });
    }, [api]);

    useEffect(() => {
        if (!api || !isPlaying) return;
        const intervalId = setInterval(() => {
            if (currentIndex === projects.length - 1) {
                api.scrollTo(0);
            } else {
                api.scrollNext();
            }
        }, AUTOPLAY_INTERVAL);
        return () => clearInterval(intervalId);
    }, [api, currentIndex, isPlaying]);

    const toggleAutoplay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="w-full max-w-6xl mx-auto p-4 space-y-4 min-h-[20rem]">
            <Carousel
                opts={{
                    loop: true,
                }}
                setApi={setApi}
                className="relative"
            >
                <CarouselContent>
                    {projects.map((project) => (
                        <CarouselItem key={project.id} className="transition-opacity duration-300">
                            <Card className="flex flex-row overflow-hidden">
                                {/* Left side - Image */}
                                <div className="w-1/2 border-r border-gray-200 relative bg-gray-50">
                                    <div className="absolute inset-2 transition-transform duration-500 hover:scale-105">
                                        <img
                                            src={project.image || "/api/placeholder/800/600"}
                                            alt={project.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                                {/* Right side - Content */}
                                <div className="w-1/2 p-6 flex flex-col">
                                    <div className="space-y-4 flex-grow">
                                        <h2 className="text-2xl font-bold mb-4 transition-all duration-300">
                                            {project.title}
                                        </h2>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.techStack.map((tech, index) => (
                                                <Badge
                                                    key={index}
                                                    variant="secondary"
                                                    className="text-sm transition-all duration-300 hover:scale-110"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>

                                        <p className="text-gray-600 mb-6 transition-all duration-300">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-4 mt-6">
                                        <a
                                            href={project.codeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-2 bg-white border border-gray-200 rounded-lg text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                                        >
                                            <Github className="h-5 w-5" />
                                            Code
                                        </a>
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-2 bg-white border border-gray-200 rounded-lg text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                                        >
                                            <ExternalLink className="h-5 w-5" />
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="absolute left-4 top-1/2 transition-transform duration-200 hover:scale-110" />
                <CarouselNext className="absolute right-4 top-1/2 transition-transform duration-200 hover:scale-110" />
            </Carousel>

            {/* Autoplay control */}
            {/* <div className="flex justify-center mt-4">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleAutoplay}
                    className="transition-all duration-200 hover:scale-110"
                >
                    {isPlaying ? (
                        <Pause className="h-4 w-4" />
                    ) : (
                        <Play className="h-4 w-4" />
                    )}
                </Button>
            </div> */}

            {/* Progress indicators */}
            <div className="flex justify-center gap-2 mt-4">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-primary w-4' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectCarousel;