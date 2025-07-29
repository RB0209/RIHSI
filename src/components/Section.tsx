import React from 'react';

export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <div className="snap-start min-w-[100vw] flex-shrink-0 flex items-center justify-center bg-white">
      {children}
    </div>
  );
}