import { InfoClass } from "@/api/info";
import { Info, SectionHero } from "@/components/Shared";

const infoCtrl = new InfoClass();

export default async function Home() {
  const data = await infoCtrl.get();
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
