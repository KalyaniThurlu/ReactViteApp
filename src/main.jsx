
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap-icons/font/bootstrap-icons.css';

import './index.css';
//import { Practice } from './usecontext/home1';
import { ThemeProvider } from './usecontext/themecontext';
import Home from './usecontext/home'; //
//import { ThemeProvider } from './usecontext/themecontext';
//import Home from "./usecontext/home";  // Assuming Home is the default export in the file

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  </StrictMode>

);
