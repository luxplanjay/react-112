import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import LangProvider from './context/lang';
import 'modern-normalize';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <LangProvider>
            <App />
        </LangProvider>
    </React.StrictMode>
);
