"use client";
import { useState, useEffect, useRef } from "react";
export function Navigation() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <>
      <button
        ref={button}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close ×" : "Menu +"}
      </button>
      <nav
        id="primary-nav"
        className={open ? "nav open" : "nav"}
        aria-label="Main navigation"
      >
        {[
          ["About", "/about"],
          ["Focus areas", "/focus-areas"],
          ["Transparency", "/transparency"],
          ["Contact", "/contact"],
          ["Donate", "/contact#donate"],
        ].map(([label, id]) => (
          <a
            key={id}
            className={label === "Donate" ? "nav-cta" : ""}
            href={id}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
    </>
  );
}
