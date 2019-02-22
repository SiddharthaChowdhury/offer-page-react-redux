
import {IActionOffer, TypeActionOffer} from "./actionOffer";
import {IOfferInfo} from "./IOfferInfo";
import {IdOfferSortType} from "./IdOfferSortType";

export interface IOfferState {
    offers?: IOfferInfo[];
    sortType?: IdOfferSortType;
}

const initialOfferState: IOfferState = {};

export const reducerOffer = (state: IOfferState = initialOfferState, action: IActionOffer) => {
    switch(action.type) {
        case TypeActionOffer.Receive:
            return {
                offers: action.offerInfo,
                sortType: IdOfferSortType.Default
            };
        case TypeActionOffer.Update:
            return {
                ...state,
                sortType: action.sortType
            };
        default:
            return state;
    }
}