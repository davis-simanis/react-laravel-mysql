import React from 'react';
import NotFound from './pages/NotFound';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { View, Create, Preview } from './routes/document';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <div>Hello world! </div>
        <Outlet />
      </>
    ),
    errorElement: <NotFound />,
    loader: () => {
      return { data_fetch: 'this is data from db' };
    },
    action: () => {
      console.log('root route action');
    },
    children: [
      {
        path: 'documents',
        element: (
          <div>
            <Outlet />
          </div>
        ),
        children: [
          {
            path: ':documentId',
            element: <View />
          },
          {
            path: 'create',
            element: <Create />
          },
          {
            path: 'preview/:documentId',
            element: <Preview />
          }
        ]
      }
    ]
  }
]);

export default router;
