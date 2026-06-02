import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div
      className="
        min-h-screen
        bg-neutral-25
        text-neutral-900
      "
    >
      {/* Navbar */}

      <main>
        <Outlet />
      </main>

      {/* Footer */}
    </div>
  );
};

export default MainLayout;
