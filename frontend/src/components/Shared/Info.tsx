import Image from "next/image";

export type InfoProps = {
  info: {
    headline: string;
    text: React.ReactNode;
    button: React.ReactNode;
    reversed: boolean;
  };
};

export function Info({ info }: InfoProps) {
  return (
    <section className={`info ${info.reversed ? "info--reversed" : ""}`}>
      <div className="info__image">
        <Image src={"/info-blocks/rectangle.png"} alt="Info" fill />
      </div>

      <div className="info__text">
        <h2 className="info__headline">{info.headline}</h2>
        {info.text}

        {info.button}
      </div>
    </section>
  );
}
