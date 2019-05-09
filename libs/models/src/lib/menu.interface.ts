export interface XMenu {
    id?: number;
    name?: string;
    icon?: string;
    description?: string;
    parent?: number;
    route?: string;
    children?: any[];
}
