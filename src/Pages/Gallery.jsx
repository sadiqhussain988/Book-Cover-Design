import React from 'react'
import EmotionalGallery from '../components/Gallery/EmotionalGallery'
import TherapyGallery from '../components/Gallery/TherapyGallery'
import FamilyGallery from '../components/Gallery/FamilyGallery'
import AuthorGallery from '../components/Gallery/AuthorGallery'
import Hero from '../components/Gallery/Hero'

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
