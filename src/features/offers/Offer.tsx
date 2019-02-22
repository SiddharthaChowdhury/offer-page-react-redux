import * as React from "react";
import {Action, Dispatch} from "redux";
import IState from "../../config/IState";
import {actionOfferReceive, actionOfferSortBy} from "./actionOffer";
import {IdOfferSortType} from "./IdOfferSortType";
import {IOfferInfo} from "./IOfferInfo";
import {IOfferState} from "./reducerOffer";
import {connect} from "react-redux";
import "./offer.less";

interface IOfferDOMState {
    offersInfo?: IOfferState;
};
interface IOfferDOMDispatch {
    onChangeSort: (sortBy: IdOfferSortType) => Action<any>;
    onOfferReceive: (offers: IOfferInfo[]) => Action<any>;
}
interface IOfferDOMProps extends IOfferDOMState, IOfferDOMDispatch {}

class OfferDOM extends React.PureComponent<IOfferDOMProps> {
    public render() {
        return (
            <React.Fragment>
                <h1>Loaded Offer</h1>
            </React.Fragment>
        )
    }

    public componentDidMount(): void {

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