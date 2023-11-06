import { TypeBlog } from "@/types/typeBlog";
import Image from "next/image";
import Link from "next/link";

type HighlightArticleProps = {
  HighlightArticle: TypeBlog;
};

export function HighlightArticle({ HighlightArticle }: HighlightArticleProps) {
  const { headline, excerpt, slug, image } = HighlightArticle.attributes;

  return (
    <article className="highlight-article">
      <div className="highlight-article__info">
        <h3>{headline}</h3>

        <p className="copy">{excerpt}</p>

        <Link href={`/blog/${slug}`} className="btn btn--medium btn--turquoise">
          Ler Mais
        </Link>
      </div>

      <div className="highlight-article__image">
        <Image src={image.data.attributes.url} alt="Article" fill />
      </div>
    </article>
  );
}
