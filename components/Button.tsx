import { ReactNode } from "react"

export type Props = {
  variant?: "primary" | "secondary"
  onClick?: () => void
  disabled?: boolean
  children?: ReactNode
}

const textColor = {
  primary: "text-black",
  secondary: "text-white",
}

const backgroundColor = {
  primary: "bg-green",
  secondary: "bg-transparent",
}

const border = {
  primary: "border border-green rounded-full",
  secondary: "border border-white rounded-full",
}

const Button = ({
  variant = "primary",
  onClick,
  disabled,
  children,
}: Props) => {
  const dimensions = "h-12 px-8 py-2 w-[260px]"
  const text = "font-bold text-md tracking-[1px] text-center"

  let baseClasses = [
    textColor[variant],
    backgroundColor[variant],
    border[variant],
    dimensions,
    text,
  ]

  console.log(baseClasses.join(" "))

  return (
    <button
      type="button"
      onClick={onClick}
      className={baseClasses.join(" ")}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
