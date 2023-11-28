
import './footer.css';
import React from "react";

function Footer(){
    return(
        <>
        <br />
        <br />
   <div className="footer-container" >
      <div className="footer" style={{color:'black'}}>
        <div className="footer-row-1">
        <div className="column 1" style={{paddingLeft:"10rem", paddingTop:"2rem"}}>
        <h3 style={{fontSize:'1.5rem', fontWeight:'600', color:'rgb(255,87,87)'}}>Quick Links </h3>
            <br />
              <ui className="links" style={{listStyle:'none', display:'grid'}}>
               <li style={{padding:'1% 4%', marginLeft:'4%'}}><a href="/" style={{color:'black'}}>Home</a></li>
               <li style={{padding:'1% 4%', marginLeft:'4%'}}><a href="/gallery" style={{color:'black'}}>Gallery</a></li>
               <li style={{padding:'1% 4%', marginLeft:'4%'}}><a href="/tours" style={{color:'black'}}>Tour</a></li>
               </ui>
          </div>
          <div className="column 2" style={{paddingLeft:"10rem", paddingTop:"2rem"}}>
            <h3 style={{fontSize:'2rem', fontWeight:'700', color:'rgb(255,87,87)'}}>Get In Touch </h3>
            <br />
              <ul class="information">
                  <span>Address: VIIT Pune, India<br></br>
                  </span>
                  <br></br>
                <span> Email us : TravelVista16@gmail.com <br></br></span>
                <br></br>
                <span style={{color:'#FF9595'}}>Feel free to write us about your Experiences and Suggestions</span>
              </ul>
          </div>
        </div>
        </div>
        <div className="footer-row-2">
          <hr></hr>
          <div className="copyright" style={{color:'#FF9595'}}>
            <p> ⓒ All Rights Reserved by <a href="/" style={{color:'grey'}}>TravelVista Pvt Ltd</a> </p>
          </div>
       </div>
      </div>
        </>
    )
}

export default Footer;