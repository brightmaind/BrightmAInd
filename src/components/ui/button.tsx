import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center whitespace-nowrap font-mono uppercase tracking-[0.18em] text-xs font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-paper text-ink border border-paper shadow-[4px_4px_0_0_rgba(125,211,252,0.35),4px_4px_0_1px_rgba(125,211,252,0.9)] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[6px_6px_0_0_rgba(125,211,252,0.25),6px_6px_0_1px_rgba(125,211,252,1)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_rgba(125,211,252,0.4),2px_2px_0_1px_rgba(125,211,252,1)]",
        accent:
          "bg-accent text-ink border border-accent shadow-[4px_4px_0_0_rgba(14,165,233,0.35),4px_4px_0_1px_rgba(14,165,233,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:bg-accent-soft hover:border-accent-soft hover:shadow-[6px_6px_0_0_rgba(14,165,233,0.25),6px_6px_0_1px_rgba(14,165,233,1)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_rgba(14,165,233,0.5),2px_2px_0_1px_rgba(14,165,233,1)]",
        outline:
          "bg-transparent text-mist border border-border-soft shadow-[4px_4px_0_0_rgba(39,52,73,0.6),4px_4px_0_1px_rgba(125,211,252,0.35)] hover:text-accent hover:border-accent hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[6px_6px_0_0_rgba(39,52,73,0.4),6px_6px_0_1px_rgba(125,211,252,0.9)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_rgba(39,52,73,0.6),2px_2px_0_1px_rgba(125,211,252,0.9)]",
        ghost:
          "text-whisper hover:text-paper border border-transparent shadow-none tracking-[0.15em]",
        link:
          "text-accent hover:text-accent-soft underline-offset-4 hover:underline px-0 h-auto border-0 shadow-none tracking-normal normal-case font-sans text-sm",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 px-4 py-2 text-[0.65rem]",
        lg: "h-13 px-8 py-3.5 text-[0.78rem]",
        icon: "h-10 w-10 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  hideBrackets?: boolean
}

const showBrackets = (variant: ButtonProps["variant"]) =>
  variant !== "ghost" && variant !== "link"

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, hideBrackets, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const withBrackets = !hideBrackets && showBrackets(variant)

    const content = withBrackets ? (
      <>
        <span
          aria-hidden
          className="pointer-events-none absolute left-[3px] top-[3px] h-2 w-2 border-l border-t border-current opacity-70 transition-opacity group-hover:opacity-100"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute right-[3px] top-[3px] h-2 w-2 border-r border-t border-current opacity-70 transition-opacity group-hover:opacity-100"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute left-[3px] bottom-[3px] h-2 w-2 border-l border-b border-current opacity-70 transition-opacity group-hover:opacity-100"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute right-[3px] bottom-[3px] h-2 w-2 border-r border-b border-current opacity-70 transition-opacity group-hover:opacity-100"
        />
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </>
    ) : (
      children
    )

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {content}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
