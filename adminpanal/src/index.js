import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SidebarProvider } from './context/SidebarContext.jsx';
import { Provider } from 'react-redux';
import {store} from './app/store.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </Provider>
);

reportWebVitals();
