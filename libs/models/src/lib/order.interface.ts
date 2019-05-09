import { Address } from './address.interface';
import { Customer } from './customer.interface';

export interface Order {
    id?: string;
    status?: string;
    currency?: string;
    date_created?: Date;
    date_created_gmt?: Date;
    date_modified?: Date;
    date_modified_gmt?: Date;
    total?: number;
    total_tax?: string;
    customer?: Customer;
    customer_note?: string;
    billing?: Address;
    shipping?: Address;
    payment_method?: string;
    payment_method_title?: string;
    line_items?: Array<any>;
}