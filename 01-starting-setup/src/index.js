import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App'; // ommit .js extension

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // Adds the App into the root element (div class="root")

// The code is transformed before being executed