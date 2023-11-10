import { TypeEvent } from "@/types/typeEvent";
import { formatDate } from "@/utils/format-date";
import Image from "next/image";
import Link from "next/link";

export type EventCardProps = {
  event: TypeEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link href={`/events/${event.attributes.slug}`} className="event-card">
      <div className="event-card__image">
        <Image
          src={event.attributes.image.data.attributes.url}
          alt={event.attributes.name}
          fill
        />
      </div>

      <div className="event-card__content">
        <h5 className="event-card__content-headline">
          {event.attributes.name}
        </h5>

        <div>
          <p className="copysmall bold">
            {formatDate(event.attributes.startingDate)}
          </p>
          <p className="copy-small">
            Valores a partir de R$:{event.attributes.SharedPrice}
          </p>
        </div>
      </div>
    </Link>
  );
}
