import { ExperienceClass } from "@/api/experience";
import { Info, SectionHero } from "@/components/Shared";

const experienceCtrl = new ExperienceClass();

export default async function Experience() {
  const experience = await experienceCtrl.getAll();

  if (!experience) return null;

  const { section_hero, infos } = experience.attributes;

  return (
    <main>
      <SectionHero section_hero={section_hero} />

      {infos.data.map((info) => (
        <Info key={info.id} info={info} />
      ))}
    </main>
  );
}
