import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import FloatingActions from './FloatingActions';
import Footer from './Footer';
import Header from './Header';
import LocationDirectorySection from './LocationDirectorySection';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-mesh" />
      <Header />
      <main>
        <Outlet />
      </main>
      <LocationDirectorySection />
      <Footer />
      <FloatingActions />
    </div>
  );
}
