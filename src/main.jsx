
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap-icons/font/bootstrap-icons.css';

import './index.css';


import { Form1 } from './validation/form';
//import { Exstudent } from './validation/studentform';
//import { Homes } from './food/home';
//import { Exhome } from './appbar/home';
//import { Cal1 } from './calculator/calculator1';
//import { Calculator } from './calculator/calculator';
//import { Practice } from './usecontext/home1';
//import { ThemeProvider } from './usecontext/themecontext';
//import Home from './usecontext/home'; //
//import { ThemeProvider } from './usecontext/themecontext';
//import Home from "./usecontext/home";  // Assuming Home is the default export in the file

createRoot(document.getElementById('root')).render(

  <StrictMode>
    
    <Form1/>
  </StrictMode>

);
