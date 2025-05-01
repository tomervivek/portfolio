import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const experiences = [
  {
    title: "System Engineer",
    company: "Tata Consultancy Services",
    duration: "July 2024 - Present",
    points: [
      "Developed scalable web and mobile apps using React, HTML, CSS, and JavaScript.",
      "Implemented reusable component-based architecture to streamline development.",
      "Integrated RESTful APIs and optimized frontend performance via lazy loading and code splitting.",
      "Maintained code quality and consistency through Git workflows and thorough code reviews.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "SAS One Pvt Ltd",
    duration: "Sep 2021 - July 2024",
    points: [
      "Led development of interactive user interfaces using React and Next.js, HTML, CSS, Tailwind CSS and React Native.",
      "Delivered SEO-friendly, performant apps using server-side rendering (SSR) and static generation (SSG).",
      "Collaborated closely with cross-functional teams to deliver user-centric solutions.",
      "Collaborated using Bitbucket for version control, branching, and peer code reviews.",
    ],
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default to first item open

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="md:pt-8 -mt-16 lg:mt-4 sm:-mt-10">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="shadow rounded-xl">
          <div className="lg:grid overflow-hidden text-white shadow-xl md:grid-cols-2 bg-white rounded-xl">
            <aside className="p-8 md:p-14">
              <h2 className="text-2xl font-bold text-black tracking-tight font-headline mb-4">
                Experience
              </h2>

              {experiences.map((exp, index) => (
                <div key={index} className="mb-4">
                  <div
                    className="cursor-pointer flex justify-between items-center bg-[#f3f4f6] px-4 py-3 rounded-lg hover:bg-[#e0e7ff] transition"
                    onClick={() => toggle(index)}
                  >
                    <div>
                      <h3 className="text-[#5C8374] font-semibold text-base">
                        {exp.title}
                      </h3>
                      <p className="text-gray-600 text-sm font-semibold">
                        {exp.company} | {exp.duration}
                      </p>
                    </div>
                    {openIndex === index ? (
                      <ChevronUp className="text-gray-500" />
                    ) : (
                      <ChevronDown className="text-gray-500" />
                    )}
                  </div>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.ul
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="text-gray-800 text-sm mt-3 overflow-hidden border-l border-gray-300 pl-4"
                      >
                        {exp.points.map((point, i) => (
                          <li
                            key={i}
                            className="py-2 border-b border-gray-200 last:border-b-0"
                          >
                            {point}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </aside>

            {/* Image Section */}
            <aside className="relative opacity-90 hidden md:block">
              <img
                className="object-cover w-full h-full"
                src="/giphy.gif"
                alt="Experience Visual"
              />
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
