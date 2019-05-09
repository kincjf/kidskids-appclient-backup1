import { Address } from './address.interface';

export interface Customer {
    id?: number;
    email?: string;
    first_name?: string;
    last_name?: string;
    phone?: string;
    role?: string;
    username?: string;
    password?: string;
    billing?: Address;
    shipping?: Address;
    orders_count?: number;
    total_spent?: string;
    avatar_url?: string;
}
