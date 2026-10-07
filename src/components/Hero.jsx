import {
  ArrowRight,
  Play,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-[76px]"
    >

      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/gym-hero.jpg')",
        }}
      />

      {/* Overlay */}

      <div className="hero-overlay absolute inset-0" />

      {/* Red glow */}

      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[#e50914]/10 blur-[120px]" />

      {/* Content */}

      <div className="relative z-10 mx-auto w-[92%] max-w-[1200px] py-24">

        <div className="max-w-3xl">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e50914]/30 bg-[#e50914]/10 px-4 py-2">

            <span className="h-2 w-2 rounded-full bg-[#e50914]" />

            <span className="text-sm font-bold uppercase tracking-[2px] text-[#e50914]">
              Premium Fitness Club
            </span>

          </div>

          <h1 className="text-5xl font-black uppercase leading-[0.95] sm:text-6xl md:text-7xl lg:text-[86px]">

            Build Your

            <span className="block text-[#e50914]">
              Strongest
            </span>

            Self.

          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">

            Train smarter. Get stronger. Feel unstoppable.
            Join IRONFIT with expert trainers, modern equipment
            and result-focused fitness programs.

          </p>

          {/* Benefits */}

          <div className="mt-7 flex flex-wrap gap-5">

            {[
              "Certified Trainers",
              "Modern Equipment",
              "Flexible Plans",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-2 text-sm text-gray-300"
              >

                <CheckCircle2
                  size={17}
                  className="text-[#e50914]"
                />

                {item}

              </div>

            ))}

          </div>

          {/* CTA */}

          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#plans"
              className="group flex items-center gap-2 rounded-lg bg-[#e50914] px-7 py-4 font-bold transition hover:bg-red-700"
            >

              JOIN NOW

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />

            </a>

            <a
              href="#programs"
              className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-4 font-bold backdrop-blur transition hover:border-[#e50914]"
            >

              <Play size={17} />

              EXPLORE PROGRAMS

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}