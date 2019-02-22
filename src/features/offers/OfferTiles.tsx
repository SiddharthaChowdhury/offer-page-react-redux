import * as React from "react";
import {IOfferInfo} from "./IOfferInfo";

interface IOfferTileInfo {
    offer: IOfferInfo;
}

export const OfferTiles: React.FC <IOfferTileInfo>= (props) => {
    const {name, currency, price, imageSource} = props.offer;
    const imageStyle = {
        "background": `url(${imageSource})`,
        "backgroundSize": `100% auto`,
        "backgroundRepeat": `no-repeat`,
    };
    return (
        <div className="col-6 col-md-3 tile-container">
            <div className="tile">
                <div className="image" style={imageStyle}/>
                <div className="tile-name">{name}</div>
                <div className="tile-price">{`${price} ${currency}`}</div>
            </div>
        </div>
    );
}