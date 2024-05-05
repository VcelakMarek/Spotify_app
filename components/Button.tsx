import { ReactNode } from "react"

export type Props = {
  variant?: "primary" | "secondary"
  onClick?: () => void
  disabled?: boolean
  children?: ReactNode
  submit?: boolean
  icon?: string
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
  secondary: "border border-[#727272] hover:border-white rounded-full",
}

const Button = ({
  variant = "primary",
  onClick,
  disabled,
  children,
  submit,
  icon,
}: Props) => {
  const dimensions = "h-12 px-8 py-2 w-[324px]"
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
      type={submit ? "submit" : "button"}
      onClick={onClick}
      className={baseClasses.join(" ")}
      disabled={disabled}
    >
      {icon && <img src={icon} alt={`${icon}-icon`} />}
      {children}
    </button>
  )
}

export default Button
