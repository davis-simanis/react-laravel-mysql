import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import DocumentsPage from './pages/Documents';
import NotFound from './pages/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/documents">
          <Route index element={<DocumentsPage type='view' />} />
          <Route path=":document_id" element={<DocumentsPage type='view' />} />
          <Route path="edit" element={<DocumentsPage type='edit' />} />
          <Route path="create" element={<DocumentsPage type='create' />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
