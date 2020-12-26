import { motion } from 'framer-motion';
import React, { Dispatch, SetStateAction } from 'react';
import SidebarSection from './sidebarSection';
import SidebarSections from './sidebarSections';

interface Props {
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}

const sidebarVariants = {
  hidden: {
    x: -700,
    opacity: 0,
    transition: {
      duration: 0.6,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const modalVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.4,
  },
};

const Sidebar = ({ setShowSidebar }: Props) => {
  return (
    <>
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="absolute top-0 bottom-0 left-0 right-0 bg-black h-full z-10"
        onClick={() => setShowSidebar(false)}
      ></motion.div>
      <motion.div
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="h-full absolute top-0 bottom-0 left-0 bg-background w-max overflow-hidden pl-34px z-20"
        onMouseLeave={() => setShowSidebar(false)}
      >
        <div className="flex flex-row items-center h-96px">
          <a
            href="#"
            className="navbar-link navbar-section-link font-semibold "
          >
            Products
          </a>
          <a
            href="#"
            className="navbar-link navbar-section-link font-semibold "
          >
            Resources
          </a>
          <a
            href="#"
            className="navbar-link navbar-section-link font-semibold "
          >
            Help Center
          </a>
        </div>
        <SidebarSections />
      </motion.div>
    </>
  );
};

export default Sidebar;
