"use client";

import { useEffect, useRef, useState } from "react";

const logEntries = [
  { time: "14:23:01", level: "INFO", msg: "System health check — all services nominal" },
  { time: "14:23:04", level: "WARN", msg: "Traffic spike detected — src: api-gateway-01" },
  { time: "14:23:05", level: "INFO", msg: "Auto-scaling initiated — adding 2 instances" },
  { time: "14:23:06", level: "OK", msg: "Scale-up complete — 8 instances active" },
  { time: "14:23:07", level: "INFO", msg: "Load balanced — avg response time: 120ms" },
  { time: "14:23:08", level: "OK", msg: "Traffic normalized — system stable" },
];

const statusItems = [
  { label: "API", value: "Healthy", status: "green" as const },
  { label: "Workers", value: "8/8", status: "green" as const },
  { label: "Database", value: "Connected", status: "green" as const },
  { label: "Cache", value: "Warm", status: "green" as const },
  { label: "Queue", value: "0 pending", status: "green" as const },
];

const networkNodes = [
  { top: "20%", left: "25%", color: "bg-purple-primary", size: 8 },
  { top: "55%", left: "65%", color: "bg-cyan-accent", size: 8 },
  { top: "35%", left: "80%", color: "bg-purple-light", size: 8 },
  { top: "70%", left: "20%", color: "bg-cyan-light", size: 12 },
  { top: "15%", left: "55%", color: "bg-purple-primary", size: 8 },
  { top: "80%", left: "70%", color: "bg-cyan-accent", size: 8 },
  { top: "45%", left: "40%", color: "bg-purple-light", size: 12 },
  { top: "65%", left: "45%", color: "bg-cyan-accent", size: 8 },
];

function getLevelColor(level: string): string {
  switch (level) {
    case "WARN":
      return "text-amber-400";
    case "OK":
      return "text-green-400";
    default:
      return "text-slate-400";
  }
}

function getStatusDot(status: "green" | "amber" | "red"): string {
  switch (status) {
    case "green":
      return "bg-green-400";
    case "amber":
      return "bg-amber-400 animate-pulse";
    case "red":
      return "bg-red-400";
  }
}

export function DashboardPreview() {
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
      id="dashboard"
      className="relative py-24 md:py-32 bg-navy-900"
    >
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-cyan-accent border border-cyan-accent/20 rounded-full bg-cyan-accent/5 mb-6">
            DASHBOARD
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            Live <span className="gradient-text">Command Center</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real-time visibility into your entire platform. Every service
            monitored. Every metric tracked.
          </p>
        </div>

        {/* Dashboard Container */}
        <div
          className={`rounded-2xl border border-border-surface bg-surface/60 backdrop-blur-sm overflow-hidden transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* System Log Panel */}
            <div className="border-b lg:border-b-0 lg:border-r border-border-surface">
              {/* Panel Header */}
              <div className="flex items-center gap-2 px-6 py-3 border-b border-border-surface bg-navy-800/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                </div>
                <span className="text-xs text-slate-500 ml-auto font-mono">
                  system.log
                </span>
              </div>

              {/* Log Entries */}
              <div className="p-6 space-y-3 font-mono text-xs leading-relaxed min-h-[280px]">
                {logEntries.map((entry, i) => (
                  <div
                    key={i}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${i * 200}ms` }}
                  >
                    <span className="text-slate-600">[{entry.time}]</span>{" "}
                    <span
                      className={`${getLevelColor(entry.level)} font-semibold`}
                    >
                      [{entry.level.padEnd(5)}]
                    </span>{" "}
                    <span className="text-slate-400">{entry.msg}</span>
                  </div>
                ))}
                <div className="mt-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-400 animate-pulse rounded-full" />
                  <span className="text-xs text-slate-600">
                    Monitoring active...
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col">
              {/* Network Graph Panel */}
              <div className="border-b border-border-surface">
                <div className="flex items-center justify-between px-6 py-3 border-b border-border-surface bg-navy-800/50">
                  <span className="text-xs text-slate-500 font-mono">
                    network.topology
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 animate-pulse rounded-full" />
                    <span className="text-xs text-green-400">Live</span>
                  </div>
                </div>
                {/* Graph Area */}
                <div className="relative h-48 lg:h-52 bg-navy-950/50 overflow-hidden">
                  {/* Connection lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <line
                      x1="25%"
                      y1="20%"
                      x2="40%"
                      y2="45%"
                      stroke="rgba(203,60,255,0.15)"
                      strokeWidth="1"
                    />
                    <line
                      x1="40%"
                      y1="45%"
                      x2="65%"
                      y2="55%"
                      stroke="rgba(0,194,255,0.15)"
                      strokeWidth="1"
                    />
                    <line
                      x1="55%"
                      y1="15%"
                      x2="40%"
                      y2="45%"
                      stroke="rgba(203,60,255,0.1)"
                      strokeWidth="1"
                    />
                    <line
                      x1="80%"
                      y1="35%"
                      x2="65%"
                      y2="55%"
                      stroke="rgba(0,194,255,0.1)"
                      strokeWidth="1"
                    />
                    <line
                      x1="45%"
                      y1="65%"
                      x2="40%"
                      y2="45%"
                      stroke="rgba(203,60,255,0.1)"
                      strokeWidth="1"
                    />
                    <line
                      x1="70%"
                      y1="80%"
                      x2="65%"
                      y2="55%"
                      stroke="rgba(0,194,255,0.1)"
                      strokeWidth="1"
                    />
                  </svg>

                  {/* Nodes */}
                  {networkNodes.map((node, i) => (
                    <div
                      key={i}
                      className={`absolute rounded-full ${node.color} opacity-70 animate-pulse`}
                      style={{
                        top: node.top,
                        left: node.left,
                        width: `${node.size}px`,
                        height: `${node.size}px`,
                        animationDelay: `${i * 400}ms`,
                      }}
                    />
                  ))}

                  {/* Center hub */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-5 h-5 bg-gradient-to-br from-purple-primary to-cyan-accent rounded-full animate-pulse shadow-lg shadow-purple-primary/30" />
                  </div>
                </div>
              </div>

              {/* System Status Bar */}
              <div>
                <div className="px-6 py-3 border-b border-border-surface bg-navy-800/50">
                  <span className="text-xs text-slate-500 font-mono">
                    service.status
                  </span>
                </div>
                <div className="p-4 flex flex-wrap gap-2">
                  {statusItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-navy-800/50 border border-border-surface"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${getStatusDot(item.status)}`}
                      />
                      <span className="text-xs text-slate-500">
                        {item.label}
                      </span>
                      <span className="text-xs font-medium text-slate-300">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between px-6 py-3 bg-navy-800/30 border-t border-border-surface">
            <span className="text-xs text-slate-600 font-mono">
              haocomcloud v2.4.1
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-green-400">Connected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
