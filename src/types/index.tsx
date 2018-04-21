export interface StoreState {
    users: string[][];
    transactions: TransactionItem[];
    loginId: number;
    apiId: number;
    isFetching: boolean;
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
}