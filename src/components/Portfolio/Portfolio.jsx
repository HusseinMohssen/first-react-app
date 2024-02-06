import React, { useState } from 'react'
import img1 from '../../images/port1.png'
import img2 from '../../images/port2.png'
import img3 from '../../images/port3.png'

export default function Portfolio() {

    const [color, setColor] = useState(true)
    let myStyle = {}
    if(color){
        myStyle = {display : 'none'}
    }else
    {
        myStyle = {display: 'flex'}
    }
    const [demo, setDemo] = useState(true)
    let myStyls = {}
    if(demo){
        myStyls = {display : 'none'}
    }else
    {
        myStyls = {display: 'flex'}
    }
    const [dema, setDema] = useState(true)
    let myStyla = {}
    if(dema){
        myStyla = {display : 'none'}
    }else
    {
        myStyla = {display: 'flex'}
    }
    

  return (
    <div id='portfolio'>
    
    <div>
        <h2 style={{fontWeight: '700', fontSize: '40px', textAlign: 'center', paddingTop: '30px'}}>PORTFOLIO COMPONENT</h2>
        <div>
          <div className='d-flex justify-content-around align-items-center '>
            <div style={{width: '80px', height:'4px', backgroundColor: '#2C3E50', marginLeft: '630px'}}></div>
              <div><i className="fa-solid fa-star "></i></div>
            <div style={{width: '80px', height:'4px', backgroundColor: '#2C3E50', marginRight: '630px'}}></div>
          </div>
      </div>
    </div>
    
    <div className='container my-3' >
        <div className="row g-5">
        <div className="col-lg-4 col-md-6 col-sm-12">
                <div onClick={()=>setColor(false)} className='main-layer overflow-hidden position-relative'>
                    <img src={img1} className='w-100 h-100 rounded' alt="" />
                    <div className="layer rounded position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus text-white fa-6x"></i>
                    </div>
                </div>

                <div onClick={()=>setColor(true)} style={myStyle} className='layer-2 position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 justify-content-center align-items-center'>
                    <img src={img1} alt="" />
                </div>

            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
                <div onClick={()=>setDemo(false)} className='main-layer overflow-hidden position-relative'>
                    <img src={img2} className='w-100 h-100 rounded' alt="" />
                    <div className="layer rounded position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus text-white fa-6x"></i>
                    </div>
                </div>

                <div onClick={()=>setDemo(true)} style={myStyls} className='layer-2 position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 justify-content-center align-items-center'>
                    <img src={img2} alt="" />
                </div>

            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
                <div onClick={()=>setDema(false)} className='main-layer overflow-hidden position-relative'>
                    <img src={img3} className='w-100 h-100 rounded' alt="" />
                    <div className="layer rounded position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus text-white fa-6x"></i>
                    </div>
                </div>

                <div onClick={()=>setDema(true)} style={myStyla} className='layer-2 position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 justify-content-center align-items-center'>
                    <img src={img3} alt="" />
                </div>

            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
                <div onClick={()=>setColor(false)} className='main-layer overflow-hidden position-relative'>
                    <img src={img1} className='w-100 h-100 rounded' alt="" />
                    <div className="layer rounded position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus text-white fa-6x"></i>
                    </div>
                </div>

                <div onClick={()=>setColor(true)} style={myStyle} className='layer-2 position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 justify-content-center align-items-center'>
                    <img src={img1} alt="" />
                </div>

            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
                <div onClick={()=>setDemo(false)} className='main-layer overflow-hidden position-relative'>
                    <img src={img2} className='w-100 h-100 rounded' alt="" />
                    <div className="layer rounded position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus text-white fa-6x"></i>
                    </div>
                </div>

                <div onClick={()=>setDemo(true)} style={myStyls} className='layer-2 position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 justify-content-center align-items-center'>
                    <img src={img2} alt="" />
                </div>

            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
                <div onClick={()=>setDema(false)} className='main-layer overflow-hidden position-relative'>
                    <img src={img3} className='w-100 h-100 rounded' alt="" />
                    <div className="layer rounded position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus text-white fa-6x"></i>
                    </div>
                </div>

                <div onClick={()=>setDema(true)} style={myStyla} className='layer-2 position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 justify-content-center align-items-center'>
                    <img src={img3} alt="" />
                </div>

            </div>

        </div>
    </div>
    
    
    </div>
  )
}
