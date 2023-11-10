export interface TypeEvents {
  data: TypeEvent[];
  meta: Meta;
}

interface Meta {
  pagination: Pagination;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface TypeEvent {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
  name: string;
  description: string;
  startingDate: string;
  endDate: string;
  singleRoom: number;
  SharedPrice: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isActive: boolean;
  image: Image;
  slug: string;
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
  small?: Thumbnail;
  medium?: Thumbnail;
  large?: Thumbnail;
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
