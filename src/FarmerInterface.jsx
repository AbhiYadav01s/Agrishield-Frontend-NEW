import { useState } from 'react';
import ScanCrop from './ScanCrop';
import CheckRisk from './CheckRisk';
import MyReports from './MyReports';
import ChatFAQ from './ChatFAQ';

export default function FarmerInterface() {
  const [isMarathi, setIsMarathi] = useState(false);
  const [isReadingAloud, setIsReadingAloud] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard'); 

  const t = {
    langToggle: isMarathi ? "मराठी" : "English",
    micText: isMarathi ? "कृषी मित्राला विचारण्यासाठी टॅप करा" : "Tap to ask Krishi Mitra",
    scanCrop: isMarathi ? "पीक स्कॅन करा" : "Scan Crop",
    checkRisk: isMarathi ? "धोका तपासा" : "Check Risk",
    myReports: isMarathi ? "माझे अहवाल" : "My Reports",
    hub: isMarathi ? "कृषी मित्र हब" : "Krishi Mitra Hub",
  };

  return (
    <div className="h-screen w-full bg-[#f4f8f5] font-opensans flex flex-col overflow-hidden relative">
      
      {/* 1. UNIVERSAL TOP NAVIGATION BAR */}
      <div className="flex-none flex justify-between items-center px-4 py-3 bg-white shadow-sm border-b border-gray-100 z-10">
        <button 
          onClick={() => setIsMarathi(!isMarathi)}
          className="flex items-center gap-2 px-5 py-2.5 bg-emerald-50 text-emerald-800 font-bold rounded-2xl border border-emerald-200 hover:bg-emerald-100 transition shadow-sm"
        >
          <span className="text-3xl">🌐</span>
          <span className="text-base font-roboto tracking-wide">{t.langToggle}</span>
          <span className="text-sm">▼</span>
        </button>

        <button 
          onClick={() => setIsReadingAloud(!isReadingAloud)}
          className={`p-4 rounded-2xl border transition shadow-sm flex items-center justify-center ${
            isReadingAloud ? 'bg-emerald-600 border-emerald-700 text-white' : 'bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100'
          }`}
        >
          <span className="text-3xl">{isReadingAloud ? '🔊' : '🔈'}</span>
        </button>
      </div>

      {/* 2. DYNAMIC CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        
        {currentView === 'dashboard' && (
          <div className="flex-1 flex flex-col h-full overflow-hidden">
            
            {/* The Main Centerpiece (Input Removed, Voice Only) */}
            <div className="flex-none flex flex-col items-center pt-8 pb-8 px-6 bg-gradient-to-b from-white to-[#f4f8f5] rounded-b-[2rem] shadow-sm z-10">
              <div className="relative group cursor-pointer mb-5">
                <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-30 group-hover:opacity-50"></div>
                <button 
                  onClick={() => setCurrentView('hub')} // Clicking mic now opens the Hub
                  className="relative w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-tr from-[#1b4332] to-[#40916c] rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform duration-300 border-4 border-[#d8f3dc]"
                >
                  <span className="text-6xl">🎙️</span>
                </button>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-[#1b4332] font-roboto tracking-tight text-center">
                {t.micText}
              </h2>
            </div>

            {/* The 4-Grid Dashboard */}
            <div className="flex-1 w-full max-w-lg mx-auto px-4 py-3 flex flex-col justify-center min-h-0 relative z-0">
              <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 h-full max-h-[380px]">
                
                <button onClick={() => setCurrentView('scanCrop')} className="group flex flex-col items-center justify-center bg-[#f0fdf4] rounded-3xl shadow-sm border-2 border-transparent hover:border-[#74c69d] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="text-6xl sm:text-7xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform">🔍🌿</div>
                  <span className="font-bold text-gray-800 text-center font-roboto text-xs sm:text-sm group-hover:text-[#2d6a4f] px-2 leading-tight">{t.scanCrop}</span>
                </button>

                <button onClick={() => setCurrentView('checkRisk')} className="group flex flex-col items-center justify-center bg-[#fff7ed] rounded-3xl shadow-sm border-2 border-transparent hover:border-[#f4a261] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="text-6xl sm:text-7xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform">☁️⚠️</div>
                  <span className="font-bold text-gray-800 text-center font-roboto text-xs sm:text-sm group-hover:text-[#e76f51] px-2 leading-tight">{t.checkRisk}</span>
                </button>

                <button onClick={() => setCurrentView('myReports')} className="group flex flex-col items-center justify-center bg-[#f0f9ff] rounded-3xl shadow-sm border-2 border-transparent hover:border-[#4ea8de] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="text-6xl sm:text-7xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform">📋🌱</div>
                  <span className="font-bold text-gray-800 text-center font-roboto text-xs sm:text-sm group-hover:text-[#023e8a] px-2 leading-tight">{t.myReports}</span>
                </button>

                <button onClick={() => setCurrentView('hub')} className="group flex flex-col items-center justify-center bg-[#faf5ff] rounded-3xl shadow-sm border-2 border-transparent hover:border-[#9d4edd] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="text-6xl sm:text-7xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform">👥💬</div>
                  <span className="font-bold text-gray-800 text-center font-roboto text-xs sm:text-sm group-hover:text-[#5a189a] px-2 leading-tight">{t.hub}</span>
                </button>

              </div>
            </div>
          </div>
        )}

        {/* CHILD SCREENS */}
        {currentView === 'scanCrop' && <ScanCrop onBack={() => setCurrentView('dashboard')} />}
        {currentView === 'checkRisk' && <CheckRisk onBack={() => setCurrentView('dashboard')} />}
        {currentView === 'myReports' && <MyReports onBack={() => setCurrentView('dashboard')} />}
        {currentView === 'hub' && <ChatFAQ onBack={() => setCurrentView('dashboard')} />}

      </div>

      {/* 3. BOTTOM CORNER FAQ */}
      {currentView === 'dashboard' && (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
          {isFaqOpen && (
            <div className="mb-3 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 w-64 animate-fade-in-up origin-bottom-right">
              <h4 className="font-bold text-[#1b4332] mb-2 text-sm border-b pb-2">Trending in your area</h4>
              <ul className="space-y-2 text-sm text-gray-600 font-medium">
                <li className="hover:text-emerald-600 cursor-pointer flex gap-2"><span>🌾</span> Subsidy deadlines</li>
                <li className="hover:text-emerald-600 cursor-pointer flex gap-2"><span>📈</span> Current Mandi rates</li>
                <li className="hover:text-emerald-600 cursor-pointer flex gap-2"><span>🐛</span> Pink Bollworm alerts</li>
              </ul>
            </div>
          )}
          <button 
            onClick={() => setIsFaqOpen(!isFaqOpen)}
            className={`w-14 h-14 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.15)] flex items-center justify-center text-3xl border-2 transition-all duration-300 hover:scale-110 ${
              isFaqOpen ? 'bg-white text-emerald-700 border-emerald-500' : 'bg-[#1b4332] text-white border-transparent'
            }`}
          >
            {isFaqOpen ? '✖' : '❓'}
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.15s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
