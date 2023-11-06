import { TypeInfo } from "@/types/typeInfo";
import { ENDPOINTS } from "@/utils/constants";

export class InfoClass {
  async get() {
    try {
      const response = await fetch(ENDPOINTS.INFO, {
        next: {
          revalidate: 3600,
        },
      });

      const result: TypeInfo = await response.json();

      if (response.status !== 200) throw result;

      return result.data;
    } catch (error) {
      console.log("Info", error);
    }
  }
}
