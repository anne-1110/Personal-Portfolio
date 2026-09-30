export default function About() {
  return (
    <div id="about" className="py-16 px-6 bg-slate-50 dark:bg-slate-800/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: label + big headline */}
          <div>
            <p className="font-mono text-primary text-sm mb-4"> //about</p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white leading-tight">
              I build clean,<br /> responsive interfaces
              <span className="text-slate-400 dark:text-slate-500">
                {" "}
                one <br /> component at a time
              </span>
            </h2>
          </div>

          {/* Right: description paragraphs */}
          <div className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed space-y-6 md:pt-2">
            <p>
              I'm a{" "}
              <strong className="font-semibold text-slate-900 dark:text-white">
                senior frontend developer
              </strong>{" "}
              who enjoys turning ideas into functional, well-structured
              interfaces from small interactive components to complete
              responsive layouts, built with React and Tailwind CSS.
            </p>
            <p>
              Most of my work has involved{" "}
              <strong className="text-slate-900 dark:text-white">
                API integration, state management, and localStorage
              </strong>
              , along with building reusable React components that keep code
              clean and easy to maintain. I'm currently sharpening my skills in
              React and Tailwind CSS while working on real projects that solve
              practical problems.
            </p>
            <p>
              I care about creating websites that aren't just visually
              appealing, but also{" "}
              <strong className="text-slate-900 dark:text-white">
                fast, accessible, and easy to use
              </strong>
              .{" "}
              <strong className="text-slate-900 dark:text-white">
                Let's build something together
              </strong>{" "}
              I'm always open to learning from experienced developers along
              the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
