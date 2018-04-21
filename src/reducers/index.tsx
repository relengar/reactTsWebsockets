import { actions } from '../actions';
import * as constants from '../constants';
import { StoreState } from '../types/index';

const initState: StoreState = {
    apiId: NaN,
    isFetching: false,
    loginId: NaN,
    transactions: [],
    users: [['Dude', '123.45.56']]
}

export function transactions(state = initState, action: actions): StoreState {
    switch (action.type) {
        case constants.START_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            })
        case constants.REQUEST_FAIL:
            return Object.assign({}, state, {
                error: action.error,
                isFetching: false
            })
        case constants.LOG_IN:
            return Object.assign({}, state, {
                isFetching: false,
                userId: action.id
            })
        case constants.SET_API_KEY:
            return Object.assign({}, state, {
                apiKey: action.id,
                isFetching: false
            })
        case constants.SET_USERS:
            return Object.assign({}, state, {
                isFetching: false,
                users: action.users
            })
        case constants.SET_TRANSACTIONS:
            return Object.assign({}, state, {
                isFetching: false,
                transactions: action.transactions
            })
        default:
            return state;
    }
}