import React from 'react';
import { RouterProvider } from 'react-router-dom';
import rootRouter from './routes/Router';

function App() {
  return <RouterProvider router={rootRouter} />;
}

export default App;
