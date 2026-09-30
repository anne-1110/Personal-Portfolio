import { ArrowDown } from "lucide-react";
import profilePic from "../assets/profile.png";

export default function Hero() {
  return (
    <div
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center pt-24 pb-10 px-6 relative"
    >
      {/* Profile photo */}
      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-br from-primary to-secondary mb-6">
        <img
          src={profilePic}
          alt=""
          className="w-full h-full rounded-full object-cover border-4 border-white dark:border-slate-900"
        />
      </div>

      {/* Terminal-style line */}
      <p className="font-mono text-secondary text-sm sm:text-base mb-4 flex items-center gap-2">
        <span className="text-slate-400 dark:text-slate-500">$</span>
        whoami --role frontend-developer
      </p>

      {/* Name */}
      <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-600 dark:text-white mb-3">
        Ojieaja Maryanne
      </h1>

      {/* Role */}
      <h2 className="font-heading text-base sm:text-sm font-small text-slate-500 dark:text-slate-400 mb-6">
        Frontend Developer specializing in React & Tailwind CSS
      </h2>

      {/* Description */}
      <p className="text-slate-600 dark:text-slate-300 sm:text-base max-w-2xl mb-10 leading-relaxed">
        I build responsive, accessible, and user-friendly web applications{" "}
        <br />
        that attract customers. From E-Commerce stores and booking platforms to
        SaaS products and more, I build end to end solutions that are fast,
        scalable, and designed for success
      </p>

      {/* CTA buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <a
          href="#projects"
          className="px-3 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-indigo-600 transition-colors"
        >
          View My Work
        </a>

        <a
          href="#contact"
          className="px-3 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-semibold hover:border-primary hover:text-primary transition-colors"
        >
          Let's Work Together
        </a>
      </div>

      {/* Social icons */}
      <div className="flex gap-5">
        <a
          href="https://github.com/anne-1110"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.107-.775.42-1.304.762-1.604-2.665-.303-5.466-1.334-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.624-5.475 5.92.43.372.814 1.103.814 2.222v3.293c0 .32.192.694.8.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12" />
          </svg>
        </a>

        <a
          href="https://twitter.com/tech_annie11"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>

      </div>

      {/* Scroll indicator */}

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="hidden sm:flex mt-4 bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-slate-400 dark:text-slate-500 animate-bounce"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <ArrowDown size={18} />
      </a>
    </div>
  );
}

