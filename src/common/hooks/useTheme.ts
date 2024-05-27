import { useContext } from "react";

import { ThemeContext } from "@app/common/providers/ThemeProvider";

export const useTheme = () => {
  return useContext(ThemeContext);
};