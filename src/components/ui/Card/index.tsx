import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
interface CardProps extends React.ComponentProps<"div"> {
  backgroundImage?: string;
}

function Card({ className, backgroundImage, children }: CardProps) {
  return (
    <motion.div
      data-slot="card"
      initial={{ scale: 0.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: Math.random() * 0.4,
      }}
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 h-100 shadow-sm relative overflow-hidden p-4 hover:scale-105 transition cursor-pointer",
        className
      )}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center brightness-40"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      )}

      <div className="relative z-20 py-6 h-full w-full flex flex-col items-center justify-center">
        {children}
      </div>
    </motion.div>
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 mt-auto", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "px-6 py-4 mt-auto flex flex-row gap-4 items-center",
        className
      )}
      {...props}
    />
  );
}

export { Card, CardContent, CardFooter };
