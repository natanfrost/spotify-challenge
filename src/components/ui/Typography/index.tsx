import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";
import { typographyVariants, type TypographyVariants } from "./variants";

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    TypographyVariants {
  asChild?: boolean;
}

const defaultElements = {
  h2: "h2",
  p: "p",
} as const;

function Typography({
  className,
  variant,
  asChild = false,
  ...props
}: TypographyProps) {
  let Comp: React.ElementType;

  if (asChild) {
    Comp = Slot;
  } else if (variant && defaultElements[variant]) {
    Comp = defaultElements[variant];
  } else {
    Comp = "p";
  }

  return (
    <Comp
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  );
}

export default Typography;
