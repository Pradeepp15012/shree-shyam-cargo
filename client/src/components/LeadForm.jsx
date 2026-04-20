import { LoaderCircle } from 'lucide-react';

export default function LeadForm({
  formData,
  onChange,
  onSubmit,
  loading,
  submitLabel = 'Submit',
  showRouteFields = false,
  serviceOptions = []
}) {
  return (
    <form onSubmit={onSubmit} className="glass-card space-y-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className="input-field"
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={onChange}
          required
        />
        <input
          className="input-field"
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={onChange}
          required
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className="input-field"
          type="text"
          name="pickup"
          placeholder="Pickup Location"
          value={formData.pickup}
          onChange={onChange}
          required
        />
        <input
          className="input-field"
          type="text"
          name="drop"
          placeholder="Drop Location"
          value={formData.drop}
          onChange={onChange}
          required={showRouteFields}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input className="input-field" type="date" name="date" value={formData.date} onChange={onChange} required />
        <select
          className="select-field"
          name="serviceType"
          value={formData.serviceType}
          onChange={onChange}
          required
        >
          <option value="">Select Service Type</option>
          {serviceOptions.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {showRouteFields && (
        <input
          className="input-field"
          type="text"
          name="goodsType"
          placeholder="Samaan Type / Items"
          value={formData.goodsType}
          onChange={onChange}
          required
        />
      )}

      <textarea
        className="textarea-field min-h-32"
        name="message"
        placeholder="Tell us about your move"
        value={formData.message}
        onChange={onChange}
      />

      <button type="submit" disabled={loading} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70">
        {loading ? <LoaderCircle className="h-5 w-5 animate-spin" /> : submitLabel}
      </button>
    </form>
  );
}

