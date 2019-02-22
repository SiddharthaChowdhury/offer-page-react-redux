import * as React from "react";
import "./offer.css";
import {Action} from "redux";
import {IdOfferSortType} from "./IdOfferSortType";
import {IOfferInfo} from "./IOfferInfo";
import {IOfferState} from "./reducerOffer";

interface IOfferNavInfo {
    onSortClick: (sortBy: IdOfferSortType, offers: IOfferInfo[]) => Action<any>;
    offerState: IOfferState
}

export const OfferNav: React.FC<IOfferNavInfo> = ({onSortClick, offerState }) => {
    const {offers, sortType} = offerState;
    return (
        <div className="top-nav">
            <label>Sort by </label>
            <div className="dropdown border-rad-5">
                <span>{sortType!.toUpperCase()} </span>
                <div className="dropdown-content border-rad-5">
                    <div onClick={() => sortOffer(offers!, IdOfferSortType.Price, onSortClick)}>Price</div>
                    <div onClick={() => sortOffer(offers!, IdOfferSortType.Popularity, onSortClick)}>Popularity</div>
                    <div onClick={() => sortOffer(offers!, IdOfferSortType.Name, onSortClick)}>Name</div>
                </div>
            </div>
        </div>
    );
};

const sortOffer = (offers: IOfferInfo[], sortBy: IdOfferSortType, onSortClick: (sortBy: IdOfferSortType, offers: IOfferInfo[]) => Action<any>) => {
    function compare(a: any, b: any) {
        if (a.sortIndex[sortBy] < b.sortIndex[sortBy])
            return -1;
        if (a.sortIndex[sortBy] > b.sortIndex[sortBy])
            return 1;
        return 0;
    }

    const sortedOffer: IOfferInfo[] = offers.sort(compare);
    onSortClick(sortBy, sortedOffer);
};
