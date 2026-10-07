export default function SectionTitle({
  eyebrow,
  title,
  highlight,
  subtitle,
}) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">

      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-[#e50914]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
        {title}{" "}

        {highlight && (
          <span className="text-[#e50914]">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base leading-7 text-gray-400 sm:text-lg">
          {subtitle}
        </p>
      )}

    </div>
  );
}