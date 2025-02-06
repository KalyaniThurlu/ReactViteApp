
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Excallback from './hooks/Usecallback';
//import Curdoperations from './Router/curd1';
//import ImageGallery from './Router/ExApi';
//import UncontrolledComponents from './Router/UncontrolledComponents';
//import Login from './Router/ControlledCOmponents';
//import NestedNumberList from './Router/numberlist';
//import ApiExample from './Router/Api';
//import Formvalidation from './Router/Formvalidation';
//import FormValidationFormik from './Router/FormikFormValidation';

//import { Navbar1 } from './Router/navbar';
//import { Home1 } from './router/home';

//import { ThemeProvider } from './usecontext/themecontext';
//import Home from "./usecontext/home";  // Assuming Home is the default export in the file

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Excallback />
  </StrictMode>

);
