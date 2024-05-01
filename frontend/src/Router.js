import React from 'react';
import { Outlet, createBrowserRouter, useRouteError } from 'react-router-dom';
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
    .reduce((acc, { id, fields, document_name: name, created_at: createdAt }) => {
      acc[id] = {
        name,
        id,
        createdAt,
        fields: fields.map((field) => formatFieldResponse(field))
      };

      return acc;
    }, [])
    .filter(Boolean);
}

async function onFormSubmit({ request }) {
  const data = Object.fromEntries(await request.formData());
  const formattedData = formatFormData(data);

  console.log('form submitted with data (formatted): ', formattedData);

  return axios
    .post('http://localhost:8081/api/documents', formattedData)
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
      // const formattedData = data
      //   .reduce((acc, { id, ...rest }) => {
      //     acc[id] = { id, ...rest };

      //     return acc;
      //   }, [])
      //   .filter(Boolean);
      const formattedData = formatDocumentResponse(data);
      console.log('page rendered: ', formattedData);

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
