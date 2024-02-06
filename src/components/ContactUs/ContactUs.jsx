import React from 'react'

export default function ContactUs() {
  return (
    <>
      <div id='contactUS'>
        <div>
                <h2 style={{fontWeight: '700', fontSize: '40px', textAlign: 'center', paddingTop: '20px'}}>CONATCT SECTION</h2>
                <div className=''>
                  <div className='d-flex justify-content-around align-items-center '>
                    <div style={{width: '90px', height:'4px', backgroundColor: '#2C3E50', marginLeft: '630px'}}></div>
                      <div><i class="fa-solid fa-star "></i></div>
                    <div style={{width: '90px', height:'4px', backgroundColor: '#2C3E50', marginRight: '630px'}}></div>
                  </div>
              </div>
            </div>

            <div className=' d-flex justify-content-center align-items-center flex-column' style={{width: '100%',height:'600px',}}>

            

                <form action="" className='w-50'>

                  <label htmlFor="userName">userName :</label>
                  <input id='userName' className=' form-control p-2 m-2' type="text" placeholder='userName'/>

                  <label htmlFor="userAge">userAge :</label>
                  <input id='userAge' className=' form-control p-2 m-2' type="number" placeholder='userAge'/>

                  <label htmlFor="userEmail">userEmail :</label>
                  <input id='userEmail' className=' form-control p-2 m-2' type="email" placeholder='userEmail'/>

                  <label htmlFor="userPassword">userPassword :</label>
                  <input id='userPassword' className=' form-control p-2 m-2' type="password" placeholder='userPassword'/>

                  <button className='btn mt-4 text-white' style={{backgroundColor: '#1abc9c'}}>send message</button>
                </form>

            </div>
      </div>
    

    </>
  )
}
