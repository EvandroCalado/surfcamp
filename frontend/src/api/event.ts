import { TypeEvents } from "@/types/typeEvent";
import { ENDPOINTS } from "@/utils/constants";

export class EventClass {
  async getAll() {
    try {
      const response = await fetch(ENDPOINTS.EVENT, {
        next: {
          revalidate: 3600,
        },
      });

      const result: TypeEvents = await response.json();

      if (response.status !== 200) throw result;

      return result.data;
    } catch (error) {
      console.log("Event", error);
      return [];
    }
  }

  async getBySlug(slug: string) {
    const filter = `filters[slug][$eq]=${slug}`;

    try {
      const response = await fetch(`${ENDPOINTS.EVENT}&${filter}`, {
        next: {
          revalidate: 3600,
        },
      });

      const result: TypeEvents = await response.json();

      if (response.status !== 200) throw result;

      if (!result.data) return null;

      return result.data[0];
    } catch (error) {
      console.log("Blog", error);
    }
  }
}
