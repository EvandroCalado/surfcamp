import { EventClass } from "@/api/event";
import { SignupForm } from "@/components/Events";

type ParamsProps = {
  params: {
    slug: string;
  };
};

const eventCtrl = new EventClass();

export default async function Events({ params }: ParamsProps) {
  const { slug } = params;
  const event = await eventCtrl.getBySlug(slug);

  if (!event) return null;

  return (
    <main>
      <SignupForm event={event} />
    </main>
  );
}

export const generateStaticParams = async () => {
  const events = await eventCtrl.getAll();

  return events.map((event) => ({
    slug: event.attributes.slug,
  }));
};
