import { QueryClient,QueryClientProvider } from "@tanstack/react-query";

import { Router } from "./Router";

const client = new QueryClient();

export const App = () => (
  <QueryClientProvider client={client}>
    <Router />
  </QueryClientProvider>
);
