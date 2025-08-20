import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.elements-link', false>;
    description: Schema.Attribute.Text;
    desktop_image_video: Schema.Attribute.Media<'images' | 'videos'>;
    heading: Schema.Attribute.String;
  };
}

export interface BlocksInfo extends Struct.ComponentSchema {
  collectionName: 'components_blocks_infos';
  info: {
    displayName: 'Info';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isReverse: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface BlocksSimpleHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_simple_hero_sections';
  info: {
    displayName: 'Simple Hero Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.elements-link', false>;
    desktop_image_video: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.Text & Schema.Attribute.Required;
    open_in_new_tab: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    footer_navigation: Schema.Attribute.Component<
      'elements.elements-link',
      true
    >;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    navigation: Schema.Attribute.Component<'elements.elements-link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero-section': BlocksHeroSection;
      'blocks.info': BlocksInfo;
      'blocks.simple-hero-section': BlocksSimpleHeroSection;
      'elements.elements-link': ElementsElementsLink;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
    }
  }
}
