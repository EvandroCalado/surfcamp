import { TypeBlog } from "@/types/typeBlog";
import { formatDate } from "@/utils/format-date";
import Image from "next/image";
import Link from "next/link";

export type BlogHomeCardProps = {
  article: TypeBlog;
};

export function BlogHomeCard({ article }: BlogHomeCardProps) {
  return (
    <Link href={`/blog/${article.attributes.slug}`} className="blog-home-card">
      <div className="blog-home-card__image">
        <Image
          src={article.attributes.image.data.attributes.formats.medium.url}
          alt={article.attributes.headline}
          fill={true}
        />
      </div>

      <h5 className="blog-home-card__headline">
        {article.attributes.headline}
      </h5>

      <p className="copy-small">{formatDate(article.attributes.createdAt)}</p>
    </Link>
  );
}
