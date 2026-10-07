export function InfoCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="group rounded-2xl border border-[#252525] bg-[#111] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#e50914]/50">

      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-[#1b1b1b] text-3xl transition group-hover:bg-[#e50914]">
        {icon}
      </div>

      <h3 className="mb-3 text-xl font-bold">
        {title}
      </h3>

      <p className="leading-7 text-gray-400">
        {description}
      </p>

    </div>
  );
}

export function Stat({
  value,
  label,
}) {
  return (
    <div className="rounded-xl border border-[#252525] bg-[#151515] p-5">

      <div className="text-3xl font-black text-[#e50914]">
        {value}
      </div>

      <div className="mt-1 text-sm text-gray-400">
        {label}
      </div>

    </div>
  );
}