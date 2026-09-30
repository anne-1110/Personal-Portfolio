import { services } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-primary text-sm mb-3">// services</p>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
          How I can help
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-xl mb-14">
          Whether you need a brand new site or want to improve an existing
          one, here's what I can build for you.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-secondary/40 dark:border-secondary/30 hover:border-primary hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <h3 className="font-heading font-semibold text-lg text-slate-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}