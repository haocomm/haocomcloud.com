"use client";

import { Upload, FlaskConical, Settings, Send, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: WorkflowStep[] = [
  {
    step: "01",
    title: "Ingest",
    description:
      "Data flows from multiple sources into unified pipelines. Real-time streams, batch uploads, and API integrations — all processed and normalized.",
    icon: Upload,
  },
  {
    step: "02",
    title: "Process",
    description:
      "AI models analyze incoming data for patterns, anomalies, and actionable insights. Machine learning pipelines run continuously across all platforms.",
    icon: FlaskConical,
  },
  {
    step: "03",
    title: "Automate",
    description:
      "Triggers and workflows execute based on AI decisions. Automated responses, notifications, escalations — without human delay.",
    icon: Settings,
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "Results, reports, and actions reach the right people at the right time. Dashboards, alerts, integrations — output tailored to each stakeholder.",
    icon: Send,
  },
];

export function WorkflowSection() {
  return (
    <section id="workflow" className="relative py-24 md:py-32 bg-navy-900">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-cyan-accent border border-cyan-accent/20 rounded-full bg-cyan-accent/5 mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            From Data to{" "}
            <span className="gradient-text">Action</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Every platform follows the same pipeline. Four stages. Fully automated.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative">
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%+1px)] w-[calc(100%-2px)] h-px">
                    <div className="w-full h-full bg-gradient-to-r from-purple-primary/30 to-purple-primary/5" />
                  </div>
                )}

                <div className="glass-card p-6 h-full">
                  {/* Step number */}
                  <div className="text-xs font-bold gradient-text mb-4">
                    STEP {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-purple-950/50 border border-purple-primary/10 flex items-center justify-center text-purple-primary mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-50 mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Flow summary */}
        <div className="mt-12 flex items-center justify-center gap-3 flex-wrap">
          {steps.map((step, i) => (
            <span key={step.title} className="flex items-center gap-3">
              <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-purple-950/30 border border-purple-primary/10 text-purple-light">
                {step.title}
              </span>
              {i < steps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-purple-primary/30" />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
