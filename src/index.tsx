import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
// import { createStore, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import { transactions } from './reducers/index';
// import { StoreState } from './types/index';
import { Provider } from 'react-redux';
// import thunkMiddleware from 'redux-thunk'

const ws: WebSocket = new WebSocket('wss://stage.decentgo.com:8090');

const store = createStore(transactions, {
  apiId: NaN,
  isFetching: false,
  loginId: NaN,
  transactions: [{"id":"1.7.7791","op":[0,{"fee":{"amount":500000,"asset_id":"1.3.0"},"from":"1.2.75" ,"to":"1.2.69","amount":{"amount":1000000000,"asset_id":"1.3.0"},"extensions":[]}],"result":[0,{}]," block_num":674562,"trx_in_block":0,"op_in_trx":0,"virtual_op":17698}],
  users: [['Dude', '123.45.56']],
  ws
})// , applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
