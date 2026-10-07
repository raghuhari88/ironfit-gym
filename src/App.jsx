import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      <Header />

      <main>

        <Hero />

        <About />

        <Programs />

        <Plans />

        <Testimonials />

        <Contact />

      </main>

      {/* Floating WhatsApp */}

      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl shadow-lg transition hover:scale-110"
        aria-label="WhatsApp"
      >
        💬
      </a>

      {/* Footer */}

      <footer className="border-t border-white/10 bg-black py-8">

        <div className="mx-auto flex w-[92%] max-w-[1200px] flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <div>

            <div className="text-xl font-black">
              IRON
              <span className="text-[#e50914]">
                FIT
              </span>
            </div>

            <p className="mt-1 text-sm text-gray-600">
              Build Your Strongest Self.
            </p>
  
          </div>

          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} IRONFIT GYM.
            All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;