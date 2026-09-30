import { processSteps } from '../data/process';

export default function Process() {
  return (
    <section className="py-24 px-6 ">
      <div className="max-w-6xl mx-auto">
        {/* Small accent bar */}
        <div className="w-12 h-1 rounded-full bg-secondary mx-auto mb-8" />

        <p className="font-mono text-secondary text-xs mb-2 text-center">
          // process
        </p>
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          How a project moves through
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {processSteps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connecting line (desktop only, skip after last item) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-[calc(50%+22px)] w-[calc(100%-44px)] h-px bg-slate-300 dark:bg-slate-700" />
              )}

              <div className="w-9 h-9 rounded-full border-2 border-secondary flex items-center justify-center font-mono text-xs text-secondary font-semibold mb-4 relative z-10 bg-slate-50 dark:bg-slate-800/40">
                {step.number}
              </div>
              <h3 className="font-heading font-semibold text-base text-slate-900 dark:text-white mb-1.5">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}











// import { processSteps } from '../data/process';

// export default function Process() {
//   return (
//     <section className="py-24 px-6 bg-slate-50 dark:bg-slate-800/40">
//       <div className="max-w-6xl mx-auto">
//         {/* Small accent bar */}
//         <div className="w-16 h-1.5 rounded-full bg-primary mx-auto mb-10" />

//         <p className="font-mono text-primary text-sm mb-3 text-center">
//           // process
//         </p>
//         <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-14 text-center">
//           How a project moves through
//         </h2>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative">
//           {processSteps.map((step, index) => (
//             <div key={step.number} className="relative">
//               {/* Connecting line (desktop only, skip after last item) */}
//               {index < processSteps.length - 1 && (
//                 <div className="hidden lg:block absolute top-6 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px bg-slate-300 dark:bg-slate-700" />
//               )}

//               <div className="w-12 h-12 rounded-full border-2 border-secondary flex items-center justify-center font-mono text-secondary font-semibold mb-5 relative z-10 bg-slate-50 dark:bg-slate-800/40">
//                 {step.number}
//               </div>
//               <h3 className="font-heading font-semibold text-lg text-slate-900 dark:text-white mb-2">
//                 {step.title}
//               </h3>
//               <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
//                 {step.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }