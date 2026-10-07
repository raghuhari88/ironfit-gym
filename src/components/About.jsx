import {
  Award,
  Users,
  Target,
  ShieldCheck,
} from "lucide-react";

import SectionTitle from "./SectionTitle";
import { Stat } from "./Card";

import { stats } from "../data";

export default function About() {

  return (
    <section
      id="about"
      className="bg-[#0d0d0d] py-24"
    >

      <div className="mx-auto w-[92%] max-w-[1200px]">

        <SectionTitle
          eyebrow="About IRONFIT"
          title="More Than"
          highlight="A Gym"
          subtitle="We help people build strength, confidence and healthy habits through professional training and a supportive fitness community."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Image */}

          <div className="relative">

            <div className="overflow-hidden rounded-2xl border border-white/10">

              <img
                src="/images/gym-about.jpg"
                alt="IRONFIT Gym"
                className="h-[500px] w-full object-cover"
              />

            </div>

            <div className="absolute -bottom-6 -right-6 hidden rounded-xl border border-[#e50914]/30 bg-black/90 p-5 backdrop-blur-md sm:block">

              <div className="text-3xl font-black text-[#e50914]">
                100%
              </div>

              <div className="text-sm text-gray-400">
                Dedication
              </div>

            </div>

          </div>

          {/* Content */}

          <div>

            <h3 className="text-3xl font-black">
              Train Hard.
              <span className="text-[#e50914]">
                {" "}Live Strong.
              </span>
            </h3>

            <p className="mt-5 leading-8 text-gray-400">

              At IRONFIT, we believe fitness is not just about
              looking good. It's about becoming stronger,
              healthier and more confident every day.

            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="rounded-xl border border-white/10 bg-[#151515] p-5">

                <Award
                  className="mb-3 text-[#e50914]"
                  size={30}
                />

                <h4 className="font-bold">
                  Certified Trainers
                </h4>

                <p className="mt-2 text-sm text-gray-500">
                  Professional guidance for better results.
                </p>

              </div>

              <div className="rounded-xl border border-white/10 bg-[#151515] p-5">

                <Users
                  className="mb-3 text-[#e50914]"
                  size={30}
                />

                <h4 className="font-bold">
                  Fitness Community
                </h4>

                <p className="mt-2 text-sm text-gray-500">
                  Train with a motivated community.
                </p>

              </div>

              <div className="rounded-xl border border-white/10 bg-[#151515] p-5">

                <Target
                  className="mb-3 text-[#e50914]"
                  size={30}
                />

                <h4 className="font-bold">
                  Goal Focused
                </h4>

                <p className="mt-2 text-sm text-gray-500">
                  Programs built around your goals.
                </p>

              </div>

              <div className="rounded-xl border border-white/10 bg-[#151515] p-5">

                <ShieldCheck
                  className="mb-3 text-[#e50914]"
                  size={30}
                />

                <h4 className="font-bold">
                  Safe Training
                </h4>

                <p className="mt-2 text-sm text-gray-500">
                  Train correctly and confidently.
                </p>

              </div>

            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">

              {stats.map((stat) => (
                <Stat
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                />
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}