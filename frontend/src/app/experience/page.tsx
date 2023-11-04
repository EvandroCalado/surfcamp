import { Info, SectionHero } from "@/components/Shared";

export default function Experience() {
  const strapiHeadline = (
    <>
      <h1>entube.</h1>
      <h1>sua.</h1>
      <h1>felicidade.</h1>
    </>
  );

  const strapiInfo = {
    headline: "a experiência.",
    text: (
      <p className="copy">
        At Sam’s Surfcamp, we invite you to embark on an unforgettable surfing
        adventure. Nestled in the heart of [Location] our surf camp offers an
        exhilarating experience for beginners, intermediate surfers, and
        seasoned wave riders alike. Dive into the world of surfing with our
        expert instructors who have years of experience and a deep passion for
        the sport. Whether you’re a first-time surfer looking to catch your
        first wave or a seasoned pro seeking to enhance your skills, our
        dedicated team is here to guide you every step of the way. Immerse
        yourself in the natural beauty of our surf camp’s surroundings. Picture
        yourself waking up to the sound of crashing waves and feeling the warm
        sand beneath your feet. With pristine beaches and a vibrant coastal
        atmosphere, [Location] sets the perfect stage for your surf adventure.
      </p>
    ),
    button: (
      <button className="btn btn--medium btn--turquoise">Reservar</button>
    ),
    reversed: false,
  };

  return (
    <main>
      <SectionHero
        image="/assets/hero-experience.jpeg"
        theme="orange"
        headline={strapiHeadline}
      />

      <Info info={strapiInfo} />
      <Info info={{ ...strapiInfo, reversed: true }} />
      <Info info={strapiInfo} />
    </main>
  );
}
