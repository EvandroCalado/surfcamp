import Image from "next/image";
import Link from "next/link";

export type SectionHeroProps = {
  image: string;
  headline: React.ReactNode;
  theme?: string;
};

export function SectionHero({
  image = "/assets/hero-home.jpeg",
  headline,
  theme = "turquoise",
}: SectionHeroProps) {
  return (
    <section className="hero">
      <div className="hero__background">
        <Image src={image} alt="Hero image" width={1080} height={720} />
      </div>

      <div className={`hero__headline hero__headline--${theme}`}>
        {headline}
      </div>

      <button className={`btn btn--medium btn--${theme}`}>
        <Link href={"/events"}>Reservar</Link>
      </button>

      <Image
        className={`hero__logo hero__logo--${theme}`}
        src={"/assets/logo.svg"}
        alt="Logo"
        width={150}
        height={150}
      />
    </section>
  );
}
