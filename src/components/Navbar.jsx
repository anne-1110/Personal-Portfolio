import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="font-heading text-xl font-bold text-slate-900 dark:text-white">
          Mary<span className="text-primary">anne</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              
              <a     
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: theme toggle + CTA (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-indigo-600 transition-colors"
          >
            Let's Work Together
          </a>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full text-slate-600 dark:text-slate-300"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-2 text-slate-900 dark:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 px-6 pb-6 shadow-md">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>

                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-slate-700 dark:text-slate-200 font-medium py-1"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block text-center mt-2 px-5 py-2.5 rounded-lg bg-primary text-white font-semibold"
              >
                Let's Work Together
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}