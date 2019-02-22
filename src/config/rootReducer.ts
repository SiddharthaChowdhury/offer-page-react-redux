import IState from "./IState";
import {combineReducers} from "redux";
import {reducerOffer} from "../features/offers/reducerOffer";

export default combineReducers<IState> ({
    offer: reducerOffer
})