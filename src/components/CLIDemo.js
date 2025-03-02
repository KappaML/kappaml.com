import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CLIDemo = () => {
  const [activeTab, setActiveTab] = useState('learn');
  const [isTyping, setIsTyping] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [typedCommand, setTypedCommand] = useState('');

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
  "prediction": 0.89,
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
      "feature3": 3.1,
      "feature4": 0.8
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
      "feature3": 3.1,
      "feature4": 0.8
    }
  }'`,
    metrics: `curl -X 'GET' \\
  'https://api.kappaml.com/metrics' \\
  -H 'X-API-Key: KAPPAML_API_KEY'`
  };

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

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-2 bg-gray-800">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-gray-400 text-sm font-mono">KappaML API Demo</span>
          </div>
        </div>

        {/* Terminal Tabs */}
        <div className="flex border-b border-gray-700">
          {Object.keys(commands).map((cmd) => (
            <button
              key={cmd}
              className={`px-4 py-2 text-sm font-mono ${
                activeTab === cmd
                  ? 'text-white bg-gray-700'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
              onClick={() => setActiveTab(cmd)}
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Content */}
        <div className="p-4">
          <div className="flex items-center text-gray-400 font-mono mb-2">
            <span className="text-green-400">➜</span>
            <span className="ml-2">~</span>
            <span className="ml-2 text-blue-400">$</span>
          </div>
          <pre className="text-green-400 font-mono text-base sm:text-lg whitespace-pre-wrap overflow-x-auto">
            <code>{typedCommand}{isTyping ? '▋' : ''}</code>
          </pre>

          {/* API Response */}
          {showResponse && (
            <div className="mt-4 transition-all duration-500 ease-in-out">
              <div className="text-gray-400 font-mono mb-2">Response:</div>
              <pre className="text-blue-400 font-mono text-base sm:text-lg whitespace-pre-wrap overflow-x-auto bg-gray-800 p-4 rounded">
                <code>{responses[activeTab]}</code>
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