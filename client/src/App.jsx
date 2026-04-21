import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GetQuotePage from './pages/GetQuotePage';
import HomePage from './pages/HomePage';
import LocationDetailPage from './pages/LocationDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import SearchLocationPage from './pages/SearchLocationPage';
import ServicesPage from './pages/ServicesPage';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('adminToken');
  return token ? children : <Navigate to="/admin/login" replace />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/search-location" element={<SearchLocationPage />} />
        <Route path="/locations/:locationSlug" element={<LocationDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/get-quote" element={<GetQuotePage />} />
      </Route>
      <Route path="/admin/login" element={<LoginPage />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
