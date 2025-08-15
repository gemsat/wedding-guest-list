"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<{ name: string; table: number } | null>(
    null
  );

  const handleFind = () => {
    if (!query.trim()) return;
    setResult({ name: query.trim(), table: 12 });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="h-14 flex items-center justify-center">
          <div className="text-lg tracking-wide font-serif">
            💍 <span className="text-[#E88B8B]">Find Your Seat</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative w-full">
        <div className="relative h-96 sm:h-[32rem] w-full overflow-hidden">
          <Image
            src="/OIP.jpeg"
            alt="Wedding celebration"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/1 via-white/10 to-white/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-[#000] bg-white/20 text-3xl sm:text-4xl font-serif drop-shadow-md">
              “Welcome to our special day”
            </h1>
            <p className="mt-2 text-[#111] bg-white/20 text-base sm:text-lg">
              Find your table in seconds
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="px-4 -translate-y-10 relative z-10">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white shadow-lg p-3 border border-[#f3e9e9]">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 shrink-0 rounded-full bg-[#FFE5E5] grid place-items-center">
              <span className="text-[#E88B8B] text-lg">🔎</span>
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleFind()}
              placeholder="Enter your name or code"
              className="w-full bg-transparent outline-none text-base placeholder-neutral-400"
            />
            <button
              type="button"
              onClick={handleFind}
              className="shrink-0 rounded-full bg-[#E88B8B] text-white px-4 py-2 text-sm font-medium hover:bg-[#d97a7a] transition"
            >
              Find
            </button>
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="px-4 mt-4 flex-1">
        {result ? (
          <div className="mx-auto w-full max-w-md rounded-2xl bg-white shadow-xl p-6 text-center border border-[#f3e9e9]">
            <div className="text-sm text-[#666]">Guest</div>
            <h2 className="mt-1 text-xl font-semibold text-[#333]">
              {result.name}
            </h2>

            <div className="mt-5 text-[#666] text-sm">Your table</div>
            <div className="mt-1 text-6xl font-serif text-[#E88B8B] leading-none">
              #{result.table}
            </div>

            <div className="mt-4 text-xs text-[#888]">
              Near the dance floor • Left aisle
            </div>

            <button className="mt-6 w-full rounded-full border border-[#f3e9e9] bg-[#FFE5E5] text-[#E88B8B] px-5 py-3 text-sm font-medium hover:bg-[#ffdcdc] transition">
              View Table Map
            </button>
          </div>
        ) : (
          <div className="mx-auto w-full max-w-md text-center text-[#666] text-sm">
            Tip: try your full name as printed on the invitation.
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-10 mb-6 text-center text-xs text-[#888]">
        With ❤️ for Sarah &amp; John
      </footer>
    </div>
  );
}
