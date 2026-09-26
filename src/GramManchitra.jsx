import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const dangerIcon = new L.divIcon({
  className: 'custom-icon',
  html: '<div style="font-size: 32px; filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.5)); animation: pulse 2s infinite;">📍</div>',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

export default function GramManchitra({ onBack }) {
  // HARDCODED HACKATHON DATA: Guarantees 5 pins load instantly with zero delay or caching issues.
  const [iotData] = useState({
    cluster_id: "Jalgaon District (Live)",
    active_traps: 45,
    alerts: [
      {
        trap_id: "TRP-001",
        pest_detected: "Spodoptera Moth",
        count: 45,
        coordinates: [21.0, 75.5]
      },
      {
        trap_id: "TRP-002",
        pest_detected: "Locust Swarm",
        count: 120,
        coordinates: [20.9, 75.6]
      },
      {
        trap_id: "TRP-045",
        pest_detected: "Whitefly Cluster",
        count: 85,
        coordinates: [21.1, 75.4]
      },
      {
        trap_id: "TRP-018",
        pest_detected: "Fall Armyworm",
        count: 62,
        coordinates: [20.95, 75.45]
      },
      {
        trap_id: "TRP-022",
        pest_detected: "Aphid Infestation",
        count: 210,
        coordinates: [21.05, 75.65]
      }
    ]
  });

  return (
    <div className="flex-1 flex flex-col bg-[#f0f9ff] overflow-hidden font-opensans relative">
      <div className="flex-none flex items-center px-4 py-3 bg-white shadow-sm border-b border-blue-100 z-20">
        <button onClick={onBack} className="p-2 bg-blue-50 text-blue-800 rounded-xl hover:bg-blue-100 mr-3">
          <span className="text-xl font-bold">←</span>
        </button>
        <h2 className="text-lg font-black text-[#023e8a] font-roboto">Gram Manchitra (Live)</h2>
      </div>

      <div className="flex-1 relative z-0">
        <MapContainer 
          center={[21.02, 75.52]} 
          zoom={10} 
          className="h-full w-full"
          zoomControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />

          {iotData.alerts.map((alert, index) => (
            <Marker 
              key={index} 
              position={alert.coordinates} 
              icon={dangerIcon}
            >
              <Popup className="rounded-xl">
                <div className="p-1">
                  <h3 className="text-sm font-bold text-red-700">Outbreak Cluster: {iotData.cluster_id}</h3>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Trap: {alert.trap_id}</p>
                  <div className="bg-orange-50 border border-orange-100 p-2 rounded-lg mb-2">
                    <span className="text-xs font-semibold text-orange-800">
                      {alert.count} {alert.pest_detected}s detected!
                    </span>
                  </div>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white text-xs font-black py-2 rounded-lg shadow-sm transition-colors">
                    📢 Broadcast Alert
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
