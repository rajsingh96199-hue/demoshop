const Hero = () => {
  return (
    <div className="relative bg-[#0f0f1a] px-5 py-8 overflow-hidden">
      <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-[#c9a96e] opacity-[0.07] blur-2xl" />
      <div className="absolute -left-8 bottom-0 w-32 h-32 rounded-full bg-purple-500 opacity-[0.05] blur-2xl" />

      <div className="inline-flex items-center gap-2 bg-[#c9a96e]/10 border border-[#c9a96e]/20 rounded-full px-3 py-1 mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] animate-pulse" />
        <span className="text-[10px] tracking-[2px] text-[#c9a96e] uppercase font-semibold">
          Women's Collection 2025
        </span>
      </div>

      <h1 className="text-[26px] font-bold text-white leading-tight mb-3">
        Designer Fashion<br />
        <span className="text-[#c9a96e]">Wholesale</span> Prices
      </h1>
      <p className="text-sm text-white/50 leading-relaxed mb-5 max-w-xs">
        Premium blazers, dresses & swimwear sourced directly. All prices in euros. Bulk orders welcome.
      </p>

      <div className="flex gap-6">
        {[
          { num: "8+", label: "Products" },
          { num: "50%", label: "Value Added" },
          { num: "3–4d", label: "Shipping" },
        ].map((s) => (
          <div key={s.label} className="flex flex-col">
            <span className="text-base font-bold text-white">{s.num}</span>
            <span className="text-[10px] text-white/40 uppercase tracking-wide">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;