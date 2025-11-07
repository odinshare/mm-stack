import * as React from "react";
export function MMWordmark({ className="" }: { className?: string }) {
  return (
    <div className={className}>
      <span className="font-mono tracking-widest">MEDIA</span>
      <span className="mx-2">·</span>
      <span className="font-mono tracking-widest">MORTE</span>
    </div>
  );
}
