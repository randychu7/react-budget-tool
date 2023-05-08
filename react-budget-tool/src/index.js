import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App.js';

//createRoot means it tells react to make this the main place to render stuff through JS.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
