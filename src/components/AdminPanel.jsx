import { useState } from "react";
import BottomSheet from "./BottomSheet";

const TABS = ["Add Product", "Enquiries", "Orders"];

const AdminPanel = ({ isOpen, onClose, enquiries, onAddProduct }) => {
  const [tab, setTab] = useState(0);
  const [form, setForm] = useState({ name: "", image: "", dhprice: "", price: "", cat: "blazer", moq: "", desc: "" });
  const [status, setStatus] = useState("");

  const catLabels = { blazer: "Blazer", dress: "Dress", swimwear: "Swimwear", other: "Other" };

  const handleAdd = () => {
    if (!form.name || !form.dhprice || !form.price) { setStatus("error"); return; }
    onAddProduct({
      id: Date.now(), cat: form.cat, catLabel: catLabels[form.cat],
      name: form.name, dhprice: parseFloat(form.dhprice), price: parseFloat(form.price),
      moq: form.moq || "Min. 10 pcs", isNew: true,
      image: form.image || `https://via.placeholder.com/600x600/f5f5f5/999?text=Product`,
      desc: form.desc || "Premium wholesale fashion product.",
      features: ["Welcome to our store — quality guaranteed, fast transport.", "Bulk orders accepted. Mixed orders welcome."],
      specs: [{ key: "Category", value: catLabels[form.cat] }, { key: "MOQ", value: form.moq || "Min. 10 pcs" }],
      reviews: [],
    });
    setStatus("ok");
    setForm({ name: "", image: "", dhprice: "", price: "", cat: "blazer", moq: "", desc: "" });
    setTimeout(() => setStatus(""), 3000);
  };

  const inp = "w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 outline-none focus:border-[#c9a96e] bg-gray-50 focus:bg-white transition-all";

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-base font-bold text-gray-900">Admin Panel</span>
        <button onClick={onClose} className="w-8 h-8 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 text-xl hover:bg-gray-50">×</button>
      </div>

      <div className="flex border-b border-gray-100 px-4">
        {TABS.map((t, i) => (
          <button key={t} onClick={() => setTab(i)}
            className={`py-3 px-3 text-xs font-bold uppercase tracking-wide border-b-2 transition-all mr-2 ${
              tab === i ? "border-[#0f0f1a] text-[#0f0f1a]" : "border-transparent text-gray-400 hover:text-gray-600"
            }`}>
            {t}
          </button>
        ))}
      </div>

      {tab === 0 && (
        <div className="px-4 py-4 space-y-3 pb-8">
          <div>
            <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Product Name *</label>
            <input className={inp} placeholder="e.g. Designer Summer Dress" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Image URL</label>
            <input className={inp} placeholder="https://img4.dhresource.com/..." value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">DHgate Price (€) *</label>
              <input type="number" step="0.01" className={inp} placeholder="20.00" value={form.dhprice} onChange={(e) => setForm({ ...form, dhprice: e.target.value })} />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Your Price (€) *</label>
              <input type="number" step="0.01" className={inp} placeholder="30.00" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
            </div>
          </div>
          <div>
            <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Category</label>
            <select className={inp} value={form.cat} onChange={(e) => setForm({ ...form, cat: e.target.value })}>
              <option value="blazer">Blazer</option>
              <option value="dress">Dress</option>
              <option value="swimwear">Swimwear</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Min. Order Qty</label>
            <input className={inp} placeholder="Min. 20 pcs" value={form.moq} onChange={(e) => setForm({ ...form, moq: e.target.value })} />
          </div>
          <button onClick={handleAdd} className="w-full bg-[#0f0f1a] text-white rounded-xl py-3.5 text-sm font-bold hover:bg-[#1f1f3a] active:scale-95 transition-all tracking-wide mt-2">
            + Add Product to Store
          </button>
          {status === "ok" && <div className="bg-green-50 text-green-700 text-sm font-semibold rounded-xl p-3 text-center border border-green-100">✅ Product added!</div>}
          {status === "error" && <div className="bg-red-50 text-red-600 text-sm rounded-xl p-3 text-center border border-red-100">Please fill name and both prices.</div>}
        </div>
      )}

      {tab === 1 && (
        <div className="pb-8">
          {!enquiries.length ? (
            <div className="py-16 text-center">
              <p className="text-3xl mb-2">📬</p>
              <p className="text-gray-400 text-sm">No enquiries yet</p>
              <p className="text-gray-300 text-xs mt-1">They'll appear here once customers submit the form</p>
            </div>
          ) : (
            <>
              <p className="px-4 py-2 text-xs text-gray-400 font-medium">{enquiries.length} enquiries received</p>
              {enquiries.map((e, i) => (
                <div key={i} className="flex items-start justify-between px-4 py-3.5 border-b border-gray-50 hover:bg-gray-50/50">
                  <div>
                    <p className="text-sm font-bold text-gray-900">{e.email}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{e.phone} · Qty: {e.qty || "—"}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5 max-w-[200px] truncate">{e.product}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full font-bold">{e.price}</span>
                    <p className="text-[10px] text-gray-300 mt-1">New</p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      )}

      {tab === 2 && (
        <div className="pb-8">
          {!enquiries.length ? (
            <div className="py-16 text-center">
              <p className="text-3xl mb-2">📦</p>
              <p className="text-gray-400 text-sm">No orders yet</p>
            </div>
          ) : (
            <>
              <p className="px-4 py-2 text-xs text-gray-400 font-medium">{enquiries.length} orders pending</p>
              {enquiries.map((e, i) => (
                <div key={i} className="flex items-start justify-between px-4 py-3.5 border-b border-gray-50 hover:bg-gray-50/50">
                  <div>
                    <p className="text-sm font-bold text-gray-900">{i + 1}. {e.product?.substring(0, 28)}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{e.email} · {e.qty || "—"}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">{e.time}</p>
                  </div>
                  <span className="text-xs bg-green-50 text-green-600 px-2.5 py-1 rounded-full font-bold">New</span>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </BottomSheet>
  );
};

export default AdminPanel;