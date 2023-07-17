import React from 'react';
import { RouterProvider } from 'react-router-dom';
import rootRouter from './routes/Router';
import ClinicWordProvider from './contexts/ClinicWordProvider';

function App() {
  return (
    <ClinicWordProvider>
      <RouterProvider router={rootRouter} />
    </ClinicWordProvider>
  );
}

export default App;
