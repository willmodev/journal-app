import { Outlet } from 'react-router-dom';
import { useCheckAuth } from './auth/hooks';
import { CheckingAuth } from './ui/components';


export const Root = () => {

  const { status } = useCheckAuth();

  if (status === 'checking') return  <CheckingAuth />

  return (
    <>
      <Outlet />
    </>
  );
};
