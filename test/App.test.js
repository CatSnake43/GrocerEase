import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../client/App.jsx';
import { Provider } from 'react-redux';
import store from '../client/store.js';

describe('App', () => {
  it('renders App component', () => {
    render(
      <BrowserRouter>
      <Provider store={store}>
        <App />
        </Provider>
      </BrowserRouter>
    );
    screen.debug();
  });
});