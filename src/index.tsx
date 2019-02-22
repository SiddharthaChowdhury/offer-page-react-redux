import * as React from 'react';
import * as ReactDOM from "react-dom";

import {Provider} from "react-redux";
// import "./styles/index.min.css";

import {Store} from "./config/store";
import {Offer} from "./features/offers/Offer";

ReactDOM.render(
    <Provider store={Store}>
        <Offer/>
    </Provider>,
    document.getElementById("root")
);