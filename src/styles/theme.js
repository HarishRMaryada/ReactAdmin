import { createMuiTheme } from "@material-ui/core/styles";

import { primaryBlue } from "./colors";

const theme = createMuiTheme({
  palette: {
    primary: primaryBlue
  },
  typography: {
    useNextVariants: true
  }
});

export default theme;
