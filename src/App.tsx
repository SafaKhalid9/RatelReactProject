import { Toaster } from "./Components/ShadCn/sonner";
import { TooltipProvider } from "./Components/ShadCn/tooltip";
import AllRoutes from "./Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AllRoutes />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
