import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogArticleContentOnlyText extends Schema.Component {
  collectionName: 'components_blog_article_content_only_texts';
  info: {
    displayName: 'contentOnlyText';
    description: '';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    indexName: Attribute.String & Attribute.Required;
  };
}

export interface BlogArticleContentWithImage extends Schema.Component {
  collectionName: 'components_blog_article_content_with_images';
  info: {
    displayName: 'contentWithImage';
    description: '';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    image: Attribute.Media & Attribute.Required;
    imageCaption: Attribute.String & Attribute.Required;
    isLandscape: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    imageShowsRight: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    indexName: Attribute.String & Attribute.Required;
  };
}

export interface BlogArticleContent extends Schema.Component {
  collectionName: 'components_blog_article_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    image: Attribute.Media & Attribute.Required;
    imageCaption: Attribute.String & Attribute.Required;
    isLandscape: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    imageShowsRight: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface BlogArticleHeadline extends Schema.Component {
  collectionName: 'components_blog_article_headlines';
  info: {
    displayName: 'headline';
  };
  attributes: {
    headline: Attribute.String & Attribute.Required;
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
  };
}

export interface BlogArticleImageLandscape extends Schema.Component {
  collectionName: 'components_blog_article_image_landscapes';
  info: {
    displayName: 'imageLandscape';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    imageCaption: Attribute.String & Attribute.Required;
    indexName: Attribute.String & Attribute.Required;
  };
}

export interface BlogArticleLandscapeImage extends Schema.Component {
  collectionName: 'components_blog_article_landscape_images';
  info: {
    displayName: 'landscapeImage';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    imageCaption: Attribute.String;
  };
}

export interface BlogArticleParagraphWithImage extends Schema.Component {
  collectionName: 'components_blog_article_paragraph_with_images';
  info: {
    displayName: 'paragraphWithImage';
  };
  attributes: {
    paragraph: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    image: Attribute.Media & Attribute.Required;
    isLandscape: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    imageShowsRight: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    imageCaption: Attribute.String;
  };
}

export interface BlogArticleParagraph extends Schema.Component {
  collectionName: 'components_blog_article_paragraphs';
  info: {
    displayName: 'paragraph';
  };
  attributes: {
    paragraph: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_info_buttons';
  info: {
    displayName: 'button';
    icon: 'apps';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    color: Attribute.Enumeration<['turquoise', 'orange', 'beige']> &
      Attribute.Required &
      Attribute.DefaultTo<'turquoise'>;
    slug: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'blog-article.content-only-text': BlogArticleContentOnlyText;
      'blog-article.content-with-image': BlogArticleContentWithImage;
      'blog-article.content': BlogArticleContent;
      'blog-article.headline': BlogArticleHeadline;
      'blog-article.image-landscape': BlogArticleImageLandscape;
      'blog-article.landscape-image': BlogArticleLandscapeImage;
      'blog-article.paragraph-with-image': BlogArticleParagraphWithImage;
      'blog-article.paragraph': BlogArticleParagraph;
      'shared.button': SharedButton;
    }
  }
}
