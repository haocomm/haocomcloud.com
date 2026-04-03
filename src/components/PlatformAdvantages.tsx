"use client";

import { useEffect, useState } from "react";

interface Advantage {
  metric: string;
  label: string;
  title: string;
  description: string;
}

const advantages: Advantage[] = [
  {
    metric: "99.9%",
    label: "UPTIME",
    title: "Always Available",
    description:
      "Redundant infrastructure with automatic failover. Your systems stay online no matter what.",
  },
  {
    metric: "<1s",
    label: "RESPONSE",
    title: "Lightning Fast",
    description:
      "Optimized APIs and edge caching ensure sub-second response times across all platforms.",
  },
  {
    metric: "24/7",
    label: "MONITORING",
    title: "Always Watching",
    description:
      "Continuous monitoring with intelligent alerting. Issues caught before they impact users.",
  },
  {
    metric: "6x",
    label: "PLATFORMS",
    title: "Unified Stack",
    description:
      "Six production platforms sharing one infrastructure. Build once, deploy everywhere.",
  },
];

export function PlatformAdvantages() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById("advantages");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="advantages" className="relative py-24 md:py-32 bg-navy-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-cyan-400 border border-cyan-400/20 rounded-full bg-cyan-400/5 mb-6">
            ADVANTAGES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            Why <span className="gradient-text">Haocomcloud</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Built for production. Every platform is optimized, monitored, and
            ready to scale.
          </p>
        </div>

        {/* Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, index) => (
            <div
              key={adv.label}
              className={`glass-card p-6 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } transition-all duration-700`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Metric */}
              <div className="text-3xl font-bold gradient-text mb-1">
                {adv.metric}
              </div>
              <div className="text-xs font-medium tracking-wider text-slate-500 mb-4">
                {adv.label}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-slate-50 mb-2">
                {adv.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
