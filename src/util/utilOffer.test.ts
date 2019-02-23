import {IOfferInfo} from "../features/offers/IOfferInfo";
import {utilOffer} from "./utilOffer";
import {IdOfferSortType} from "../features/offers/IdOfferSortType";

const mockOfferArray: IOfferInfo[] = [
    {
        name: "x", imageSource: "y", price: 10, currency: "usd", sortIndex: {
            name: 2, popularity: 2, price: 2
        }
    },{
        name: "a", imageSource: "b", price: 10, currency: "usd", sortIndex: {
            name: 3, popularity: 3, price: 3
        }
    },{
        name: "m", imageSource: "n", price: 10, currency: "usd", sortIndex: {
            name: 1, popularity: 1, price: 1
        }
    },
];

describe("UtilOffer test", () => {
    const sorted = utilOffer.sortOfferArrayByIndex(mockOfferArray, IdOfferSortType.Name);
    it("should return array of same length", () => {
        expect(sorted.length).toEqual(3);
    })

    it("should return array in correct order", () => {
        expect(sorted[0].name).toBe('m');
        expect(sorted[1].name).toBe('x');
        expect(sorted[2].name).toBe('a');
    })

});