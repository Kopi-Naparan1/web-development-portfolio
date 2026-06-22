"use client";

import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

import { PrimaryButton } from "../ui/Buttons";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
const socialLinks = [
  {
    label: "Twitter",
    href: "https://twitter.com/yourhandle",
    icon: <FaTwitter />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourhandle",
    icon: <FaLinkedin />,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/yourhandle",
    icon: <FaFacebook />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/yourhandle",
    icon: <FaInstagram />,
  },
  {
    label: "GitHub",
    href: "https://github.com/yourhandle",
    icon: <FaGithub />,
  },
];

export default function Footer() {
  const pathname = usePathname();
  return (
    <div className="footerMobile md:footer bg-secondary/50 md:bg-secondary/40  py-2">
      <h3 className="text-[18] md:text-[20px] font-semibold">
        Kopi Anan Naparan
      </h3>
      <p className="text-[10px] ">Web Developer & Designer</p>
      <div className="flex flex-row gap-0 md:gap-4 items-center md:justify-center justify-evenly mt-2 w-full">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.href} href={link.href}>
              <p
                className={`text-[12px] font-medium rounded-lg  hover:border-secondary px-1.5 py-0.5 transition-colors ease-in-out duration-200 cursor-pointer ${isActive ? "border-2 border-secondary" : "border border-transparent"}`}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="flex flex-row gap-6 items-center justify-center mt-2 w-full">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-subtext text-[20px] hover:text-primary transition-colors duration-150 "
          >
            {social.icon}
          </a>
        ))}
      </div>
      <p className="text-[10px] text-subtext/80 mt-6">2026 @ copyrights</p>
    </div>
  );
}
