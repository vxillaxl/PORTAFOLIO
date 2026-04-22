export function ProjectCoverPanel({ variant, ribbon }: { variant: 0 | 1 | 2; ribbon: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {variant === 0 ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-900 to-sky-500" />
          <div className="absolute -right-16 top-10 h-48 w-48 rounded-full bg-sky-300/30 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-400/20 blur-2xl" />
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="absolute left-[10%] top-[22%] w-[80%] rounded-2xl border border-white/20 bg-white/[0.07] p-5 shadow-lg backdrop-blur-[2px]">
            <div className="mb-4 h-2.5 w-2/5 rounded-full bg-white/30" />
            <div className="mb-2 h-2 w-full rounded-full bg-white/15" />
            <div className="mb-2 h-2 w-[92%] rounded-full bg-white/10" />
            <div className="mt-5 flex gap-3">
              <div className="h-9 w-24 rounded-lg bg-sky-400/90 shadow-md" />
              <div className="h-9 flex-1 rounded-lg border border-white/25 bg-white/5" />
            </div>
          </div>
        </>
      ) : null}
      {variant === 1 ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950 via-blue-900 to-violet-500" />
          <div className="absolute left-1/2 top-[20%] h-56 w-[72%] -translate-x-1/2 rounded-3xl border border-white/20 bg-white/[0.08] p-6 shadow-2xl backdrop-blur-sm">
            <div className="mx-auto mb-5 h-28 w-[55%] rounded-xl bg-gradient-to-b from-white/25 to-white/5" />
            <div className="mx-auto mb-2 h-2 w-3/5 rounded-full bg-white/25" />
            <div className="mx-auto mb-4 h-2 w-2/5 rounded-full bg-white/15" />
            <div className="mx-auto h-10 w-2/5 rounded-full bg-white/20" />
          </div>
          <div className="absolute bottom-[18%] right-[12%] h-16 w-16 rounded-2xl border border-white/30 bg-white/10 rotate-6" />
        </>
      ) : null}
      {variant === 2 ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-bl from-slate-950 via-blue-950 to-cyan-600" />
          <div className="absolute inset-x-0 top-0 h-14 border-b border-white/10 bg-black/20" />
          <div className="absolute left-8 top-5 h-5 w-28 rounded-md bg-white/90 shadow" />
          <div className="absolute right-10 top-6 flex gap-3">
            <div className="h-3 w-14 rounded-full bg-white/20" />
            <div className="h-3 w-14 rounded-full bg-white/20" />
            <div className="h-3 w-14 rounded-full bg-white/20" />
          </div>
          <div className="absolute left-[12%] right-[12%] top-[32%] rounded-2xl border border-white/15 bg-white/[0.06] px-8 py-12 text-center backdrop-blur-sm">
            <div className="mx-auto mb-4 h-3 w-24 rounded-full bg-sky-300/50" />
            <div className="mx-auto h-4 w-[80%] max-w-md rounded-full bg-white/20" />
            <div className="mx-auto mt-3 h-4 w-3/5 max-w-sm rounded-full bg-white/10" />
          </div>
          <div className="absolute bottom-[14%] left-[12%] right-[12%] h-2 rounded-full bg-white/10" />
        </>
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent dark:from-slate-950/90" />
      <span className="absolute bottom-3 left-3 z-10 rounded-md bg-white/90 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-blue-900 shadow dark:bg-slate-900/90 dark:text-blue-200">
        {ribbon}
      </span>
    </div>
  );
}
