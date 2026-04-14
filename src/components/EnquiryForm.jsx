import { useState } from "react";

const EnquiryForm = ({ product, onSubmit }) => {
  const [form, setForm] = useState({ email: "", phone: "", qty: "", note: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.email) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.phone) e.phone = "Phone is required";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    onSubmit({ ...form, product: product.name, price: `€${product.price.toFixed(2)}`, time: new Date().toLocaleString() });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-6 text-center">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <span className="text-green-600 text-xl">✓</span>
        </div>
        <p className="text-green-800 font-bold text-sm">Enquiry Received!</p>
        <p className="text-green-600 text-xs mt-1 leading-relaxed">
          We'll contact <strong>{form.email}</strong><br />within 24 hours with pricing.
        </p>
      </div>
    );
  }

  const inputClass = (field) =>
    `w-full rounded-xl px-4 py-3 text-sm text-gray-900 outline-none transition-all border ${
      errors[field]
        ? "border-red-300 bg-red-50"
        : "border-gray-200 bg-gray-50 focus:border-[#c9a96e] focus:bg-white"
    }`;

  return (
    <div className="bg-gray-50 rounded-2xl p-4 space-y-3">
      <p className="text-xs text-gray-500 leading-relaxed bg-white rounded-xl p-3 border border-gray-100">
        ✉️ Leave your details — our team responds within <strong>24 hours</strong> with availability and bulk pricing.
      </p>

      <div>
        <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email *</label>
        <input type="email" placeholder="your@email.com" value={form.email}
          onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
          className={inputClass("email")} />
        {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Phone / WhatsApp *</label>
        <input type="tel" placeholder="+44 7700 000000" value={form.phone}
          onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: "" }); }}
          className={inputClass("phone")} />
        {errors.phone && <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Quantity</label>
          <input placeholder="e.g. 50 pcs" value={form.qty}
            onChange={(e) => setForm({ ...form, qty: e.target.value })}
            className={inputClass("")} />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Notes</label>
          <input placeholder="Colour, size..." value={form.note}
            onChange={(e) => setForm({ ...form, note: e.target.value })}
            className={inputClass("")} />
        </div>
      </div>

      <button onClick={handleSubmit}
        className="w-full bg-[#0f0f1a] text-white rounded-xl py-3.5 text-sm font-bold hover:bg-[#1f1f3a] active:scale-95 transition-all tracking-wide mt-1">
        Send Enquiry →
      </button>
    </div>
  );
};

export default EnquiryForm;