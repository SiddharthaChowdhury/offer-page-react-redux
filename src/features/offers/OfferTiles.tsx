import * as React from "react";
import {IOfferInfo} from "./IOfferInfo";

interface IOfferTileInfo {
    offer: IOfferInfo;
}

export const OfferTiles: React.FC <IOfferTileInfo>= (props) => {
    const {name, currency, price, imageSource} = props.offer;
    const imageStyle = {
        background: `url(${imageSource})`,
    };
    return (
        <div className="col-6 col-md-3 tile-container border-rad-5">
            <div className="tile">
                <div className="image" style={imageStyle}/>
                <div className="tile-name">{name}</div>
                <div className="tile-price">{`${price} ${currency}`}</div>
            </div>
        </div>
    );
}