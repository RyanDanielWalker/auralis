'use client';
import { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

export default function WaveformPlayer({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ws = WaveSurfer.create({
      container: containerRef.current,
      waveColor: '#A4AEB9',
      progressColor: '#2563EB',
      cursorWidth: 2,
      height: 100,
    });
    ws.load(url);
    return () => ws.destroy();
  }, [url]);

  return <div ref={containerRef} className="w-full mt-4" />;
}
