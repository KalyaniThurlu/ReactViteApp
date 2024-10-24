import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap-icons/font/bootstrap-icons.css';

import './index.css'




import { Home1 } from './router/home';

createRoot(document.getElementById('root')).render(
  
 
  <StrictMode>
  <Home1/>
  </StrictMode>


)
