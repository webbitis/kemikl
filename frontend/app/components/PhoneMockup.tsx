export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px]">
      {/* Floating match badge */}
      <div
        aria-hidden
        className="animate-float absolute -right-2 top-8 z-10 rounded-2xl border border-white/80 bg-white/95 px-4 py-2.5 shadow-lg shadow-purple-200/50 backdrop-blur-sm sm:-right-6"
      >
        <p className="text-sm font-semibold text-purple-950">
          It&apos;s a match!
        </p>
        <div className="mt-1 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
          <span className="text-xs font-medium text-purple-700">
            92% Chemistry
          </span>
        </div>
      </div>

      {/* Chemistry orbit decoration */}
      <div
        aria-hidden
        className="animate-pulse-soft pointer-events-none absolute -left-8 bottom-16 h-24 w-24 rounded-full border border-pink-200/40"
      />
      <div
        aria-hidden
        className="animate-float-delayed pointer-events-none absolute -right-10 bottom-4 h-16 w-16 rounded-full bg-gradient-to-br from-purple-200/30 to-pink-200/20 blur-xl"
      />

      {/* Phone frame */}
      <div className="phone-frame relative overflow-hidden rounded-[2.75rem] border-[6px] border-purple-950/90 bg-purple-950/90 p-2 shadow-2xl shadow-purple-300/30">
        {/* Dynamic island */}
        <div className="absolute left-1/2 top-3 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-purple-950/90" />

        {/* Screen */}
        <div className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-b from-[#faf5ff] to-[#fdf2f8]">
          {/* App header bar */}
          <div className="flex items-center justify-between px-5 pb-2 pt-10">
            <span className="text-xs font-semibold tracking-wide text-purple-900/70">
              KEMIKL
            </span>
            <div className="flex gap-1">
              <span className="h-1 w-1 rounded-full bg-purple-300" />
              <span className="h-1 w-1 rounded-full bg-pink-300" />
              <span className="h-1 w-1 rounded-full bg-purple-300" />
            </div>
          </div>

          {/* Profile card */}
          <div className="mx-3 mb-4 overflow-hidden rounded-3xl border border-white/80 bg-white shadow-lg shadow-pink-100/60">
            {/* Avatar area */}
            <div className="relative aspect-[4/5] bg-gradient-to-br from-pink-200 via-purple-100 to-violet-200">
              {/* Abstract avatar silhouette */}
              <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
                <div className="h-[85%] w-[70%] rounded-t-full bg-gradient-to-t from-purple-300/60 via-pink-200/50 to-transparent" />
              </div>
              <div className="absolute left-1/2 top-[28%] h-20 w-20 -translate-x-1/2 rounded-full bg-gradient-to-br from-pink-100 to-purple-200 shadow-inner" />

              {/* Chemistry score */}
              <div className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1.5 shadow-md backdrop-blur-sm">
                <span className="text-xs font-bold text-transparent bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text">
                  92% Chemistry
                </span>
              </div>
            </div>

            {/* Profile info */}
            <div className="p-4">
              <div className="flex items-baseline gap-2">
                <h3 className="text-lg font-semibold text-purple-950">Sofia</h3>
                <span className="text-base text-purple-800/70">29</span>
              </div>
              <p className="mt-0.5 flex items-center gap-1 text-sm text-purple-800/80">
                <svg
                  className="h-3.5 w-3.5 text-pink-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Athens
              </p>

              {/* Interest chips */}
              <div className="mt-3 flex flex-wrap gap-2">
                {["Travel", "Coffee", "Movies"].map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-pink-100 bg-gradient-to-r from-pink-50 to-purple-50 px-3 py-1 text-xs font-medium text-purple-900"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom action hint */}
          <div className="mx-3 mb-5 flex justify-center gap-3">
            <div className="h-11 w-11 rounded-full border-2 border-purple-200/80 bg-white/80" />
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500 shadow-md shadow-pink-300/40">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <div className="h-11 w-11 rounded-full border-2 border-purple-200/80 bg-white/80" />
          </div>
        </div>
      </div>
    </div>
  );
}
