export interface TypeInfo {
  data: Data5;
  meta: Meta;
}

interface Meta {}

interface Data5 {
  id: number;
  attributes: Attributes6;
}

interface Attributes6 {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  section_hero: TypeSectionHero;
  infos: TypeInfos;
}

export interface TypeInfos {
  data: TypeInfo[];
}

export interface TypeInfo {
  id: number;
  attributes: Attributes5;
}

interface Attributes5 {
  headline: string;
  text: string;
  reversed: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image2;
  button: Button;
}

interface Image2 {
  data: Data4;
}

interface Data4 {
  id: number;
  attributes: Attributes4;
}

interface Attributes4 {
  name: string;
  alternativeText?: any;
  caption?: any;
  width: number;
  height: number;
  formats: Formats2;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata: Providermetadata;
  createdAt: string;
  updatedAt: string;
}

interface Formats2 {
  thumbnail: Thumbnail;
  small: Thumbnail;
}

export interface TypeSectionHero {
  data: Data3;
}

interface Data3 {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
  headline: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  image: Image;
  logo: Logo;
  button: Button;
}

interface Button {
  id: number;
  text: string;
  color: string;
  slug: string;
}

interface Logo {
  data: Data2;
}

interface Data2 {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
  name: string;
  alternativeText?: any;
  caption?: any;
  width: number;
  height: number;
  formats?: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata: Providermetadata;
  createdAt: string;
  updatedAt: string;
}

interface Image {
  data: Data;
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  name: string;
  alternativeText?: any;
  caption?: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata: Providermetadata;
  createdAt: string;
  updatedAt: string;
}

interface Formats {
  thumbnail: Thumbnail;
  small: Thumbnail;
  medium: Thumbnail;
  large: Thumbnail;
}

interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: any;
  width: number;
  height: number;
  size: number;
  url: string;
  provider_metadata: Providermetadata;
}

interface Providermetadata {
  public_id: string;
  resource_type: string;
}
