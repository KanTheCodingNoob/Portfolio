import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from "./router.tsx";
import './i18n/config.ts'
import ThemeProvider from "./contexts/themeProvider.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider>
          <RouterProvider router={router} />
      </ThemeProvider>
  </StrictMode>
)
