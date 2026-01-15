import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

// main.tsx
localStorage.setItem(
  'token',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJzdWIiOiJhZG1pbiIsImp0aSI6IjY0YjEyMGQ3LWU3ZDItNDkyNi05NmY5LTE2ODI5OWI4Zjc3YiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoi2KPYr9in2LHZiiIsImV4cCI6MTc2ODc1MjI5MCwiaXNzIjoiUmF0ZUFQSSIsImF1ZCI6IlJhdGVsQ2xpZW50In0.UhCkAvhD-UDEZTk05obziXWxS8XAUTF0frI2WF2XyEE'
);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
