import { AnimatePresence, motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

export const AnimatedLayout = (props: PropsWithChildren<unknown>) => (
  <AnimatePresence mode="wait">
    <motion.div
      initial={{ x: 150, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -150, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 20,
      }}
    >
      {props.children}
    </motion.div>
  </AnimatePresence>
);
