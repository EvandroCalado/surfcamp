import { TypeBlog } from "@/types/typeBlog";
import { formatDate } from "@/utils/format-date";
import Image from "next/image";

export type ArticleHeaderProps = {
  article: TypeBlog;
};

export function ArticleHeader({ article }: ArticleHeaderProps) {
  const { image, headline, author, createdAt } = article.attributes;

  return (
    <section className="article-header">
      <Image src={image.data.attributes.url} alt={headline} fill />

      <div className="article-header__content">
        <h3 className="article-header__headline">{headline}</h3>
        <p className="copy-small bold">{formatDate(createdAt)}</p>
        <p className="copy-small">{author.data.attributes.name}</p>
      </div>
    </section>
  );
}
