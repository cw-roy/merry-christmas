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
        Merry Christmas 🎄
        <br />
        <span className="text-xl font-normal block mt-6 leading-relaxed">
          In a silent night where starlight lay,<br />
          A virgin’s hope brought dawn to clay.<br />
          The Word took flesh in humble breath,<br />
          A cradle crowned the fall of death.<br />
          No throne but straw, no crown but peace,<br />
          Yet heaven bent so wars might cease.
        </span>
      </h1>
    </main>
  );
}
