

export default function DisasterReliefAuth({ onBack }) {
  return (
    <div className="flex-1 flex flex-col bg-[#faf5ff] overflow-hidden font-opensans">
      <div className="flex-none flex items-center px-4 py-3 bg-white shadow-sm border-b border-violet-100 z-20">
        <button onClick={onBack} className="p-2 bg-violet-50 text-violet-800 rounded-xl hover:bg-violet-100 mr-3">
          <span className="text-xl font-bold">←</span>
        </button>
        <h2 className="text-lg font-black text-[#5a189a] font-roboto">Disaster Relief Auth</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-10">
        
        {/* Trust Center Banner */}
        <div className="bg-[#10002b] text-white p-6 rounded-3xl shadow-xl flex flex-col items-center text-center relative overflow-hidden border border-purple-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
          <span className="text-4xl mb-3 z-10">🏛️</span>
          <h3 className="text-lg font-black tracking-wide z-10">State Verification Ledger</h3>
          <p className="text-xs font-medium text-purple-300 mt-1 z-10">Tamper-proof AI reporting for PMFBY claims.</p>
        </div>

        {/* Aggregated Data Block */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Active Claim Batch: #MH-JAL-402</h4>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
              <span className="block text-2xl font-black text-gray-800">4,520</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase">Verified AI Scans</span>
            </div>
            <div className="bg-red-50 p-3 rounded-xl border border-red-100">
              <span className="block text-2xl font-black text-red-700">&gt;85%</span>
              <span className="text-[10px] font-bold text-red-500 uppercase">Avg Crop Damage</span>
            </div>
          </div>

          <div className="bg-[#f0fdf4] border border-[#bbf7d0] p-3 rounded-xl flex items-start gap-3">
            <span className="text-emerald-600 mt-0.5">🔒</span>
            <p className="text-xs font-bold text-emerald-800 font-mono break-all leading-relaxed">
              HASH: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
            </p>
          </div>
        </div>

        {/* Cryptographic Sign-Off */}
        <button className="w-full bg-[#5a189a] hover:bg-[#3c096c] text-white text-sm font-black py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2">
          <span className="text-xl">✍️</span> Digitally Sign & Authorize Relief
        </button>
        <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-wide px-4">
          By signing, you authorize the immediate release of state agricultural funds to the affected AgriStack IDs.
        </p>

      </div>
    </div>
  );
}
