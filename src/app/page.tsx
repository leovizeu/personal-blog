import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
      {/* Radial Background */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-slate-200 dark:bg-slate-950 
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      </div>
      {/* Start of the Page */}
      <header className="py-16 sm:text-center">
        <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">
          My Personal Blog
        </h1>
        <p className="text-lg text-slate-700 dark:text-slate-400">
          Here you can find my thoughts, knowledge
        </p>
      </header>
      <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
        <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block">
          <div className="space-y-16">
            <article className="relative group">
              <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50">
                <svg viewBox="0 0 9 9" className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] 
                h-[calc(0.5rem+1px)] overflow-visible sm:block">
                  <circle 
                    cx="4.5" 
                    cy="4.5" 
                    r="4.5" 
                    stroke="currentColor" 
                    className="fill-white dark:fill-slate-900" 
                    stroke-width="2">
                      <circle cx="4.5" cy="4.5" r="4.5" stroke="currentColor" className="fill-white dark:fill-slate-900" stroke-width="2"></circle>
                  </circle>
                </svg>
                <div className="relative"></div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
