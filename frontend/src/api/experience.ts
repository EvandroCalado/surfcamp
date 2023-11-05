import { TypeInfo } from "@/types/typeInfo";

export class ExperienceClass {
  async get() {
    const response = await fetch(
      `http://127.0.0.1:1337/api/experience-page?populate=deep`,
      {
        cache: "no-store",
      }
    );

    const result: TypeInfo = await response.json();

    if (response.status !== 200) throw result;

    return result.data;
  }
}
