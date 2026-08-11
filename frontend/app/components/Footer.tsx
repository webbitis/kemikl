export default function Footer() {
  return (
    <footer className="mt-auto border-t border-pink-100/80 bg-white/60 px-5 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-xl font-semibold">
            <span className="gradient-text">KEMIKL</span>
          </p>
          <p className="mt-1 text-base text-purple-900/75">
            Find your chemistry.
          </p>
          <p className="mt-2 inline-flex rounded-full border border-pink-100 bg-pink-50/80 px-3 py-0.5 text-xs font-medium text-purple-800/80">
            Pre-launch
          </p>
        </div>
        <p className="text-sm text-purple-800/65">
          &copy; 2026 KEMIKL
        </p>
      </div>
    </footer>
  );
}
