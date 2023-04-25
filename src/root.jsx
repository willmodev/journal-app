import { Outlet } from 'react-router-dom';
import { AppTheme } from './theme';


export const Root = () => {
  return (
    <AppTheme>
        <Outlet />
    </AppTheme>
  );
};
