import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14 lg:pb-28 lg:pt-16">
      {/* Background atmosphere */}
      <div
        aria-hidden
        className="animate-pulse-soft pointer-events-none absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-pink-200/50 to-purple-100/30 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-gradient-to-bl from-purple-200/40 to-pink-100/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-pink-200/60 to-transparent"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left column — copy */}
        <div className="text-center lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-white/80 px-4 py-1.5 text-sm font-medium text-purple-900 shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
            KEMIKL is currently in pre-launch
          </div>

          <h1 className="font-display text-[2.75rem] font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.25rem]">
            Find your{" "}
            <span className="gradient-text">chemistry.</span>
          </h1>

          <p className="mt-5 text-xl font-medium leading-snug text-purple-950 sm:text-2xl">
            Dating shouldn&apos;t feel like an endless game of swiping.
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-purple-900/85 sm:text-lg lg:mx-0 lg:max-w-none">
            KEMIKL is a new way to meet people based on real compatibility —
            personality, interests, values and the things that actually make two
            people click.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 lg:items-start">
            <a
              href="#early-access"
              className="gradient-button inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white shadow-xl shadow-pink-300/35 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-300/35"
            >
              Get Early Access
            </a>
            <p className="text-sm font-medium text-purple-800/75 sm:text-base">
              Early access &bull; Free to join &bull; Launching first in Greece
            </p>
          </div>
        </div>

        {/* Right column — phone mockup */}
        <div className="flex justify-center lg:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
