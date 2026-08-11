"use client";

import { FormEvent, useState } from "react";

export default function EarlyAccess() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="early-access" className="scroll-mt-20 px-5 pb-20 sm:px-6 sm:pb-28">
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-pink-100/80 bg-gradient-to-br from-white via-white to-purple-50/50 p-8 shadow-2xl shadow-pink-100/50 sm:p-12 lg:p-14">
        {/* Decorative gradients */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-pink-200/50 to-purple-200/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-gradient-to-tr from-purple-100/60 to-pink-100/40 blur-3xl"
        />
        {/* Molecule motif */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-8 top-8 opacity-20"
        >
          <svg
            className="h-16 w-16 text-purple-400"
            fill="none"
            viewBox="0 0 64 64"
            stroke="currentColor"
            strokeWidth={1}
          >
            <circle cx="20" cy="32" r="6" />
            <circle cx="44" cy="32" r="6" />
            <circle cx="32" cy="16" r="4" />
            <path d="M26 32h12M32 20v8M24 28l6-8M40 28l-6-8" />
          </svg>
        </div>

        <div className="relative text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/80 px-4 py-1.5 text-sm font-medium text-purple-900">
            <span className="text-base">🇬🇷</span>
            Launching first in Greece
          </p>

          <h2 className="font-display text-3xl font-semibold tracking-tight text-purple-950 sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Be one of the first to find your{" "}
            <span className="gradient-text">chemistry.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-purple-900/85 sm:text-lg">
            KEMIKL is launching first in Greece. Join the early-access list and
            we&apos;ll invite you when your area opens.
          </p>

          {submitted ? (
            <div className="mx-auto mt-10 max-w-md rounded-2xl border border-green-200 bg-green-50 px-6 py-6 text-green-900">
              <p className="text-lg font-semibold">You&apos;re on the list!</p>
              <p className="mt-2 text-base text-green-800/85">
                Thanks for signing up. We&apos;ll be in touch when early access
                opens in your area.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="min-w-0 flex-1 rounded-full border border-pink-200 bg-white px-5 py-4 text-base text-purple-950 placeholder:text-purple-400 outline-none transition-all focus:border-purple-300 focus:ring-2 focus:ring-purple-200/60"
              />
              <button
                type="submit"
                className="gradient-button shrink-0 rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg shadow-pink-200/50 transition-all hover:shadow-xl hover:shadow-purple-200/50"
              >
                Get Early Access
              </button>
            </form>
          )}

          <p className="mt-6 text-sm font-medium text-purple-900/75">
            No payment required.
          </p>
          <p className="mt-2 text-sm text-purple-800/65">
            Early access invitations will be sent gradually.
          </p>
        </div>
      </div>
    </section>
  );
}
