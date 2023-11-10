import { TypeBlog } from "@/types/typeBlog";
import { formatDate } from "@/utils/format-date";
import Image from "next/image";
import Link from "next/link";

export type FeaturedCardProps = {
  article: TypeBlog;
};

export function FeaturedCard({ article }: FeaturedCardProps) {
  const { slug, image, headline, createdAt } = article.attributes;

  return (
    <Link href={`/blog/${slug}`} className="featured-card">
      <div className="featured-card__image">
        <Image
          src={image.data.attributes.formats.small!.url}
          alt={headline}
          fill
        />
      </div>

      <div className="featured-card__content">
        <h5 className="featured-card__content-headline">{headline}</h5>

        <p className="copy">{formatDate(createdAt)}</p>
      </div>
    </Link>
  );
}
