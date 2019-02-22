export type TOfferSortIndex = {
    name: number;
    price: number;
    popularity: number;
}

export interface IOfferInfo {
    name: string;
    imageSource: string;
    price: number;
    currency: string;
    sortIndex: TOfferSortIndex;
}