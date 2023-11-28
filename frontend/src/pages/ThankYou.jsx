import React from 'react'
import { Button} from "reactstrap"
import {Link} from "react-router-dom";

function ThankYou() {
  return (
    <div>
      <h5 className="services__subtitle" style={{textAlign:'center', fontSize:'5rem', fontWeight:'600'}}>Thank Your for booking our tour</h5>
      <h5 className="services__subtitle" style={{textAlign:'center', fontSize:'4rem', fontWeight:'500'}}>Have a safe journey 🧳</h5>
        <Button className="btn primary__btn w-20 mt-4" style={{marginLeft:'40%'}}>
            <Link to={'/'}>Go to Home</Link></Button>
        <Button className="btn primary__btn w-20 mt-4" style={{marginLeft:'5%'}}>
            <Link to={'/tours'}>Explore</Link>
        </Button>
    </div>
  )
}

export default ThankYou
