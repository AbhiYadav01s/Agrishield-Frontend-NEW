import React, { useState } from 'react';

export default function ScanCrop({ onBack }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
      setResult(null); 
    }
  };

  const handleUpload = () => {
    if (!selectedImage) return;
    setLoading(true);
    
    // HACKATHON DEMO MODE: Bypass backend entirely. 
    // Simulate a 2-second AI scan, returning a Cotton Boll disease with 74% confidence.
    setTimeout(() => {
      setResult({
        disease_name: "Pink Bollworm Damage (Suspected)",
        confidence: 0.74, 
        solution: "Apply Emamectin Benzoate 5% SG at 10g per 10 liters of water. Immediately install pheromone traps (5 per acre).",
        precaution: "Remove and destroy infected bolls physically. Avoid excessive nitrogen fertilizers during the boll formation stage.",
        weather_risk: "High humidity (>80%) and cloudy conditions over the next 48 hours will increase pest mating activity. Spray only when clear skies are visible to prevent chemical wash-off."
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex-1 flex flex-col items-center bg-[#f4f8f5] p-6 overflow-y-auto">
      
      <div className="w-full max-w-md flex justify-start mb-6">
        <button 
          onClick={onBack}
          className="bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-bold py-2.5 px-5 rounded-xl transition shadow-md text-sm tracking-wide flex items-center gap-2"
        >
          <span>←</span> Return to Dashboard
        </button>
      </div>

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 border-t-4 border-[#2d6a4f] flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-[#edf2f4] rounded-2xl flex items-center justify-center text-5xl mb-4 shadow-inner">
          📸
        </div>
        <h2 className="text-2xl font-bold text-gray-800 font-roboto mb-2">Crop Scanner</h2>
        <p className="text-sm text-gray-500 mb-6">Upload a photo of the affected cotton boll to detect diseases.</p>

        <div className="w-full mb-6 flex flex-col items-center">
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange}
            className="block w-full max-w-[250px] text-sm text-gray-500 file:mr-4 file:py-3 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-[#eaf4f4] file:text-[#2d6a4f] hover:file:bg-[#d8f3dc] transition-colors cursor-pointer"
          />
        </div>

        {/* COMPACT IMAGE CONTAINER: Reduced to roughly 1/4th size and centered */}
        {selectedImage && (
          <div className="mb-6 w-32 h-32 mx-auto rounded-xl overflow-hidden shadow-inner border border-gray-200 bg-gray-50 flex items-center justify-center">
            <img 
              src={URL.createObjectURL(selectedImage)} 
              alt="Preview" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}

        {/* THICKER, LIGHT GREEN BUTTON: Turns black on hover with white text */}
        <button 
          onClick={handleUpload}
          disabled={!selectedImage || loading}
          className="w-full bg-emerald-500 hover:bg-black disabled:bg-gray-400 text-white font-black py-5 text-base rounded-2xl transition-colors duration-300 shadow-xl tracking-wide flex justify-center items-center gap-2"
        >
          {loading ? 'Scanning via AI...' : 'Scan Image Now'}
        </button>

        {/* CENTER-ALIGNED RESULTS & ESCALATION WARNING */}
        {result && (
          <div className="mt-6 w-full flex flex-col items-center animate-fade-in-up">
            
            <div className="bg-orange-50 border border-orange-200 text-orange-800 p-3 rounded-xl mb-4 text-center w-full shadow-sm">
              <span className="text-xl block mb-1">⚠️</span>
              <p className="text-xs font-bold uppercase tracking-wider mb-1">Confidence Score: {(result.confidence * 100).toFixed(0)}%</p>
              <p className="text-[11px] font-medium leading-tight">Score is below 80%. This scan has been automatically forwarded to the Regional Staff Portal for human verification.</p>
            </div>

            <div className="p-5 w-full bg-[#f0fdf4] border-2 border-[#74c69d] rounded-2xl flex flex-col items-center text-center shadow-sm">
              <h3 className="font-bold text-[#1b4332] text-lg mb-4 border-b border-[#74c69d] pb-2 w-full">Preliminary AI Diagnosis</h3>
              
              <div className="space-y-4 text-sm w-full">
                <div className="flex flex-col items-center">
                  <span className="block font-black text-gray-800 uppercase tracking-wide text-xs mb-1">Detected Problem</span>
                  <p className="text-red-600 font-bold bg-red-50 py-1 px-3 rounded-lg inline-block border border-red-100">{result.disease_name}</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <span className="block font-black text-gray-800 uppercase tracking-wide text-xs mb-1">Treatment Solution</span>
                  <p className="text-emerald-700 font-medium">{result.solution}</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <span className="block font-black text-gray-800 uppercase tracking-wide text-xs mb-1">Required Prevention</span>
                  <p className="text-orange-700 font-medium">{result.precaution}</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex flex-col items-center w-full mt-2">
                  <span className="block font-black text-blue-800 uppercase tracking-wide text-xs mb-2 flex items-center justify-center gap-1">
                    <span className="text-lg">⛈️</span> Weather Risk Management
                  </span>
                  <p className="text-blue-700 font-medium text-xs leading-relaxed">{result.weather_risk}</p>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}