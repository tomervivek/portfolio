import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Header from "./Header";

export default function Banner() {
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
      <div className="relative isolate overflow-hidden px-6 sm:px-0 pb-[20px]  lg:pt-0">
        <div className="lg:flex items-center">
          <div className="mx-auto text-center lg:mx-0 mt-36 lg:flex-auto items-center justify-center lg:center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Vivek Singh 
              <div className="text-lg leading-8 text-gray-300"><span className="text-[#37B5B6]">Programmer</span> at SAS ONE Private Limited</div>
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-300">
              Crafting Digital Excellence: Journey into Software Development with Innovation and Expertise
            </p>
            <div className="mb-10 sm:mb-0 mt-5 flex items-center  justify-center gap-x-6 ">
              <a
                href="/vivek.pdf"
                download={true}
                className=" border-none flex items-center gap-2 text-gray-200 bg-[#37B5B6] opacity-90 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:opacity-70   "
              >
                Download Resume
                <ArrowDownTrayIcon className="h-4 w-4 " />
              </a>
             
            </div>
          </div>
      
        </div>
      </div>
    </div>
  </div>
  );
}
