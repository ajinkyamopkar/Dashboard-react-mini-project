import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Order matters: Bootstrap first (reset + layout), Tailwind second
// (micro-styling), custom CSS last (animation). No overrides needed.
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/tailwind.css';
import './styles/animations.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
