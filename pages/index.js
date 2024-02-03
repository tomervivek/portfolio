import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import { Element, Link as ScrollLink, animateScroll } from 'react-scroll';
import Footer from '@/components/Footer'
import Head from 'next/head'
export default function Home() {
      const scrollToDiv = (id) => {
        // Scroll to the 'yourDivId' element with smooth animation
        animateScroll.scrollTo(document.getElementById(id).offsetTop, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
      };

  return (
    <main
      className={` min-h-screen bg-cover bg-end`} 
    >
    <Head>
    <title>Vivek singh - Frontend developer</title>
    <meta name="description" content="Ready to elevate your team with my skills. Let's connect and discuss how I can contribute to your next project." />
    <meta property="og:title" content="Vivek singh - Frontend developer" />
    <meta property="og:description" content="Ready to elevate your team with my skills. Let's connect and discuss how I can contribute to your next project." />
    <meta property="og:image" content="/og.png" />
  </Head>
   <div id="banner"></div>
    <Header scrollToDiv={scrollToDiv} />
    
    <Banner />
    <div id="experience"><Experience /></div>
<div id="skills"></div><Skills />
<div id="projects"><Projects /></div>
<div id="education"><Education /></div>
<div id="footer"><Footer scrollToDiv={scrollToDiv}/></div>

    </main>
  )
}
