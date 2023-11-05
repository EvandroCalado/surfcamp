import type { Schema, Attribute } from '@strapi/strapi';

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
      'shared.button': SharedButton;
    }
  }
}
