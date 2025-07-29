import React, { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-row overflow-x-auto snap-x snap-mandatory h-screen">
      {children}
    </div>
  );
}