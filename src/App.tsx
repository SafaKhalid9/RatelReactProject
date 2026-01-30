import { Toaster } from "./Components/ShadCn/sonner";
import AllRoutes from "./Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AllRoutes />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
