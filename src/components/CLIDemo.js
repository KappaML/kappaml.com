import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CLIDemo = () => {
  const [activeTab, setActiveTab] = useState('learn');
  const [isTyping, setIsTyping] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [typedCommand, setTypedCommand] = useState('');
  const [autoRotate, setAutoRotate] = useState(true);
  const [progress, setProgress] = useState(100);

  const responses = {
    learn: `{
  "status": "success",
  "message": "Model updated successfully",
  "metrics": {
    "mae": 0.15,
    "rmse": 0.22
  }
}`,
    predict: `{
  "prediction": 0.89
}`,
    metrics: `{
  "total_samples": 1250,
  "accuracy": 0.92,
  "mae": 0.18,
  "rmse": 0.25,
  "last_updated": "2024-03-02T15:30:00Z"
}`
  };

  const commands = {
    learn: `curl -X 'POST' \\
  'https://api.kappaml.com/learn' \\
  -H 'X-API-Key: KAPPAML_API_KEY' \\
  -d '{
    "features": {
      "feature1": 1.2,
      "feature2": 0.5,
      "feature3": 3.1
    },
    "target": 1.2
  }'`,
    predict: `curl -X 'POST' \\
  'https://api.kappaml.com/predict' \\
  -H 'X-API-Key: KAPPAML_API_KEY' \\
  -d '{
    "features": {
      "feature1": 1.2,
      "feature2": 0.5,
      "feature3": 3.1
    }
  }'`,
    metrics: `curl -X 'GET' \\
  'https://api.kappaml.com/metrics' \\
  -H 'X-API-Key: KAPPAML_API_KEY'`
  };

  // Auto-rotate tabs effect
  useEffect(() => {
    if (!autoRotate) {
      setProgress(100);
      return;
    }

    setProgress(100);
    const progressInterval = setInterval(() => {
      setProgress(prev => Math.max(0, prev - (100 / 300))); // Update every 100ms for smooth animation
    }, 100);

    const rotationInterval = setInterval(() => {
      const tabs = Object.keys(commands);
      const currentIndex = tabs.indexOf(activeTab);
      const nextIndex = (currentIndex + 1) % tabs.length;
      setActiveTab(tabs[nextIndex]);
      setProgress(100);
    }, 30000);

    return () => {
      clearInterval(rotationInterval);
      clearInterval(progressInterval);
    };
  }, [activeTab, autoRotate]);

  // Typing effect
  useEffect(() => {
    setIsTyping(true);
    setShowResponse(false);
    setTypedCommand('');
    
    let currentCommand = '';
    const command = commands[activeTab];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < command.length) {
        currentCommand += command[charIndex];
        setTypedCommand(currentCommand);
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        setTimeout(() => {
          setShowResponse(true);
        }, 500);
      }
    }, 20);

    return () => {
      clearInterval(typeInterval);
    };
  }, [activeTab]);

  const handleTabClick = (cmd) => {
    setActiveTab(cmd);
    setAutoRotate(false);
    // Re-enable auto-rotation after 10 seconds
    const timer = setTimeout(() => setAutoRotate(true), 10000);
    return () => clearTimeout(timer);
  };

  // Safe and robust regex-based syntax highlighter for cURL command
  const highlightCommand = (text) => {
    if (!text) return '';
    
    let html = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    
    // Highlight curl command
    html = html.replace(/\b(curl)\b/g, '<span class="text-rose-400 font-semibold">$1</span>');
    
    // Highlight CLI options (-X, -H, -d)
    html = html.replace(/(-X|-H|-d)\b/g, '<span class="text-amber-400 font-semibold">$1</span>');
    
    // Highlight HTTP methods 'POST' / 'GET'
    html = html.replace(/'(POST|GET)'/g, "'<span class=\"text-emerald-400 font-bold\">$1</span>'");
    
    // Highlight API URL
    html = html.replace(/'(https:\/\/[^']+)'/g, "'<span class=\"text-cyan-400 font-medium underline decoration-cyan-400/30 hover:decoration-cyan-400 transition-colors\">$1</span>'");
    
    // Highlight headers name
    html = html.replace(/'(X-API-Key):\s*([^']+)'/g, "'<span class=\"text-indigo-300 font-medium\">$1</span>: <span class=\"text-teal-300\">$2</span>'");
    
    // Highlight JSON keys inside single quotes (curly braces body)
    html = html.replace(/"([^"]+)":/g, '<span class="text-blue-300">"$1"</span>:');
    
    // Highlight JSON numbers/floats
    html = html.replace(/(:\s*)(\d+(\.\d+)?)/g, '$1<span class="text-amber-300">$2</span>');

    // Highlight backslashes for multi-line formatting
    html = html.replace(/(\\)$/gm, '<span class="text-slate-500 font-bold">$1</span>');
    
    return html;
  };

  // Safe and robust regex-based syntax highlighter for JSON API response
  const highlightResponse = (text) => {
    if (!text) return '';
    
    let html = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
      
    // Highlight JSON keys
    html = html.replace(/"([^"]+)":/g, '<span class="text-indigo-300">"$1"</span>:');
    
    // Highlight JSON string values
    html = html.replace(/(:\s*)("([^"]*)")/g, '$1<span class="text-emerald-400">"$3"</span>');
    
    // Highlight JSON numbers
    html = html.replace(/(:\s*)(\d+(\.\d+)?)/g, '$1<span class="text-amber-300">$2</span>');
    
    // Highlight JSON booleans/null
    html = html.replace(/(:\s*)(true|false|null)/g, '$1<span class="text-purple-400 font-semibold">$2</span>');
    
    return html;
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      {/* Outer Glow Container to lift terminal off the background */}
      <div className="bg-slate-950/95 dark:bg-[#070b13]/95 rounded-2xl border border-slate-800 dark:border-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] dark:shadow-[0_0_50px_-10px_rgba(19,162,173,0.18),_0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-md transition-all duration-300 overflow-hidden relative">
        
        {/* Terminal Header / MacOS Style Title Bar */}
        <div className="flex items-center justify-between px-5 py-3 bg-slate-900/90 dark:bg-[#0c101c]/90 border-b border-slate-800/60 backdrop-blur-sm select-none">
          {/* Windows Controls */}
          <div className="flex space-x-2.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600/30 hover:bg-red-500 transition-colors duration-200 cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-600/30 hover:bg-yellow-500 transition-colors duration-200 cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-600/30 hover:bg-green-500 transition-colors duration-200 cursor-pointer"></div>
          </div>
          {/* Header Title */}
          <div className="text-center">
            <span className="text-slate-400 dark:text-slate-400/80 text-xs font-mono tracking-wider font-semibold">kappaml-api-demo.sh</span>
          </div>
          {/* Spacer to balance title alignment */}
          <div className="w-16"></div>
        </div>

        {/* Dynamic Progress Bar */}
        {autoRotate && (
          <div className="w-full h-[2px] bg-slate-900 dark:bg-slate-900/60">
            <div 
              className="h-full bg-gradient-to-r from-primary/40 via-primary to-primary transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Tab Selection Bar */}
        <div className="flex bg-slate-950/40 dark:bg-[#04060b]/40 border-b border-slate-800/60 px-2 select-none overflow-x-auto scrollbar-none">
          {Object.keys(commands).map((cmd) => (
            <button
              key={cmd}
              className={`px-5 py-3 text-xs font-mono border-b-2 transition-all duration-300 relative ${
                activeTab === cmd
                  ? 'text-primary border-primary bg-slate-900/40 dark:bg-[#0a0f1d]/40 font-semibold'
                  : 'text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-900/20 dark:hover:bg-[#0a0f1d]/20'
              }`}
              onClick={() => handleTabClick(cmd)}
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Content Shell */}
        <div className="p-6 font-mono">
          {/* Prompt */}
          <div className="flex items-center text-slate-500 text-sm mb-3 select-none">
            <span className="text-primary font-bold">➜</span>
            <span className="ml-2 text-indigo-400">~</span>
            <span className="ml-2 text-slate-400 font-medium">$</span>
          </div>

          {/* Typing Area */}
          <pre className="text-slate-100 font-mono text-[15px] sm:text-base whitespace-pre-wrap overflow-x-auto min-h-[220px] scrollbar-thin">
            <code dangerouslySetInnerHTML={{ __html: highlightCommand(typedCommand) }} />
            <span className="text-primary animate-pulse ml-0.5 font-bold">▋</span>
          </pre>

          {/* API Response Block */}
          {showResponse && (
            <div className="mt-6 pt-5 border-t border-slate-800/40 transition-all duration-500 ease-in-out">
              {/* Response Badge */}
              <div className="text-slate-400 font-mono text-xs mb-3 flex items-center select-none">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-semibold text-emerald-400/90">Response: 200 OK</span>
              </div>

              {/* Code Box */}
              <pre className="font-mono text-sm whitespace-pre-wrap overflow-x-auto bg-slate-900/40 dark:bg-black/35 border border-slate-800/50 p-4 rounded-xl shadow-inner text-emerald-400 max-h-[300px] overflow-y-auto scrollbar-thin">
                <code dangerouslySetInnerHTML={{ __html: highlightResponse(responses[activeTab]) }} />
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

CLIDemo.propTypes = {};

export default CLIDemo;