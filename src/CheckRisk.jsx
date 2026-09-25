import React, { useState } from 'react';

export default function CheckRisk({ onBack }) {
  const [activePlot, setActivePlot] = useState('plot1');
  const [isReadingAloud, setIsReadingAloud] = useState(false);

  return (
    <div className="flex-1 flex flex-col bg-[#f4f8f5] overflow-hidden font-opensans">
      
      {/* ---------------------------------------------------
          1. THE SCREEN HEADER
          --------------------------------------------------- */}
      <div className="flex-none flex items-center justify-between px-4 py-3 bg-white shadow-sm border-b border-gray-200 z-20 sticky top-0">
        <button 
          onClick={onBack}
          className="p-2 bg-emerald-50 text-emerald-800 rounded-xl hover:bg-emerald-100 transition-colors"
        >
          <span className="text-xl font-bold">←</span>
        </button>
        
        <div className="text-center">
          <h2 className="text-base sm:text-lg font-black text-[#1b4332] font-roboto leading-tight">
            Crop Health & Risk Forecast
          </h2>
          <p className="text-xs font-semibold text-emerald-600">पीक धोका अंदाज</p>
        </div>

        <button 
          onClick={() => setIsReadingAloud(!isReadingAloud)}
          className={`p-2.5 rounded-xl border transition-colors shadow-sm ${
            isReadingAloud ? 'bg-emerald-600 border-emerald-700 text-white' : 'bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100'
          }`}
        >
          <span className="text-xl">{isReadingAloud ? '🔊' : '🔈'}</span>
        </button>
      </div>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-8">
        
        {/* ---------------------------------------------------
            2. CROP & PLOT SELECTOR (CAROUSEL)
            --------------------------------------------------- */}
        <div className="flex overflow-x-auto gap-3 px-4 py-4 scrollbar-hide">
          <button 
            onClick={() => setActivePlot('plot1')}
            className={`flex-none px-4 py-2.5 rounded-2xl border-2 transition-all ${
              activePlot === 'plot1' 
              ? 'bg-[#eaf4f4] border-[#2d6a4f] shadow-md' 
              : 'bg-white border-gray-200 text-gray-500'
            }`}
          >
            <p className={`text-sm font-bold font-roboto ${activePlot === 'plot1' ? 'text-[#1b4332]' : ''}`}>Plot 1: Soybean</p>
            <p className="text-xs font-medium">Day 42 - Flowering</p>
          </button>

          <button 
            onClick={() => setActivePlot('plot2')}
            className={`flex-none px-4 py-2.5 rounded-2xl border-2 transition-all ${
              activePlot === 'plot2' 
              ? 'bg-[#eaf4f4] border-[#2d6a4f] shadow-md' 
              : 'bg-white border-gray-200 text-gray-500'
            }`}
          >
            <p className={`text-sm font-bold font-roboto ${activePlot === 'plot2' ? 'text-[#1b4332]' : ''}`}>Plot 2: Cotton</p>
            <p className="text-xs font-medium">Day 75 - Boll Formation</p>
          </button>
        </div>

        <div className="px-4 space-y-5">
          
          {/* ---------------------------------------------------
              3. THE HERO RISK METER
              --------------------------------------------------- */}
          <div className="bg-white rounded-3xl shadow-lg border border-red-100 overflow-hidden relative">
            {/* Color-Coded Banner */}
            <div className="bg-gradient-to-r from-red-600 to-red-500 px-4 py-2 flex justify-center">
              <span className="uppercase tracking-widest text-white text-xs font-black">High Danger Zone</span>
            </div>
            
            <div className="p-6 flex flex-col items-center text-center">
              {/* Visual Risk Dial (Semicircle) */}
              <div className="w-32 h-16 rounded-t-full border-t-[14px] border-l-[14px] border-r-[14px] border-red-500 relative flex items-end justify-center pb-1 mb-4">
                <div className="absolute top-0 w-full h-full border-t-[14px] border-l-[14px] border-r-[14px] border-gray-100 rounded-t-full -z-10"></div>
                <span className="text-2xl font-black text-red-600 leading-none">85%</span>
              </div>
              
              <h3 className="text-xl font-black text-gray-900 font-roboto mb-3 leading-tight">
                High Risk: Fungal Leaf Spot Outbreak Likely in Next 48 Hours
              </h3>
              
              {/* Neighboring Community Radar */}
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-3 py-1.5 rounded-lg border border-red-100">
                <span className="text-sm">📡</span>
                <span className="text-xs font-bold">Alert: 4 neighbor farms within 3km reported fungal symptoms.</span>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------
              4. HYPER-LOCAL WEATHER STRIP
              --------------------------------------------------- */}
          <div>
            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-3 ml-1">72-Hour Triggers</h4>
            <div className="grid grid-cols-3 gap-3">
              {/* Today */}
              <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-200 text-center flex flex-col items-center">
                <span className="text-xs font-bold text-gray-500 mb-2">Today</span>
                <span className="text-3xl mb-2">🌧️</span>
                <span className="text-xs font-bold text-gray-800">28° / 21°</span>
                <div className="mt-2 w-full bg-blue-50 text-blue-700 text-[10px] font-black py-1 rounded border border-blue-100">80% Rain</div>
                <div className="mt-1 w-full bg-red-50 text-red-700 text-[10px] font-black py-1 rounded border border-red-100">88% Hum</div>
              </div>
              
              {/* Tomorrow */}
              <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-200 text-center flex flex-col items-center">
                <span className="text-xs font-bold text-gray-500 mb-2">Tmrw</span>
                <span className="text-3xl mb-2">⛈️</span>
                <span className="text-xs font-bold text-gray-800">27° / 20°</span>
                <div className="mt-2 w-full bg-blue-50 text-blue-700 text-[10px] font-black py-1 rounded border border-blue-100">90% Rain</div>
                <div className="mt-1 w-full bg-red-50 text-red-700 text-[10px] font-black py-1 rounded border border-red-100">92% Hum</div>
              </div>

              {/* Day After */}
              <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-200 text-center flex flex-col items-center">
                <span className="text-xs font-bold text-gray-500 mb-2">Day 3</span>
                <span className="text-3xl mb-2">⛅</span>
                <span className="text-xs font-bold text-gray-800">29° / 22°</span>
                <div className="mt-2 w-full bg-gray-50 text-gray-600 text-[10px] font-bold py-1 rounded border border-gray-100">30% Rain</div>
                <div className="mt-1 w-full bg-yellow-50 text-yellow-700 text-[10px] font-black py-1 rounded border border-yellow-100">75% Hum</div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------
              5. CAUSATION BREAKDOWN
              --------------------------------------------------- */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
            <h4 className="text-sm font-bold text-[#1b4332] uppercase tracking-wider mb-3 flex items-center gap-2">
              <span>🔍</span> Why is my crop at risk?
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed font-medium mb-4">
              Your <span className="font-bold text-gray-900">Soybean</span> crop is in its <span className="font-bold text-gray-900">flowering stage</span>, which is tender. Combined with continuous humidity above 85% for the last 3 days, conditions are 90% favorable for Fungal Rust spores to multiply.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-3 flex items-start gap-3">
              <span className="text-xl">🐛</span>
              <p className="text-xs font-bold text-orange-800 leading-snug pt-0.5">
                Pest Forecast: Spodoptera moth flight detected in your block by nearby MahaDBT smart traps.
              </p>
            </div>
          </div>

          {/* ---------------------------------------------------
              6. PREVENTIVE ACTION CARD
              --------------------------------------------------- */}
          <div className="bg-[#eaf4f4] rounded-2xl p-5 shadow-sm border-2 border-[#2d6a4f]">
            <h4 className="text-sm font-bold text-[#1b4332] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span>🛡️</span> Immediate Actions
            </h4>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                <span className="text-red-500 font-bold mt-0.5">❌</span>
                <p className="text-sm font-semibold text-gray-700">
                  <span className="text-red-600 font-bold">Do NOT</span> spray liquid pesticides today. Rain will wash chemicals away, wasting money.
                </p>
              </li>
              <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                <span className="text-emerald-500 font-bold mt-0.5">✅</span>
                <p className="text-sm font-semibold text-gray-700">
                  Ensure proper drainage in low-lying sections of Plot 1 to prevent root rot.
                </p>
              </li>
              <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-emerald-100">
                <span className="text-emerald-500 font-bold mt-0.5">💊</span>
                <p className="text-sm font-semibold text-gray-700">
                  <span className="text-emerald-700 font-bold block mb-1">Recommended Safe Dosage:</span> 
                  Apply Trichoderma Viride (Bio-fungicide) mixed at 5g per liter of water as soon as the rain stops.
                </p>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-[#1b4332] hover:bg-[#081c15] text-white text-xs font-bold py-3 rounded-xl shadow-md transition-colors flex flex-col items-center justify-center gap-1">
                <span className="text-lg">🎙️</span>
                Ask Krishi Mitra
              </button>
              <button className="bg-white hover:bg-gray-50 text-[#1b4332] text-xs font-bold py-3 rounded-xl border border-[#2d6a4f] shadow-sm transition-colors flex flex-col items-center justify-center gap-1">
                <span className="text-lg">📱</span>
                Share with Village
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}