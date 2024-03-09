import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

      </div>
      <header className="py-16 sm:text-center">
        <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">
          My Personal Blog
        </h1>
        <p className="text-lg text-slate-700 dark:text-slate-400">
          Here you can find my thoughts, knowledge
        </p>
      </header>
    </main>
  );
}
