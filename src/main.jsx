import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from 'redux/app/configureStore';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sample from 'components/pages/Sample/Sample';

import 'styles/index.scss';

// Add page components here
const router = createBrowserRouter([
  {
    path: "/",
    element: <Sample />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
