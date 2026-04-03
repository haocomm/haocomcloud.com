"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Lock } from "lucide-react";

const projects = [
  {
    codename: "SENTINEL",
    title: "Sentinel AppSec Platform",
    description:
      "Full-spectrum application security monitoring. Real-time vulnerability scanning, threat intelligence, and automated remediation.",
    status: "OPERATIONAL" as const,
    url: "https://sentinel.ipptt.com",
  },
  {
    codename: "IPPTT APP",
    title: "IPPTT App Platform",
    description:
      "Centralized operations platform. Unified dashboard for system management, reporting, and cross-platform orchestration.",
    status: "OPERATIONAL" as const,
    url: "https://app.ipptt.com",
  },
  {
    codename: "MEETING PIPE",
    title: "Meeting Pipeline",
    description:
      "Secure meeting automation and scheduling system. End-to-end encrypted communications with access-controlled recording.",
    status: "OPERATIONAL" as const,
    url: "https://meeting.ipptt.com",
  },
  {
    codename: "DCA ENGINE",
    title: "BTC Auto Buy (DCA)",
    description:
      "Automated dollar-cost averaging for Bitcoin. Strategy execution, portfolio tracking, and market monitoring with zero manual intervention.",
    status: "OPERATIONAL" as const,
    url: "https://dca.ipptt.com",
  },
  {
    codename: "BULK EMAIL",
    title: "Bulk Email Automation",
    description:
      "High-throughput email operations. Campaign management, template engine, delivery analytics, and compliance tracking.",
    status: "PRIVATE" as const,
    url: null,
  },
  {
    codename: "AIRSEA",
    title: "Thailand Air & Maritime Monitoring",
    description:
      "Real-time ADS-B and AIS tracking for Thai airspace and maritime zones. Threat detection, geofencing, and AI-powered anomaly analysis.",
    status: "OPERATIONAL" as const,
    url: "https://airsea.ipptt.com",
  },
] as const;

type ProjectStatus = (typeof projects)[number]["status"];

function getStatusStyle(status: ProjectStatus) {
  switch (status) {
    case "OPERATIONAL":
      return {
        text: "text-green-400",
        bg: "bg-green-400/10 border-green-400/20",
        dot: "bg-green-400",
      };
    case "PRIVATE":
      return {
        text: "text-slate-400",
        bg: "bg-slate-400/10 border-slate-400/20",
        dot: "bg-slate-400",
      };
  }
}

export function DeployedSystems() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="projects"
      className="relative py-24 md:py-32 bg-navy-900"
    >
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-cyan-accent border border-cyan-accent/20 rounded-full bg-cyan-accent/5 mb-6">
            PROJECTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            Deployed <span className="gradient-text">Systems</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Production platforms in the Haocomcloud ecosystem. Each system is
            battle-tested and running at scale.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const statusStyle = getStatusStyle(project.status);
            return (
              <div
                key={index}
                className={`glass-card p-6 group ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } transition-all duration-700`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono tracking-wider text-slate-500">
                    {project.codename}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full border ${statusStyle.bg} ${statusStyle.text}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`}
                    />
                    {project.status}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-slate-50 mb-2 group-hover:text-purple-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Action */}
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-purple-primary hover:text-purple-light transition-colors"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <span className="inline-flex items-center text-sm text-slate-500">
                    Private System
                    <Lock className="w-4 h-4 ml-2" />
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
