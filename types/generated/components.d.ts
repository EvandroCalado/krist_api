import type { Schema, Attribute } from '@strapi/strapi';

export interface FooterFooterMenu extends Schema.Component {
  collectionName: 'components_footer_footer_menus';
  info: {
    displayName: 'footerMenu';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    links: Attribute.Component<'menu.nav-link', true> & Attribute.Required;
  };
}

export interface FooterFooter extends Schema.Component {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'footer';
    icon: 'code';
    description: '';
  };
  attributes: {
    phone: Attribute.String & Attribute.Required;
    email: Attribute.Email;
    address: Attribute.String & Attribute.Required;
  };
}

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

export interface UiDetails extends Schema.Component {
  collectionName: 'components_ui_details';
  info: {
    displayName: 'detail';
    icon: 'cube';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    price: Attribute.Decimal & Attribute.Required;
    stock: Attribute.Integer & Attribute.Required;
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
    description: '';
  };
  attributes: {
    black: Attribute.Media & Attribute.Required;
    white: Attribute.Media;
  };
}

export interface UiSize extends Schema.Component {
  collectionName: 'components_ui_sizes';
  info: {
    displayName: 'size';
    icon: 'cloud';
    description: '';
  };
  attributes: {
    size: Attribute.String & Attribute.Required;
    quantity: Attribute.Integer;
  };
}

export interface UiVariant extends Schema.Component {
  collectionName: 'components_ui_variants';
  info: {
    displayName: 'variant';
    icon: 'cog';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    price: Attribute.Decimal & Attribute.Required;
    discountPercentage: Attribute.Integer;
    images: Attribute.Media & Attribute.Required;
    color: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
    sizes: Attribute.Component<'ui.size', true> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'footer.footer-menu': FooterFooterMenu;
      'footer.footer': FooterFooter;
      'hero.banner': HeroBanner;
      'menu.nav-link': MenuNavLink;
      'ui.button': UiButton;
      'ui.color': UiColor;
      'ui.details': UiDetails;
      'ui.image': UiImage;
      'ui.logo': UiLogo;
      'ui.size': UiSize;
      'ui.variant': UiVariant;
    }
  }
}
