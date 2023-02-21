import { IDisplayDataClass } from '../types/api_types'
import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';



/**
 * You might find it useful to have some dummy data for your own testing.
 * Feel free to write this function if you find that feature desirable.
 * 
 * When you come to office hours for help, we will ask you if you have written
 * this function and tested your project using it.
 */

export function dummyData(): IDisplayDataClass[] {
  return [{
    Date: "Jan 06,2023",
    WarehouseID: "808906090687765",
    ShippingPO: "XXXXX90909090",
    ShipmentID: "XXXXX90909090",
    BoxesRcvd: 6,
  }];
}

/**
 * This is the component where you should write the code for displaying the
 * the table of grades.
 *
 * You might need to change the signature of this function.
 *
 */

export const GradeTable = (rows:IDisplayDataClass[]) => {
  return (
    <>
      {BasicTable(rows)}
    </>
  )
};


/**
 * 
 * @param rows array of data that will be shown
 * @returns the table component
 */
function BasicTable(rows:IDisplayDataClass[]) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  /**
   * when page changes, it will be called
   */
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };


  /**
   * when rowPerPage changes, it will be called
   */
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {

    console.log(parseInt(event.target.value, 10));
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "auto" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="left">Warehouse ID</TableCell>
            <TableCell align="left">Shipping PO</TableCell>
            <TableCell align="left">Shipment ID</TableCell>
            <TableCell align="left">Boxes Received</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.ShipmentID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.ShipmentID}
              </TableCell>
              <TableCell align="left">{row.WarehouseID}</TableCell>
              <TableCell align="left">{row.ShippingPO}</TableCell>
              <TableCell align="left">{row.ShipmentID}</TableCell>
              <TableCell align="left">{row.BoxesRcvd}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10,100]}
        component="div"
        count={rows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>

  );
}



