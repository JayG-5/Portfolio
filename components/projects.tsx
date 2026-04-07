"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionTitle } from "./section";
import { FadeIn, FadeInStagger, StaggerItem } from "./motion";

interface Project {
  title: string;
  period: string;
  subtitle: string;
  description: string;
  stack: string[];
  images: string[];
  links?: { label: string; href: string }[];
}

const projects: Project[] = [
  {
    title: "복숭아마켓",
    period: "2023.08 ~ 2023.09",
    subtitle: "Estsoft 부트캠프 최종 팀프로젝트 (부트캠프 교육생 5명)",
    description:
      "복숭아 관련 상품을 제공하고, 농부 및 제작자들과 소비자들 사이의 다리 역할을 하는 서비스. Infra Architecture, App, Backend, Deployment 담당.",
    stack: ["Python", "Django", "Docker", "WebSocket", "Firebase", "Flutter", "RiverPod"],
    images: [
      "/img/peacheese/0.png",
      "/img/peacheese/39.gif",
      "/img/peacheese/41.gif",
      "/img/peacheese/42.gif",
      "/img/peacheese/45.gif",
      "/img/peacheese/47.gif",
      "/img/peacheese/49.gif",
      "/img/peacheese/50.gif",
      "/img/peacheese/55.gif",
    ],
    links: [
      { label: "README", href: "https://github.com/Pe-chesse/Pe-chesse" },
      { label: "Backend", href: "https://github.com/Pe-chesse/Peach-Market" },
      { label: "App", href: "https://github.com/Pe-chesse/Peacheese-Flutter" },
    ],
  },
];

function ImageCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative overflow-hidden rounded-xl bg-zinc-950">
      <div className="flex items-center justify-center py-4" style={{ minHeight: 320 }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt=""
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
            className="max-h-[460px] w-auto rounded-lg object-contain"
          />
        </AnimatePresence>
      </div>
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white/70 backdrop-blur-sm transition hover:text-white"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white/70 backdrop-blur-sm transition hover:text-white"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-4 bg-sky-400" : "w-1.5 bg-zinc-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" className="border-t border-zinc-800/50">
      <FadeIn>
        <SectionTitle>Side Projects</SectionTitle>
      </FadeIn>
      <FadeInStagger className="space-y-6">
        {projects.map((project) => (
          <StaggerItem key={project.title}>
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700">
              <div className="mb-1 flex items-center gap-3">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <span className="rounded-full bg-zinc-800 px-3 py-0.5 text-xs text-zinc-400">
                  {project.period}
                </span>
              </div>
              <p className="mb-4 text-sm text-zinc-400">{project.subtitle}</p>

              {/* Carousel + Description */}
              <div className="flex flex-col gap-5 lg:flex-row">
                <div className="w-full shrink-0 lg:w-[280px]">
                  <ImageCarousel images={project.images} />
                </div>
                <div className="flex-1">
                  <p className="mb-4 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-sky-500/10 px-2 py-0.5 text-xs font-medium text-sky-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  {project.links && (
                    <div className="flex gap-3">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-zinc-700 px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-white"
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </FadeInStagger>
    </Section>
  );
}
