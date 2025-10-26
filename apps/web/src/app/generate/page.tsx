'use client';
import { useState } from 'react';
import axios from 'axios';
import WaveformPlayer from '@/components/WaveFormPlayer';


export default function GeneratePage() {
  const [prompt, setPrompt] = useState('');
  const [songUrl, setSongUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const res = await axios.post('/api/music/generate', { prompt });
    setSongUrl(res.data.url);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center gap-6 p-10">
      <h1 className="text-3xl font-bold">Generate Music</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your track..."
        className="border rounded px-4 py-2 w-96"
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {loading ? 'Generating…' : 'Generate'}
      </button>

      {songUrl && (
        <div className="mt-6 w-full max-w-xl">
          <WaveformPlayer url={songUrl} />
        </div>
      )}
    </div>
  );
}
