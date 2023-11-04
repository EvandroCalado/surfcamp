"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "o acampamento.",
    href: "/",
  },
  {
    label: "a experiência.",
    href: "/experience",
  },
  {
    label: "o blog.",
    href: "/blog",
  },
];

export function Header() {
  const path = usePathname();

  return (
    <header
      className={`header ${path === "/experience" ? "header--light" : ""}`}
    >
      <Image
        className="header__logo"
        src={"/assets/logo.svg"}
        alt="Logo"
        width={100}
        height={100}
      />

      <ul className="header__nav">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <Link href={"/events"}>
        <button className="btn btn--black btn--small">Reservar</button>
      </Link>
    </header>
  );
}
