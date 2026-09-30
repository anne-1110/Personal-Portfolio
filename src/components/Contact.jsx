import { useState } from "react";
import { Mail, MapPin, Copy, Check } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "324bf652-fd5e-4c25-a9c1-434ce9c5a94d";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const email = "techannie11@gmail.com";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-primary text-sm mb-3">// contact</p>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Left: heading + text + contact info */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                Have a project in mind?
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Let's build it together — reach out and I'll get back to you as
                soon as I can.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={20} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                  Email
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-slate-900 dark:text-white font-medium">
                    {email}
                  </p>
                  <button
                    onClick={handleCopyEmail}
                    aria-label="Copy email"
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                  Location
                </p>
                <p className="text-slate-900 dark:text-white font-medium">
                  Nigeria
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/anne-1110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
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
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 flex flex-col gap-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-slate-600 dark:text-slate-400 mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-slate-600 dark:text-slate-400 mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm text-slate-600 dark:text-slate-400 mb-1.5"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-slate-600 dark:text-slate-400 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="self-start px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-indigo-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-sm text-emerald-500">
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

// import { useState } from 'react';
// import { Mail, MapPin, Copy, Check } from 'lucide-react';

// const WEB3FORMS_ACCESS_KEY = '324bf652-fd5e-4c25-a9c1-434ce9c5a94d';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });
//   const [status, setStatus] = useState('idle'); // idle | sending | success | error
//   const [copied, setCopied] = useState(false);

//   const email = 'techannie11@gmail.com';

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleCopyEmail = () => {
//     navigator.clipboard.writeText(email);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('sending');

//     try {
//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           access_key: WEB3FORMS_ACCESS_KEY,
//           name: formData.name,
//           email: formData.email,
//           subject: formData.subject,
//           message: formData.message,
//         }),
//       });

//       const result = await response.json();

//       if (result.success) {
//         setStatus('success');
//         setFormData({ name: '', email: '', subject: '', message: '' });
//       } else {
//         setStatus('error');
//       }
//     } catch (error) {
//       setStatus('error');
//     }
//   };

//   return (
//     <section id="contact" className="py-24 px-6">
//       <div className="max-w-6xl mx-auto">
//         <p className="font-mono text-primary text-sm mb-3">// contact</p>
//         <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
//           Have a project in mind?
//         </h2>
//         <p className="text-slate-600 dark:text-slate-400 max-w-xl mb-14">
//           Let's build it together — reach out and I'll get back to you as
//           soon as I can.
//         </p>

//         <div className="grid md:grid-cols-5 gap-12">
//           {/* Left: contact info */}
//           <div className="md:col-span-2 flex flex-col gap-6">
//             <div className="flex items-start gap-3">
//               <Mail size={20} className="text-primary mt-0.5 shrink-0" />
//               <div>
//                 <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
//                   Email
//                 </p>
//                 <div className="flex items-center gap-2">
//                   <p className="text-slate-900 dark:text-white font-medium">
//                     {email}
//                   </p>
//                   <button
//                     onClick={handleCopyEmail}
//                     aria-label="Copy email"
//                     className="text-slate-400 hover:text-primary transition-colors"
//                   >
//                     {copied ? <Check size={14} /> : <Copy size={14} />}
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-start gap-3">
//               <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
//               <div>
//                 <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
//                   Location
//                 </p>
//                 <p className="text-slate-900 dark:text-white font-medium">
//                   Nigeria
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-4 mt-2">

//               <a
//                 href="https://github.com/yourusername"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="GitHub"
//                 className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.107-.775.42-1.304.762-1.604-2.665-.303-5.466-1.334-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.624-5.475 5.92.43.372.814 1.103.814 2.222v3.293c0 .32.192.694.8.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12" />
//                 </svg>
//               </a>

//               <a
//                 href="https://linkedin.com/in/yourusername"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="LinkedIn"
//                 className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Right: form */}
//           <form onSubmit={handleSubmit} className="md:col-span-3 flex flex-col gap-5">
//             <div className="grid sm:grid-cols-2 gap-5">
//               <div>
//                 <label htmlFor="name" className="block text-sm text-slate-600 dark:text-slate-400 mb-1.5">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm text-slate-600 dark:text-slate-400 mb-1.5">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors"
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="subject" className="block text-sm text-slate-600 dark:text-slate-400 mb-1.5">
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 required
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors"
//               />
//             </div>

//             <div>
//               <label htmlFor="message" className="block text-sm text-slate-600 dark:text-slate-400 mb-1.5">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 required
//                 rows={5}
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors resize-none"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={status === 'sending'}
//               className="self-start px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-indigo-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
//             >
//               {status === 'sending' ? 'Sending...' : 'Send Message'}
//             </button>

//             {status === 'success' && (
//               <p className="text-sm text-emerald-500">
//                 Message sent! I'll get back to you soon.
//               </p>
//             )}
//             {status === 'error' && (
//               <p className="text-sm text-red-500">
//                 Something went wrong. Please try again or email me directly.
//               </p>
//             )}
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
