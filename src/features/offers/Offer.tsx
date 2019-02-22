import * as React from "react";
import axios from "axios";
import {Action, Dispatch} from "redux";
import IState from "../../config/IState";
import {actionOfferReceive, actionOfferSortBy} from "./actionOffer";
import {IdOfferSortType} from "./IdOfferSortType";
import {IOfferInfo} from "./IOfferInfo";
import {IOfferState} from "./reducerOffer";
import {connect} from "react-redux";
import {Loading} from "../generic/Loading";
import "./offer.css";
import {OfferNav} from "./OfferNav";
import {OfferTiles} from "./OfferTiles";


interface IOfferDOMState {
    offersInfo?: IOfferState;
};
interface IOfferDOMDispatch {
    onChangeSort: (sortBy: IdOfferSortType) => Action<any>;
    onOfferReceive: (offers: IOfferInfo[]) => Action<any>;
}
interface IOfferDOMProps extends IOfferDOMState, IOfferDOMDispatch {}

class OfferDOM extends React.PureComponent<IOfferDOMProps> {
    public state = {loadingMessage: "Loading please wait.."};
    public render() {
        const {offersInfo, onChangeSort} = this.props;
        const {loadingMessage} = this.state;
        if( !offersInfo || !offersInfo.offers ){
            return (
                <Loading>
                    <h3>{loadingMessage}</h3>
                </Loading>
            );
        }

        return (
            <div className="container">
                <OfferNav onSortClick={onChangeSort}/>
                <div className="row grid-container">
                    {this.getOfferTiles()}
                </div>
            </div>
        )
    }

    public componentDidMount(): void {
        this.getOffers()
    }

    private getOfferTiles = () => {
        const {offersInfo} = this.props;
        return offersInfo!.offers!.map((offer: IOfferInfo, _key: any) => {
            return <OfferTiles offer={offer} key={_key}/>
        });
    };

    private getOffers = () => {
        const {onOfferReceive} = this.props;
        axios({
            method: 'get',
            url: 'https://content.sixt.io/codingtasks/offers.json',
        }).then(resp => {
            const apiData: Array<any> = resp.data.offers;
            const crunchedAPIdata: IOfferInfo[] = apiData.map((offer: any): IOfferInfo => {
                return {
                    name: offer.carGroupInfo.modelExample.name,
                    price: offer.prices.totalPrice.amount.value,
                    currency: offer.prices.totalPrice.amount.currency,
                    imageSource: offer.carGroupInfo.modelExample.imageUrl,
                    sortIndex: {
                        ...offer.sortIndexes
                    }
                }
            });
            onOfferReceive(crunchedAPIdata);

        }).catch(err => {
            this.setState({loadingMessage: "Failed to load API resources."})
        })

    }
}

const mapState = (state: IState): IOfferDOMState => ({
    offersInfo: state.offer,
});
const mapDispatch = (dispatch: Dispatch): IOfferDOMDispatch => ({
    onChangeSort: (sortBy: IdOfferSortType) => dispatch(actionOfferSortBy(sortBy)),
    onOfferReceive: (offers: IOfferInfo[]) => dispatch(actionOfferReceive(offers))
});

export const Offer = connect(mapState, mapDispatch)(OfferDOM);