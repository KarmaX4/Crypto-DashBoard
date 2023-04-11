import { Card } from '@mui/material';
import { dataObj } from 'src/models/crypto_orderzebpay';
import RecentOrdersTable from './RecentOrdersTable';
import { subDays } from 'date-fns';
import { useEffect, useState } from 'react';

function RecentOrders() {
//   interface datatObj {
//     symbol: string;
//   baseAsset: string;
//   quoteAsset: string;
//   openPrice: number;
//   lowPrice: number;
//   highPrice: number;
//   lastPrice: number;
//   volume: number;
//   bidPrice: number;
//   askPrice: number;
//   at: number;
// }


const [cPrice , setCPrice] = useState<dataObj[]>([])
const Price = async () => {
const response = await fetch(
"https://www.zebapi.com/pro/v1/market/",
{
  method: "GET",
  headers: {
    Accept: "application/json",
  
  },
}
);
const data = await response.json();
setCPrice(data);
}; 
// console.log(cPrice.symbol);

useEffect(() => {
let interval = setInterval(() => {
Price();
}, 11000);
return () => {
clearInterval(interval);
};
}, []); 

  return (
    <Card>
      <RecentOrdersTable dataObj = {cPrice} />
    </Card>
  );
}

export default RecentOrders;
