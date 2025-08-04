import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Skeleton = ({ className }: React.ComponentProps<"div">) => {
  const structure = () => {
    return (
      <>
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            data-slot="skeleton"
            className={cn(
              "relative overflow-hidden bg-accent rounded-md",
              className
            )}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.8,
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
      </>
    );
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:mx-5 h-100">
      {structure()}
    </div>
  );
};

export default Skeleton;
