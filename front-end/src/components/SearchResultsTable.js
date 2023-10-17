import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function SearchResultsTable({ results }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Search Results</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((result, index) => (
            <TableRow key={index}>
              <TableCell>{result}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SearchResultsTable;
