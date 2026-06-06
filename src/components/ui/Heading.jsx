"use client";

import logo from "../../../public/logo.png";
import { PrimaryButton } from "../ui/Buttons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Heading() {
  const pathname = usePathname();
  return (
    <div className="md:header hidden">
      <div>
        <div className="flex flex-row gap-1  ">
          <div className="relative w-[58px] h-[58px] ">
            <Image
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 58px"
              src={logo}
              alt="Logo"
            />
          </div>

          <div className="flex flex-col">
            <p className="headerName">Kopi Anan</p>
            <p className="headerName">Naparan</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.href} href={link.href}>
              <p
                className={`text-[20px] font-medium rounded-2xl  hover:border-secondary px-1.5 py-0.5 transition-colors ease-in-out duration-200 cursor-pointer ${isActive ? "border-2 border-secondary" : "border border-transparent"}`}
              >
                {link.label}
              </p>
            </Link>
          );
        })}

        <PrimaryButton textSize="20px" className="self-center " mt="0" />
      </div>
    </div>
  );
}
