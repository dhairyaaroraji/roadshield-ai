import React from 'react';
import {
  Shield,
  Radar,
  AlertTriangle,
  MapPin,
  Activity,
  Zap,
  Github,
  ArrowRight,
} from 'lucide-react';

const features = [
  {
    icon: Radar,
    title: 'Real-Time Hazard Detection',
    desc: 'AI scans road conditions live, flagging potholes, debris, and obstacles before you reach them.',
  },
  {
    icon: AlertTriangle,
    title: 'Predictive Risk Alerts',
    desc: 'Machine learning models forecast accident-prone zones using historical and live traffic data.',
  },
  {
    icon: MapPin,
    title: 'Smart Route Guidance',
    desc: 'Get routed around high-risk stretches automatically, without sacrificing travel time.',
  },
  {
    icon: Activity,
    title: 'Driver Behavior Insights',
    desc: 'Understand braking, speed, and reaction patterns to build safer driving habits over time.',
  },
];

const stats = [
  { value: '92%', label: 'Hazard detection accuracy' },
  { value: '3.2x', label: 'Faster hazard alerts' },
  { value: '40+', label: 'Cities in pilot rollout' },
];

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#020712]/80 border-b border-shield-border/40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-ocean-cyan" strokeWidth={2.2} />
          <span className="font-bold text-lg tracking-tight">RoadShield AI</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#features" className="hover:text-ocean-cyan transition-colors">Features</a>
          <a href="#stats" className="hover:text-ocean-cyan transition-colors">Impact</a>
          <a href="#cta" className="hover:text-ocean-cyan transition-colors">Get Started</a>
        </div>
        <button className="px-4 py-2 rounded-lg bg-ocean-wave-gradient text-sm font-semibold text-white shadow-lg shadow-cyan-900/30 hover:opacity-90 transition-opacity">
          Request Demo
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="relative overflow-hidden bg-ocean-radial">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-28 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-shield-border/60 bg-shield-card/50 text-xs text-ocean-mist mb-6">
          <Zap className="w-3.5 h-3.5 text-ocean-cyan" />
          AI-powered road intelligence
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Safer rides.
          <br />
          <span className="bg-ocean-wave-gradient bg-clip-text text-transparent">
            Smarter roads.
          </span>
        </h1>
        <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
          RoadShield AI detects hazards, predicts risk, and guides drivers
          away from danger in real time — turning every commute into a
          safer one.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <button className="group px-6 py-3 rounded-xl bg-ocean-wave-gradient font-semibold text-white shadow-lg shadow-cyan-900/40 hover:shadow-cyan-900/60 transition-all flex items-center gap-2">
            Try the prototype
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-6 py-3 rounded-xl border border-shield-border text-slate-200 hover:bg-shield-card/60 transition-colors flex items-center gap-2">
            <Github className="w-4 h-4" />
            View on GitHub
          </button>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ocean-cyan/40 to-transparent" />
    </header>
  );
}

function Features() {
  return (
    <section id="features" className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl font-bold">Built for real-world driving</h2>
        <p className="mt-3 text-slate-400">
          Every feature is designed to reduce reaction time and give drivers
          the context they need, exactly when they need it.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl border border-shield-border/50 bg-ocean-card-gradient p-6 hover:border-ocean-cyan/50 transition-colors"
          >
            <div className="w-11 h-11 rounded-xl bg-shield-surface flex items-center justify-center mb-4">
              <Icon className="w-5 h-5 text-ocean-cyan" strokeWidth={2} />
            </div>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section id="stats" className="border-y border-shield-border/40 bg-shield-surface/40">
      <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-8 text-center">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <div className="text-4xl font-extrabold bg-ocean-wave-gradient bg-clip-text text-transparent">
              {value}
            </div>
            <div className="mt-2 text-sm text-slate-400">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="max-w-4xl mx-auto px-6 py-24 text-center">
      <h2 className="text-3xl font-bold">Ready to see it in action?</h2>
      <p className="mt-3 text-slate-400">
        Spin up the prototype locally and explore how RoadShield AI flags
        hazards in real time.
      </p>
      <button className="mt-8 px-8 py-3.5 rounded-xl bg-ocean-wave-gradient font-semibold text-white shadow-lg shadow-cyan-900/40 hover:opacity-90 transition-opacity">
        Get Started
      </button>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-shield-border/40 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-ocean-cyan" />
          RoadShield AI © {new Date().getFullYear()}
        </div>
        <div>Built for safer streets, everywhere.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}
