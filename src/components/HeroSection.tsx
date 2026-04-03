"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const stats = [
  { value: "6", label: "Deployed Systems" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "<1s", label: "Response Time" },
  { value: "24/7", label: "Monitoring" },
];

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-bg" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-8 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-medium tracking-wider text-cyan-400">
            AI-POWERED PLATFORMS
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-slate-50">Build. Deploy.</span>
          <br />
          <span className="gradient-text">Scale Everything.</span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed transition-all duration-700 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Six production platforms. One infrastructure. From cybersecurity to
          real-time tracking — enterprise-grade systems built for scale.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-600 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#deploy"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 btn-primary text-sm font-medium"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#capabilities"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-navy-700 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-300 text-sm font-medium transition-all duration-300"
          >
            View Capabilities
          </a>
        </div>

        {/* Stats bar */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto transition-all duration-700 delay-800 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="px-4 py-3 rounded-xl border border-navy-700 bg-navy-800/40 backdrop-blur-sm"
            >
              <div className="text-xl md:text-2xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-slate-600">Scroll</span>
        <ChevronDown className="w-4 h-4 text-cyan-400/50 animate-bounce" />
      </div>
    </section>
  );
}
