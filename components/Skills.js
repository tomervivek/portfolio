
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import SkillComponent from './SkillComponent'


export default function Skills() {
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
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6  lg:px-8 ">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 ">
                  Technical Skills
                  </h1>
                  <p className="relative mt-2 text-lg  text-gray-600 sm:max-w-md lg:max-w-none">
                  As a skilled and enthusiastic developer, I possess expertise in a range of technologies and frameworks. Here's an overview of my key skills:  
                  </p>
                  <SkillComponent />
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="/js-removebg-preview.png"
                        alt=""
                        className="aspect-[3/4] w-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="/react-removebg-preview.png"
                        alt=""
                        className="aspect-[3/4] w-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/next.png"
                        alt=""
                        className="aspect-[3/4] w-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="/html.png"
                        alt=""
                        className="aspect-[3/4] w-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/css-removebg-preview.png"
                        alt=""
                        className="aspect-[3/4] w-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                    <img
                      src="/tailwind.png"
                      alt=""
                      className="aspect-[3/4] w-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</main>
    </div>
  )
}
