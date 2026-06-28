"use client";

import logo from "../../../public/logo.png";
import { PrimaryButton } from "../ui/Buttons";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { projects } from "../../data/project";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Works", href: "/#works" },
  { label: "About", href: "/#about" },
];

function DesktopWorksDropdown() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={"#works"}
        className="text-[14px] font-medium rounded-lg px-1.5 py-0.5 border border-transparent hover:border-secondary transition-colors ease-in-out duration-200 cursor-pointer"
      >
        Works
      </Link>
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 bg-background border-2 border-secondary rounded-lg shadow-lg flex flex-col py-2 min-w-[160px] transition-all duration-200 ${
          isHovered
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/case-study/${project.slug}`}
            className="text-[13px] px-4 py-1.5 hover:bg-secondary/30 transition-colors duration-150"
          >
            {project.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileMenuOverlay({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-background text-heading flex flex-col items-center justify-center gap-8 z-[55] transition-opacity duration-200 md:hidden ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Close button inside overlay so it's always above it */}
      <button
        onClick={onClose}
        aria-label="Close menu"
        className="absolute top-4 right-4 text-[24px]"
      >
        <HiX />
      </button>

      {navLinks.map((link) =>
        link.label === "Works" ? (
          <div
            key={link.href}
            className="flex flex-col items-center gap-2 w-[50%]"
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="text-[16px] flex items-center justify-center border-2 border-secondary rounded-lg hover:border-primary/80 transition-colors duration-150 w-full px-2 py-2"
            >
              {link.label}
            </Link>
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/case-study/${project.slug}`}
                onClick={onClose}
                className="text-[13px] text-foreground/40 hover:text-foreground/70 transition-colors duration-150"
              >
                {project.title}
              </Link>
            ))}
          </div>
        ) : (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-[16px] flex items-center justify-center border-2 border-secondary rounded-lg hover:border-primary/80 transition-colors duration-150 w-[50%] px-2 py-2"
          >
            {link.label}
          </Link>
        ),
      )}
      <PrimaryButton mt="0" />
    </div>
  );
}

export default function Heading() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }
  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <>
      {/* Nav bar — sticky, always on top */}
      <div className="headerMobile md:header bg-secondary/20 backdrop-blur-md sticky top-0 z-50 border-b border-secondary/20">
        {/* Logo + name */}
        <div className="flex items-center">
          <div className="flex flex-row gap-1">
            <div className="relative w-[30px] h-[30px] md:w-[46px] md:h-[46px]">
              <Image
                fill
                className="object-contain"
                sizes="(max-width: 768px) 46px, 58px"
                src={logo}
                alt="Logo"
              />
            </div>
            <div className="flex flex-col justify-center group cursor-pointer">
              <p className="md:headerName headerNameMobile group-hover:text-heading/70 transition-colors duration-150">
                Kopi Anan
              </p>
              <p className="md:headerName headerNameMobile group-hover:text-heading/70 transition-colors duration-150">
                Naparan
              </p>
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex flex-row gap-4 items-center">
          {navLinks.map((link) => {
            const isActive =
              link.href === `/${pathname}` ||
              link.href === `/#${pathname.split("/").pop()}`;
            return link.label === "Works" ? (
              <DesktopWorksDropdown key={link.href} />
            ) : (
              <Link key={link.href} href={link.href}>
                <p
                  className={`text-[14px] font-medium rounded-lg px-1.5 py-0.5 transition-colors ease-in-out duration-200 cursor-pointer ${
                    isActive
                      ? "border-2 border-secondary"
                      : "border border-transparent hover:border-secondary"
                  }`}
                >
                  {link.label}
                </p>
              </Link>
            );
          })}
          <PrimaryButton textSize="14px" mt="0" className="self-center" />
        </div>

        {/* Hamburger — above the overlay */}
        <button
          onClick={toggleMenu}
          aria-label="Open menu"
          className="md:hidden text-[20px] relative"
        >
          <HiMenu />
        </button>
      </div>

      {/* Mobile overlay — sibling to nav, not nested inside it */}
      <MobileMenuOverlay isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
