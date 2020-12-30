import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#f7c7cf",
      main: "#fff",
      dark: "#f3556f",
    },
    secondary: {
      main: "#ff0000",
    },
    backgound: {
      grey: {
        main: "#607d8b",
      },
      red: {},
    },
    text: {
      primary: "#00ffff",
      secondary: "#000000",
      red: "#ff0000",
    },
  },
  typography: {
    h1: {
      fontSize: "60",
      fontWeight: "700",
    },
    h2: {
      fontSize: "30",
      fontWeight: "600",
    },
    h3: {},
    h4: {},
    h5: {},
    h6: {
      fontSize: "20",
      fontWeight: "400",
    },
    subtitle1: {
      fontSize: "16",
      fontWeight: "300",
    },
    subtitle2: {},
    body1: "span",
    body2: "span",
  },
  breakpoints: {},
  spacing: 10,
});

export default theme;
