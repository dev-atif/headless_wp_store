// Define an interface for the dimensions of a product
interface Dimensions {
  length: string;
  width: string;
  height: string;
}

// Define an interface for the image of a product
interface ProductImage {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  src: string;
  name: string;
  alt: string;
}

// Define an interface for a product category
interface Category {
  id: number;
  name: string;
  slug: string;
}

// Define an interface for the product metadata
interface MetaData {
  id: number;
  key: string;
  value: string;
}

// Define an interface for a product
interface Product {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  type: string;
  status: string;
  featured: boolean;
  catalog_visibility: string;
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  date_on_sale_from: string | null;
  date_on_sale_from_gmt: string | null;
  date_on_sale_to: string | null;
  date_on_sale_to_gmt: string | null;
  on_sale: boolean;
  purchasable: boolean;
  total_sales: number;
  virtual: boolean;
  downloadable: boolean;
  downloads: any[]; // Assuming empty array
  download_limit: number;
  download_expiry: number;
  external_url: string;
  button_text: string;
  tax_status: string;
  tax_class: string;
  manage_stock: boolean;
  stock_quantity: number | null;
  backorders: string;
  backorders_allowed: boolean;
  backordered: boolean;
  low_stock_amount: number | null;
  sold_individually: boolean;
  weight: string;
  dimensions: Dimensions;
  shipping_required: boolean;
  shipping_taxable: boolean;
  shipping_class: string;
  shipping_class_id: number;
  reviews_allowed: boolean;
  average_rating: string;
  rating_count: number;
  upsell_ids: number[];
  cross_sell_ids: number[];
  parent_id: number;
  purchase_note: string;
  categories: Category[];
  tags: any[]; // Assuming empty array
  images: ProductImage[];
  attributes: any[]; // Assuming empty array
  default_attributes: any[]; // Assuming empty array
  variations: any[]; // Assuming empty array
  grouped_products: any[]; // Assuming empty array
  menu_order: number;
  price_html: string;
  related_ids: number[];
  meta_data: MetaData[];
  stock_status: string;
  has_options: boolean;
  post_password: string;
  global_unique_id: string;
  _links: {
    self: { href: string }[];
    collection: { href: string }[];
  };
}

interface ProductProps {
  products: Product;
}