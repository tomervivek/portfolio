import React from 'react';

const SkillComponent = () => {
  return (
    <div className="container mx-auto mb-10 mt-4 p-6 bg-white rounded-lg shadow-md">

      <div className="space-y-8">

        {/* Frontend Development */}
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-[#37B5B6]">Frontend Development</h3>
          <p className="text-gray-700">
          Experienced in building responsive and dynamic user interfaces not only for web applications but also for mobile platforms, leveraging React Native.  Proficient in developing single-page applications with React.js and Next.js. Possess a solid grasp of semantic HTML5 and CSS3. Additionally, adept in utilizing Tailwind CSS for streamlined and efficient styling.
          </p>
        </div>

        {/* Backend Development */}
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-[#37B5B6]">Backend Development</h3>
          <p className="text-gray-700">

          Knowledgeable in backend development with a focus on  Python, Django. While I may not have hands-on experience in real-time projects, I possess a strong foundational understanding of backend technologies. Familiar with designing RESTful APIs , and I have basic proficiency in Django REST framework for enhancing API capabilities. Additionally, I have basic knowledge of working with MySQL databases to manage and store data efficiently.
          </p>
        </div>



        {/* Version Control & Collaboration */}
        <div className="space-y-1">
        <h3 className="text-xl font-bold text-[#37B5B6]">Version Control & Collaboration</h3>
        <p className="text-gray-700">
          Knowledgeable in utilizing Git for version control and collaborating effectively with development teams.
          Familiarity with Git-based platforms, including GitHub and Bitbucket, for efficient code repository management.
        </p>
      </div>


      </div>

      <p className="mt-8 text-gray-700">
        This combination of technical expertise, collaborative mindset, and creative skills allows me to approach projects holistically, delivering high-quality solutions.
      </p>
    </div>
  );
};

export default SkillComponent;
