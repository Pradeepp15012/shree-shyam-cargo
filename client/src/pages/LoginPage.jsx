import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { loginAdmin } from '../api/api';
import Seo from '../components/Seo';

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const data = await loginAdmin(formData);
      localStorage.setItem('adminToken', data.token);
      toast.success('Login successful.');
      navigate('/admin');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Invalid credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <Seo
        title="Admin Login | Shree Shyam Cargo Packers & Movers"
        description="Admin login for lead management dashboard."
        path="/admin/login"
      />
      <form onSubmit={handleSubmit} className="glass-card w-full max-w-md space-y-5 p-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-700">Admin Login</p>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-ink">Manage Leads</h1>
        </div>
        <input
          className="input-field"
          type="email"
          name="email"
          placeholder="Admin Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="input-field"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button className="btn-primary w-full" disabled={loading} type="submit">
          {loading ? 'Signing in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

