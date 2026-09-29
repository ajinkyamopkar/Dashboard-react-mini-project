import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/* boostrap framework link use here */ 
import 'bootstrap/dist/css/bootstrap.min.css';

/* tailwind css framework link use here */ 
import './styles/tailwind.css';
import './styles/animations.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
