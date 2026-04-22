import Image from "next/image";

export function ProjectCoverPanel({
  imageSrc,
  imageAlt,
  ribbon,
}: {
  imageSrc: string;
  imageAlt: string;
  ribbon: string;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-slate-200 dark:bg-slate-800">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 520px"
        className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/92 via-slate-950/35 to-slate-900/5 dark:from-slate-950/95" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <span className="absolute bottom-3 left-3 z-10 rounded-md bg-white/90 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-blue-900 shadow dark:bg-slate-900/90 dark:text-blue-200">
        {ribbon}
      </span>
    </div>
  );
}
