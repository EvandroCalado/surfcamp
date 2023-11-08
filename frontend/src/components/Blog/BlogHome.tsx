import { TypeBlog } from "@/types/typeBlog";
import { BlogHomeCard } from ".";

export type BlogHomeProps = {
  articles: TypeBlog[];
};

export function BlogHome({ articles }: BlogHomeProps) {
  return (
    <section className="blog-home">
      <h2 className="blog-home__headline">O Blog</h2>

      <div className="blog-home__wrapper">
        {articles.map((article) => (
          <BlogHomeCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
