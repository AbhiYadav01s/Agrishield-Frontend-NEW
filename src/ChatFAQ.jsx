import { useState, useRef, useEffect } from 'react';

export default function ChatFAQ({ onBack }) {
  const [activeTab, setActiveTab] = useState('history');
  const [searchQuery, setSearchQuery] = useState('');
  
  // NEW: State for the functional chat input
  const [chatInput, setChatInput] = useState('');
  const chatEndRef = useRef(null);

  // NEW: Interactive chat history array
  const [chatHistory, setChatHistory] = useState([
    { 
      id: 1, 
      type: 'user', 
      isAudio: true, 
      text: 'Audio Recording' 
    },
    { 
      id: 2, 
      type: 'ai', 
      text: 'Based on your description of the yellowing leaves starting from the bottom, your crop is likely experiencing a Nitrogen deficiency. I recommend applying Urea top-dressing before the next irrigation cycle.' 
    }
  ]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (activeTab === 'history') {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory, activeTab]);

  // Handle typing a new message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    // 1. Add user's typed message to the chat
    const newUserMsg = { id: Date.now(), type: 'user', isAudio: false, text: chatInput };
    setChatHistory((prev) => [...prev, newUserMsg]);
    setChatInput(''); // Clear input field

    // 2. Simulate AI typing and responding after 1 second
    setTimeout(() => {
      const newAiMsg = { 
        id: Date.now() + 1, 
        type: 'ai', 
        text: `I understand you are asking about: "${newUserMsg.text}". For precise agricultural advice, please ensure you scan the crop or ask a local Kisan Mitra in the next tab.` 
      };
      setChatHistory((prev) => [...prev, newAiMsg]);
    }, 1000);
  };

  return (
    <div className="flex-1 flex flex-col bg-[#f4f8f5] overflow-hidden font-opensans">
      
      {/* HEADER & SEARCH */}
      <div className="flex-none bg-white shadow-sm border-b border-gray-200 z-20 sticky top-0">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={onBack} className="p-2 bg-emerald-50 text-emerald-800 rounded-xl hover:bg-emerald-100 transition-colors">
            <span className="text-xl font-bold">←</span>
          </button>
          <h2 className="text-base sm:text-lg font-black text-[#1b4332] font-roboto leading-tight">
            Krishi Mitra Hub
          </h2>
          <div className="w-10"></div>
        </div>

        <div className="px-4 pb-4">
          <div className="relative flex items-center bg-gray-100 rounded-xl px-4 py-2 border border-gray-200 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#40916c] transition-all">
            <span className="text-gray-400 mr-2">🔍</span>
            <input 
              type="text" 
              placeholder="Search past chats (e.g. 'yellow leaves')"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent outline-none text-sm font-medium text-gray-700"
            />
          </div>
        </div>
      </div>

      {/* THE TWO MAIN TABS */}
      <div className="flex-none flex px-4 pt-4 pb-2">
        <div className="flex w-full bg-gray-200 p-1 rounded-xl shadow-inner">
          <button 
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${
              activeTab === 'history' ? 'bg-white text-[#1b4332] shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            My AI Chats
          </button>
          <button 
            onClick={() => setActiveTab('experts')}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${
              activeTab === 'experts' ? 'bg-white text-[#023e8a] shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Local Experts
          </button>
        </div>
      </div>

      {/* ---------------------------------------------------
          TAB 1: MY AI CHATS (Now with working input!)
          --------------------------------------------------- */}
      {activeTab === 'history' && (
        <div className="flex-1 flex flex-col overflow-hidden relative">
          
          {/* Scrollable Chat Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatHistory.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                
                {msg.type === 'user' ? (
                  /* User Message Bubble */
                  <div className="bg-emerald-100 text-emerald-900 rounded-2xl rounded-tr-sm p-3 max-w-[85%] border border-emerald-200 shadow-sm">
                    <p className="text-xs font-bold mb-1 opacity-70">You asked:</p>
                    {msg.isAudio ? (
                      <div className="flex items-center gap-1 h-6 mt-1">
                        <button className="text-emerald-700 mr-2 text-lg">▶️</button>
                        {[3, 6, 4, 8, 5, 10, 4, 7, 3, 5, 8, 4, 2].map((height, i) => (
                          <div key={i} className="w-1 bg-emerald-500 rounded-full" style={{ height: `${height * 10}%` }}></div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm font-medium">{msg.text}</p>
                    )}
                  </div>
                ) : (
                  /* AI Message Bubble */
                  <div className="bg-white text-gray-800 rounded-2xl rounded-tl-sm p-4 max-w-[90%] border border-gray-200 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-bold text-[#1b4332]">🤖 Krishi Mitra:</p>
                      <button className="text-gray-400 hover:text-emerald-600 transition-colors">🔊</button>
                    </div>
                    <p className="text-sm font-medium leading-relaxed">{msg.text}</p>
                  </div>
                )}
              </div>
            ))}
            <div ref={chatEndRef} /> {/* Invisible div to scroll to bottom */}
          </div>

          {/* NEW: Fixed Input Area at Bottom */}
          <div className="flex-none bg-white p-3 border-t border-gray-200 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2 max-w-lg mx-auto">
              <button type="button" className="p-2 text-emerald-700 bg-emerald-50 rounded-full hover:bg-emerald-100 transition-colors">
                <span className="text-xl">🎙️</span>
              </button>
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 bg-gray-100 border border-gray-200 text-sm font-medium rounded-full px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#40916c] transition-all"
              />
              <button 
                type="submit" 
                disabled={!chatInput.trim()}
                className="p-2.5 bg-[#1b4332] text-white rounded-full hover:bg-[#081c15] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
              >
                <span className="text-lg leading-none">➤</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------
          TAB 2: LOCAL EXPERTS
          --------------------------------------------------- */}
      {activeTab === 'experts' && (
        <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-24">
          <button className="w-full bg-gradient-to-r from-[#023e8a] to-[#0077b6] hover:from-[#03045e] hover:to-[#023e8a] text-white font-black py-4 rounded-2xl shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 border-2 border-[#caf0f8]">
            <span className="text-2xl">🙋‍♂️</span>
            Ask a Local Kisan Mitra
          </button>

          <div>
            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-3 ml-1">Community Feed</h4>
            
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg">👨‍🌾</div>
                <div>
                  <h5 className="text-sm font-bold text-gray-800">Ramesh Kumar <span className="text-xs text-gray-400 font-normal ml-1">2 hrs ago</span></h5>
                  <p className="text-sm text-gray-600 mt-1 font-medium">My brinjal leaves have white powdery spots. The AI says Powdery Mildew, but what exact brand of spray works best here in our village?</p>
                </div>
              </div>

              <div className="bg-[#f0f9ff] p-4 rounded-xl border border-[#bae6fd] ml-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm">🧔</div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-900 flex items-center gap-1">
                      Suresh (Kisan Mitra) <span className="text-blue-500 text-sm">✅</span>
                    </h5>
                    <span className="text-[9px] bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded border border-blue-200">
                      Helped 45 local farmers
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mt-2 font-medium">
                  Yes Ramesh, it's Powdery Mildew. In our block, "Wettable Sulphur 80% WP" works perfectly. Mix 3 grams per liter of water and spray early morning. Do not spray if the sun is too hot.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
