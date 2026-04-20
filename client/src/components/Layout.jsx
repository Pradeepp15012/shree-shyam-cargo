import { Outlet } from 'react-router-dom';
import FloatingActions from './FloatingActions';
import Footer from './Footer';
import Header from './Header';

export default function Layout() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-mesh" />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

