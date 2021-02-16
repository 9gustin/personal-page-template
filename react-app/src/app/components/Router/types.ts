import { FunctionComponent } from 'react';
import { PATHS } from './paths';

interface Route {
  path?: PATHS;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
  // component: React.LazyExoticComponent<() => JSX.Element>;
  name?: string;
  exact?: boolean;
}

export default Route;
