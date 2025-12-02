'use client';

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
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    techStack: string[];
    codeUrl: string;
    demoUrl: string;
    externalLink?: string;
    isDemo?: boolean;
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
        externalLink: "https://donate-chain.com/",
        isDemo: true
    },
    {
        id: 2,
        title: "Interview Scheduler",
        description: "An interactive tool for recruiters to schedule technical interviews based on candidate and engineer availability. This is a demo product with simulated data - try it yourself to see how it works!",
        image: "/interview.webp",
        techStack: ["Next.js", "React", "TypeScript", "CSS"],
        codeUrl: "https://github.com/ZackHu-2001/InterviewScheduler",
        demoUrl: "https://www.speercheck.ca/",
        externalLink: "https://www.speercheck.ca/",
        isDemo: true
    },
    {
        id: 3,
        title: "Tetris AI Challenge",
        description: "A Tetris game built using React and NextJS with TypeScript. The backend is hosted on EC2 with Nginx, while also featuring an AI mode incorporating both DQN and heuristic-based approaches.",
        image: "/Tetris.gif",
        techStack: ["React", "Zustand", "Deep-Q-Learning"],
        codeUrl: "https://github.com/ZackHu-2001/Tetris-AI",
        demoUrl: "https://tetris.zackhu.com/",
        externalLink: "https://www.youtube.com/watch?v=qv6hDonEBK4&t=316s"
    },
];

const AUTOPLAY_INTERVAL = 8000;

const ProjectCarousel = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

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
        <motion.div
            className="w-full max-w-7xl mx-auto p-4 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <Carousel
                opts={{
                    loop: true,
                }}
                setApi={setApi}
                className="relative"
            >
                <CarouselContent>
                    {projects.map((project, idx) => (
                        <CarouselItem key={project.id} className="transition-opacity duration-300">
                            <Card className="flex flex-col lg:flex-row overflow-hidden min-h-[350px]">
                                <motion.div
                                    className="w-full lg:w-1/2 h-64 lg:h-auto lg:border-r border-b lg:border-b-0 border-gray-200 relative bg-gray-50 cursor-pointer group"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    onClick={() => {
                                        setLightboxIndex(idx);
                                        setLightboxOpen(true);
                                    }}
                                >
                                    <div className="absolute inset-2 transition-transform duration-500 group-hover:scale-105">
                                        <img
                                            src={project.image || "/api/placeholder/800/600"}
                                            alt={project.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="w-full lg:w-1/2 p-4 lg:p-6 flex flex-col"
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <div className="space-y-3 flex-grow">
                                        <motion.div
                                            className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                        >
                                            <h2 className="text-xl sm:text-2xl font-bold transition-all duration-300">
                                                {project.title}
                                            </h2>
                                            {project.isDemo && (
                                                <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 border border-orange-300">
                                                    DEMO
                                                </span>
                                            )}
                                        </motion.div>

                                        <motion.div
                                            className="flex flex-wrap gap-2 mb-4"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.4 }}
                                        >
                                            {project.techStack.map((tech, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                                                >
                                                    <Badge
                                                        variant="secondary"
                                                        className="text-sm transition-all duration-300 hover:scale-110"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                </motion.div>
                                            ))}
                                        </motion.div>

                                        <motion.p
                                            className="text-gray-600 mb-4 transition-all duration-300"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.6 }}
                                        >
                                            {project.description}
                                        </motion.p>
                                    </div>

                                    <motion.div
                                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.7 }}
                                    >
                                        <a
                                            href={project.codeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-white border border-gray-200 rounded-lg text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                                        >
                                            <Github className="h-5 w-5" />
                                            Code
                                        </a>
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-black border border-black rounded-lg text-white hover:bg-gray-800 transition-colors duration-200"
                                        >
                                            <ExternalLink className="h-5 w-5" />
                                            Live Demo
                                        </a>
                                    </motion.div>
                                </motion.div>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="absolute left-4 top-1/2 transition-transform duration-200 hover:scale-110" />
                <CarouselNext className="absolute right-4 top-1/2 transition-transform duration-200 hover:scale-110" />
            </Carousel>

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

            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={lightboxIndex}
                slides={projects.map(project => ({
                    src: project.image,
                    alt: project.title,
                    title: project.title,
                    description: project.description
                }))}
                carousel={{
                    finite: true
                }}
                controller={{
                    closeOnBackdropClick: true
                }}
                render={{
                    buttonPrev: projects.length > 1 ? undefined : () => null,
                    buttonNext: projects.length > 1 ? undefined : () => null,
                }}
            />
        </motion.div>
    );
};

export default ProjectCarousel;
