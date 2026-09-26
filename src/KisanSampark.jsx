

export default function KisanSampark({ onBack }) {
  return (
    <div className="flex-1 flex flex-col h-full bg-[#f0f9ff] font-opensans relative z-50">
      
      {/* 1. HEADER (Title on Left, BACK BUTTON ON RIGHT) */}
      <div className="flex-none flex items-center justify-between px-4 py-4 bg-white shadow-md border-b border-blue-200 sticky top-0 z-30">
        <div>
          <h2 className="text-xl font-black text-[#023e8a] font-roboto leading-tight">Kisan Sampark</h2>
          <p className="text-xs font-bold text-sky-600 uppercase tracking-wider">Farmer Directory</p>
        </div>
        
        {/* The Back Button - Now on the Right */}
        <button 
          onClick={onBack} 
          className="p-2.5 px-4 bg-[#023e8a] hover:bg-[#03045e] text-white rounded-xl shadow-md transition-colors flex items-center justify-center border-2 border-[#03045e]"
        >
          <span className="text-sm font-black">Back ➔</span>
        </button>
      </div>

      {/* 2. SMART FILTERS */}
      <div className="flex-none bg-white p-4 shadow-sm border-b border-blue-100 z-20">
        <div className="flex flex-col sm:flex-row gap-3 mb-3">
          <select className="flex-1 bg-gray-50 border-2 border-gray-200 text-sm font-bold text-[#023e8a] rounded-xl p-3 outline-none focus:border-blue-400 focus:bg-white transition-colors">
            <option>Crop: Wheat</option>
            <option>Crop: Cotton</option>
            <option>Crop: Soybean</option>
          </select>
          <select className="flex-1 bg-gray-50 border-2 border-gray-200 text-sm font-bold text-[#023e8a] rounded-xl p-3 outline-none focus:border-blue-400 focus:bg-white transition-colors">
            <option>Village: All</option>
            <option>Shirpur</option>
            <option>Navapur</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <p className="text-sm font-bold text-emerald-700">Showing 42 Wheat Farmers</p>
        </div>
      </div>

      {/* 3. SCROLLABLE FARMER LIST */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 pb-48">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="bg-white p-4 rounded-xl shadow-sm border border-blue-100 flex justify-between items-center hover:border-blue-300 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-lg border border-blue-100">
                👨‍🌾
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-sm sm:text-base">Suresh Jadhav</h3>
                <p className="text-xs font-bold text-slate-400 font-mono mt-0.5">ID: 9874-5521-110</p>
              </div>
            </div>
            <span className="bg-emerald-100 text-emerald-800 text-[10px] sm:text-xs font-black px-2.5 py-1 rounded-md border border-emerald-200">WHEAT</span>
          </div>
        ))}
      </div>

      {/* 4. BOTTOM BROADCAST AREA */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-blue-200 p-4 shadow-[0_-15px_30px_rgba(0,0,0,0.1)] z-30">
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
          Emergency Broadcast
        </label>
        <textarea 
          placeholder="Type alert message for 42 farmers..."
          className="w-full bg-[#f8fafc] border-2 border-gray-200 rounded-xl p-3 text-sm font-medium mb-3 outline-none focus:border-blue-400 focus:bg-white resize-none transition-colors"
          rows="2"
        ></textarea>
        
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-[#023e8a] hover:bg-[#03045e] text-white text-sm font-black py-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 border border-[#03045e]">
            <span className="text-lg">💬</span> Push SMS
          </button>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-black py-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 border border-emerald-800">
            <span className="text-lg">🎙️</span> Push IVR Voice
          </button>
        </div>
      </div>

    </div>
  );
}
