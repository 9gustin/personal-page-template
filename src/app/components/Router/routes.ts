import Route from './types';
import { PATHS } from './paths';
import Home from '../../pages/Home';

// const Home = React.lazy(() => import('../../pages/Home'));

export const ROUTES: Route[] = [
  {
    path: PATHS.Home,
    component: Home,
    name: 'Login',
    exact: true
  }
];
