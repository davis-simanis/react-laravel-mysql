import React from 'react';
import {
  Outlet,
  createBrowserRouter,
  useRouteError,
  redirect
} from 'react-router-dom';
import { View, Create, Preview } from './routes/document';
import axios from 'axios';

function formatFormData(formData) {
  const { document_name } = formData;
  const fields = Object.entries(formData)
    .reduce((acc, [key, value], i) => {
      const index = key.split('-')[1] || -1;
      const fieldName = key.split('-')[0];

      if (index < 0) {
        return acc;
      }

      acc[index] = { ...acc[index], [fieldName]: value };

      return acc;
    }, [])
    .filter(Boolean);

  return {
    document_name,
    fields
  };
}

function formatFieldResponse(field) {
  const {
    field_name: name,
    field_seq: sequence,
    field_type: type,
    is_mandatory: isMandatory
  } = field;

  return { name, sequence, type, isMandatory };
}

function formatDocumentResponse(response) {
  return response
    .reduce(
      (acc, { id, fields, document_name: name, created_at: createdAt }) => {
        acc[id] = {
          name,
          id,
          createdAt,
          fields: fields.map((field) => formatFieldResponse(field))
        };

        return acc;
      },
      []
    )
    .filter(Boolean);
}

async function onFormSubmit({ request }) {
  const data = Object.fromEntries(await request.formData());
  const formattedData = formatFormData(data);

  return axios
    .post('http://localhost:8081/api/documents', formattedData)
    .then(({ data }) => data)
    .catch((error) => error);
}

async function onPageRender() {
  return axios
    .get('http://localhost:8081/api/documents')
    .then(({ data }) => formatDocumentResponse(data))
    .catch((error) => error);
}

function ErrorElement() {
  const { data: errorMessage } = useRouteError();
  console.error(useRouteError());

  return <div>{errorMessage}</div>;
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
        index: true,
        id: 'login',
        loader: () => {
          return redirect(window.location.origin + ':8081');
        }
      },
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
