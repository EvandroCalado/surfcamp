import Image from "next/image";
import Link from "next/link";

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
  return (
    <header className="header">
      <Image
        className="header__logo"
        src={"/assets/logo.svg"}
        alt="Logo"
        width={60}
        height={60}
      />

      <ul className="header__nav">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <Link href={"/events"}>
        <button className="btn btn--black btn--small">Reserve já</button>
      </Link>
    </header>
  );
}
