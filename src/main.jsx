import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { router } from './router/AppRouter';

import './styles.css'
import { AppTheme } from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppTheme>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AppTheme>
  </React.StrictMode>,
)
