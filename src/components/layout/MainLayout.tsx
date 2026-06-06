import Navbar from '@/components/layout/Navbar';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';

const MainLayout = () => {
  const location = useLocation();

  const hideNavbar = location.pathname === '/search-mobile';

  const hideLayout = location.pathname === '/search-mobile';

  return (
    <>
      {!hideNavbar && <Navbar />}

      <main>
        <Outlet />
      </main>

      {!hideLayout && <Footer />}
    </>
  );
};

export default MainLayout;
