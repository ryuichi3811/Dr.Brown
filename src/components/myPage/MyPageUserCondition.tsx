import { css } from "@emotion/react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Line from "./graphLine";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const classes = {
  box:css`
    opacity: 0.9;
  `,
  table:css`
    margin-top:20px;
  `
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgba(149, 76, 233, 0.8)",
    color: "#fff",
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  date: string,
  record: number
) {
  return { date, record };
}

const rows = [
  createData('日付', 56),
  createData('日付', 57),
  createData('日付', 57.2),
  createData('日付', 57.2),
  createData('日付', 56.9),
];

export default function MyPageUserCondition() {
  return (
    <Card css={classes.box}>
      <CardContent>
        {/* 折れ線グラフ import */}
        <Line />

        {/* 記録一覧 */}
        <TableContainer component={Paper} css={classes.table}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>日付</StyledTableCell>
                <StyledTableCell align="right">項目名</StyledTableCell>
              </TableRow>
            </TableHead>
            
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.date}>
                  <StyledTableCell  scope="row">
                    {row.date}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.record}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>

  );
}