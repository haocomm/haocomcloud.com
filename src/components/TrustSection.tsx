"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: "50+", label: "Deployments" },
  { value: "10K+", label: "Events Processed" },
  { value: "99.97%", label: "System Uptime" },
  { value: "<1s", label: "Response Time" },
];

const badges = [
  { name: "SOC 2", desc: "Type II Certified" },
  { name: "ISO 27001", desc: "ISMS Certified" },
  { name: "GDPR", desc: "Fully Compliant" },
  { name: "NIST", desc: "Framework Aligned" },
];

export function TrustSection() {
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
    <section ref={ref} id="trust" className="relative py-24 md:py-32 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-cyan-400 border border-cyan-400/20 rounded-full bg-cyan-400/10 mb-6">
            TRUST
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6">
            Trusted by Operations That{" "}
            <span className="gradient-text">Cannot Fail</span>
          </h2>
          <p className="text-slate-400 leading-relaxed">
            From critical infrastructure to enterprise platforms, Haocomcloud
            powers systems where reliability is non-negotiable and downtime is
            not an option.
          </p>
        </div>

        {/* Metrics Bar */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transition-all duration-700 delay-200 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {metrics.map((m, i) => (
            <div key={i} className="glass-card p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                {m.value}
              </div>
              <div className="text-xs font-medium tracking-wider text-slate-500">
                {m.label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Badges */}
        <div
          className={`text-center transition-all duration-700 delay-400 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs font-medium tracking-wider text-slate-500 mb-6">
            COMPLIANCE &amp; CERTIFICATIONS
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((badge, i) => (
              <div key={i} className="glass-card px-6 py-3">
                <div className="text-sm font-semibold text-slate-200">
                  {badge.name}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {badge.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
