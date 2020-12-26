import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Sidebar from './sidebar';

const Products = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <motion.div>
      <button
        className="navbar-link navbar-section-link font-semibold "
        onMouseEnter={() => setShowSidebar(true)}
      >
        Products
      </button>
      <AnimatePresence>
        {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Products;
