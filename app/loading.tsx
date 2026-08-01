export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-50">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-foreground/20 border-t-accent" />
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Loading</p>
      </div>
    </div>
  );
}
