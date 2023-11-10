import { ENDPOINTS } from "@/utils/constants";

export class PasticipantClass {
  async create(formData = {}, event = 1) {
    try {
      const response = await fetch(ENDPOINTS.PARTICIPANT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            ...formData,
            events: event,
          },
        }),
      });

      return response;
    } catch (error) {
      console.log("Partipants", error);
    }
  }
}
