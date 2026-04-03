import { Brain, Eye, ShieldCheck, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
}

const capabilities: Capability[] = [
  {
    icon: Brain,
    title: "AI-Powered Analytics",
    description:
      "Neural network-driven insights across all platforms. Real-time data processing, anomaly detection, and predictive modeling for smarter decisions.",
    badge: "Active",
  },
  {
    icon: Eye,
    title: "Real-time Monitoring",
    description:
      "Continuous visibility across all systems. Network traffic analysis, endpoint tracking, and application-layer inspection operating at scale.",
    badge: "Online",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Zero-trust architecture with automated threat response. Self-healing infrastructure, credential management, and compliance enforcement built in.",
    badge: "Protected",
  },
  {
    icon: Zap,
    title: "High Performance",
    description:
      "Optimized for speed and reliability. Sub-second response times, auto-scaling infrastructure, and 99.9% uptime across all deployed platforms.",
    badge: "Optimized",
  },
];

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="relative py-24 md:py-32 bg-navy-950">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-cyan-400 border border-cyan-400/20 rounded-full bg-cyan-400/5 mb-4">
            CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            Built for{" "}
            <span className="gradient-text">Enterprise Scale</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Every platform shares the same robust foundation — security,
            performance, and intelligence at its core.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div key={cap.title} className="glass-card p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs text-cyan-400/70 px-2.5 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20">
                    {cap.badge}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-slate-50 mb-2">
                  {cap.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
