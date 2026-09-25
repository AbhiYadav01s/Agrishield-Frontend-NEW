import React, { useState } from 'react';
import AnomalyCommandCenter from './AnomalyCommandCenter';
import AIRetrainingStudio from './AIRetrainingStudio';
import DistrictOutbreakMap from './DistrictOutbreakMap';
import DisasterReliefAuth from './DisasterReliefAuth';

export default function ExpertInterface({ onLogout }) {
  const [currentView, setCurrentView] = useState('dashboard');
  const [isReadingAloud, setIsReadingAloud] = useState(false);

  return (
    <div className="h-screen w-full bg-[#faf5ff] font-opensans flex flex-col overflow-hidden relative">
      
      {/* UNIVERSAL HEADER */}
      <div className="flex-none flex justify-between items-center px-4 py-3 bg-white shadow-sm border-b border-violet-100 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#f3e8ff] text-[#5a189a] rounded-full flex items-center justify-center text-xl font-bold border border-[#d8b4fe]">
            🔬
          </div>
          <div>
            <h1 className="text-sm font-black text-[#5a189a] font-roboto leading-tight">Agronomist Dashboard</h1>
            <p className="text-[10px] font-bold text-violet-500 uppercase tracking-wider">District Authority</p>
          </div>
        </div>

        <button 
          onClick={() => setIsReadingAloud(!isReadingAloud)}
          className={`p-3 rounded-xl border transition shadow-sm flex items-center justify-center ${
            isReadingAloud ? 'bg-[#5a189a] border-[#3c096c] text-white' : 'bg-[#f3e8ff] border-[#d8b4fe] text-[#5a189a] hover:bg-[#e9d5ff]'
          }`}
        >
          <span className="text-xl">{isReadingAloud ? '🔊' : '🔈'}</span>
        </button>
      </div>

      {/* DYNAMIC CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        
        {currentView === 'dashboard' && (
          <div className="flex-1 flex flex-col h-full overflow-hidden">
            
            {/* Expert Summary Centerpiece */}
            <div className="flex-none flex flex-col items-center pt-6 pb-6 px-6 bg-gradient-to-b from-white to-[#faf5ff] rounded-b-[2rem] shadow-sm z-10">
              <h2 className="text-2xl font-black text-[#5a189a] font-roboto tracking-tight mb-2 text-center">
                Scientific Command Center
              </h2>
              <p className="text-sm font-medium text-slate-500 mb-4 text-center">
                District Level Access • Model Accuracy: 94.2%
              </p>
              
              <div className="w-full max-w-md flex justify-between bg-white p-4 rounded-2xl shadow-sm border border-violet-100">
                <div className="text-center">
                  <span className="block text-2xl font-black text-rose-500">4</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Escalations</span>
                </div>
                <div className="w-px bg-violet-100"></div>
                <div className="text-center">
                  <span className="block text-2xl font-black text-violet-500">12</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Retrain Queue</span>
                </div>
                <div className="w-px bg-violet-100"></div>
                <div className="text-center">
                  <span className="block text-2xl font-black text-emerald-500">Active</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Policy Hub</span>
                </div>
              </div>
            </div>

            {/* The 4-Grid Dashboard */}
            <div className="flex-1 w-full max-w-lg mx-auto px-4 py-4 flex flex-col justify-center min-h-0 relative z-0">
              <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full max-h-[400px]">
                
                <button onClick={() => setCurrentView('anomaly')} className="group flex flex-col items-center justify-center bg-white rounded-3xl shadow-sm border-2 border-transparent hover:border-[#9d4edd] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">🔬🚨</div>
                  <span className="font-bold text-[#5a189a] text-center font-roboto text-sm px-2">Anomaly Command</span>
                </button>

                <button onClick={() => setCurrentView('retrain')} className="group flex flex-col items-center justify-center bg-white rounded-3xl shadow-sm border-2 border-transparent hover:border-[#9d4edd] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">🧠⚙️</div>
                  <span className="font-bold text-[#5a189a] text-center font-roboto text-sm px-2">AI Retraining Studio</span>
                </button>

                <button onClick={() => setCurrentView('map')} className="group flex flex-col items-center justify-center bg-white rounded-3xl shadow-sm border-2 border-transparent hover:border-[#9d4edd] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">🗺️🔴</div>
                  <span className="font-bold text-[#5a189a] text-center font-roboto text-sm px-2">District Outbreak Map</span>
                </button>

                <button onClick={() => setCurrentView('relief')} className="group flex flex-col items-center justify-center bg-white rounded-3xl shadow-sm border-2 border-transparent hover:border-[#9d4edd] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">🏛️✅</div>
                  <span className="font-bold text-[#5a189a] text-center font-roboto text-sm px-2">Disaster Relief Auth</span>
                </button>

              </div>
            </div>
          </div>
        )}

        {/* CHILD SCREENS */}
        {currentView === 'anomaly' && <AnomalyCommandCenter onBack={() => setCurrentView('dashboard')} />}
        {currentView === 'retrain' && <AIRetrainingStudio onBack={() => setCurrentView('dashboard')} />}
        {currentView === 'map' && <DistrictOutbreakMap onBack={() => setCurrentView('dashboard')} />}
        {currentView === 'relief' && <DisasterReliefAuth onBack={() => setCurrentView('dashboard')} />}

      </div>
    </div>
  );
}