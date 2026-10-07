import {
  Check,
  Crown,
} from "lucide-react";

import SectionTitle from "./SectionTitle";

import { plans } from "../data";

export default function Plans() {

  return (
    <section
      id="plans"
      className="bg-[#0d0d0d] py-24"
    >

      <div className="mx-auto w-[92%] max-w-[1200px]">

        <SectionTitle
          eyebrow="Membership"
          title="Choose Your"
          highlight="Plan"
          subtitle="Simple and flexible membership options for every fitness goal."
        />

        <div className="grid gap-6 lg:grid-cols-3">

          {plans.map((plan) => (

            <div
              key={plan.title}
              className={`relative rounded-2xl border p-8 transition duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-[#e50914] bg-gradient-to-b from-[#1a0809] to-[#111]"
                  : "border-[#292929] bg-[#111]"
              }`}
            >

              {plan.popular && (

                <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-[#e50914] px-3 py-1.5 text-xs font-bold">

                  <Crown size={13} />

                  MOST POPULAR

                </div>

              )}

              <h3 className="text-2xl font-bold">
                {plan.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {plan.description}
              </p>

              <div className="mt-6">

                <span className="text-5xl font-black">
                  {plan.price}
                </span>

                <span className="text-gray-500">
                  {plan.period}
                </span>

              </div>

              <div className="my-7 h-px bg-white/10" />

              <ul className="space-y-4">

                {plan.features.map((feature) => (

                  <li
                    key={feature}
                    className="flex items-center gap-3 text-gray-300"
                  >

                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e50914]/15">

                      <Check
                        size={13}
                        className="text-[#e50914]"
                      />

                    </span>

                    {feature}

                  </li>

                ))}

              </ul>

              <a
                href="#contact"
                className={`mt-8 block rounded-lg px-6 py-4 text-center font-bold transition ${
                  plan.popular
                    ? "bg-[#e50914] hover:bg-red-700"
                    : "border border-white/10 hover:border-[#e50914] hover:text-[#e50914]"
                }`}
              >
                CHOOSE PLAN
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}