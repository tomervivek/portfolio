const Projects = () => {
  const data = [
    {
      title: "Education Times",
      description:
        "Education Times is Part of Times of India focused on education, counsellors, Q&A, education fair and placement reports.",
      link: "https://www.educationtimes.com/",
      icon:'/graduation.gif'
    },
    {
      title: "Times Ascent",
      description:
        "TimesAscent is a prominent job portal and career supplement that is affiliated with the widely recognized Indian newspaper, The Times of India.",
      link: "https://timesascent.com/",
      icon:"/job.gif"
    },
    {
      title: "Stock One",
      description:
        "Designed to simplify your inventory/stock management and VIN allocation to create transparency among SAS Hyundai Lucknow sales team.",
      link: "https://stockone.sashyundai.com/",
      icon:"/car-unscreen.gif"
    },
    {
      title: "Rozgaar India",
      description:
        "Rozgaarindia.com is revolutionizing the way people work. We connect the world with talented verified freelancers faster than ever before to collaborate, and get work done in a secure online environment.",
      link: "https://rozgaarindia.com/",
      icon:"/job-seeking.gif"
    },
    {
      title: "One Post",
      description:
        "One Post is the ultimate solution that offers a comprehensive set of features for all your post management needs!",
      link: "https://onepost.sasone.in/",
      icon:"/social-media-1.gif"
    },
    // {
    //   "title": "Wattson",
    //   "description": "Wattson logs data in real-time, providing benchmark measurements on optimized systems to support flawless implementation into embedded devices.",
    //   "link": "https://beaconembedded.com/wattson/"
    // }
  ];

  return (
    <section className="shadow-t-3xl">
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6  lg:px-8 ">
        <div className="relative mx-auto max-w-full text-center">
          <div className="absolute inset-0 "></div>
        </div>

        <div className="grid grid-cols-1 bg-[#5C8374] md:grid-cols-2 lg:grid-cols-3">
          <div
            class={
              " relative  overflow-hidden bg-[#5C8374] px-6 pt-10 pb-8 shadow-xl ring-1  sm:mx-auto  sm:px-10"
            }
          >
            <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#5C8374] transition-all duration-300 group-hover:scale-[10]"></span>
            <div class="relative z-10 mx-auto ">
              <h2 className="mt-4 text-3xl font-bold text-white">
                Live Projects
              </h2>
              <div class="space-y-6 pt-5 text-base leading-7  text-gray-200 transition-all duration-300 group-hover:text-white/90">
                <p>
                  Over the course of the period beginning from 26th July, 2021
                  until the present, I have successfully completed several
                  projects. These projects showcase my expertise and dedication.
                </p>
              </div>
            </div>
          </div>
          {data.map((item, index) => {
            return (
              <a
                href={item.link}
                target="_blank"
                class="relative flex border border-[#5C8374] flex-col justify-center overflow-hidden bg-gray-50 "
              >
                <div
                  class={
                    "group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1  transition-all duration-300 hover:-translate-y-1 sm:mx-auto  sm:px-10"
                  }
                >
                  <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#5C8374] transition-all duration-300 group-hover:scale-[10]"></span>
                  <div class="relative z-10 mx-auto ">
                    <span class="grid h-20 w-20 place-items-center rounded-full bg-[#5C8374] transition-all duration-300 group-hover:bg-[#5C8374] ">
                    <img src={item.icon} className="bg-white  transition-all duration-300 group-hover:rounded-full border-none outline-none ring-none"
             />

                  
                    </span>
                    <h2 className="mt-4 text-xl font-bold group-hover:text-white">
                      {item.title}
                    </h2>
                    <div class="space-y-6 pt-5 text-base leading-5 line-clamp-3 text-gray-600 text-sm transition-all duration-300 group-hover:text-white/90">
                      <p>{item.description}</p>
                    </div>
                    <div class="pt-5 text-base font-semibold leading-7">
                      <p>
                        <a
                          href={item.link}
                          target={"_blank"}
                          class="text-[#5C8374] transition-all duration-300 group-hover:text-white"
                        >
                          Visit website &rarr;
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Projects;
