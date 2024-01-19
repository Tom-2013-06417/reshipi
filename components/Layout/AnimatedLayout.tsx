'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

export const AnimatedLayout = (props: PropsWithChildren<unknown>) => {
  const key = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
        }}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  );
};
