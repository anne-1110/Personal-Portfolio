import { useState } from 'react';
// import { Copy, Check } from 'lucide-react';

const email = 'techannie11@gmail.com';

export default function Footer() {
  // const [copied, setCopied] = useState(false);

  // const handleCopyEmail = () => {
  //   navigator.clipboard.writeText(email);
  //   setCopied(true);
  //   setTimeout(() => setCopied(false), 2000);
  // };

  return (
    <footer className="py-5">
      <div className="max-w-6xl mx-auto">
        {/* Bottom row */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} Ojieaja Maryanne. Built with React & Tailwind CSS.
          </p>
          
          <a
            href="#home"
            className="text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-secondary transition-colors"
          >
            back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}