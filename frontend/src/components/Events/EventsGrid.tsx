import { TypeEvent } from "@/types/typeEvent";
import EventCard from "./EventCard";

export type EventsGridProps = {
  events: TypeEvent[];
};

export function EventsGrid({ events }: EventsGridProps) {
  return (
    <section className="events-grid">
      <h3>Próximos Eventos</h3>

      <div className="events-grid__container">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
