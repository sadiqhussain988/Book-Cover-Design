import React from 'react'
import EmotionalGallery from '../Gallery/EmotionalGallery'
import TherapyGallery from '../Gallery/TherapyGallery'
import FamilyGallery from '../Gallery/FamilyGallery'
import AuthorGallery from '../Gallery/AuthorGallery'

const Gallery = () => {
  return (
    <div>
     <EmotionalGallery/>
     <TherapyGallery/>
     <FamilyGallery/>
     <AuthorGallery/>
    </div>
  )
}

export default Gallery
