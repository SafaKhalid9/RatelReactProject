/* eslint-disable react-refresh/only-export-components */
import { createDataContext } from './createDataContext';

const { Provider: ManhajProvider, useData: useManhaj } = createDataContext(
    'https://jsonplaceholder.typicode.com/posts',
);

export { ManhajProvider, useManhaj };
