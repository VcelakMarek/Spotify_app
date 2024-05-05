import { Nunito_Sans } from "next/font/google"
export const nunito_init = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: "800",
  style: "normal",
})

export const nunito = nunito_init.variable
