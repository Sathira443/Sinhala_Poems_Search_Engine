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

const defaultTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function AddNewPage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Translate sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Add New Metaphor Page
          </Typography>
        </Toolbar>
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
            <Button variant="contained" startIcon={<SendIcon />} fullWidth>
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
