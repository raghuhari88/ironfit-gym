import {
  Star,
  Quote,
} from "lucide-react";

import SectionTitle from "./SectionTitle";

import { testimonials } from "../data";

export default function Testimonials() {

  return (
    <section
      id="testimonials"
      className="bg-[#080808] py-24"
    >

      <div className="mx-auto w-[92%] max-w-[1200px]">

        <SectionTitle
          eyebrow="Member Stories"
          title="What Our"
          highlight="Members Say"
          subtitle="Real motivation from people who train with us."
        />

        <div className="grid gap-6 md:grid-cols-3">

          {testimonials.map((testimonial) => (

            <div
              key={testimonial.name}
              className="relative rounded-2xl border border-[#252525] bg-[#111] p-7"
            >

              <Quote
                size={35}
                className="absolute right-6 top-6 text-[#e50914]/20"
              />

              <div className="mb-5 flex gap-1">

                {Array.from({
                  length: testimonial.rating,
                }).map((_, index) => (

                  <Star
                    key={index}
                    size={17}
                    fill="#ffb000"
                    className="text-[#ffb000]"
                  />

                ))}

              </div>

              <p className="leading-8 text-gray-300">
                “{testimonial.message}”
              </p>

              <div className="mt-7 border-t border-white/10 pt-5">

                <div className="font-bold">
                  {testimonial.name}
                </div>

                <div className="mt-1 text-sm text-[#e50914]">
                  {testimonial.role}
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}