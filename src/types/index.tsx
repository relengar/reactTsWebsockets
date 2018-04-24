import {ThunkAction} from 'redux-thunk';

export interface StoreState {
    users: string[][];
    transactions: TransactionItem[];
    loginId: number;
    apiId: number;
    isFetching: boolean;
    ws?: object;
}

interface Amount {
    amount: number;
}
interface Op {
    amount: Amount;
    from: string;
    to: string;
}

export interface TransactionItem {
    id: string;
    op: Op[];
    result: string[][]
}
