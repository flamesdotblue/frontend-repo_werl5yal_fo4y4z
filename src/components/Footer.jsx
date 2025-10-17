export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-slate-600">
          © {new Date().getFullYear()} bloq — Advancing quantum computing.
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#about" className="text-slate-600 hover:text-slate-900">About</a>
          <a href="#culture" className="text-slate-600 hover:text-slate-900">Culture</a>
          <a href="#jobs" className="text-slate-600 hover:text-slate-900">Jobs</a>
          <a href="#" className="text-slate-600 hover:text-slate-900">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}
