import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-pink-100/60 bg-[#fdf8fb]/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2.5 sm:px-6 sm:py-3">
        <a href="#" className="shrink-0">
          <Image
            src="/kemikl-logo.png"
            alt="KEMIKL — Find your chemistry"
            width={1536}
            height={1024}
            className="h-auto w-[150px] sm:w-[200px]"
            priority
          />
        </a>
        <a
          href="#early-access"
          className="gradient-button inline-flex shrink-0 items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white shadow-md shadow-pink-200/40 transition-all hover:shadow-lg hover:shadow-purple-200/50 sm:px-5 sm:py-2.5"
        >
          Get Early Access
        </a>
      </div>
    </header>
  );
}
