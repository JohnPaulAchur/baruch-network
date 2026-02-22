import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Ministries', path: '/ministries' },
  { label: 'Events', path: '/events' },
  { label: 'Blog', path: '/blog' },
  { label: 'Books', path: '/books' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-foreground/95 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center px-6 py-4 lg:px-8">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-accent transition-transform duration-300 group-hover:scale-110">
            <span className="text-lg font-bold font-serif text-accent">CB</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-tight tracking-wide text-primary-foreground">
              Clinton Baruch
            </p>
            <p className="text-[10px] tracking-[0.25em] uppercase text-accent">
              Network
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-6 ml-auto"
          aria-label="Main navigation"
        >
          {/* Standard Links */}
          <div className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-[13px] font-medium uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'text-accent'
                      : 'text-primary-foreground/70 hover:text-accent'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-accent" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Give Button */}
          <Link
            to="/donate"
            className="ml-6 rounded-full bg-accent px-6 py-2 text-[13px] font-semibold uppercase tracking-wider text-foreground shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:bg-accent/90"
          >
            Give
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="ml-auto inline-flex items-center justify-center rounded-full p-2 text-primary-foreground/80 hover:text-accent transition-colors lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Full Screen Menu */}
      <div
        className={`fixed inset-0 z-40 bg-foreground transition-all duration-500 lg:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center">
          
          <nav
            className="flex flex-col items-center gap-6"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-serif font-bold transition-all duration-300 ${
                    isActive
                      ? 'text-accent'
                      : 'text-primary-foreground/60 hover:text-accent'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}

            {/* Mobile Give Button */}
            <Link
              to="/donate"
              onClick={() => setIsOpen(false)}
              className="mt-6 rounded-full bg-accent px-8 py-3 text-lg font-semibold uppercase tracking-wider text-foreground transition-all duration-300 hover:scale-105 hover:bg-accent/90"
            >
              Give
            </Link>
          </nav>

          {/* Close Button */}
          <button
            type="button"
            className="absolute top-5 right-6 text-primary-foreground/80 hover:text-accent transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-7 w-7" />
          </button>
        </div>
      </div>
    </header>
  )
}