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
      <div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-mesh" />
      <div className="absolute left-[-10rem] top-[22rem] -z-10 h-[22rem] w-[22rem] rounded-full bg-brand-200/20 blur-3xl" />
      <div className="absolute right-[-8rem] top-[40rem] -z-10 h-[20rem] w-[20rem] rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute inset-x-0 top-[58rem] -z-10 h-[140rem] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.5)_8%,rgba(255,255,255,0)_100%)]" />
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
