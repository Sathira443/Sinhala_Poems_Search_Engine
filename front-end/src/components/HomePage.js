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
import Link from "@mui/material/Link";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";

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
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Translate sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Home Page
          </Typography>
        </Toolbar>
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
                  Sinhala Kavi Sanchaya
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
                  <Button href="/searchPage" variant="contained">Search Metaphor</Button>
                  <Button variant="outlined">See Resources</Button>
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
          Computer Science and Engineering Department, University of Moratuwa,
          Sri Lanka
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
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
