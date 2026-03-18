"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Srinivasa Kalyana", href: "#kalyana" },
  { name: "Programs", href: "#programs" },
  { name: "Gallery", href: "#gallery" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-burgundy-deep/97 backdrop-blur-md shadow-lg shadow-burgundy-deep/20 py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      {/* Top ornamental line */}
      {!scrolled && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-temple-gold/40 to-transparent" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-full bg-white/90 p-[2px] border border-temple-gold/60 group-hover:border-temple-gold transition-colors overflow-hidden">
                <Image
                  src="/srivari-logo.png"
                  alt="Srivari Foundation"
                  width={44}
                  height={44}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-white/10 blur-md -z-10" />
            </div>
            <div>
              <div className="text-white font-display text-xl font-semibold tracking-wide leading-tight">
                Srivari Foundation
              </div>
              <div className="text-temple-gold/50 text-[9px] tracking-[0.25em] uppercase font-body">
                Dharma Prachara
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-[13px] text-white/70 hover:text-temple-gold-light transition-colors font-body tracking-wide relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-temple-gold/60 group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-5 px-6 py-2.5 border border-temple-gold/50 text-temple-gold-light text-[13px] font-medium rounded-sm hover:bg-temple-gold/10 transition-all tracking-wider uppercase font-body"
            >
              Invite Us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white/80 p-2 hover:text-temple-gold-light transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden mt-4 pb-6 border-t border-temple-gold/10">
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-white/70 hover:text-temple-gold-light hover:bg-white/5 transition-colors font-body text-sm"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mx-4 mt-3 px-5 py-3 border border-temple-gold/40 text-temple-gold-light text-sm font-medium text-center hover:bg-temple-gold/10 transition-colors tracking-wider uppercase"
              >
                Invite Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
