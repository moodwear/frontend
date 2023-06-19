import { createTheme } from "@mui/material";
import colors from "./colors";

const theme = createTheme({
  palette: {
    primary: { main: colors.blue },
    secondary: { main: colors.pink },
    text: {
        primary: colors.gray,
        secondary: colors.lightGray,
    },
    background: {
        default: colors.background
    }
  },
});

export default theme;
