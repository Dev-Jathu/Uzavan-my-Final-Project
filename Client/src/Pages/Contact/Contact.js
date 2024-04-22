import React from 'react'

function Contact() {
  return (
    <div>
       <video controls autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Contact
