import React from 'react'
import HeroSection from '../components/author/HeroSection'
import AboutSection from '../components/author/AboutSection'
import BooksSection from '../components/author/BooksSection'
import CoverGallery from '../components/author/CoverGallery'
import CTASection from '../components/author/CTASection'

const Author = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <BooksSection/>
      <CoverGallery/>
      <CTASection/>
    </div>
  )
}

export default Author
