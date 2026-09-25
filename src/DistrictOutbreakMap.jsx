import React from 'react';
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';

export default function DistrictOutbreakMap({ onBack }) {
  // District center coordinates
  const districtCenter = [21.0, 75.56]; 

  return (
    <div className="flex-1 flex flex-col bg-[#faf5ff] overflow-hidden font-opensans relative">
      <div className="flex-none flex items-center px-4 py-3 bg-white shadow-sm border-b border-violet-100 z-20">
        <button onClick={onBack} className="p-2 bg-violet-50 text-violet-800 rounded-xl hover:bg-violet-100 mr-3">
          <span className="text-xl font-bold">←</span>
        </button>
        <h2 className="text-lg font-black text-[#5a189a] font-roboto">Macro Surveillance</h2>
      </div>

      <div className="flex-1 relative z-0">
        <MapContainer 
          center={districtCenter} 
          zoom={10} // Adjusted zoom to focus on the district
          className="h-full w-full"
          zoomControl={false}
        >
          {/* Switched to standard, 100% free OpenStreetMap tiles to remove the watermark */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />

          {/* Large Red Danger Zone */}
          <Circle 
            center={[21.05, 75.45]} 
            pathOptions={{ color: 'red', fillColor: '#ef4444', fillOpacity: 0.4 }} 
            radius={15000} 
          >
            <Popup>
              <div className="text-center">
                <h3 className="font-bold text-red-700">Critical Red Zone</h3>
                <p className="text-xs text-gray-600">High Spodoptera moth concentration</p>
              </div>
            </Popup>
          </Circle>

          {/* Moderate Orange Warning Zone */}
          <Circle 
            center={[20.85, 75.7]} 
            pathOptions={{ color: 'orange', fillColor: '#f97316', fillOpacity: 0.4 }} 
            radius={8000} 
          >
            <Popup>Moderate Risk Zone</Popup>
          </Circle>

        </MapContainer>

        {/* Weather UI Overlay */}
        <div className="absolute top-4 right-4 z-[400] bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-200">
          <p className="text-[10px] font-bold text-gray-500 uppercase">OpenWeatherMap Feed</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-2xl">⛈️</span>
            <div>
              <p className="text-sm font-black text-gray-800">Humidity Spike</p>
              <p className="text-xs font-bold text-blue-600">94% RH - East Zone</p>
            </div>
          </div>
        </div>

        {/* Red Alert Override Button */}
        <div className="absolute bottom-6 left-4 right-4 z-[400]">
          <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black py-4 rounded-xl shadow-[0_10px_20px_rgba(220,38,38,0.3)] transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 border-2 border-red-400">
            <span className="text-2xl animate-pulse">🚨</span> TRIGGER DISTRICT RED ALERT
          </button>
        </div>
      </div>
    </div>
  );
}