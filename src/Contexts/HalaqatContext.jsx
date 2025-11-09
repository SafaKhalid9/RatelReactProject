/* eslint-disable react-refresh/only-export-components */
import { createDataContext } from './createDataContext';

// غيّر الرابط إلى رابط الـ API الفعلي للحلقات
const { Provider: HalaqatProvider, useData: useHalaqat } = createDataContext(
    'https://jsonplaceholder.typicode.com/users'
);

export { HalaqatProvider, useHalaqat };
