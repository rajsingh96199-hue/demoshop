const Header = ({ onAdminClick }) => {
  return (
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-4 py-3.5 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 bg-[#0f0f1a] rounded-xl flex items-center justify-center">
          <span className="text-[#c9a96e] text-[11px] font-black tracking-tight">LM</span>
        </div>
        <span className="text-[17px] font-bold tracking-tight text-gray-900">
          Luxe<span className="text-[#c9a96e]">Mode</span>
        </span>
      </div>
      <button
        onClick={onAdminClick}
        className="flex items-center gap-1.5 text-[11px] text-gray-500 border border-gray-200 rounded-xl px-3 py-2 hover:bg-gray-50 hover:border-gray-300 transition-all font-medium"
      >
        ⚙ Admin
      </button>
    </header>
  );
};

export default Header;