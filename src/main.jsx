import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import { router } from './Router/Routes.jsx'
import ThemeProvider from './Provider/ThemeProvider';
import { QueryClientProvider,QueryClient} from '@tanstack/react-query'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
    </QueryClientProvider>
   
  </React.StrictMode>,
)
