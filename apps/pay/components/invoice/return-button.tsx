"use client"

import { useRouter } from "next/navigation"

import styles from "./index.module.css"
import { type ReturnInvoiceButtonProps } from "./index.types"

function ReturnInvoiceButton({ returnUrl, type, children }: ReturnInvoiceButtonProps) {
  const router = useRouter()

  const cancelHandler = () => {
    if (returnUrl) {
      router.push(returnUrl)
      return
    }
    window.history.back()
  }

  const className = type === "primary" ? styles.primaryBtn : styles.secondaryBtn

  return (
    <button className={className} onClick={cancelHandler}>
      {children}
    </button>
  )
}
export default ReturnInvoiceButton
