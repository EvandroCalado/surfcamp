import { TypeBlog } from "@/types/typeBlog";
import Link from "next/link";

export type ArticleOverviewProps = {
  article: TypeBlog;
};

export function ArticleOverview({ article }: ArticleOverviewProps) {
  const { excerpt, articleContent } = article.attributes;

  return (
    <section className="article-overview">
      <div className="article-overview__info">
        <h3>Neste artigo</h3>
        <h5>{excerpt}</h5>
      </div>

      <ul className="article-overview__contents">
        {articleContent.map(
          (content, index) =>
            content.indexName && (
              <Link key={content.id} href={`#${content.indexName}`}>
                <li>{`${index + 1}. ${content.indexName}`}</li>
              </Link>
            )
        )}
      </ul>
    </section>
  );
}
