import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import HomePage from '../pages/Home';
import NotFoundPage from '../pages/NotFound';

const Router = (
  <Route>
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Route>
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(Router));

export default rootRouter;
