"use client";

import { TypeBlog } from "@/types/typeBlog";
import { FeaturedCard } from "./FeaturedCard";

type FeaturedItemsProps = {
  headline: string;
  featuredItems: TypeBlog[];
};

export function FeaturedItems({ headline, featuredItems }: FeaturedItemsProps) {
  return (
    <section className="featured-items">
      <h3 className="featured-items__headline">{headline} </h3>

      <div className="featured-items__container">
        {featuredItems.map((featuredItems) => (
          <FeaturedCard key={featuredItems.id} article={featuredItems} />
        ))}
      </div>
    </section>
  );
}
