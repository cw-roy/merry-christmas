'use client';

import dynamic from 'next/dynamic';

const Snow = dynamic(() => import('./components/snow'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative h-screen w-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <Snow />

      <h1 className="z-10 text-white text-5xl font-bold text-center drop-shadow-lg px-6">
        <span style={{ color: 'gold' }}>✞</span> Merry Christmas <span style={{ color: 'gold' }}>✞</span>
        <br />
        <span className="text-xl font-normal block mt-6 leading-relaxed">
          The true celebration of Christmas is when we ponder afresh the grace of God who became human, entered history through a virgin&rsquo;s womb, and brought redemption to the world.<br />
          <br />
          <i>- Dr. David Jeremiah</i><br />
        </span>
      </h1>
    </main>
  );
}
