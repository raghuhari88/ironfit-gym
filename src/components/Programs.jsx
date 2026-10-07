import SectionTitle from "./SectionTitle";
import { InfoCard } from "./Card";
import { programs } from "../data";

export default function Programs() {

  return (
    <section
      id="programs"
      className="bg-[#080808] py-24"
    >

      <div className="mx-auto w-[92%] max-w-[1200px]">

        <SectionTitle
          eyebrow="What We Offer"
          title="Our"
          highlight="Programs"
          subtitle="Choose your goal. Follow the plan. See the results."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {programs.map((program) => (

            <InfoCard
              key={program.title}
              icon={program.icon}
              title={program.title}
              description={program.description}
            />

          ))}

        </div>

      </div>

    </section>
  );
}