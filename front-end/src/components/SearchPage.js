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
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function MetaphorSearchResultTable({ dataJson }) {
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
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.peom_Line}</TableCell>
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

export default function SearchPage() {
  const [backendData, setBackendData] = useState([]);
  const [metaphorQuery, setMetaphorQuery] = useState("");
  const [meaningQuery, setMeaningQuery] = useState("");

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSearch = () => {
    fetch(`/search?metaphorical_term=${metaphorQuery}&meaning=${meaningQuery}`)
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data.map((item) => item._source));
      })
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    fetch("/getAll")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data.map((item) => item._source));
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Translate sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/homePage"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              සිංහල කවි සංචය
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem key="homePageKey" href="/homePage">
                  <Link href="/homePage" underline="none" color={"inherit"}>
                    <Typography textAlign="center">Home</Typography>
                  </Link>
                </MenuItem>
                <MenuItem key="addNewPageKey" href="/addNewPage">
                  <Link href="/addNewPage" underline="none" color={"inherit"}>
                    <Typography textAlign="center">Add New</Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
            <Translate sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/homePage"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              සිංහල කවි සංචය
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                key={"homePageKey"}
                href="/homePage"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Home
              </Button>
              <Button
                key={"addNewPageKey"}
                href="/addNewPage"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Add New
              </Button>
            </Box>
          </Toolbar>
        </Container>
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
              <TextField
                fullWidth
                id="metaphor-search"
                label="Search Metaphor"
                variant="outlined"
                value={metaphorQuery}
                onChange={(e) => setMetaphorQuery(e.target.value)}
              />
              <TextField
                fullWidth
                id="meaning-search"
                label="Search Meaning"
                variant="outlined"
                value={meaningQuery}
                onChange={(e) => setMeaningQuery(e.target.value)}
              />
              <Button
                variant="contained"
                startIcon={<SearchIcon />}
                sx={{ width: "350px" }}
                onClick={handleSearch}
              >
                Search
              </Button>
            </Stack>
            <MetaphorSearchResultTable dataJson={backendData} />
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
          Educational Purposes Only
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
