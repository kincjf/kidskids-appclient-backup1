export interface Product {
  id?: number;
  name?: string;
  slug?: string;
  type?: string;
  status?: string;
  featured?: boolean;
  description?: string;
  short_description?: string;
  sku?: string;
  price?: number;
  regular_price?: string;
  sale_price?: string;
  on_sale?: boolean;
  purchasable?: boolean;
  virtual?: boolean;
  downloadable?: boolean;
  tax_status?: string;
  tax_class?: string;
  stock_quantity?: number;
  in_stock?: boolean;
  stock_status: string;
  backorders?: boolean;
  backorders_allowed?: boolean;
  backordered?: boolean;
  shipping_required?: boolean;
  shipping_taxable?: boolean;
  shipping_class?: string;
  shipping_class_id?: number;
  reviews_allowed?: boolean;
  average_rating?: string;
  rating_count?: number;
  related_ids?: Array<any>;
  upsell_ids?: Array<any>;
  cross_sell_ids?: Array<any>;
  parent_id?: number;
  purchase_note?: string;
  categories?: Array<any>;
  tags?: Array<any>;
  attributes?: Array<any>;
  default_attributes?: Array<any>;
  variations?: Array<any>;
  grouped_products?: Array<string>;
  meta_data?: Array<any>;
  images?: Array<any>;
}

export interface ProductVariant extends Product {
  image?: any;
}

export interface ProductReview {
  id?: number;
  reviewer?: string;
  product_id?: number;
  reviewer_email?: string;
  review?: string;
  reviewer_avatar_urls: any;
  date_created?: Date;
  date_created_gmt?: Date;
  rating?: number;
  verified?: boolean;
  status?: string;
}

export interface CartProduct extends Product {
  quantity?: number;
  variant?: number;
  color?: string;
}

export interface WishlistItem extends Product {
  color?: string;
}