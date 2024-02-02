import EducationCard  from "./EducationCard";

const Education = () => {
    const educationData = [
        {
          institution: 'MCRPV Bhopal',
          duration: '2018 - 2021',
          degree: 'Bachelor of Computer Applications',
          description: 'Studied Computer Applications at MCRPV Bhopal from 2018 to 2021.',
        },
        // {
        //   institution: 'GOVT. ITI Atrauli, Hardoi',
        //   duration: '2016 - 2017',
        //   degree: 'Computer Operator and Programming Assistant',
        //   description: 'Completed Computer Operator and Programming Assistant course at GOVT. ITI Atrauli, Hardoi in 2017.',
        // },
        {
          institution: 'Janta Inter College, Hardoi',
          duration: '2014 - 2016',
          degree: '10+2',
          description: 'Completed 10+2 education at Janta Inter College, Hardoi from 2014 to 2016.',
        },
        {
          institution: 'Shri Narayan Singh Hiegher Secondary School',
          duration: '2013',
          degree: '10',
          description: 'Completed 10th grade at Shri Narayan Singh Hiegher Secondary School in the year 2013.',
        },
      ];
      
    return (<section className="text-white">
        <div className="mx-auto max-w-screen-xl px-4 pb-10  sm:px-6 lg:px-8">
        <div className="relative mx-auto  text-center">
        <div className=""></div>
        <div className="relative z-10 p-4 pb-2">
          <h2 className="text-3xl text-black font-bold sm:text-4xl">Education</h2>
          <p className="mt-2 mb-4 text-gray-600">
          A journey through my educational background and milestones.
          </p>
        </div>
        </div>
            <div>
            <EducationCard data={educationData} />

                </div>
            </div>
      
    </section>
    )
}
export default Education