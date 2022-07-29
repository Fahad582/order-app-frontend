import { useState, useContext } from "react"
import { AppContext } from '../context';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function DisplayData () {
  const { data } = useContext(AppContext);
  console.log("data", data)
//   const [fetchedData, setFetchedData] = useState(data);

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sr.</TableCell>
              <TableCell align="Center">SalesOrderID</TableCell>
              <TableCell align="Center">Revision Number&nbsp;(g)</TableCell>
              <TableCell align="Center">Order Date&nbsp;(g)</TableCell>
              <TableCell align="Center">Due Date&nbsp;(g)</TableCell>
              <TableCell align="Center">Ship Date&nbsp;(g)</TableCell>
              <TableCell align="Center">Status&nbsp;(g)</TableCell>
              <TableCell align="Center">SalesOrderNumber&nbsp;(g)</TableCell>
              <TableCell align="Center">Online Order Flag&nbsp;(g)</TableCell>
              <TableCell align="Center">Purchase OrderNumber&nbsp;(g)</TableCell>
              <TableCell align="Center">Account Number&nbsp;(g)</TableCell>
              <TableCell align="Center">CustomerID&nbsp;(g)</TableCell>
              <TableCell align="Center">SalesPersonID&nbsp;(g)</TableCell>
              <TableCell align="Center">TerritoryID&nbsp;(g)</TableCell>
              <TableCell align="Center">BillToAddress ID&nbsp;(g)</TableCell>
              <TableCell align="Center">ShipToAddressID&nbsp;(g)</TableCell>
              <TableCell align="Center">ShipMethodID&nbsp;(g)</TableCell>
              <TableCell align="Center">CreditCardID&nbsp;(g)</TableCell>
              <TableCell align="Center">CreditCardApprovalCode&nbsp;(g)</TableCell>
              <TableCell align="Center">CurrencyRateID&nbsp;(g)</TableCell>
              <TableCell align="Center">Sub Total&nbsp;(g)</TableCell>
              <TableCell align="Center">Tax Amt&nbsp;(g)</TableCell>
              <TableCell align="Center">Freight&nbsp;(g)</TableCell>
              <TableCell align="Center">Total Due&nbsp;(g)</TableCell>
              <TableCell align="Center">Comment&nbsp;(g)</TableCell>
              <TableCell align="Center">Row guid&nbsp;(g)</TableCell>
              <TableCell align="Center">ModifiedDate&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
                data.map((row, index) => (
              <TableRow
                key={row.salesOrderId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right">{row.salesOrderId}</TableCell>
                <TableCell align="right">{row.revisionNumber}</TableCell>
                <TableCell align="right">{row.orderDate}</TableCell>
                <TableCell align="right">{row.dueDate}</TableCell>
                <TableCell align="right">{row.shipDate}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.salesOrderNumber}</TableCell>
                <TableCell align="right">{row.onlineOrderFlag}</TableCell> 
                <TableCell align="right">{row.purchaseOrderNumber}</TableCell>
                <TableCell align="right">{row.accountNumber}</TableCell>
                <TableCell align="right">{row.customerID}</TableCell>
                <TableCell align="right">{row.salesPersonID}</TableCell>
                <TableCell align="right">{row.territoryID}</TableCell>
                <TableCell align="right">{row.billToAddressID}</TableCell>
                <TableCell align="right">{row.shipToAddressID}</TableCell>    
                <TableCell align="right">{row.shipMethodID}</TableCell>
                <TableCell align="right">{row.creditCardID}</TableCell>
                <TableCell align="right">{row.creditCardApprovalCode}</TableCell>
                <TableCell align="right">{row.currencyRateID}</TableCell>
                <TableCell align="right">{row.subTotal}</TableCell>
                <TableCell align="right">{row.taxAmt}</TableCell>
                <TableCell align="right">{row.freight}</TableCell>
                <TableCell align="right">{row.totalDue}</TableCell>
                <TableCell align="right">{row.comment}</TableCell>
                <TableCell align="right">{row.rowguid}</TableCell>
                <TableCell align="right">{row.modifiedDate}</TableCell>
  
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default DisplayData;
