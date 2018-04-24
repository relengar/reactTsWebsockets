import * as React from 'react';
import { TransactionItem } from '../types/index';

function Transactions({transactions}: Props) {
    if (!transactions || transactions.length <= 0) {
        return <div className="col-2"><p>No transactions found for this user</p></div>
    }
    return (
        <div className="col-2">
            <table>
                <thead><tr><th>From</th><th>To</th><th>Amount</th></tr></thead>
                <tbody>
                    {transactions && transactions.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.op[1].from}</td>
                                <td>{item.op[1].to}</td>
                                <td>{item.op[1].amount.amount}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export interface Props {
    transactions?: TransactionItem[];
}

export default Transactions;