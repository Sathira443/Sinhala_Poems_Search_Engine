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
import Pagination from "@mui/material/Pagination";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Collapse, List, ListItem, ListItemText } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#044ff5",
    },
  },
});

const itemsPerPage = 5;

function MetaphorSearchResultTable({ dataJson, currentPage, itemsPerPage }) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [open, setOpen] = React.useState(false);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Poem</TableCell>
            <TableCell align="right">Metaphor</TableCell>
            <TableCell align="right">Meaning</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataJson.slice(startIndex, endIndex).map((row, index) => (
            <React.Fragment key={`fragmentKey-${index}`}>
              <TableRow
                key={`tableRowKey-${index}`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                  >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
                </TableCell>
                <TableCell>{row.poem}</TableCell>
                <TableCell align="right">{row.metaphorical_term}</TableCell>
                <TableCell align="right">{row.meaning}</TableCell>
              </TableRow>
              <TableRow key={`additionalTableRowKey-${index}`}>
                <TableCell
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  colSpan={6}
                >

                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List>
                      <Typography variant="h6" gutterBottom component="div">
                        More Details
                      </Typography>
                      <ListItem>
                        <ListItemText
                          primary="Poem Line"
                          secondary={row.poem_line}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Poet" secondary={row.poet} />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Year of Publication"
                          secondary={row.year_of_publish}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Era" secondary={row.period} />
                      </ListItem>
                    </List>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
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
  const [currentPage, setCurrentPage] = useState(1);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSearch = () => {
    setCurrentPage(1);
    fetch(
      `https://sinhala-poems-search-engine-backend.onrender.com/search?metaphorical_term=${metaphorQuery}&meaning=${meaningQuery}`
    )
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data.map((item) => item._source));
      })
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    fetch("https://sinhala-poems-search-engine-backend.onrender.com/getAll")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data.map((item) => item._source));
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Translate sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
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
                <MenuItem key="homePageKey" href="/">
                  <Link href="/" underline="none" color={"inherit"}>
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
              href="/"
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
                href="/"
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
            <MetaphorSearchResultTable
              dataJson={backendData}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
            />
            <Pagination
              count={Math.ceil(backendData.length / itemsPerPage)}
              page={currentPage}
              color="primary"
              onChange={(event, page) => setCurrentPage(page)}
            />
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
