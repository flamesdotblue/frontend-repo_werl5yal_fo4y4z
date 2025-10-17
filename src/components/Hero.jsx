import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs text-slate-700 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            We’re hiring across quantum, software, and design
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
            Join <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">bloq</span> — build the quantum future
          </h1>
          <p className="mt-5 text-slate-700 text-base sm:text-lg leading-relaxed">
            We’re a quantum computing company pushing the boundaries of what’s possible. Help us architect qubit control systems, craft scalable platforms, and design beautiful tools for the next era of computing.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#jobs"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-white shadow-lg shadow-blue-600/30 hover:brightness-110 transition"
            >
              Explore open roles
              <ArrowRight size={18} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white/70 px-5 py-3 text-slate-800 backdrop-blur hover:bg-white transition"
            >
              Learn about our mission
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
