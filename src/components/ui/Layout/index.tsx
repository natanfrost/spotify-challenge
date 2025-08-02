import { motion } from "framer-motion";
import { useLocation } from "react-router";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <motion.main
      key={location.pathname}
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ type: "tween", ease: "easeOut", duration: 0.75 }}
    >
      {children}
    </motion.main>
  );
};

export default Layout;
