import { TypeBlogs } from "@/types/typeBlog";
import { ENDPOINTS } from "@/utils/constants";

export class BlogClass {
  async getHighlightArticle() {
    try {
      const response = await fetch(ENDPOINTS.BLOG, {
        next: {
          revalidate: 3600,
        },
      });

      const result: TypeBlogs = await response.json();

      if (response.status !== 200) throw result;

      const highlightArticle = result.data.find(
        (blog) => blog.attributes.isHighlightArticle
      );

      return highlightArticle;
    } catch (error) {
      console.log("Blog", error);
    }
  }

  async getfeaturedItemsArticles(page = 1) {
    const pageSize = 3;

    const pagination = `pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
    const sort = "sort=publishedAt:desc";

    try {
      const response = await fetch(`${ENDPOINTS.BLOG}&${pagination}&${sort}`, {
        next: {
          revalidate: 3600,
        },
      });

      const result: TypeBlogs = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      console.log("Blog", error);
    }
  }

  async getAll() {
    try {
      const response = await fetch(ENDPOINTS.BLOG, {
        next: {
          revalidate: 3600,
        },
      });

      const result: TypeBlogs = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      console.log("Blog", error);
    }
  }

  async getBySlug(slug: string) {
    const sort = "sort=publishedAt:desc";
    const filter = `filters[slug][$eq]=${slug}`;

    try {
      const response = await fetch(`${ENDPOINTS.BLOG}&${filter}&${sort}`, {
        next: {
          revalidate: 3600,
        },
      });

      const result: TypeBlogs = await response.json();

      if (response.status !== 200) throw result;

      return result.data[0];
    } catch (error) {
      console.log("Blog", error);
    }
  }
}
