const StatusPill = () => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted/60 rounded-full text-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
      <span className="text-foreground font-medium">Available</span>
      <span className="text-muted-foreground hidden sm:inline">· Open to new opportunities</span>
    </div>
  );
};

export default StatusPill;
