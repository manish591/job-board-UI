import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-[8px] text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 py-3.5 px-10", {
  variants: {
    variant: {
      default: "bg-brand text-white border-2 border-border400",
      secondary: "bg-bgGhost border border-brand text-brand",
    },
  },
  defaultVariants: {
    variant: "default",
  }
});

interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}


export function Button({ variant, className, ...props }: Readonly<ButtonProps>) {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props} />
  )
}