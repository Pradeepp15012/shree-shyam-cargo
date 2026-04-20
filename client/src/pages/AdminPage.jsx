import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { deleteLead, getLeads, updateLead } from '../api/api';
import LoadingSkeleton from '../components/LoadingSkeleton';
import Seo from '../components/Seo';
import { formatDate } from '../utils/helpers';

export default function AdminPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const data = await getLeads();
      setLeads(data.leads);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Unable to fetch leads.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await updateLead(id, { status });
      toast.success('Lead updated.');
      fetchLeads();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Unable to update lead.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteLead(id);
      toast.success('Lead deleted.');
      setLeads((prev) => prev.filter((lead) => lead._id !== id));
    } catch (error) {
      toast.error(error.response?.data?.message || 'Unable to delete lead.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/admin/login';
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-8">
      <Seo title="Admin Dashboard" description="Admin dashboard for lead management." path="/admin" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-700">Dashboard</p>
            <h1 className="mt-2 font-display text-3xl font-extrabold text-ink">Lead Management</h1>
          </div>
          <button onClick={handleLogout} className="btn-outline">
            Logout
          </button>
        </div>

        {loading ? (
          <LoadingSkeleton rows={8} />
        ) : (
          <div className="overflow-hidden rounded-3xl bg-white shadow-soft">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-ink text-left text-xs uppercase tracking-[0.2em] text-white">
                  <tr>
                    <th className="px-6 py-4">Customer</th>
                    <th className="px-6 py-4">Route</th>
                    <th className="px-6 py-4">Service</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead._id} className="border-t border-slate-100">
                      <td className="px-6 py-5">
                        <p className="font-semibold text-ink">{lead.name}</p>
                        <p className="text-sm text-slate-500">{lead.phone}</p>
                      </td>
                      <td className="px-6 py-5 text-sm text-slate-600">
                        {lead.pickup} to {lead.drop || 'N/A'}
                      </td>
                      <td className="px-6 py-5 text-sm text-slate-600">{lead.serviceType}</td>
                      <td className="px-6 py-5 text-sm text-slate-600">{formatDate(lead.date)}</td>
                      <td className="px-6 py-5">
                        <select
                          className="select-field min-w-36"
                          value={lead.status}
                          onChange={(event) => handleStatusChange(lead._id, event.target.value)}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="converted">Converted</option>
                          <option value="closed">Closed</option>
                        </select>
                      </td>
                      <td className="px-6 py-5">
                        <button onClick={() => handleDelete(lead._id)} className="text-sm font-semibold text-red-600">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {leads.length === 0 && (
                    <tr>
                      <td colSpan="6" className="px-6 py-10 text-center text-sm text-slate-500">
                        No leads found yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

