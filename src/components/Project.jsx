import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-slate-800/40">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-secondary text-sm mb-3">// projects</p>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-14">
        Selected builds
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}







// import { projects } from '../data/projects';
// import ProjectCard from './ProjectCard';

// export default function Projects() {
//   const featuredProject = projects.find((p) => p.featured);
//   const otherProjects = projects.filter((p) => !p.featured);

//   return (
//     <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-slate-800/40">
//       <div className="max-w-6xl mx-auto">
//         <p className="font-mono text-primary text-sm mb-3">// projects</p>
//         <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-14">
//           Things I've built
//         </h2>

//         {/* Featured project */}
//         {featuredProject && (
//           <div className="mb-14">
//             <ProjectCard project={featuredProject} />
//           </div>
//         )}

//         {/* Other projects */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {otherProjects.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }