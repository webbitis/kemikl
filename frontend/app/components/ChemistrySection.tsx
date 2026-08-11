export default function ChemistrySection() {
  return (
    <section className="relative px-5 py-20 sm:px-6 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-purple-200/50 to-transparent"
      />
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-purple-950 sm:text-4xl lg:text-5xl">
          Less random.{" "}
          <span className="gradient-text">More chemistry.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-purple-900/85 sm:text-lg">
          Most apps match you on looks alone. KEMIKL looks deeper — at who you
          are, what you care about, and the subtle signals that suggest a real
          spark.
        </p>
      </div>
    </section>
  );
}
