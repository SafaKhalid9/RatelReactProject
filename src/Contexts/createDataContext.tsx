import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import axios from "axios";

interface DataContextValue<T> {
  data: T[];
  setData: React.Dispatch<React.SetStateAction<T[]>>;
  loading: boolean;
}

interface ProviderProps {
  children: ReactNode;
}

export function createDataContext<T = unknown>(endpoint: string) {
  const DataContext = createContext<DataContextValue<T> | undefined>(undefined);

  const Provider = ({ children }: ProviderProps) => {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      axios
        .get(endpoint)
        .then((res) => setData(res.data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }, [endpoint]);

    return (
      <DataContext.Provider value={{ data, setData, loading }}>
        {children}
      </DataContext.Provider>
    );
  };

  const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
      throw new Error("useData must be used inside the corresponding Provider");
    }
    return context;
  };

  return { Provider, useData };
}
