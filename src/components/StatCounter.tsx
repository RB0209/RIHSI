import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

export function StatCounter({ label, end }: { label: string; end: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.floor(latest));
  useEffect(() => {
    animate(count, end, { duration: 2 });
  }, [count, end]);

  return (
    <div className="text-center m-4">
      <motion.span className="text-4xl font-bold text-brand">{rounded}</motion.span>
      <p className="mt-2">{label}</p>
    </div>
  );
}
