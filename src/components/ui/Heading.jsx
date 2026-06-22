"use client";

import logo from "../../../public/logo.png";
import { PrimaryButton } from "../ui/Buttons";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import { projects } from "../../data/project";
const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Works", href: "/#works" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

function DesktopWorksLinks() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link></Link>
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-background border-2 border-secondary rounded-lg shadow-lg flex flex-col py-2 min-w-[160px] transition-all duration-200 ${
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

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div className="md:hidden ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[20px] relative z-50"
      >
        {" "}
        {isOpen ? <HiX /> : <HiMenu />}
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-background text-heading flex flex-col items-center  justify-center gap-[4vh] z-40">
          {navLinks.map((link) => (
            <Link
              className="flex items-center border-2 border-secondary  justify-center rounded-lg hover:border-primary/80 transition-colors duration-150 ease-in-out  w-[50%] px-2 py-1 "
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <PrimaryButton></PrimaryButton>
        </div>
      )}
    </div>
  );
}

export default function Heading() {
  const pathname = usePathname();
  return (
    <div className="headerMobile md:header bg-secondary/20 ">
      <div className="  md:flex items-center">
        <div className="flex flex-row gap-1  ">
          <div className="relative w-[30px] h-[30px] md:w-[46px] md:h-[46px] ">
            <Image
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 58px"
              src={logo}
              alt="Logo"
            />
          </div>

          <div className="flex flex-col justify-center group cursor-pointer">
            <p className="md:headerName headerNameMobile group-hover:text-heading/70 transition-colors duration-150">
              Kopi Anan
            </p>
            <p className="md:headerName headerNameMobile  group-hover:text-heading/70 transition-colors duration-150">
              Naparan
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-row gap-4 items-center">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.href} href={link.href}>
              <p
                className={`text-[14px] font-medium rounded-lg  hover:border-secondary px-1.5 py-0.5 transition-colors ease-in-out duration-200 cursor-pointer ${isActive ? "border-2 border-secondary" : "border border-transparent"}`}
              >
                {link.label}
              </p>
            </Link>
          );
        })}

        <PrimaryButton textSize="14px" className="self-center " mt="0" />
      </div>
      <MobileMenu></MobileMenu>
    </div>
  );
}
