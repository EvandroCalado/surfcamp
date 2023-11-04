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
  {
    label: "os eventos.",
    href: "/events",
  },
];

const footerPolicies = [
  {
    label: "Imprimir",
    href: "/imprint",
  },
  {
    label: "Termos e Condições",
    href: "/",
  },
  {
    label: "Proteção de Dados",
    href: "/data-protection",
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <Image
          className="footer__logo"
          src={"/assets/logo.svg"}
          alt="Logo"
          width={60}
          height={60}
        />

        <ul className="footer__links">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>
                <h5>{item.label}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="footer__policies">
        <ul className="footer__policies-nav">
          {footerPolicies.map((item) => (
            <li key={item.label}>
              <p className="copy">{item.label}</p>
            </li>
          ))}
        </ul>

        <p className="copy">© Surfcamp - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
