import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://rb.gy/peojsa">
        SathiraL
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function HomePage() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
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
                <MenuItem key={"searchKey"} onClick={handleCloseNavMenu}>
                  <Link href="/searchPage" underline="none" color={"inherit"}>
                    <Typography textAlign="center">Search</Typography>
                  </Link>
                </MenuItem>
                <MenuItem key={"addNewKey"} onClick={handleCloseNavMenu}>
                  <Link href="/addNewPage" underline="none" color={"inherit"}>
                    <Typography textAlign="center" hr>Add New</Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                href="/searchPage"
                key={"searchKey"}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Search
              </Button>
              <Button
                href="/addNewPage"
                key={"addNewKey"}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Add New
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Grid container>
          <Grid item xs={6}>
            <Box
              sx={{
                bgcolor: "background.paper",
                pt: 9,
                pb: 7,
              }}
            >
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h3"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  සිංහල කවි සංචය
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  Sinhala Kavi Sanchaya is an innovative application that aims
                  to provide a user friendly metaphor search engine based on few
                  books to resource for poets and literary enthusiasts in the
                  Sinhala-speaking community
                </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Button href="/searchPage" variant="contained">
                    Search Metaphor
                  </Button>
                  <Button href="/addNewPage" variant="outlined">
                    Add New Metaphor
                  </Button>
                </Stack>
              </Container>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                bgcolor: "background.paper",
                pt: 9,
                pb: 7,
              }}
            >
              <Container maxWidth="sm">
                <ImageList
                  sx={{ width: 500, height: 450 }}
                  cols={3}
                  rowHeight={164}
                >
                  {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Container>
            </Box>
          </Grid>
        </Grid>
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
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

const itemData = [
  {
    img: "https://miro.medium.com/v2/resize:fit:660/1*NZzLRhW6SgwqE3wNUgyErQ.jpeg",
    title: "Mahagamasekara",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Kumaratunga_Munidasa_%281887-1944%29.jpg",
    title: "Kumarathunga Munidasa",
  },
  {
    img: "https://island.lk/wp-content/uploads/2021/01/arisen.jpg",
    title: "Arisen Ahubudu",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMMEdMm2C2COBnYSI14_-d-uvb-DBscR1d9z7-cwubqJ0LImNOTbrXwjETsgbdjLdCk8&usqp=CAU",
    title: "Parakrama Kodithuwakku",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Sagara_Palansuriya.jpg/220px-Sagara_Palansuriya.jpg",
    title: "Sagara Palansuriya",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/4/46/Most.Venerable_Tibet_Sikkim_Mahinda_Thera_%28c.1901-1951%29.jpg",
    title: "S. Mahinda Thero",
  },
  {
    img: "https://www.lankaweb.com/news/items/wp-content/uploads/2018/06/GBSenanayake.jpg",
    title: "P.B. Wijesundara",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Saman_Tilakasiri%2C_writer_and_poet_of_Sri_Lanka_.jpg",
    title: "Saman Thilakasiri",
  },
  {
    img: "https://i0.wp.com/thuppahis.com/wp-content/uploads/2017/04/aaaa-obey.jpg?ssl=1",
    title: "Rajini Obesekara",
  },
];
