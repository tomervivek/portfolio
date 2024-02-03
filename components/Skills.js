import { useEffect, useState } from "react";
import SkillComponent from "./SkillComponent";
import classNames from "classnames";
import styles from "../styles/CircleAnimation.module.css";
export default function Skills() {
  const [animationState, setAnimationState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState((prevState) => (prevState + 1) % 4);
    }, 1000); // Adjust the interval as needed
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-white">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>

          <div className="overflow-hidden">
            <div className="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8 ">
              <div className=" ">
                <div className="w-full  lg:shrink-0 ">
                  <h1 className="text-2xl  text-left sm:text-center font-bold tracking-tight ">
                    Technical Skills
                  </h1>
                  <p className="  text-sm font-semibold sm:text-center text-gray-600">       As a skilled and enthusiastic developer, I possess expertise
                    in a range of technologies <br/> and frameworks. Here's an
                    overview of my key skills:
                  </p>
                  <SkillComponent />
                </div>

            
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
