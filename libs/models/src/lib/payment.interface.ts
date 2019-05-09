export interface Payment {
    id?: string;
    title?: string;
    enabled?: boolean;
    description?: string;
    order?: number;
    method_title: string;
    method_description: string;
}
