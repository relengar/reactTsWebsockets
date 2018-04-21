import * as constants from '../constants';
import {Action, ActionCreator, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import { StoreState } from '../types/index';

export interface StartRequest {
    type: constants.START_REQUEST;
}
export interface FailRequest {
    type: constants.REQUEST_FAIL;
    error: string;
}
export interface LogIn {
    type: constants.LOG_IN;
    id: number;
}
export interface GetApiKey {
    type: constants.SET_API_KEY;
    id: number;
}
export interface GetUsers {
    type: constants.SET_USERS;
    users: string[][];
}
export interface GetTransactions {
    type: constants.SET_TRANSACTIONS;
    transactions: object[];
}

export type actions = StartRequest | FailRequest | LogIn | GetApiKey | GetUsers | GetTransactions;


// functions
export function StartRequest(): StartRequest {
    return {
        type: constants.START_REQUEST
    };
}
export function FailRequest(error: string): FailRequest {
    return {
        error,
        type: constants.REQUEST_FAIL
    }
}
// export function LogIn(id: number): LogIn {
//     // new Promise(function(resolve: () => void) {

//     // });
    
//     return {
//         id,
//         type: constants.LOG_IN
//     }
// }
const LogIn: ActionCreator<ThunkAction<Action, StoreState, void>> = () => {
    return (dispatch: Dispatch<StoreState>): Action => {
        try {
            const resp = 1;
            return dispatch({
                id: resp,
                type: constants.LOG_IN
            })
        } catch (error) {
            return dispatch(FailRequest(error));
        }
    }
}
export default LogIn;
export function GetApiKey(id: number): GetApiKey {
    return {
        id,
        type: constants.SET_API_KEY
    }
}
export function GetUsers(users: string[][]): GetUsers {
    return {
        type: constants.SET_USERS,
        users
    }
}
export function GetTransactions(transactions: object[]): GetTransactions {
    return {
        transactions,
        type: constants.SET_TRANSACTIONS  
    }
}
