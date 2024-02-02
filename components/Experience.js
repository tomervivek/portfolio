const Experience = () => {
  return (
    <section class=" md:pt-8 -mt-16 lg:mt-0 sm:-mt-10">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div class="shadow rounded-xl">
          <div class="lg:grid overflow-hidden text-white shadow-xl md:grid-cols-2 bg-white rounded-xl">
            <aside class="p-8  md:p-14">
              <h2 class="text-2xl font-bold text-black tracking-tight  font-headline">
                Experience
              </h2>
              <div className="flex flex-col sm:flex-row justify-between">
                <div className="text-gray-600 ">
                  <span className="text-base font-semibold text-[#37B5B6]">
                    Frontend Developer{" "}
                  </span>
                </div>
                <div className="text-gray-600 text-sm font-semibold">
                  {" "}
                  SAS One Pvt Ltd | Sep 2021 - Present
                </div>
              </div>
              <ul className="text-gray-800 text-sm prose-neutral list-disc mt-2">
                <li>
                  Developed and maintained websites and mobile applications
                  using Javascript, ReactJs, NextJs, HTML and CSS
                </li>
                
                <li>
                  Utilized React.js to build robust and interactive user
                  interfaces, ensuring a smooth and engaging user experience
                  across various devices.
                </li>
                <li>
                  Demonstrated proficiency in Next.js, harnessing its
                  capabilities to develop server-side rendering (SSR) and static
                  site generation (SSG) applications.
                </li>
                <li>
                  Implemented and maintained a component-based architecture in
                  React.js, fostering reusability and scalability of code.
                </li>
                <li>
                  Integrated RESTful APIs endpoints into frontend applications,
                  ensuring seamless communication with backend services.
                </li>
                <li>
                  Applied best practices in code optimization, including lazy
                  loading, code splitting, and minimizing resource requests to
                  enhance application performance
                </li>
                <li>
                  Experienced in utilizing Bitbucket for version control,
                  including creating and managing branches, resolving merge
                  conflicts, and conducting code reviews.
                </li>
              </ul>
            </aside>

            <aside class="relative opacity-90 hidden lg:block">
              <img
                class=" object  w-full h-full  "
                src="/intro-1.png"
                alt=""
              />
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
