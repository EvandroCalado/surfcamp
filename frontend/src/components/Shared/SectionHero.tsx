import { TypeSectionHero } from "@/types/typeInfo";
import Image from "next/image";
import Link from "next/link";

export type SectionHeroProps = {
  section_hero: TypeSectionHero;
};

export function SectionHero({ section_hero }: SectionHeroProps) {
  const { image, button, headline } = section_hero.data.attributes;

  return (
    <section className="hero">
      <div className="hero__background">
        <Image
          src={image.data.attributes.url}
          alt="Hero image"
          width={1080}
          height={720}
        />
      </div>

      <div
        className={`hero__headline hero__headline--${button.color}`}
        dangerouslySetInnerHTML={{
          __html: headline,
        }}
      ></div>

      <button className={`btn btn--medium btn--${button.color}`}>
        <Link href={"/events"}>Reservar</Link>
      </button>

      <Image
        className={`hero__logo hero__logo--${button.color}`}
        src={"/assets/logo.svg"}
        alt="Logo"
        width={150}
        height={150}
      />
    </section>
  );
}
