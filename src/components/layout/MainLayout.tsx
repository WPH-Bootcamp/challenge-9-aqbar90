import Navbar from '@/components/layout/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
