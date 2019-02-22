import {Action} from "redux";
import {IOfferInfo} from "./IOfferInfo";
import {IdOfferSortType} from "./IdOfferSortType";

export const enum TypeActionOffer {
    Receive = "Offer > Receive",
    Update = "Offer > Update",
}

export interface IActionOffer extends Action{
    offerInfo?: IOfferInfo[];
    sortType?: IdOfferSortType;
    type: TypeActionOffer
}

export const actionOfferReceive = (offerInfo: IOfferInfo[]): IActionOffer => ({
    offerInfo,
    type: TypeActionOffer.Receive,
});

export const actionOfferSortBy = (sortType: IdOfferSortType, offerInfo: IOfferInfo[]): IActionOffer => ({
    sortType,
    offerInfo,
    type: TypeActionOffer.Update,
});