import type { Schema, Attribute } from '@strapi/strapi';

export interface HeroBanner extends Schema.Component {
  collectionName: 'components_hero_banners';
  info: {
    displayName: 'banner';
    icon: 'picture';
    description: '';
  };
  attributes: {
    banner: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
    off: Attribute.String & Attribute.Required;
    button: Attribute.Component<'ui.button'> & Attribute.Required;
  };
}

export interface MenuNavLink extends Schema.Component {
  collectionName: 'components_menu_nav_links';
  info: {
    displayName: 'navLink';
    icon: 'layer';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    link: Attribute.Text & Attribute.Required;
  };
}

export interface UiButton extends Schema.Component {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'button';
    icon: 'alien';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    variant: Attribute.Enumeration<['primary', 'secondary']>;
    width: Attribute.Boolean & Attribute.DefaultTo<false>;
    icon: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
  };
}

export interface UiColor extends Schema.Component {
  collectionName: 'components_ui_colors';
  info: {
    displayName: 'color';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    color: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
    images: Attribute.Media & Attribute.Required;
  };
}

export interface UiImage extends Schema.Component {
  collectionName: 'components_ui_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    assets: Attribute.Media & Attribute.Required;
  };
}

export interface UiLogo extends Schema.Component {
  collectionName: 'components_ui_logos';
  info: {
    displayName: 'logo';
    icon: 'command';
  };
  attributes: {
    black: Attribute.Media & Attribute.Required;
    white: Attribute.Media & Attribute.Required;
    isBlack: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hero.banner': HeroBanner;
      'menu.nav-link': MenuNavLink;
      'ui.button': UiButton;
      'ui.color': UiColor;
      'ui.image': UiImage;
      'ui.logo': UiLogo;
    }
  }
}
