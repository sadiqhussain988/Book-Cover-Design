import React from 'react'
import HeroSection from '../componets/author/HeroSection'
import AboutSection from '../componets/author/AboutSection'
import BooksSection from '../componets/author/BooksSection'
import CoverGallery from '../componets/author/CoverGallery'
import CTASection from '../componets/author/CTASection'

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
