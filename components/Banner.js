import { useEffect, useState } from "react";

export default function Banner() {
  const [loadingText, setLoadingText] = useState('V');
  var loadingWord = 'Vivek Singh'
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingText(prevText => (prevText === 'Vivek Singh' ? 'V' : prevText + loadingWord[prevText.length]));
    }, 300);

    return () => clearInterval(intervalId);
  }, []);


var arr=[ 7,1,2,3,4,5,"React","Javascript","NextJs","React Native","Python","Html","Html5","Css","Css3","Talwind Css","Git",5,5,5,6,7,7,1,2,3,4,5,6,7,8,2,3,4,5,5,5,6,7,7]
  

return (
    
    <div className="bg-cover bg-center " >
    <div class="area">
    <ul class="circles">
    {arr.map((item)=>{
      return (<li></li>)
    })}
    </ul>
  </div>
    <div className="mx-auto">
      <div className="relative isolate overflow-hidden px-6 sm:px-0  lg:pt-0">
        <div className="mt-36 mx-auto max-w-screen-xl px-4 lg:py-8 sm:px-6  lg:px-8  ">
          <div className=" ">
            <h2 className="text-3xl font-bold tracking-tight text-[#5C8374] sm:text-4xl">
              {loadingText}
            </h2>
            <div className="mt-2 text-lg mb-24 text-sm md:text-[18px]  md:mb-0 leading-8  text-[#93B1A6]">
            Experienced Front-End Developer with 4 years of expertise in building responsive, user-focused web applications. Proficient in JavaScript, React, Next.js, HTML, and CSS, with a strong track record of delivering intuitive and engaging user experiences through innovative solutions and effective team collaboration.<span className="hidden md:block">Proven track record of enhancing user experiences through innovative solutions and collaborative development.</span>
            </div>

          </div>
      
        </div>
      </div>
    </div>
  </div>
  );
}
