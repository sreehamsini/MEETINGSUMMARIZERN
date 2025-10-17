import React, { useState, useRef } from 'react';
import './App.css';
import { FaFileUpload, FaMicrophoneAlt, FaFileAlt, FaSpinner } from 'react-icons/fa'; // Import icons

function App() {
  const [summary, setSummary] = useState('');
  const [transcript, setTranscript] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fileName, setFileName] = useState(''); // State to store file name
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setError(''); // Clear any previous file-related errors
    } else {
      setFileName('');
    }
  };

  const handleSummarize = async () => {
    const file = fileInputRef.current.files[0];

    if (!file) {
      setError('Please select an audio file.');
      return;
    }

    setLoading(true);
    setError('');
    setSummary('');
    setTranscript('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://127.0.0.1:5000/summarize', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || 'An unexpected error occurred.');
        return;
      }

      const data = await response.json();
      setSummary(data.summary);
      setTranscript(data.transcript);
    } catch (err) {
      setError('Failed to connect to the server. Please try again later.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Meeting Summarizer</h1>
        <p>Upload an audio file to get a summary and transcript.</p>
      </header>
      <main className="App-main">
        <div className="card">
          <div className="input-section">
            <div className="file-input-container">
              <input
                type="file"
                ref={fileInputRef}
                accept="audio/*"
                className="file-input"
                id="audio-file-upload"
                onChange={handleFileChange}
              />
              <label htmlFor="audio-file-upload" className="file-input-label">
                <FaFileUpload />
                {fileName ? fileName : 'Choose an audio file'}
              </label>
              {fileName && <p className="file-name">Selected: {fileName}</p>}
            </div>
            <button onClick={handleSummarize} disabled={loading} className="summarize-button">
              {loading ? (
                <FaSpinner className="spinner" />
              ) : (
                <>
                  <FaMicrophoneAlt style={{ marginRight: '10px' }} /> Summarize
                </>
              )}
            </button>
          </div>

          {error && <p className="error-message">{error}</p>}
        </div>

        {summary && (
          <div className="card output-section">
            <h2><FaFileAlt /> Summary</h2>
            <p>{typeof summary === 'string' ? summary : ''}</p>
          </div>
        )}

        {transcript && (
          <div className="card output-section">
            <h2><FaFileAlt /> Transcript</h2>
            <p>{typeof transcript === 'string' ? transcript : ''}</p>
          </div>
        )}
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Meeting Summarizer. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;