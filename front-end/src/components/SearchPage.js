import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Translate from "@mui/icons-material/Translate";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function MetaphorSearchResultTable({dataJson}) {
  console.log("index_json", dataJson);
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Poem Line</TableCell>
            <TableCell align="right">Poem</TableCell>
            <TableCell align="right">Poet</TableCell>
            <TableCell align="right">Year of Publication</TableCell>
            <TableCell align="right">Era</TableCell>
            <TableCell align="right">Metaphor</TableCell>
            <TableCell align="right">Meaning</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataJson.map((row, index) => (
            <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell>
                {row.peom_Line}
              </TableCell>
              <TableCell align="right">{row.poem}</TableCell>
              <TableCell align="right">{row.poet}</TableCell>
              <TableCell align="right">{row.year_of_publish}</TableCell>
              <TableCell align="right">{row.period}</TableCell>
              <TableCell align="right">{row.metaphorical_term}</TableCell>
              <TableCell align="right">{row.meaning}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function MetaphorSearchBox() {
  return (
    <TextField
      fullWidth
      id="metaphor-search"
      label="Serach Metaphor"
      variant="outlined"
    />
  );
}


function MeaningSearchBox() {
  return (
    <TextField
      fullWidth
      id="meaning-search"
      label="Serach Meaning"
      variant="outlined"
    />
  );
}

export default function SearchPage() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/getAll")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data.map((item) => item._source));
        console.log("Backend Data:", data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Translate sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Search Page
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container fixed>
          <Stack
            sx={{ pt: 4 }}
            direction="column"
            spacing={5}
            justifyContent="center"
          >
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={3}
              justifyContent="center"
            >
              <MetaphorSearchBox />
              <MeaningSearchBox />
              <Button
                variant="contained"
                startIcon={<SearchIcon />}
                sx={{ width: "350px" }}
              >
                Search
              </Button>
            </Stack>
            <MetaphorSearchResultTable dataJson={backendData}/>
          </Stack>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Computer Science and Engineering Department, University of Moratuwa,
          Sri Lanka
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
