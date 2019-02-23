import {IOfferInfo} from "../features/offers/IOfferInfo";
import {IdOfferSortType} from "../features/offers/IdOfferSortType";

class UtilOffer {
    public sortOfferArrayByIndex = (offerArray: IOfferInfo[], sortBy: IdOfferSortType): IOfferInfo[] => {
        return offerArray.sort((a: any, b: any) => {
            if (a.sortIndex[sortBy] < b.sortIndex[sortBy])
                return -1;
            if (a.sortIndex[sortBy] > b.sortIndex[sortBy])
                return 1;
            return 0;
        });
    }
}

export const utilOffer = new UtilOffer();