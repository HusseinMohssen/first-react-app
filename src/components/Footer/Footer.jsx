import React from 'react'

export default function Footer() {
  return (
    <>
    
    <div id='footer' className='footer' style={{backgroundColor: '#2C3E50',color: 'white', textAlign: 'center', padding : '45px', margin: '0'}}>
      <div className="row p-5">
        <div className="col-md-4">
          <div>
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
        </div>

        <div className="col-md-4">
          <div>
            <h3>AROUND THE WEB</h3>
            <div >
            <i className="fa-brands fa-facebook p-2 mx-2" style={{border: '1px solid white', borderRadius: '50px'}}></i>
            <i className="fa-brands fa-twitter p-2 mx-2" style={{border: '1px solid white', borderRadius: '50px'}}></i>
            <i className="fa-brands fa-linkedin-in p-2 mx-2" style={{border: '1px solid white', borderRadius: '50px'}}></i>
            <i className="fa-solid fa-globe p-2 mx-2" style={{border: '1px solid white', borderRadius: '50px'}}></i>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div>
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
    </div>

    <div style={{backgroundColor: '#1A252F', color: 'white', textAlign: 'center', padding:'15px'}}>
        <p>Copyright © Your Website 2021</p>
      </div>

    </>
  )
}
