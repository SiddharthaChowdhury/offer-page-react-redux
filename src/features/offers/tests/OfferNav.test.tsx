import React from "react";
import { shallow } from "enzyme";
import {OfferNav} from "../OfferNav";
import {spy} from "sinon";
import {IdOfferSortType} from "../IdOfferSortType";

// Todo: other tests needs to be done

describe('WelcomeMessage Test Suite', () => {
    const onClickSpy = spy();
    const wrapper = shallow(<OfferNav onSortClick={onClickSpy} currentlySortedAs={IdOfferSortType.Price}/>);

    it('Should have an image', () => {
        expect(wrapper.find('.dropdown').exists()).toBe(true);
        expect(wrapper.find('.dropdown-content div').length).toEqual(3);
    });

    it('Check click event on', () => {
        wrapper.find('.dropdown-content div').first().simulate('click', IdOfferSortType.Price);
        expect(onClickSpy.calledOnce).toBe(true);
    });
});