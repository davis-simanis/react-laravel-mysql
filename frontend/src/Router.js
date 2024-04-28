import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { View, Edit, Create } from './pages/Documents';
import NotFound from './pages/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/documents">
          <Route path="view" element={<View />} />
          <Route path="edit" element={<Edit />} />
          <Route path="create" element={<Create />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
