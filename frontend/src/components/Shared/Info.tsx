import { TypeInfo } from "@/types/typeInfo";
import Image from "next/image";

export type InfoProps = {
  info: TypeInfo;
};

export function Info({ info }: InfoProps) {
  const { button, headline, image, text, reversed } = info.attributes;

  return (
    <section className={`info ${reversed ? "info--reversed" : ""}`}>
      <div className="info__image">
        <Image src={image.data.attributes.url} alt="Info" fill />
      </div>

      <div className="info__text">
        <h2 className="info__headline">{headline}</h2>
        <div
          className="info__description"
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>

        {button && (
          <button className={`btn btn--small btn--${button.color}`}>
            {button.text}
          </button>
        )}
      </div>
    </section>
  );
}
