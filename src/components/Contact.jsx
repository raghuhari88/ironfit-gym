import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Send,
} from "lucide-react";

import SectionTitle from "./SectionTitle";

export default function Contact() {

  const WHATSAPP_NUMBER = "919876543210";

  function sendForm(event) {

    event.preventDefault();

    const formData = new FormData(
      event.currentTarget
    );

    const name = formData.get("name");
    const phone = formData.get("phone");
    const goal = formData.get("goal");
    const message = formData.get("message");

    const whatsappMessage = `
Hello IRONFIT GYM 👋

I want to know more about your membership.

Name: ${name}
Phone: ${phone}
Fitness Goal: ${goal}

Message:
${message}
    `;

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(
        whatsappMessage
      );

    window.open(url, "_blank");

    event.currentTarget.reset();
  }

  return (

    <section
      id="contact"
      className="bg-[#0d0d0d] py-24"
    >

      <div className="mx-auto w-[92%] max-w-[1200px]">

        <SectionTitle
          eyebrow="Get Started"
          title="Start Your"
          highlight="Fitness Journey"
          subtitle="Book a free consultation or talk to our fitness team today."
        />

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Contact Information */}

          <div>

            <div className="rounded-2xl border border-white/10 bg-[#111] p-8">

              <h3 className="text-2xl font-bold">
                Visit IRONFIT
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                Have questions about membership,
                personal training or our programs?
                Get in touch with us.
              </p>

              <div className="mt-8 space-y-6">

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e50914]/10">

                    <MapPin
                      size={20}
                      className="text-[#e50914]"
                    />

                  </div>

                  <div>

                    <div className="font-bold">
                      Address
                    </div>

                    <div className="mt-1 text-sm text-gray-500">
                      123 Fitness Street,
                      Your City, India
                    </div>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e50914]/10">

                    <Phone
                      size={20}
                      className="text-[#e50914]"
                    />

                  </div>

                  <div>

                    <div className="font-bold">
                      Phone
                    </div>

                    <a
                      href="tel:+919876543210"
                      className="mt-1 block text-sm text-gray-500 hover:text-[#e50914]"
                    >
                      +91 98765 43210
                    </a>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e50914]/10">

                    <MessageCircle
                      size={20}
                      className="text-[#e50914]"
                    />

                  </div>

                  <div>

                    <div className="font-bold">
                      WhatsApp
                    </div>

                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block text-sm text-gray-500 hover:text-[#e50914]"
                    >
                      Chat with us
                    </a>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e50914]/10">

                    <Clock
                      size={20}
                      className="text-[#e50914]"
                    />

                  </div>

                  <div>

                    <div className="font-bold">
                      Opening Hours
                    </div>

                    <div className="mt-1 text-sm text-gray-500">
                      Monday – Sunday
                      <br />
                      5:00 AM – 11:00 PM
                    </div>

                  </div>

                </div>

              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="mt-8 block rounded-lg border border-white/10 py-3 text-center font-bold transition hover:border-[#e50914] hover:text-[#e50914]"
              >
                VIEW ON GOOGLE MAPS
              </a>

            </div>

          </div>

          {/* Form */}

          <form
            onSubmit={sendForm}
            className="rounded-2xl border border-white/10 bg-[#111] p-8"
          >

            <h3 className="text-2xl font-bold">
              Free Enquiry
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Fill the form and we'll contact you on WhatsApp.
            </p>

            <div className="mt-7 space-y-4">

              <input
                type="text"
                name="name"
                required
                placeholder="Your Name *"
                className="w-full rounded-lg border border-white/10 bg-[#171717] px-4 py-3.5 text-white outline-none placeholder:text-gray-600 focus:border-[#e50914]"
              />

              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number *"
                className="w-full rounded-lg border border-white/10 bg-[#171717] px-4 py-3.5 text-white outline-none placeholder:text-gray-600 focus:border-[#e50914]"
              />

              <select
                name="goal"
                className="w-full rounded-lg border border-white/10 bg-[#171717] px-4 py-3.5 text-gray-400 outline-none focus:border-[#e50914]"
              >

                <option value="">
                  Select Fitness Goal
                </option>

                <option value="Weight Loss">
                  Weight Loss
                </option>

                <option value="Muscle Building">
                  Muscle Building
                </option>

                <option value="Strength Training">
                  Strength Training
                </option>

                <option value="General Fitness">
                  General Fitness
                </option>

                <option value="Personal Training">
                  Personal Training
                </option>

              </select>

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className="w-full resize-none rounded-lg border border-white/10 bg-[#171717] px-4 py-3.5 text-white outline-none placeholder:text-gray-600 focus:border-[#e50914]"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#e50914] px-6 py-4 font-bold transition hover:bg-red-700"
              >

                <Send size={18} />

                SEND ENQUIRY ON WHATSAPP

              </button>

            </div>

          </form>

        </div>

      </div>

    </section>
  );
}