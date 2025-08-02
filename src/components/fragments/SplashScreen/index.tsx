import { motion } from "framer-motion";
import logo from "@/assets/images/logo.png";
import { useEffect } from "react";
import { useSpotifyAuth } from "@/api/hooks/useAuth";
import { useNavigate } from "react-router";

const SplashScreen = () => {
  const { login } = useSpotifyAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      login();
      navigate("/artists");
    }, 3000);

    return () => clearTimeout(timer);
  }, [login, navigate]);

  return (
    <motion.div
      className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-black z-50"
      initial={{ opacity: 1 }}
      exit={{
        x: "-100%",
        opacity: 0,
        transition: { duration: 0.75, ease: "easeInOut" },
      }}
    >
      <motion.img
        src={logo}
        alt="Logo"
        className="w-32 h-32 object-contain"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
    </motion.div>
  );
};

export default SplashScreen;
