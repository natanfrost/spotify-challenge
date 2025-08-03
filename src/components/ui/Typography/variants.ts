import { cva, type VariantProps } from "class-variance-authority";

export const typographyVariants = cva("", {
  variants: {
    variant: {
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      p: "leading-7 [&:not(:first-child)]:mt-6",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

export type TypographyVariants = VariantProps<typeof typographyVariants>;
