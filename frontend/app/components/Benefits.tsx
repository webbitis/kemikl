const benefits = [
  {
    title: "Real compatibility",
    description:
      "Go beyond surface-level profiles. KEMIKL understands personality, values and interests — the things that actually predict a great match.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    ),
  },
  {
    title: "Smarter matching",
    description:
      "AI-powered matching that learns what makes you click — surfacing people you're genuinely likely to connect with.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
        />
      </svg>
    ),
  },
  {
    title: "Better conversations",
    description:
      "Start with context, not cold openers. KEMIKL gives you shared ground to talk about — so the first message feels natural, not awkward.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
        />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section className="px-5 pb-20 sm:px-6 sm:pb-28">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3 lg:gap-8">
        {benefits.map((benefit) => (
          <article
            key={benefit.title}
            className="group rounded-3xl border border-pink-100 bg-white p-8 shadow-md shadow-pink-100/40 transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100/50 sm:p-10"
          >
            <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 p-3.5 text-purple-600 transition-colors group-hover:from-pink-200 group-hover:to-purple-200">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold text-purple-950 sm:text-2xl">
              {benefit.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-purple-900/80">
              {benefit.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
