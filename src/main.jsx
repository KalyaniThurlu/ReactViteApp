import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap-icons/font/bootstrap-icons.css';

import './index.css'
import { FakestoreIndex } from './fakestore1/fakestoreindex'
//import { Navbar } from './navbar/navbar'
//import { Indexpage } from './navbar/indexpage'
//import IndexApp from './Appbar/Appindex'
//import { Bmicalculator } from './BMI/bmi'
//import { Appbar } from './fakestore/Appbar.jsx'
//import { Navbar } from './navbar/navbar.jsx'

createRoot(document.getElementById('root')).render(
 
 
  <StrictMode>
   
   
  <FakestoreIndex/>
  </StrictMode>


)
