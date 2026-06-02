import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routers';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
// TODO: Setup routing dengan React Router
// TODO: Implement layout structure
// TODO: Add navigation between pages
