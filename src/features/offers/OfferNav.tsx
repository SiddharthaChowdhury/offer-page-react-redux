import * as React from "react";
import {IdOfferSortType} from "./IdOfferSortType";
// import "./offer.css";

interface IOfferNavInfo {
    onSortClick: (sortBy: IdOfferSortType) => any;
    currentlySortedAs: IdOfferSortType
}

export const OfferNav: React.FC<IOfferNavInfo> = ({onSortClick, currentlySortedAs }) => {
    return (
        <div className="top-nav">
            <label>Sort by</label>
            <div className="dropdown">
                <span>{currentlySortedAs.toUpperCase()}</span>
                <div className="dropdown-content">
                    <div onClick={() => onSortClick(IdOfferSortType.Price)}>Price</div>
                    <div onClick={() => onSortClick(IdOfferSortType.Popularity)}>Popularity</div>
                    <div onClick={() => onSortClick(IdOfferSortType.Name)}>Name</div>
                </div>
            </div>
        </div>
    );
};
