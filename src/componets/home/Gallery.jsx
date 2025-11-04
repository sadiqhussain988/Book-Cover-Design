import React from 'react'
import EmotionalGallery from '../Gallery/EmotionalGallery'
import TherapyGallery from '../Gallery/TherapyGallery'
import FamilyGallery from '../Gallery/FamilyGallery'
import AuthorGallery from '../Gallery/AuthorGallery'
import Hero from '../Gallery/Hero'

const Gallery = () => {
  return (
    <div>
      <Hero/>
     <EmotionalGallery/>
     <TherapyGallery/>
     <FamilyGallery/>
     <AuthorGallery/>
    </div>
  )
}

export default Gallery
