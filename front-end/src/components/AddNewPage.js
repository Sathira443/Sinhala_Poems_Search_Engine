import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Translate from "@mui/icons-material/Translate";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";

const defaultTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function AddNewPage() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleInsert = () => {
    console.log("In");

    const poem = document.getElementById("poem-insert").value;
    const poet = document.getElementById("poet-insert").value;
    const period = document.getElementById("era-insert").value;
    const year_of_publish = document.getElementById("year-insert").value;
    const poem_Line = document.getElementById("poem-line-insert").value;
    const metaphor = document.getElementById("metaphor-insert").value;
    const meaning = document.getElementById("meaning-insert").value;
    const documentData = {
      poem,
      poet,
      period,
      year_of_publish,
      poem_Line,
      metaphor_present: "yes",
      metaphor_count: "1",
      metaphor,
      meaning
    };

    fetch("/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(documentData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Document inserted successfully:", data);
      })
      .catch((error) => console.error("Error:", error));
  };

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
                <MenuItem key="searchPageKey" href="/searchPage">
                  <Link href="/searchPage" underline="none" color={"inherit"}>
                    <Typography textAlign="center">Search</Typography>
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
                key={"searchPageKey"}
                href="/searchPage"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Search
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Container maxWidth="md">
          <Stack
            sx={{ pt: 4 }}
            direction="column"
            spacing={3}
            justifyContent="center"
          >
            <TextField
              fullWidth
              id="poem-line-insert"
              label="Poem Line"
              variant="outlined"
            />
            <Stack
              sx={{ pt: 2 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <TextField
                fullWidth
                id="poem-insert"
                label="Poem Name"
                variant="outlined"
              />
              <TextField
                fullWidth
                id="poet-insert"
                label="Poet Name"
                variant="outlined"
              />
            </Stack>
            <Stack
              sx={{ pt: 2 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <TextField
                fullWidth
                id="era-insert"
                label="Era"
                variant="outlined"
              />
              <TextField
                fullWidth
                id="year-insert"
                label="Year of Publication"
                variant="outlined"
              />
            </Stack>
            <Stack
              sx={{ pt: 2 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <TextField
                fullWidth
                id="metaphor-insert"
                label="Metaphor"
                variant="outlined"
              />
              <TextField
                fullWidth
                id="meaning-insert"
                label="Meaning"
                variant="outlined"
              />
            </Stack>
            <Button
              variant="contained"
              startIcon={<SendIcon />}
              onClick={handleInsert}
              fullWidth
            >
              Add
            </Button>
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
