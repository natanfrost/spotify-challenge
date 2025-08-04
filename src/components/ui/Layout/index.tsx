import { motion } from "framer-motion";
import { useLocation } from "react-router";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <motion.main
      className="overflow-y h-full"
      key={location.pathname}
      initial={{
        x: location.state?.fromSplash ? "100%" : "-100%",
        opacity: 0,
      }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{
        type: "tween",
        ease: [0.4, 0, 0.2, 1],
        duration: 0.75,
      }}
    >
      {children}
    </motion.main>
  );
};

export default Layout;
