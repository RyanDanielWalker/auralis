'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TestPage() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/').then(res => setData(res.data.message));
  }, []);

  return <div className="p-10 text-center text-xl">{data}</div>;
}
