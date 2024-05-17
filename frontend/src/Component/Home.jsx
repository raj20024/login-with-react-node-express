import React from 'react'

function Home() {
  return (
    <>
    <div className="container d-flex justify-content-center align-items-center vh-100"> 
    <div className='col-md-6 bg-light p-4 shadow-lg'>
    <form>
  <div className="mb-3">
    <label htmlfor="exampleInputEmail1" className="htmlform-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlfor="exampleInputPassword1" className="htmlform-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    </div>  
    </>
  )
}

export default Home