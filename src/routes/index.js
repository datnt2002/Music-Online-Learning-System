import React from 'react';

import { AdminRoute, NotFound } from '../components/Common';
import ContentAdmin from '../features/Admin/ContentAdmin';
import Homepage from '../features/Home/Homepage';

export const publicRoutes = [
  { path: '/', element: <Homepage /> },
  {
    path: '*',
    element: <NotFound />,
  },
];
export const adminRoutes = [
  {
    path: '/admin',
    element: (
      <AdminRoute>
        <ContentAdmin />
      </AdminRoute>
    ),
  },
];
