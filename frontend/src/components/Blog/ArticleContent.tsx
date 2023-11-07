import { TypeBlog } from "@/types/typeBlog";

export type ArticleContentProps = {
  article: TypeBlog;
};

export function ArticleContent({ article }: ArticleContentProps) {
  return (
    <div className="article-content">
      <div
        className="article-content__body"
        dangerouslySetInnerHTML={{ __html: article.attributes.content }}
      ></div>
    </div>
  );
}
