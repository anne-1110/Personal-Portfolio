import { ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }) {
  // Extract a clean display URL from the demo link, e.g. "orbit-landing-page-seven.vercel.app"
  const displayUrl = project.demo.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <div className="group rounded-xl overflow-hidden bg-white dark:bg-slate-800 border border-secondary dark:border-slate-700 hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-300">
      {/* Fake browser bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-700">
        <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
        <span className="ml-2 text-xs font-mono text-slate-400 dark:text-slate-500 truncate">
          {displayUrl}
        </span>
      </div>

      <div className="p-6">
        {/* Category badge */}
        <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide border border-secondary dark:bg-slate-800  text-secondary bg-primary/10 dark:bg-primary/20 mb-4">
          {project.category}
        </span>

        <h3 className="font-heading font-semibold text-lg text-slate-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech list (plain text, matching reference style) */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono text-slate-500 dark:text-slate-400 "
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-indigo-600 transition-colors"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
          
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.107-.775.42-1.304.762-1.604-2.665-.303-5.466-1.334-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.624-5.475 5.92.43.372.814 1.103.814 2.222v3.293c0 .32.192.694.8.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12" />
            </svg>
            Code
          </a>
        </div>
      </div>
    </div>
  );
}























// import { ExternalLink } from 'lucide-react';

// export default function ProjectCard({ project }) {
//   return (
//     <div className="group rounded-xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:-translate-y-1 transition-all duration-200">
//       {/* Image */}
//       <div className="aspect-video bg-slate-100 dark:bg-slate-700 overflow-hidden">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//         />
//       </div>

//       <div className="p-6">
//         <h3 className="font-heading font-semibold text-lg text-slate-900 dark:text-white mb-2">
//           {project.title}
//         </h3>
//         <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
//           {project.description}
//         </p>

//         {/* Tech tags */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           {project.tech.map((t) => (
//             <span
//               key={t}
//               className="px-2.5 py-1 rounded-md text-xs font-medium bg-primary/10 dark:bg-primary/20 text-primary dark:text-indigo-300"
//             >
//               {t}
//             </span>
//           ))}
//         </div>

//         {/* Features */}
//         <ul className="flex flex-col gap-1.5 mb-6">
//           {project.features.map((feature) => (
//             <li
//               key={feature}
//               className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
//             >
//               <span className="w-1 h-1 rounded-full bg-secondary mt-2 shrink-0" />
//               {feature}
//             </li>
//           ))}
//         </ul>

//         {/* Buttons */}
//         <div className="flex gap-3">
          
//           <a
//             href={project.demo}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-indigo-600 transition-colors"
//           >
//             <ExternalLink size={14} />
//             Live Demo
//           </a>
          
//           <a
//             href={project.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
//           >
//              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.107-.775.42-1.304.762-1.604-2.665-.303-5.466-1.334-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.624-5.475 5.92.43.372.814 1.103.814 2.222v3.293c0 .32.192.694.8.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12" />
//             </svg>
//             Code
            
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }