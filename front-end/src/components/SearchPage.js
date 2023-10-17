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
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";

const defaultTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function SearchPage() {
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
