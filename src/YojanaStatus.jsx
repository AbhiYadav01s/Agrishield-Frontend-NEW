

export default function YojanaStatus({ onBack }) {
  return (
    <div className="flex-1 flex flex-col bg-[#f0f9ff] overflow-hidden font-opensans">
      <div className="flex-none flex items-center px-4 py-3 bg-white shadow-sm border-b border-blue-100 z-20">
        <button onClick={onBack} className="p-2 bg-blue-50 text-blue-800 rounded-xl hover:bg-blue-100 mr-3">
          <span className="text-xl font-bold">←</span>
        </button>
        <h2 className="text-lg font-black text-[#023e8a] font-roboto">Yojana Status</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-10">

        {/* Welfare Dashboard Summary */}
        <div className="bg-gradient-to-br from-[#023e8a] to-[#0077b6] text-white rounded-3xl p-6 shadow-lg relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-blue-200 mb-4">Region Welfare Safety Net</h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="block text-3xl font-black">845</span>
              <span className="text-[10px] font-bold text-blue-200 uppercase mt-1">PMFBY Active</span>
            </div>
            <div>
              <span className="block text-3xl font-black">92%</span>
              <span className="text-[10px] font-bold text-blue-200 uppercase mt-1">AgriStack Linked</span>
            </div>
          </div>
        </div>

        {/* Verified Outbreak Area */}
        <div>
          <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-3 ml-1">Verified Crop Damage</h4>

          <div className="bg-white rounded-2xl p-5 shadow-sm border-2 border-red-100">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h5 className="font-bold text-red-700 text-sm">Zone: Shirpur East</h5>
                <p className="text-xs text-slate-500 font-medium">Cause: Severe Blight Outbreak</p>
              </div>
              <span className="bg-red-100 text-red-700 text-[10px] font-black px-2 py-1 rounded">AFFECTED: 14 FARMS</span>
            </div>

            <p className="text-xs font-semibold text-gray-600 mb-5 bg-gray-50 p-2 rounded border border-gray-100">
              AI tracking confirmed sustained &gt;90% disease confidence across 14 adjacent registered plots over 7 days.
            </p>

            <button className="w-full bg-[#023e8a] hover:bg-[#03045e] text-white text-xs font-black py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2">
              <span className="text-lg">📤</span> Push Verified Failure Data to Gov.
            </button>
            <p className="text-[9px] text-center text-slate-400 mt-2 font-bold uppercase tracking-wide">Accelerates PMFBY Insurance Payout</p>
          </div>
        </div>

      </div>
    </div>
  );
}
