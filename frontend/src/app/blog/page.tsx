"use client";

import { BlogClass } from "@/api/blog";
import { HighlightArticle, SubscribeToNewsletter } from "@/components/Blog";
import { FeaturedItems } from "@/components/Featured";
import { Loading } from "@/components/Shared";
import { TypeBlog } from "@/types/typeBlog";
import { useEffect, useState } from "react";

const blogCtrl = new BlogClass();

export default function Blog() {
  const [highlightArticle, setHighlightArticle] = useState<TypeBlog>();
  const [featuredItemsArticles, setFeaturedItemsArticles] = useState<
    TypeBlog[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setDisabled(true);

      try {
        const highlight = await blogCtrl.getHighlightArticle();
        setHighlightArticle(highlight);

        const articles = await blogCtrl.getfeaturedItemsArticles(currentPage);
        setFeaturedItemsArticles([
          ...featuredItemsArticles,
          ...articles?.data!,
        ]);
        setPageCount(articles!.meta.pagination.pageCount);

        setLoading(false);
        setDisabled(false);
      } catch (error) {
        console.log(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const handleOnClick = () => {
    setCurrentPage(currentPage + 1);
  };

  if (!featuredItemsArticles) return null;
  if (!highlightArticle) return null;

  const noMorePost = pageCount === currentPage;

  return (
    <main className="blog">
      <HighlightArticle HighlightArticle={highlightArticle!} />
      <SubscribeToNewsletter />
      <FeaturedItems
        featuredItems={featuredItemsArticles!}
        headline="Nossos Artigos em Destaque"
      />

      <div className="blog__button-container">
        <button
          disabled={noMorePost ? true : disabled}
          onClick={handleOnClick}
          className="btn btn--medium btn--turquoise blog__button"
        >
          {noMorePost ? (
            "Sem Mais Artigos"
          ) : loading ? (
            <Loading />
          ) : (
            "Veja mais"
          )}
        </button>
      </div>
    </main>
  );
}
