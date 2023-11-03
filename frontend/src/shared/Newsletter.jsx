import React from 'react'
import './newsletter.css'

import {Container ,Row,Col} from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'


const Newsletter = () => {
  return (
    <section className="newsletter">
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsLetter__content">
                    <h2>Subscribe now to get useful traveling information.</h2>
                </div>
                <div className="newsletter__input">
                    <input type="email" placeholder="Enter your email" />
                    <button className="btn newsletter__btn">Subscribe</button>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum pariatur veritatis repudiandae soluta! Ducimus optio modi accusantium praesentium nobis vero, hic quia autem.</p>

            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleTourist} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
    </section>
  )
}

export default Newsletter
