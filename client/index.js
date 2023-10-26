import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store';
import styles from './scss/index.scss';

const root = createRoot(document.getElementById('app'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <div className='footer'>
        <p>Version.1.5</p>
        <p>Iterated by Spencer, Hadrian, Jeremy, Nam</p>
      </div>
    </Provider>
  </BrowserRouter>
);
