import { ENDPOINTS } from "@/utils/constants";

export class Subscribe {
  async postSubscribe(email: string) {
    try {
      const response = await fetch(`${ENDPOINTS.SUBSCRIBE}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: { email } }),
      });

      return response;
    } catch (error) {
      console.log("Subscribe", error);
    }
  }
}
