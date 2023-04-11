export type CryptoOrderStatus = 'completed' | 'pending' | 'failed';

export interface dataObj {
    pair: string;
    virtualCurrency: string;
    buy: number;
    sell: number;
last_price: number;
volume: number;
instantSell: number;
instantBuy: number;
volumeQt: number;
}

