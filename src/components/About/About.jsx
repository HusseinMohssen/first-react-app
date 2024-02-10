import React from 'react'

export default function About() {
  return (
    <>
    
    <div id='about' className='d-flex justify-content-center align-items-center flex-column text-white' style={{width: '100%',height:'600px',background:'#1ABC9C', lineHeight:'25px'}}>
      <div>
        <h2 style={{fontWeight: '700', fontSize: '40px'}}>ABOUT COMPONENT</h2>

        <div className='d-flex justify-content-center align-items-center'>
          <div style={{width: '90px', height:'4px', backgroundColor: 'white', marginRight: '1rem'}}></div>
            <div><i className="fa-solid fa-star "></i></div>
          <div style={{width: '90px', height:'4px', backgroundColor: 'white', marginLeft: '1rem'}}></div>
        </div>
      </div>

      <div className="row container px-5">
        <div className='col-md-6'>
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>

        <div className='col-md-6'>
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
    </div>
    </>
  )
}
