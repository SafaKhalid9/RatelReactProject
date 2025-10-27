import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export function createDataContext(endpoint) {
    const DataContext = createContext();

    const Provider = ({ children }) => {
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);

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

    const useData = () => useContext(DataContext);
    return { Provider, useData };
}
