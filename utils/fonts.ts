import { Nunito } from "next/font/google"
export const nunito_init = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: "600",
  style: "normal",
})

export const nunito = nunito_init.variable
