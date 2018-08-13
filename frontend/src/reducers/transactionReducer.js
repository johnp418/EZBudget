import { FETCH_TRANSACTIONS, ADD_TRANSACTION } from '../actions/types';

const initialState = {
    items: [],
    item: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_TRANSACTIONS:
            return {
                ...state,
                items: action.payload
            };
        case ADD_TRANSACTION:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}