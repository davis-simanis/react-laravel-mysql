import React from 'react';
import NotFound from './pages/NotFound';
import { Outlet, createBrowserRouter, useRouteError } from 'react-router-dom';
import { View, Create, Preview } from './routes/document';
import axios from 'axios';

async function onFormSubmit({ request }) {
  const data = await request.formData();
  console.log('root route action', Object.fromEntries(data));

  return axios
    .post('http://localhost:8081/api/documents', data)
    .then(({ data }) => {
      console.log(data);

      return data;
    })
    .catch((error) => {
      console.log(error);

      return error;
    });
}

async function onPageRender() {
  return axios
    .get('http://localhost:8081/api/documents')
    .then(({ data }) => {
      console.log(data);

      return data;
    })
    .catch((error) => {
      console.log(error);

      return error;
    });
}

function ErrorElement() {
  let error = useRouteError();
  console.error(error);

  return <div>Dang!</div>;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <div>Hello world! </div>
        <Outlet />
      </>
    ),
    errorElement: <ErrorElement />,
    children: [
      {
        path: 'documents',
        element: (
          <div>
            <span>Document route</span>
            <Outlet />
          </div>
        ),
        action: onFormSubmit,
        loader: onPageRender,
        children: [
          {
            index: true,
            element: <View />,
            loader: () => {
              return { data_fetch: 'this is data from db' };
            }
          },
          {
            path: 'create',
            element: <Create />
          },
          {
            path: ':documentId',
            element: <Preview />,
            loader: () => {
              return { data_fetch: 'this is data from db' };
            }
          }
        ]
      }
    ]
  }
]);

export default router;
