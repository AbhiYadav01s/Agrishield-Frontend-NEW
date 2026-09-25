import React, { useState } from 'react';
import FarmerInterface from './FarmerInterface';
import WorkerInterface from './WorkerInterface';
import ExpertInterface from './ExpertInterface';

// Pre-configured hackathon demo credentials
const CREDENTIALS = {
  farmer: { username: 'farmer', password: '123', name: "Farmer's Portal" },
  worker: { username: 'worker', password: '123', name: 'Staff Portal' },
  expert: { username: 'expert', password: '123', name: 'Expert Portal' },
};

export default function App() {
  const [selectedPortal, setSelectedPortal] = useState(null); 
  const [activeSession, setActiveSession] = useState(null);   
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const target = CREDENTIALS[selectedPortal];

    if (username.trim() === target.username && password === target.password) {
      setActiveSession(selectedPortal);
      setError('');
      setUsername('');
      setPassword('');
    } else {
      setError(`Invalid credentials. (Hint: ${target.username} / ${target.password})`);
    }
  };

  const handleLogout = () => {
    setActiveSession(null);
    setSelectedPortal(null);
    setUsername('');
    setPassword('');
    setError('');
  };

  // Injecting Roboto and Open Sans fonts directly into the component
  const fontStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@500;700;900&display=swap');
    
    .font-roboto { font-family: 'Roboto', sans-serif; }
    .font-opensans { font-family: 'Open Sans', sans-serif; }
  `;

  // ----------------------------------------------------
  // 1. ACTIVE PORTAL VIEW (NO PORTAL SWITCHING HEADER)
  // ----------------------------------------------------
  if (activeSession) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col font-opensans">
        <style>{fontStyles}</style>
        <header className="bg-[#1b4332] text-white px-6 py-3 flex justify-between items-center shadow-md">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-black tracking-wide text-[#74c69d] font-roboto">Agri-Vyakaroti</span>
            <span className="text-xs bg-[#081c15] text-[#95d5b2] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full">
              {CREDENTIALS[activeSession].name}
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="text-xs bg-red-600 hover:bg-red-700 text-white font-semibold px-3.5 py-1.5 rounded-lg transition-colors shadow-sm"
          >
            Logout
          </button>
        </header>

        <main className="flex-1">
          {activeSession === 'farmer' && <FarmerInterface onLogout={handleLogout} />}
          {activeSession === 'worker' && <WorkerInterface onLogout={handleLogout} />}
          {activeSession === 'expert' && <ExpertInterface onLogout={handleLogout} />}
        </main>
      </div>
    );
  }

  // ----------------------------------------------------
  // 2. LOGIN VIEW (STRICT 50% WIDTH & CENTER ALIGNED)
  // ----------------------------------------------------
  if (selectedPortal) {
    const portalMeta = CREDENTIALS[selectedPortal];

    return (
      <div className="min-h-screen bg-[#eaf4f4] flex flex-col items-center justify-center p-4 font-opensans">
        <style>{fontStyles}</style>
        
        {/* Container strictly limited to 50% width of the screen */}
        <div className="w-[50%] min-w-[320px] bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#2d6a4f] flex flex-col items-center">
          
          <button
            onClick={() => {
              setSelectedPortal(null);
              setError('');
              setUsername('');
              setPassword('');
            }}
            className="text-sm text-[#40916c] hover:text-[#1b4332] font-semibold mb-6 self-start flex items-center transition-colors"
          >
            ← Back to Selection
          </button>

          <div className="mb-6 text-center w-full">
            <h2 className="text-3xl font-bold text-gray-800 font-roboto">{portalMeta.name}</h2>
            <p className="text-sm text-gray-500 mt-1">Authorized access only</p>
          </div>

          {error && (
            <div className="mb-4 p-3 w-full bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg font-medium text-center">
              {error}
            </div>
          )}

          {/* Form items all forced to center alignment */}
          <form onSubmit={handleLogin} className="space-y-6 w-full flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 text-center">
                Username
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={`e.g. ${portalMeta.username}`}
                className="w-full max-w-[300px] text-center px-4 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40916c]"
              />
            </div>

            <div className="w-full flex flex-col items-center">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 text-center">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full max-w-[300px] text-center px-4 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40916c]"
              />
            </div>

            <button
              type="submit"
              className="w-full max-w-[300px] mt-4 bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-bold py-3.5 rounded-xl transition shadow-lg text-sm tracking-wide"
            >
              Sign In to Portal
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 3. LANDING PAGE (STRICT FIXED WIDTH BUTTONS)
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-[#d8e2dc] flex items-center justify-center p-4 sm:p-8 font-opensans">
      <style>{fontStyles}</style>
      
      {/* The Central Box from the sketch */}
      <div className="bg-[#f8f9fa] w-full max-w-3xl rounded-[2rem] shadow-2xl border border-gray-200 p-8 flex flex-col items-center relative overflow-hidden">
        
        {/* Subtle agricultural background accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#b7e4c7] rounded-full blur-3xl opacity-30 -mr-20 -mt-20 pointer-events-none"></div>

        <p className="text-sm font-semibold text-[#52796f] italic mb-3 z-10 text-center">
          "Empowering the hands that feed the nation."
        </p>

        <h1 className="text-4xl sm:text-6xl font-black text-[#1b4332] font-roboto tracking-tight mb-2 z-10 text-center">
          Agri-Vyakaroti
        </h1>

        <p className="text-[#4a4e69] text-sm sm:text-base font-medium mb-10 z-10 text-center max-w-md">
          Select your designated portal to access agricultural intelligence tools.
        </p>

        {/* Buttons Container */}
        <div className="w-full flex flex-col items-center gap-6 z-10">
          
          {/* Row 1: Farmer & Staff Portals forced into a row with fixed button widths */}
          <div className="flex flex-row justify-center flex-wrap gap-6 sm:gap-8 w-full">
            
            {/* Farmer's Portal Button - Fixed width w-48/w-56 */}
            <button
              onClick={() => setSelectedPortal('farmer')}
              className="group flex flex-col items-center bg-white border-2 border-[#d8e2dc] hover:border-[#52b788] rounded-3xl p-6 w-48 sm:w-56 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shrink-0"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#edf2f4] rounded-2xl flex items-center justify-center text-5xl sm:text-6xl mb-4 group-hover:scale-105 group-hover:bg-[#d8f3dc] transition-all duration-300 shadow-inner">
                🌾
              </div>
              <span className="font-bold text-gray-700 group-hover:text-[#2d6a4f] text-base sm:text-lg font-roboto">
                Farmer's Portal
              </span>
            </button>

            {/* Staff Portal Button - Fixed width w-48/w-56 */}
            <button
              onClick={() => setSelectedPortal('worker')}
              className="group flex flex-col items-center bg-white border-2 border-[#d8e2dc] hover:border-[#4ea8de] rounded-3xl p-6 w-48 sm:w-56 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shrink-0"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#edf2f4] rounded-2xl flex items-center justify-center text-5xl sm:text-6xl mb-4 group-hover:scale-105 group-hover:bg-[#e0fbfc] transition-all duration-300 shadow-inner">
                📋
              </div>
              <span className="font-bold text-gray-700 group-hover:text-[#023e8a] text-base sm:text-lg font-roboto">
                Staff Portal
              </span>
            </button>

          </div>

          {/* Row 2: Expert Portal (Centered below) */}
          <div className="flex flex-row justify-center w-full mt-2">
            <button
              onClick={() => setSelectedPortal('expert')}
              className="group flex flex-col items-center bg-white border-2 border-[#d8e2dc] hover:border-[#9d4edd] rounded-3xl p-6 w-48 sm:w-56 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shrink-0"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#edf2f4] rounded-2xl flex items-center justify-center text-5xl sm:text-6xl mb-4 group-hover:scale-105 group-hover:bg-[#f3e8ff] transition-all duration-300 shadow-inner">
                🔬
              </div>
              <span className="font-bold text-gray-700 group-hover:text-[#5a189a] text-base sm:text-lg font-roboto">
                Expert Portal
              </span>
            </button>
          </div>

        </div>

        {/* Footer Line inside the box */}
        <div className="mt-14 border-t border-gray-200 pt-6 w-full text-center z-10">
          <p className="text-xs sm:text-sm font-semibold text-gray-400">
            Agri-Vyakaroti Ecosystem • Authenticated Access Only
          </p>
        </div>

      </div>
    </div>
  );
}