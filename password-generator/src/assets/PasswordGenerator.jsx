import { useState } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+[]{}|;:,.<>?";

    let generated = "";
    for (let i = 0; i < length; i++) {
      generated += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(generated);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-96">
        <h1 className="text-white text-2xl font-bold mb-4">Password Generator</h1>

        {/* Password field with copy */}
        <div className="flex mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="flex-grow px-3 py-2 rounded-l-lg bg-gray-700 text-white border border-gray-600 focus:outline-none"
            placeholder="Click Generate..."
          />
          <button
            onClick={copyToClipboard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg"
          >
            Copy
          </button>
        </div>

        {/* Length slider */}
        <div className="mb-4">
          <label className="text-gray-300 block mb-1">
            Length: <span className="font-bold text-white">{length}</span>
          </label>
          <input
            type="range"
            min="6"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Options */}
        <div className="mb-4">
          <label className="flex items-center text-gray-300 mb-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="mr-2"
            />
            Include Numbers
          </label>
          <label className="flex items-center text-gray-300">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="mr-2"
            />
            Include Special Characters
          </label>
        </div>

        {/* Generate button */}
        <button
          onClick={generatePassword}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}
