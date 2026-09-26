import { useState } from 'react';
import GramManchitra from './GramManchitra';
import FieldReviewDesk from './FieldReviewDesk';
import KisanSampark from './KisanSampark';
import YojanaStatus from './YojanaStatus';

export default function WorkerInterface() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [isReadingAloud, setIsReadingAloud] = useState(false);

  return (
    <div className="h-screen w-full bg-[#f0f9ff] font-opensans flex flex-col overflow-hidden relative">
      
      {/* UNIVERSAL HEADER */}
      <div className="flex-none flex justify-between items-center px-4 py-3 bg-white shadow-sm border-b border-blue-100 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#e0fbfc] text-[#023e8a] rounded-full flex items-center justify-center text-xl font-bold border border-[#90e0ef]">
            📋
          </div>
          <div>
            <h1 className="text-sm font-black text-[#023e8a] font-roboto leading-tight">Regional Dashboard</h1>
            <p className="text-[10px] font-bold text-sky-600 uppercase tracking-wider">Command Center</p>
          </div>
        </div>

        <button 
          onClick={() => setIsReadingAloud(!isReadingAloud)}
          className={`p-3 rounded-xl border transition shadow-sm flex items-center justify-center ${
            isReadingAloud ? 'bg-[#023e8a] border-[#03045e] text-white' : 'bg-[#e0fbfc] border-[#90e0ef] text-[#023e8a] hover:bg-[#caf0f8]'
          }`}
        >
          <span className="text-xl">{isReadingAloud ? '🔊' : '🔈'}</span>
        </button>
      </div>

      {/* DYNAMIC CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        
        {currentView === 'dashboard' && (
          <div className="flex-1 flex flex-col h-full overflow-hidden">
            
            {/* Staff Summary Centerpiece */}
            <div className="flex-none flex flex-col items-center pt-6 pb-6 px-6 bg-gradient-to-b from-white to-[#f0f9ff] rounded-b-[2rem] shadow-sm z-10">
              <h2 className="text-2xl font-black text-[#023e8a] font-roboto tracking-tight mb-2 text-center">
                Welcome, Extension Officer
              </h2>
              <p className="text-sm font-medium text-slate-500 mb-4 text-center">
                Monitoring 24 villages • 1,205 Active Farmers
              </p>
              
              <div className="w-full max-w-md flex justify-between bg-white p-4 rounded-2xl shadow-sm border border-blue-100">
                <div className="text-center">
                  <span className="block text-2xl font-black text-red-500">3</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Active Alerts</span>
                </div>
                <div className="w-px bg-blue-100"></div>
                <div className="text-center">
                  <span className="block text-2xl font-black text-orange-500">12</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Pending Reviews</span>
                </div>
                <div className="w-px bg-blue-100"></div>
                <div className="text-center">
                  <span className="block text-2xl font-black text-emerald-500">98%</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Network Health</span>
                </div>
              </div>
            </div>

            {/* The 4-Grid Dashboard */}
            <div className="flex-1 w-full max-w-lg mx-auto px-4 py-4 flex flex-col justify-center min-h-0 relative z-0">
              <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full max-h-[400px]">
                
                <button onClick={() => setCurrentView('manchitra')} className="group flex flex-col items-center justify-center bg-white rounded-3xl shadow-sm border-2 border-transparent hover:border-[#0077b6] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">🗺️📍</div>
                  <span className="font-bold text-[#023e8a] text-center font-roboto text-sm px-2">Gram Manchitra</span>
                </button>

                <button onClick={() => setCurrentView('reviewDesk')} className="group flex flex-col items-center justify-center bg-white rounded-3xl shadow-sm border-2 border-transparent hover:border-[#0077b6] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">📋👀</div>
                  <span className="font-bold text-[#023e8a] text-center font-roboto text-sm px-2">Field Review Desk</span>
                </button>

                <button onClick={() => setCurrentView('sampark')} className="group flex flex-col items-center justify-center bg-white rounded-3xl shadow-sm border-2 border-transparent hover:border-[#0077b6] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">👥📞</div>
                  <span className="font-bold text-[#023e8a] text-center font-roboto text-sm px-2">Kisan Sampark</span>
                </button>

                <button onClick={() => setCurrentView('yojana')} className="group flex flex-col items-center justify-center bg-white rounded-3xl shadow-sm border-2 border-transparent hover:border-[#0077b6] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">📜💳</div>
                  <span className="font-bold text-[#023e8a] text-center font-roboto text-sm px-2">Yojana Status</span>
                </button>

              </div>
            </div>
          </div>
        )}

        {/* CHILD SCREENS */}
        {currentView === 'manchitra' && <GramManchitra onBack={() => setCurrentView('dashboard')} />}
        {currentView === 'reviewDesk' && <FieldReviewDesk onBack={() => setCurrentView('dashboard')} />}
        {currentView === 'sampark' && <KisanSampark onBack={() => setCurrentView('dashboard')} />}
        {currentView === 'yojana' && <YojanaStatus onBack={() => setCurrentView('dashboard')} />}

      </div>
    </div>
  );
}
