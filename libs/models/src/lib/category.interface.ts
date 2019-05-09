export interface Category {
  id?: number;
  name?: string;
  slug?: string;
  parent?: number;
  description?: string;
  display?: string;
  image?: CategoryImage;
  menu_order?: number;
  count?: number;
}

export interface CategoryImage {
  id?: number;
  date_created?: Date;
  date_created_gmt?: Date;
  date_modified?: Date;
  date_modified_gmt?: Date;
  src?: string;
  title?: string;
  alt?: string;
}
