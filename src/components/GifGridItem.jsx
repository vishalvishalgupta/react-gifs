import React from 'react'

export const GifGridItem = ({ id, ...img }) => {
  const { url, title } = img;
  
   return (
    <div className="animate__animated animate__fadeIn animate__slower">
      <img src={url} alt={title} />
    </div>
  )
}
