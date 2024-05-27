import { QueryClient,QueryClientProvider } from "@tanstack/react-query";

import { ThemeProvider } from "./common/providers/ThemeProvider";
import { Router } from "./Router";

const client = new QueryClient();


export const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={client}>
      <Router />
    </QueryClientProvider>
  </ThemeProvider>
);
