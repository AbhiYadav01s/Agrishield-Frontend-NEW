import React from 'react';

export default function AnomalyCommandCenter({ onBack }) {
  return (
    <div className="flex-1 flex flex-col bg-[#faf5ff] overflow-hidden font-opensans">
      <div className="flex-none flex items-center px-4 py-3 bg-white shadow-sm border-b border-violet-100 z-20">
        <button onClick={onBack} className="p-2 bg-violet-50 text-violet-800 rounded-xl hover:bg-violet-100 mr-3">
          <span className="text-xl font-bold">←</span>
        </button>
        <h2 className="text-lg font-black text-[#5a189a] font-roboto">Anomaly Command Center</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-10">
        <div className="bg-red-50 border border-red-200 p-3 rounded-xl flex justify-between items-center">
          <span className="text-xs font-bold text-red-800 uppercase tracking-wider">Critical Escalation (Tier 3)</span>
          <span className="text-[10px] font-black text-white bg-red-600 px-2 py-1 rounded">PENDING ID</span>
        </div>

        {/* High-Res Image Viewer - Matches the scenario */}
        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 overflow-hidden">
          <div className="h-48 bg-gray-900 flex items-center justify-center relative">
            <span className="text-6xl absolute opacity-50 z-10">🍂</span>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-black opacity-80 z-20"></div>
            {/* Scanner Grid Overlay */}
            <div className="absolute inset-0 border-[1px] border-emerald-500/30 grid grid-cols-4 grid-rows-4 z-30">
               {[...Array(16)].map((_, i) => <div key={i} className="border-[0.5px] border-emerald-500/20"></div>)}
            </div>
            
            {/* Showing the 74% failure */}
            <div className="absolute top-4 right-4 z-40 bg-black/80 text-orange-400 text-[10px] font-mono px-2 py-1 rounded border border-orange-500/50">
              AI_CONFIDENCE: 74% (ESCALATED)
            </div>
            <div className="absolute bottom-4 left-4 z-40 bg-black/60 text-white text-[10px] font-mono px-2 py-1 rounded">
              GUESS: Atypical Fungal Leaf Spot
            </div>
          </div>
          
          <div className="p-5 space-y-4">
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase mb-1">Origin Details</p>
              <p className="text-sm font-medium text-gray-800">Farmer: Ramesh Kumar | Block: Shirpur</p>
            </div>

            {/* Diagnostic Input */}
            <div className="space-y-3 pt-2 border-t border-gray-100">
              <h3 className="text-sm font-bold text-[#5a189a]">Agronomist Diagnosis (Override)</h3>
              <input 
                type="text" 
                placeholder="Enter scientific pathogen name..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-violet-400 font-medium text-gray-800"
              />
              <textarea 
                placeholder="Write CIBRC-approved treatment protocol..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-violet-400 resize-none font-medium text-gray-800"
                rows="3"
              ></textarea>
            </div>

            <button className="w-full bg-[#5a189a] hover:bg-[#3c096c] text-white text-sm font-black py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2">
              <span className="text-lg">✅</span> Save Protocol & Queue for Retraining
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}