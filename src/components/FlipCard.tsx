import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function FlipCard({ name, role, desc }: { name: string; role: string; desc: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      onClick={() => setFlipped(!flipped)}
      className="w-64 h-80 perspective cursor-pointer"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-full"
      >
        <div className="absolute backface-hidden bg-brand text-white p-6 rounded-lg flex flex-col items-center justify-center">
          <h3 className="text-xl font-bold">{name}</h3>
          <p>{role}</p>
        </div>
        <div className="absolute rotateY-180 backface-hidden bg-white border p-6 rounded-lg flex items-center justify-center">
          <p className="text-gray-800">{desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
