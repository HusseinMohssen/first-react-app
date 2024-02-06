import React from 'react'
import logo from '../../images/logo.svg'

export default function Home() {
  
  return (
    <>

    <div id='home' className='home d-flex justify-content-center align-items-center flex-column text-white' style={{width: '100%',height:'600px',background:'#1ABC9C'}}>
        
          <img className='mb-5' style={{width:'250px',minHeight:'250px'}} src={logo} alt="logo" />
        
        <div className='text-center'>
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">start framework</h2>
          <div className='d-flex justify-content-around align-items-center px-5 mx-4'>
            <div style={{width: '80px', height:'4px', backgroundColor: 'white'}}></div>
            <div><i className="fa-solid fa-star"></i></div>
            <div style={{width: '80px', height:'4px', backgroundColor: 'white'}}></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>

    </div>

    </>
  )
}
