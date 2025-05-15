"use client"

import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 50) // Adjust speed as needed

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <div className={className}>
      {displayText}
      {currentIndex < text.length && <span className="inline-block w-1 h-5 bg-purple-600 animate-pulse ml-1"></span>}
    </div>
  )
}
