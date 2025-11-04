import React from 'react'
import EmotionalGallery from '../componets/Gallery/EmotionalGallery'
import TherapyGallery from '../componets/Gallery/TherapyGallery'
import FamilyGallery from '../componets/Gallery/FamilyGallery'
import AuthorGallery from '../componets/Gallery/AuthorGallery'
import Hero from '../componets/Gallery/Hero'

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
