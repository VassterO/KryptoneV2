import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppWrapper from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <AppWrapper />
    </React.StrictMode>
);

reportWebVitals();
