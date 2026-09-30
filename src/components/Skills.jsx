import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Label + headline */}
        <p className="font-mono text-primary text-sm mb-3">// skills</p>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-14">
          Current stack
        </h2>

        {/* Category columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-items-center text-center sm:text-left sm:justify-items-center">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <p className="font-mono text-[11px] tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-5">
                {category.title}
              </p>
              <ul className="flex flex-col gap-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200 font-medium hover:text-primary dark:hover:text-secondary hover:translate-x-1 transition-all duration-200 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}