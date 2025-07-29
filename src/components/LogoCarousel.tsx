import React from 'react';
import { motion } from 'framer-motion';

export function LogoCarousel({ logos }: { logos: string[] }) {
  return (
    <motion.div
      className="flex space-x-8 items-center overflow-hidden"
      animate={{ x: [0, -logos.length * 150] }}
      transition={{ repeat: Infinity, duration: logos.length * 2, ease: 'linear' }}
    >
      {logos.map((src, i) => (
        <img key={i} src={src} alt="logo" className="h-16 w-auto" />
      ))}
      {logos.map((src, i) => (
        <img key={'dup'+i} src={src} alt="logo" className="h-16 w-auto" />
      ))}
    </motion.div>
  );
}
