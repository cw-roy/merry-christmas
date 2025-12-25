function Snow() {
  return (
    <div className="snow">
      {Array.from({ length: 60 }).map((_, i) => (
        <span
          key={i}
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative h-screen w-screen flex items-center justify-center">
      <Snow />
      <h1 className="z-10 text-white text-6xl font-bold text-center drop-shadow-lg">
        Merry Christmas 🎄
        <br />
        <span className="text-2xl font-normal">
          Peace & Goodwill
        </span>
      </h1>
    </main>
  );
}
