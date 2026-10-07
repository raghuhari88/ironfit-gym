import { useState } from "react";

import {
  Menu,
  X,
  Dumbbell,
} from "lucide-react";

import { navItems } from "../data";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">

      <div className="mx-auto flex h-[76px] w-[92%] max-w-[1200px] items-center justify-between">

        {/* Logo */}

        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2"
        >

          <Dumbbell
            size={28}
            className="text-[#e50914]"
          />

          <div className="text-xl font-black tracking-wider">
            IRON
            <span className="text-[#e50914]">
              FIT
            </span>
          </div>

        </a>

        {/* Desktop Nav */}

        <nav className="hidden items-center gap-8 md:flex">

          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-gray-300 transition hover:text-[#e50914]"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-lg bg-[#e50914] px-5 py-2.5 text-sm font-bold transition hover:bg-red-700"
          >
            JOIN NOW
          </a>

        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
        >

          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}

        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="border-t border-white/10 bg-black md:hidden">

          <nav className="mx-auto flex w-[92%] flex-col py-4">

            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-4 text-gray-300"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 rounded-lg bg-[#e50914] px-5 py-3 text-center font-bold"
            >
              JOIN NOW
            </a>

          </nav>

        </div>
      )}

    </header>
  );
}