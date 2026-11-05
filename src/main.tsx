import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/gradients.css';

// Gradient experiment: ?gradient=a|b|c picks a palette (default b), ?gradient=off shows the original flat design.
const gradient = new URLSearchParams(window.location.search).get('gradient') ?? 'b';
if (gradient !== 'off') document.documentElement.dataset.qdGradient = gradient;

createRoot(document.getElementById('root')!).render(<App />);
