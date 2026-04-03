"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
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
      id="deploy"
      className="relative py-24 md:py-32 bg-navy-950 overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-bg opacity-50" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-cyan-400 border border-cyan-400/20 rounded-full bg-cyan-400/10 mb-6">
            GET STARTED
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6">
            Build with{" "}
            <span className="gradient-text">Haocomcloud</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            From concept to production. Deploy enterprise-grade platforms with
            AI-powered infrastructure built for scale and reliability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.ipptt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 btn-primary text-sm font-medium"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-3" />
            </a>

            <a
              href="https://sentinel.ipptt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-xl border border-navy-700 hover:border-cyan-400/30 text-slate-300 hover:text-cyan-300 text-sm font-medium transition-all duration-300"
            >
              View Documentation
            </a>
          </div>

          {/* Bottom note */}
          <p className="mt-8 text-xs text-slate-600">
            Deployment typically completed within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
