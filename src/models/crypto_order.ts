export type CryptoOrderStatus = 'completed' | 'pending' | 'failed';

export interface dataObj {
symbol: string;
baseAsset: string;
quoteAsset: string;
openPrice: number;
lowPrice: number;
highPrice: number;
lastPrice: number;
volume: number;
bidPrice: number;
askPrice: number;
at: number;
}

