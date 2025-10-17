import { useMemo, useState } from "react";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

const JOBS = [
  {
    id: "quantum-researcher",
    title: "Quantum Research Scientist",
    team: "Quantum Systems",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    assignment: {
      title: "Qubit Noise Characterization",
      summary:
        "Design an experiment to characterize T1/T2 times for a simulated qubit and discuss mitigation strategies for 1/f noise.",
      steps: [
        "Model a single qubit with amplitude and phase damping.",
        "Generate synthetic measurements across varying temperatures.",
        "Estimate T1/T2 via curve fitting and explain assumptions.",
        "Share a 1–2 page summary with plots and conclusions.",
      ],
      deliverables: [
        "Notebook or script with code and results",
        "Short write-up (PDF/MD) with methodology and discussion",
      ],
      link: "#",
    },
  },
  {
    id: "frontend-engineer",
    title: "Frontend Engineer (Design Systems)",
    team: "Platform Experience",
    location: "Remote (US)",
    type: "Full-time",
    assignment: {
      title: "Quantum Console UI Kit",
      summary:
        "Build a small design system with cards, buttons, and a chart-ready layout reflecting a blue/white quantum theme.",
      steps: [
        "Implement 3 reusable components with states.",
        "Demonstrate responsive behavior for mobile and desktop.",
        "Document usage and theming decisions.",
      ],
      deliverables: [
        "Repo or sandbox link",
        "Short readme explaining choices",
      ],
      link: "#",
    },
  },
  {
    id: "ml-engineer",
    title: "Machine Learning Engineer (Quantum Control)",
    team: "Control & Calibration",
    location: "Boston, MA (Onsite)",
    type: "Full-time",
    assignment: {
      title: "Pulse Calibration via Bayesian Optimization",
      summary:
        "Simulate a simple pulse control loop and use Bayesian optimization to minimize gate error.",
      steps: [
        "Set up a toy environment with a differentiable simulator.",
        "Use a BO library or your own GP to tune parameters.",
        "Report convergence and discuss trade-offs.",
      ],
      deliverables: [
        "Code with instructions",
        "Plots and a brief analysis",
      ],
      link: "#",
    },
  },
];

function Modal({ open, onClose, job }) {
  if (!open || !job) return null;
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl rounded-xl border border-slate-200 bg-white shadow-2xl">
        <div className="flex items-start justify-between p-6 border-b border-slate-200">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">{job.assignment.title}</h3>
            <p className="mt-1 text-slate-600">{job.title} — {job.team}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-md p-2 hover:bg-slate-100 text-slate-500"
          >
            ✕
          </button>
        </div>
        <div className="p-6 space-y-6">
          <p className="text-slate-700 leading-relaxed">{job.assignment.summary}</p>

          <div>
            <h4 className="font-medium text-slate-900">Steps</h4>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700">
              {job.assignment.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-slate-900">Deliverables</h4>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700">
              {job.assignment.deliverables.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 p-6 border-t border-slate-200">
          <a
            href={job.assignment.link}
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-white shadow-md hover:brightness-110"
          >
            Start assignment
            <ArrowRight size={16} />
          </a>
          <a
            href={`mailto:careers@bloq.example?subject=Application: ${encodeURIComponent(job.title)}`}
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-800 hover:bg-slate-50"
          >
            Apply now
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Jobs() {
  const [selected, setSelected] = useState(null);
  const groups = useMemo(() => {
    const map = {};
    for (const job of JOBS) {
      if (!map[job.team]) map[job.team] = [];
      map[job.team].push(job);
    }
    return map;
  }, []);

  return (
    <section id="jobs" className="relative py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs text-blue-700">
            <Briefcase size={14} />
            Open roles
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Build with us
          </h2>
          <p className="mt-2 text-slate-600">
            Every role includes a practical assignment to help you showcase your strengths.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6">
          {Object.entries(groups).map(([team, jobs]) => (
            <div key={team}>
              <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500 mb-3">{team}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {jobs.map((job) => (
                  <article
                    key={job.id}
                    className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900">{job.title}</h4>
                        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                          <span className="inline-flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
                          <span className="inline-flex items-center gap-1"><Clock size={16} /> {job.type}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelected(job)}
                        className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-xs font-medium text-white shadow hover:bg-blue-700"
                      >
                        View assignment
                        <ArrowRight size={14} />
                      </button>
                    </div>

                    <div className="mt-4 rounded-lg bg-blue-50 border border-blue-100 p-4">
                      <p className="text-sm text-blue-900">
                        <span className="font-medium">Assignment preview:</span> {job.assignment.summary}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} job={selected} />
    </section>
  );
}
