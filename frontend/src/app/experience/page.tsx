import { ExperienceClass } from "@/api/experience";
import { Info, SectionHero } from "@/components/Shared";

const exoerienceCtrl = new ExperienceClass();

export default async function Experience() {
  const data = await exoerienceCtrl.get();
  const { section_hero, infos } = data.attributes;

  return (
    <main>
      <SectionHero section_hero={section_hero} />

      {infos.data.map((info) => (
        <Info key={info.id} info={info} />
      ))}
    </main>
  );
}
