import { BlogClass } from "@/api/blog";
import { InfoClass } from "@/api/info";
import { BlogHome } from "@/components/Blog";
import { Info, SectionHero } from "@/components/Shared";

const infoCtrl = new InfoClass();
const blogCtrl = new BlogClass();

export default async function Home() {
  const data = await infoCtrl.get();
  const articles = await blogCtrl.getArticlesHome();

  if (!data) return null;
  if (!articles) return null;

  const { section_hero, infos } = data.attributes;

  return (
    <main>
      <SectionHero section_hero={section_hero} />

      {infos.data.map((info) => (
        <Info key={info.id} info={info} />
      ))}

      <BlogHome articles={articles} />
    </main>
  );
}
