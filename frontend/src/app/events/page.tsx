import { EventClass } from "@/api/event";
import { EventsGrid } from "@/components/Events";

const eventCtrl = new EventClass();

export default async function Events() {
  const events = await eventCtrl.getAll();

  if (!events) return null;

  return (
    <main>
      <EventsGrid events={events} />
    </main>
  );
}
