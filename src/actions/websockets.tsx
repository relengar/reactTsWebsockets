import {TransactionItem} from '../types/index';

export function sendAndRetrieve(msg: string, ws: WebSocket): Promise<Response | TransactionItem> {
    return new Promise(resolve => {
        ws.onmessage = (resp: MessageEvent) => {
            resolve(JSON.parse(resp.data));
        }
        ws.send(msg);
    });
}

export interface Response {
    id: number;
    result: string[][]
}

