import { BlogClass } from "@/api/blog";
import { ArticleContent, ArticleHeader } from "@/components/Blog";
import { FeaturedItems } from "@/components/Featured";

type ParamsProps = {
  params: {
    slug: string;
  };
};

const blogCtrl = new BlogClass();

export default async function BlogSlug({ params }: ParamsProps) {
  const { slug } = params;

  const article = await blogCtrl.getBySlug(slug);
  const articles = await blogCtrl.getfeaturedItemsArticles();

  if (!article) return null;
  if (!articles) return null;

  return (
    <main>
      <ArticleHeader article={article} />
      <ArticleContent article={article} />
      <FeaturedItems
        headline="Artigos Relacionados"
        featuredItems={articles.data}
      />
    </main>
  );
}

export const generateStaticParams = async () => {
  const blogs = await blogCtrl.getAll();

  return blogs.map((blog) => ({
    slug: blog.attributes.slug,
  }));
};
