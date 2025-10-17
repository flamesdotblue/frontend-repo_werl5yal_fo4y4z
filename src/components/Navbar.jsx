import { Rocket, Briefcase, Info, Users } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-blue-500 to-indigo-500 grid place-items-center text-white shadow-lg shadow-blue-500/20">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight text-slate-900 text-lg">
            bloq
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#jobs" className="text-slate-700 hover:text-slate-900 flex items-center gap-2">
            <Briefcase size={16} />
            Jobs
          </a>
          <a href="#about" className="text-slate-700 hover:text-slate-900 flex items-center gap-2">
            <Info size={16} />
            About
          </a>
          <a href="#culture" className="text-slate-700 hover:text-slate-900 flex items-center gap-2">
            <Users size={16} />
            Culture
          </a>
        </nav>
        <a
          href="#jobs"
          className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-600/30 hover:brightness-110 transition"
        >
          View open roles
        </a>
      </div>
    </header>
  );
}
