import { TypeBlog } from "@/types/typeBlog";

export type ArticleContentProps = {
  article: TypeBlog;
};

export function ArticleContent({ article }: ArticleContentProps) {
  return (
    <div className="article-component">
      <div
        className="article-component__content"
        dangerouslySetInnerHTML={{ __html: article.attributes.content }}
      ></div>
    </div>
  );
}
