import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from "./router.tsx";
import LanguageContext from "./contexts/languageContext.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <LanguageContext value={'en'}>
          <RouterProvider router={router} />
      </LanguageContext>
  </StrictMode>,
)
