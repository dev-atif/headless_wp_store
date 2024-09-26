interface Product {
  id: number;
  documentId: string;
  title: string;
  Description: string;
  slug: string;
  createdAt: string; // ISO string representation of the date
  updatedAt: string; // ISO string representation of the date
  publishedAt: string; // ISO string representation of the date
  locale: string | null; // locale can be a string or null
  price: number; // assuming price is stored as a string
  sale_price: string; // assuming sale price is stored as a string
  stock: number;
  details: Detail[];
  thumbnail: Image;
  gallary: Image[]; // assuming 'gallary' is a typo for 'gallery'
  productCategory: string;
  Sku: string;
  Size: string[];
  Color: string[];
  quantity: number;
  selectedColor?: string | null;
  selectedSize?:string | null
}


interface Detail {
  type: string;
  children: Child[];
}

interface Child {
  type: string;
  text: string;
  bold?: boolean; // optional, as not all text objects are bold
}

interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string; // URL of the image
  previewUrl: string | null; // URL for preview if available
  provider: string; // image provider
  provider_metadata: any; // can be typed more specifically based on provider metadata
  createdAt: string; // ISO string representation of the date
  updatedAt: string; // ISO string representation of the date
  publishedAt: string; // ISO string representation of the date
  locale: string | null; // locale can be a string or null
  
}

interface ImageFormats {
  thumbnail: ImageFormat; // other formats can be added as needed
  [key: string]: ImageFormat; // to accommodate additional image formats
}

interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null; // path can be null if not provided
  width: number;
  height: number;
  size: number; // size in MB
  sizeInBytes: number; // size in bytes
  url: string; // URL of the image format
}
