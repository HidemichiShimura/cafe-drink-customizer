import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sample from 'components/pages/Sample/Sample';

import 'styles/index.scss';

// Add page components here
const router = createBrowserRouter([
  {
    path: "/",
    element: <React.Suspense fallback={<div>Loading...</div>}>
      <Sample />
    </React.Suspense>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
