import React, { useState } from 'react';

export default function FieldReviewDesk({ onBack }) {
  const [isEscalated, setIsEscalated] = useState(false);

  return (
    <div className="flex-1 flex flex-col bg-[#f0f9ff] overflow-hidden font-opensans">
      <div className="flex-none flex items-center px-4 py-3 bg-white shadow-sm border-b border-blue-100 z-20">
        <button onClick={onBack} className="p-2 bg-blue-50 text-blue-800 rounded-xl hover:bg-blue-100 mr-3">
          <span className="text-xl font-bold">←</span>
        </button>
        <h2 className="text-lg font-black text-[#023e8a] font-roboto">Field Review Desk</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-10">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Pending Scrutiny (&lt;80% AI Confidence)</p>
        
        {/* Scrutiny Card 1: Matches the Farmer's Scan Exactly */}
        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden">
          <div className="flex p-4 gap-4">
            {/* Thumbnail Placeholder */}
            <div className="w-24 h-24 bg-green-900 rounded-xl flex items-center justify-center text-3xl shadow-inner relative overflow-hidden">
              <span className="z-10">🍂</span>
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>
            
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 text-sm mb-1">Farmer: Ramesh Kumar</h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-2">Plot 1 • Shirpur Village</p>
              
              <div className="bg-orange-50 border border-orange-200 p-2 rounded-lg flex items-center justify-between">
                <span className="text-xs font-bold text-orange-800 truncate pr-2">AI: Atypical Leaf Spot</span>
                <span className="text-xs font-black text-white bg-orange-500 px-2 py-0.5 rounded shadow-sm">74%</span>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="grid grid-cols-2 border-t border-gray-100">
            <button className="py-3 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors flex items-center justify-center gap-1 border-r border-gray-100">
              <span className="text-base">✅</span> Verify & Alert
            </button>
            
            {/* Dummy Escalate Button */}
            <button 
              onClick={() => setIsEscalated(true)}
              disabled={isEscalated}
              className={`py-3 text-xs font-bold transition-colors flex items-center justify-center gap-1 ${
                isEscalated 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'text-purple-700 bg-purple-50 hover:bg-purple-100'
              }`}
            >
              <span className="text-base">{isEscalated ? '✔️' : '⬆️'}</span> 
              {isEscalated ? 'Escalated to KVK' : 'Escalate to Expert'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}