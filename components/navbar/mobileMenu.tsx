import { Dispatch, SetStateAction, useEffect } from 'react';
import Navbar from '../../containers/navbar/navbar';
import MobileOptions from './items/mobileOptions';
import { motion } from 'framer-motion';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const MobileMenu = ({ isOpen, setIsOpen }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      animate="visible"
      initial="hidden"
      exit="hidden"
      className="absolute top-0 left-0 bot-0 bottom-0 right-0 bg-white z-10 overflow-scroll min-h-screen"
    >
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className=" px-34px flex flex-col">
        <MobileOptions />
      </div>
    </motion.div>
  );
};

export default MobileMenu;
