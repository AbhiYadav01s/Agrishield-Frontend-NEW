import { useState } from 'react';

export default function MyReports({ onBack }) {
  // State to manage which field card is expanded for the "Deep Dive"
  const [expandedPlot, setExpandedPlot] = useState(null);

  const mockPlots = [
    {
      id: 'plot1',
      name: 'Plot 1: Cotton',
      age: 'Day 45',
      status: 'warning',
      icon: '🌿',
      pestData: '20 Whiteflies detected in the last 24 hours.',
      history: [
        { date: 'Oct 12', issue: 'Leaf Curl Virus Detected', action: 'Applied Imidacloprid (CIBRC Approved)' },
        { date: 'Oct 01', issue: 'Routine Scan', action: 'Healthy, no action needed' },
      ]
    },
    {
      id: 'plot2',
      name: 'Plot 2: Wheat',
      age: 'Day 12',
      status: 'healthy',
      icon: '🌾',
      pestData: '0 threats detected. Sensors clear.',
      history: [
        { date: 'Oct 15', issue: 'Routine Scan', action: 'Healthy, early germination normal' }
      ]
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#f4f8f5] overflow-hidden font-opensans">
      
      {/* HEADER */}
      <div className="flex-none flex items-center justify-between px-4 py-3 bg-white shadow-sm border-b border-gray-200 z-20 sticky top-0">
        <button onClick={onBack} className="p-2 bg-emerald-50 text-emerald-800 rounded-xl hover:bg-emerald-100 transition-colors">
          <span className="text-xl font-bold">←</span>
        </button>
        <h2 className="text-base sm:text-lg font-black text-[#1b4332] font-roboto leading-tight">
          My Reports
        </h2>
        <div className="w-10"></div> {/* Spacer to center the title */}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-24">
        
        {/* THE TOP SUMMARY */}
        <div className="bg-[#50C878] text-white rounded-3xl p-6 shadow-lg flex justify-between items-center relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500 rounded-full opacity-20 blur-2xl"></div>
          
          <div>
            <h3 className="text-xl font-bold font-roboto mb-1">3 Active Fields</h3>
            <p className="text-emerald-200 text-sm font-medium">All sensors online</p>
            <button className="mt-4 bg-emerald-500 hover:bg-emerald-400 text-[#081c15] text-xs font-bold py-2 px-4 rounded-lg shadow transition-colors">
              + Add New Field
            </button>
          </div>
          
          {/* Circular Overall Health Score */}
          <div className="flex flex-col items-center justify-center w-20 h-20 bg-white/10 rounded-full border-4 border-emerald-400 shadow-inner">
            <span className="text-2xl font-black text-emerald-300">85%</span>
            <span className="text-[10px] uppercase font-bold text-emerald-100 tracking-wider">Health</span>
          </div>
        </div>

        {/* THE FIELD CARDS */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider ml-1">Digital Farm Ledger</h4>
          
          {mockPlots.map((plot) => (
            <div key={plot.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300">
              
              {/* Card Header (Always visible) */}
              <div 
                onClick={() => setExpandedPlot(expandedPlot === plot.id ? null : plot.id)}
                className="p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#f4f8f5] rounded-xl flex items-center justify-center text-3xl shadow-inner border border-gray-100">
                    {plot.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 font-roboto">{plot.name}</h3>
                    <p className="text-xs font-semibold text-gray-500">{plot.age}</p>
                  </div>
                </div>
                <div>
                  {plot.status === 'healthy' 
                    ? <span className="text-3xl drop-shadow-sm">✅</span>
                    : <span className="text-3xl drop-shadow-sm animate-pulse">⚠️</span>
                  }
                </div>
              </div>

              {/* Inside a Field Card (The Deep Dive) */}
              {expandedPlot === plot.id && (
                <div className="px-5 pb-5 pt-2 border-t border-gray-100 bg-gray-50/50">
                  
                  {/* Pest Radar */}
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-orange-100 mb-5 flex items-start gap-3">
                    <span className="text-2xl mt-0.5">📡</span>
                    <div>
                      <h5 className="text-xs font-bold text-orange-800 uppercase tracking-wider mb-1">YOLOv8 Pest Radar</h5>
                      <p className="text-sm font-medium text-gray-700">{plot.pestData}</p>
                    </div>
                  </div>

                  {/* Digital Logbook (Vertical Timeline) */}
                  <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 ml-1">Digital Logbook</h5>
                  <div className="relative border-l-2 border-emerald-200 ml-3 space-y-6 pb-2">
                    {plot.history.map((entry, index) => (
                      <div key={index} className="relative pl-6">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-1 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-sm"></div>
                        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded mb-2 inline-block">
                            {entry.date}
                          </span>
                          <p className="text-sm font-bold text-gray-800 leading-snug">{entry.issue}</p>
                          <p className="text-xs text-gray-600 mt-1"><span className="font-semibold text-gray-500">Action:</span> {entry.action}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
