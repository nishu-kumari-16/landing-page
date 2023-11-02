import React, { FC } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { lightTheme } from "../helpers/theme";

const ThemeHOC: FC<{ children: React.ReactElement }> = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default ThemeHOC;
