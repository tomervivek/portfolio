import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Experience', href: 'experience' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Education', href: 'education' },
  { name: 'Contact', href: 'footer' },
]

export default function Header({scrollToDiv}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="absolute inset-x-0 z-50  opacity-70 bg-transparent w-full">
      <header className="  inset-x-0 top-0  z-50 max-w-7xl mx-auto ">
        <nav className="flex items-center  justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <div onClick={()=>scrollToDiv("banner")} className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-16 w-auto"
                src="/v_logo.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 text-[#5C8374]" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <div key={item.name} onClick={()=>scrollToDiv(item.href)} className="text-sm font-semibold  cursor-pointer leading-6 text-white">
                {item.name}
              </div>
            ))}
          </div>

        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0  z-50" />
          <Dialog.Panel className="fixed inset-y-0 bg-[#040D12] right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5  p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-16 w-auto"
                  src="/v_logo.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6 text-[#5C8374]" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                      onClick={()=>{ setMobileMenuOpen(false);scrollToDiv(item.href)}}
                      className="-mx-3 block  rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#5C8374] hover:bg-gray-50"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 lg:px-8">
      <div className="absolute" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] w-full sm:w-full"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
    
    </div>
  )
}
