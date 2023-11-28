import React from 'react'
// import Participantimg from '../images/Kiwi.png';
// import Projectimg from '../images/Kiwi.png';
// import Patentimg from '../images/Kiwi.png';
// import Copyrightimg from '../images/Kiwi.png';
import '../styles/stats.css'

function count() {
    const counters = document.querySelectorAll('.counter');
    for(let n of counters) {
      const updateCount = () => {
      const target = + n.getAttribute('data-target');
      const count = + n.innerText;
      const speed = 500; // animation speed
      const inc = target / speed; 
      if(count < target) {
        n.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      }
      else {
        n.innerText = target;
      }
     }
     updateCount();
    }
  }
function Stats() {
  return (
    <>
    <div style={{textAlign:'center', verticalAlign:'center', paddingTop:"2rem",fontSize:'2rem'}}>
        <h2>STATISTICS </h2>
    </div>
    <div classname ="stats" style={{display:'flex', flexWrap:'wrap', width:'100%', alignItems:'center'}} onMouseEnter={()=>{count()}}>
      <br />
      <div className = "boxes">
        <div className ="box" style={{textAlign:'center'}}data-aos="flip-left">
          {/* <img className="img1" src={Participantimg} alt="Participants Img" height={'35px'}/> */}
          <div className="counter" data-target="75">0</div>
          <p className="text">Tour Varieties</p>
        </div>
        <div className ="box" style={{textAlign:'center'}}data-aos="flip-left">
          {/* <img className="img1" src={Projectimg} alt="Project Img" height={'35px'}/> */}
          <div className="counter" data-target="280">0</div>
          <p className="text1">Tour Booked</p>
        </div>
        <div className ="box" style={{textAlign:'center'}}data-aos="flip-left">
          {/* <img className="img1" src={Patentimg} alt="Patent Img" height={'35px'}/> */}
          <div className="counter" data-target="230">0</div>
          <p className="text1">Customers Satisfied</p>
        </div>
        <div className ="box" style={{textAlign:'center'}}data-aos="flip-left">
          {/* <img className="img1" src={Copyrightimg} alt="Copyright Img" height={'35px'}/> */}
          <div className="counter" data-target="30">0</div>
          <p className="text1">Popular Destinations</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Stats
