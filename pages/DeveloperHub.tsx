
import React, { useState, useEffect, useRef } from 'react';
import { TECH_STACK } from '../constants';

const DeveloperHub: React.FC = () => {
  const [isPushing, setIsPushing] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const addLog = (msg: string) => {
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const simulatePush = async () => {
    if (isPushing) return;
    setIsPushing(true);
    setLogs([]);
    
    const steps = [
      "Initializing git push sequence...",
      "Connecting to remote: origin/main",
      "Analyzing 42 changed files...",
      "Compressing medical-assets.zip (4.2MB)",
      "Verifying security headers for Gemini API integration...",
      "Running tech-stack health checks (React 19)...",
      "Staging local commits for production deployment...",
      "Writing objects: 100% (42/42), 856.23 KiB | 2.50 MiB/s, done.",
      "Pushing to github.com:sosocare/carecova.git",
      "Remote: Deploying to production environment...",
      "✓ Push successful. Branch 'main' updated."
    ];

    for (const step of steps) {
      addLog(step);
      await new Promise(resolve => setTimeout(resolve, Math.random() * 800 + 400));
    }
    setIsPushing(false);
  };

  return (
    <div className="bg-slate-950 min-h-screen py-20 text-slate-300 selection:bg-blue-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Engineering Dashboard
            </div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
              Developer <span className="text-blue-500">Hub</span>
            </h1>
          </div>
          <button 
            onClick={simulatePush}
            disabled={isPushing}
            className="group relative flex items-center gap-3 px-8 py-4 bg-white text-slate-950 font-black rounded-2xl hover:bg-blue-500 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className={`w-5 h-5 ${isPushing ? 'animate-spin' : 'group-hover:rotate-12'} transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            {isPushing ? 'Pushing to Git...' : 'Push to Production'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tech Stack Cards */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              Project Tech Stack
            </h2>
            {TECH_STACK.map((tech) => (
              <div key={tech.name} className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/30 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-white">{tech.name}</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">{tech.version}</span>
                </div>
                <p className="text-sm text-slate-500 mb-4">{tech.description}</p>
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">{tech.category}</span>
              </div>
            ))}
          </div>

          {/* Terminal Console */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              Git Deployment Terminal
            </h2>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-slate-800/50 px-6 py-3 border-b border-slate-800 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/20 border border-rose-500/40"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40"></div>
                <span className="ml-4 text-[10px] font-mono text-slate-500">zsh — carecova/main</span>
              </div>
              <div 
                ref={scrollRef}
                className="p-8 h-[500px] overflow-y-auto font-mono text-sm space-y-2 custom-scrollbar"
              >
                {logs.length === 0 ? (
                  <div className="text-slate-700 animate-pulse">Ready for deployment sequence. Click "Push to Production" to begin...</div>
                ) : (
                  logs.map((log, i) => (
                    <div key={i} className={`${log.includes('✓') ? 'text-emerald-400 font-bold' : 'text-slate-400'}`}>
                      {log}
                    </div>
                  ))
                )}
                {isPushing && (
                  <div className="flex gap-2 text-blue-500">
                    <span className="animate-bounce">●</span>
                    <span className="animate-bounce [animation-delay:0.2s]">●</span>
                    <span className="animate-bounce [animation-delay:0.4s]">●</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-blue-500/5 border border-blue-500/10 rounded-2xl">
              <div className="flex items-center gap-4 text-sm">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  The <span className="text-white font-bold">CareCova</span> application architecture is optimized for Nigeria's low-bandwidth environments, utilizing pre-compiled assets and edge-caching for sub-second load times on mobile devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #334155; }
      `}</style>
    </div>
  );
};

export default DeveloperHub;
