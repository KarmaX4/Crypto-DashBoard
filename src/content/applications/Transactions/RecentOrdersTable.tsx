import { FC, ChangeEvent, useState, useEffect } from 'react';
import { usePrevious } from 'react-delta';
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  MenuItem,
  Typography,
  useTheme,
  CardHeader
} from '@mui/material';

import Label from 'src/components/Label';
import { dataObj, CryptoOrderStatus } from 'src/models/crypto_order';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import BulkActions from './BulkActions';
import { Navigate } from 'react-router';

interface RecentOrdersTableProps {
  className?: string;
  cryptoOrders: dataObj[];
}

interface Filters {
  status?: CryptoOrderStatus;
}

const applyFilters = (cryptoOrders: dataObj[], filters: Filters): dataObj[] => {
  return cryptoOrders.filter((cryptoOrder) => {
    let matches = true;

    return matches;
  });
};

const applyPagination = (
  cryptoOrders: dataObj[],
  page: number,
  limit: number
): dataObj[] => {
  return cryptoOrders.slice(page * limit, page * limit + limit);
};

const RecentOrdersTable = ({ dataObj }) => {
  const [selectedCryptoOrders, setSelectedCryptoOrders] = useState<string[]>(
    []
  );
  const selectedBulkActions = selectedCryptoOrders.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: null
  });


  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  let navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log((e.target as Element).innerHTML);
    const coinName:any = ((e.target as Element).innerHTML)
    localStorage.setItem("coin",coinName)
    let path = `/management/compare`;
    navigate(path);
  };
  const Lastprv = usePrevious(dataObj.lastPrice);

  return (
    <Card>
      {selectedBulkActions && (
        <Box flex={1} p={2}>
          <BulkActions />
        </Box>
      )}
      {!selectedBulkActions && (
        <CardHeader
          action={
            <Box width={150}>
              <FormControl fullWidth variant="outlined"></FormControl>
            </Box>
          }
          title="All Prices"
        />
      )}
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Logo</TableCell>
              <TableCell>Coin</TableCell>
              <TableCell>Volume</TableCell>
              <TableCell>Bid/Ask</TableCell>
              <TableCell>Current Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataObj == '' && (
              <TableRow>
                <TableCell colSpan={4}>
                  <img
                    style={{ paddingLeft: '375px' }}
                    alt="loader"
                    src="/static/images/avatars/loader.gif"
                  />
                </TableCell>
              </TableRow>
            )}
            {dataObj.map((dataObj) => (
              <TableRow key={dataObj.symbol}>
                <TableCell>
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="text.primary"
                    gutterBottom
                    noWrap
                  >
                    <img
                      alt="logo"
                      height="25px"
                      width="30px"
                      src={
                        '/static/images/Cryptologo/' +
                        `${dataObj.baseAsset}` +
                        '.png'
                      }
                    />
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    noWrap
                  ></Typography>
                </TableCell>
                <TableCell  onClick={handleClick}>
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="text.primary"
                    gutterBottom
                    noWrap
                  >
                    {dataObj.baseAsset}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    noWrap
                  ></Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="text.primary"
                    gutterBottom
                    noWrap
                  >
                    {dataObj.volume}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="green"
                    gutterBottom
                    noWrap
                  >
                    {dataObj.bidPrice}
                  </Typography>
                  <Typography variant="body2" color="error" noWrap>
                    {dataObj.askPrice}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color={Lastprv > dataObj.lastPrice ? 'red' : 'green'}
                    gutterBottom
                    noWrap
                  >
                    <img
                      style={{ position: 'relative', top: '5px' }}
                      alt="logo"
                      height="20px"
                      width="25px"
                      src={
                        '/static/images/gif/' + `${dataObj.quoteAsset}` + '.png'
                      }
                    />{' '}
                    {dataObj.lastPrice}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}></Box>
    </Card>
  );
};

RecentOrdersTable.propTypes = {
  dataObj: PropTypes.array.isRequired
};

RecentOrdersTable.defaultProps = {
  dataObj: []
};

export default RecentOrdersTable;
