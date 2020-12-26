import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SidebarSections from './sidebarSections';

interface AccordionProps {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Accordion = ({ expanded, setExpanded, children }: AccordionProps) => {
  const isOpen = expanded;

  return (
    <div>
      <motion.button
        className="flex flex-row items-center justify-between pr-34px w-full focus:outline-none "
        initial={false}
        onClick={() => setExpanded(!isOpen)}
      >
        <div className="navbar-link navbar-section-link font-semibold">
          Products
        </div>
        <motion.div
          className="remove-button-outline"
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
        >
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.9133 5.65273L9.51328 7.05273L5.51328 3.05273L1.51328 7.05273L0.113281 5.65273L5.51328 0.252735L10.9133 5.65273Z" />
          </svg>
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <motion.div
              variants={{
                collapsed: { scale: 0.8, opacity: 1 },
                open: { scale: 1, opacity: 1 },
              }}
              transition={{ duration: 0.25 }}
            >
              {children}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileProducts = () => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <Accordion expanded={expanded} setExpanded={setExpanded}>
      <SidebarSections />
    </Accordion>
  );
};

export default MobileProducts;
