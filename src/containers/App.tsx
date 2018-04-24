import * as actions from '../actions/';
import Navbar from '../components/navbar';
import Transactions from '../components/transactions';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { StoreState, TransactionItem } from '../types/index';

export interface Props {
  isFetching: boolean,
  users: string[][];
  transactions?: TransactionItem[];
  selectUser?: () => void;
}

class App extends React.Component<Props, object> {
  constructor(props: Props) {
    super(props);
  }

  // componentDidMount() {
    
  // }

  public render() {
    const { users, selectUser, transactions, isFetching } = this.props;

    if (isFetching) {
      return <div><p>Loading... </p></div>
    }
    return (
      <div className="container">
       <div className="row">
         <Navbar users={users} selectUser={selectUser} />
         <Transactions transactions={transactions} />
       </div>
     </div>
    );
  }
}

export function mapStateToProps({ users, transactions, isFetching }: StoreState) {
  return {
    isFetching,
    transactions,
    users
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.actions>) {
  return {
    selectUser: () => dispatch(actions.GetTransactions([])),
  }
}

export default connect<Props>(mapStateToProps, mapDispatchToProps)(App);
