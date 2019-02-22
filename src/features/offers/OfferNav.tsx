import * as React from "react";
import "./offer.css";

interface IOfferNavInfo {
    onSortClick: any;
}

export const OfferNav: React.FC<IOfferNavInfo> = ({onSortClick}) => {
    return (
        <div className="top-nav">
            <div className="dropdown">
                <span>Sort by </span>
                <div className="dropdown-content">
                    <div>Price</div>
                    <div>Popularity</div>
                    <div>Name</div>
                </div>
            </div>
        </div>
    );
}