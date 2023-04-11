export type CryptoOrderStatus = 'completed' | 'pending' | 'failed';

export interface dataObj {
    market: string;
change_24_hour: number;
low: number;
high: number;
last_price: number;
volume: number;
bid: number;
ask: number;
timestamp: number;
}

