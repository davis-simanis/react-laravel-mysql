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
      const formattedData = data
        .reduce((acc, { id, ...rest }) => {
          acc[id] = { id, ...rest };

          return acc;
        }, [])
        .filter(Boolean);
      console.log(formattedData);

      return formattedData;
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
    id: 'root',
    children: [
      {
        path: 'documents',
        id: 'documents',
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
            element: <View />
          },
          {
            path: 'create',
            element: <Create />
          },
          {
            path: ':documentId',
            element: <Preview />
          }
        ]
      }
    ]
  }
]);

export default router;
