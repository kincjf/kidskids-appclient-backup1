export interface CountryState {
    code?: string;
    name?: string;
}

export interface Country {
    code?: string;
    name?: string;
    states?: CountryState[];
}