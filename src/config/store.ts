import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./rootReducer";

const middleware: any = [];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(...middleware));

const initialStoreState = {};
export const Store = createStore(rootReducer, initialStoreState, enhancers);