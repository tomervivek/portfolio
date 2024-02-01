import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Skills from '@/components/Skills'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={` min-h-screen bg-cover bg-end`} 
    >
    <Header />

    
    <Banner />

    <Projects />
<Skills />
<Education />
    </main>
  )
}
