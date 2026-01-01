'use client';


import dynamic from 'next/dynamic';

const NewYear = dynamic(() => import('./components/newyear'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative h-screen w-screen flex items-center justify-center bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 overflow-hidden">
      <NewYear />

      <h1 className="z-10 text-white text-5xl font-bold text-center drop-shadow-lg px-6">
        <span style={{ color: 'gold' }}>🎉</span> Happy New Year <span style={{ color: 'gold' }}>2026 🎆</span>
        <br />
        <span className="text-xl font-normal block mt-6 leading-relaxed">
          Wishing you a blessed New Year! Here&apos;s to a new year shaped by hope, kindness, and good things yet to come.<br />
          <br />
        </span>
      </h1>
    </main>
  );
}
