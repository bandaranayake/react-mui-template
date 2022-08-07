import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#0077C8",
      },
      secondary: {
        main: "#5B6770",
      },
      background: {
        default: "#F5FCFF",
      },
    },
  })
);
