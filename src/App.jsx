import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />

        <section id="about" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Engineering the quantum era</h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                We build scalable quantum systems and the software that powers them. Our teams span
                quantum hardware, control, cloud platform, and design. We value curiosity, rigor, and
                thoughtful craft.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-6">
                <div className="rounded-xl border border-slate-200 p-6">
                  <div className="text-4xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">50+</div>
                  <p className="mt-2 text-slate-600">Researchers & engineers</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-6">
                  <div className="text-4xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">10x</div>
                  <p className="mt-2 text-slate-600">Qubit fidelity improvement YoY</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-blue-100 via-white to-indigo-100 blur-xl" />
              <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
                <ul className="space-y-4 text-sm text-slate-700">
                  <li>• Hybrid-first culture across US hubs</li>
                  <li>• Competitive compensation and equity</li>
                  <li>• 100% covered health, vision, and dental</li>
                  <li>• Annual learning stipend and research time</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Jobs />

        <section id="culture" className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">A culture for builders</h2>
            <p className="mt-4 max-w-2xl text-slate-700">
              We collaborate across disciplines, iterate in the open, and balance deep research with
              pragmatic delivery. If you’re excited by complex systems and elegant design, you’ll fit right in.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="font-medium text-slate-900">Ownership</p>
                <p className="mt-2 text-slate-600">We value autonomy with accountability.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="font-medium text-slate-900">Craft</p>
                <p className="mt-2 text-slate-600">We obsess over details that matter.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="font-medium text-slate-900">Rigor</p>
                <p className="mt-2 text-slate-600">We use data and first-principles thinking.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
