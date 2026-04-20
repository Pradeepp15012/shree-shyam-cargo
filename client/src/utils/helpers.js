import { company } from '../data/site';

export const whatsappLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(company.whatsappMessage)}`;
export const callLink = `tel:${company.phone}`;

export const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
};

export const formatCurrency = (amount) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount || 0);

