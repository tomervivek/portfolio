const Projects = () => {
  
  const data=[
    {
      "title": "Education Times",
      "description": "Education Times is Part of Times of India focused on education, counsellors, Q&A, education fair and placement reports.",
      "link": "https://www.educationtimes.com/"
    },
    {
      "title": "Times Ascent",
      "description": "TimesAscent is a prominent job portal and career supplement that is affiliated with the widely recognized Indian newspaper, The Times of India.",
      "link": "https://timesascent.com/"
    },
    {
      "title": "Stock One",
      "description": "Designed to simplify your inventory/stock management and VIN allocation to create transparency among SAS Hyundai Lucknow sales team.",
      "link": "https://stockone.sashyundai.com/"
    },
    {
      "title": "Rozgaar India",
      "description": "Rozgaarindia.com is revolutionizing the way people work. We connect the world with talented verified freelancers faster than ever before to collaborate, and get work done in a secure online environment.",
      "link": "https://rozgaarindia.com/"
    },
    {
      "title": "One Post",
      "description": "One Post is the ultimate solution that offers a comprehensive set of features for all your post management needs!",
      "link": "https://onepost.sasone.in/"
    },
    // {
    //   "title": "Wattson",
    //   "description": "Wattson logs data in real-time, providing benchmark measurements on optimized systems to support flawless implementation into embedded devices.",
    //   "link": "https://beaconembedded.com/wattson/"
    // }
  ]
  
  return (
    <section className="shadow-t-3xl">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6  lg:px-8 ">
      <div className="relative mx-auto max-w-full text-center">
        <div className="absolute inset-0 "></div>
  
      </div>
  
      <div className="grid grid-cols-1 bg-[#37B5B6] md:grid-cols-2 lg:grid-cols-3">
     
      <div
          class={" relative  overflow-hidden bg-[#37B5B6] px-6 pt-10 pb-8 shadow-xl ring-1  sm:mx-auto  sm:px-10"}>
          <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#37B5B6] transition-all duration-300 group-hover:scale-[10]"></span>
          <div class="relative z-10 mx-auto ">

             <h2 className="mt-4 text-4xl font-bold text-white">Live Projects</h2>
              <div
                  class="space-y-6 pt-5 text-base leading-7  text-gray-200 transition-all duration-300 group-hover:text-white/90">
                  <p>Over the course of the period beginning from 26th July, 2021 until the present, I have successfully completed several projects. These projects showcase my expertise and dedication. Moreover, alongside these significant endeavors, I have also worked on numerous smaller projects.</p>
              </div>
 
          </div>
   
  </div>
        {data.map((item, index) => {
          return (
        
   
              <a href={item.link} target="_blank" class="relative flex border border-[#37B5B6] flex-col justify-center overflow-hidden bg-gray-50 ">
              <div
                  class={"group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1  transition-all duration-300 hover:-translate-y-1 sm:mx-auto  sm:px-10"}>
                  <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#37B5B6] transition-all duration-300 group-hover:scale-[10]"></span>
                  <div class="relative z-10 mx-auto ">
                      <span class="grid h-20 w-20 place-items-center rounded-full bg-[#37B5B6] transition-all duration-300 group-hover:bg-sky-400">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                          </svg>
                      </span>
                     <h2 className="mt-4 text-xl font-bold group-hover:text-white">{item.title}</h2>
                      <div
                          class="space-y-6 pt-5 text-base leading-7 line-clamp-3 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                          <p>{item.description}</p>
                      </div>
                      <div class="pt-5 text-base font-semibold leading-7">
                          <p>
                              <a href={item.link} target={"_blank"} class="text-[#37B5B6] transition-all duration-300 group-hover:text-white">Read the docs
                                  &rarr;
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
  
  )
}
export default Projects