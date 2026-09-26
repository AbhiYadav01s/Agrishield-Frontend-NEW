

export default function AIRetrainingStudio({ onBack }) {
  return (
    <div className="flex-1 flex flex-col bg-[#faf5ff] overflow-hidden font-opensans">
      <div className="flex-none flex items-center px-4 py-3 bg-white shadow-sm border-b border-violet-100 z-20">
        <button onClick={onBack} className="p-2 bg-violet-50 text-violet-800 rounded-xl hover:bg-violet-100 mr-3">
          <span className="text-xl font-bold">←</span>
        </button>
        <h2 className="text-lg font-black text-[#5a189a] font-roboto">AI Retraining Studio</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-5 pb-10">
        <div className="bg-gradient-to-r from-gray-900 to-[#10002b] rounded-2xl p-5 shadow-lg border border-gray-800 text-white">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-mono text-emerald-400">ENGINE: YOLOv8-AGRI</span>
            <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded">BATCH: 12 IMAGES</span>
          </div>
          <p className="text-sm font-medium text-gray-300 leading-relaxed mb-4">
            These images have been manually identified by agronomists. Sync them to the Core Engine to improve future AI confidence scores.
          </p>
          
          {/* Mock Database Sync Visualization */}
          <div className="flex items-center gap-4 bg-black/40 p-3 rounded-xl border border-gray-700 font-mono text-xs text-gray-400">
            <div className="flex-1 flex flex-col items-center gap-2">
              <span className="text-xl">🗂️</span>
              <span>Images</span>
            </div>
            <div className="text-emerald-500 animate-pulse">======&gt;</div>
            <div className="flex-1 flex flex-col items-center gap-2">
              <span className="text-xl">🧠</span>
              <span>Model Weights</span>
            </div>
            <div className="text-emerald-500 animate-pulse">======&gt;</div>
            <div className="flex-1 flex flex-col items-center gap-2">
              <span className="text-xl">🍃</span>
              <span>MongoDB POP</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-[#10002b] hover:bg-black text-emerald-400 text-sm font-black py-4 rounded-xl shadow-md transition-colors flex items-center justify-center gap-3 border border-gray-700">
          <span className="text-xl">⚙️</span> Execute Retraining Pipeline
        </button>
      </div>
    </div>
  );
}
