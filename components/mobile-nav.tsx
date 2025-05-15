"use client"

import { useState } from "react"
import Link from "next/link"
import { X, Menu, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SimpleThemeToggle } from "@/components/theme-toggle"
import { usePathname } from "next/navigation"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <Button variant="outline" size="icon" onClick={toggleMenu} className="relative z-50">
        <span className="sr-only">Toggle menu</span>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-slate-900 flex flex-col">
          <div className="flex justify-end p-4">
            <Button variant="outline" size="icon" onClick={closeMenu}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-1 space-y-8 text-xl">
            <Link
              href="/"
              className={`text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors ${
                pathname === "/" ? "text-purple-600 dark:text-purple-400 font-medium" : ""
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/#projects"
              className="text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              href="/work-experience"
              className={`text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors ${
                pathname === "/work-experience" ? "text-purple-600 dark:text-purple-400 font-medium" : ""
              }`}
              onClick={closeMenu}
            >
              Experience
            </Link>
            <Link
              href="/#about"
              className="text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <a href="/resume.pdf" download>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Download className="mr-2 h-4 w-4" /> Resume
              </Button>
            </a>
            <div className="pt-4">
              <SimpleThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
