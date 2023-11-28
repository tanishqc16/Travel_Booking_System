import React, {useEffect, useState, useRef} from 'react'
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup} from 'reactstrap';
import { useParams } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';
import { BASE_URL } from '../utils/config';
import useFetch from '../hooks/useFetch';

const TourDetails = () => {
  const {id} = useParams()

  const{data:tour, loading, error} = useFetch(`${BASE_URL}/tours/${id}`)
  const{photo, title, desc, price, reviews, address, city, distance, maxGroupSize}=tour;
  
  const {totalRating, avgRating} = calculateAvgRating(reviews)
  const  options = {day:"numeric", month:"long", year:"numeric"}

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [tour])

  return (
    <section>
      <Container>
        {
          loading && <h4 className="text-center pt-5">Loading.....</h4>
        }
        {
          error && <h4 className="text-center pt-5">{error}</h4>
        }
        {
          !loading && !error && <Row>
          <Col lg='8'>
            <div className="tour__content">
              <img src={photo} alt="" />
              <div className="tour__info">
                <h2>{title}</h2>
                <div className="d-flex align-items-center gap-5">
                <span className="tour__rating d-flex align-items-center gap-1">
                  <i className="ri-star-fill"style={{color:"var(--secondary-color)"}}></i>
                  {calculateAvgRating === 0 ? null : avgRating} {totalRating === 0 ? 'Not Rated' : 
                  <span>({reviews?.length})</span>} 
                </span>
                  <span>
                    <i className="r1-map-pin-user-full"></i> {address}
                  </span> 
                  </div>
                  <div className='tour__extra-details'>
                    <span>
                      <i className = "ri-map-pin-2-line"></i>{city}
                    </span>
                    <span>
                      <i className="ri-mney-dollor-circle-line"></i>${price}/per person
                    </span>
                    <span>
                      <i className="ri-map-pin-time-line"></i> {distance} k/m
                    </span>
                    <span>
                      <i className="ri-group-line"></i> {maxGroupSize}
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
              </div>

                {/* tour reviews */}
              {/* <div className="tour__reviews mt-4">
                <h4>Reviews({reviews?.length} reviews)</h4>
                <Form>
                  <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                    <span>
                      1 <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      2 <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      3 <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      4 <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      5 <i className="ri-star-s-fill"></i>
                    </span>
                  </div>
                  <div className="review__input">
                    <input type="text" placeholder='share your thoughts'/>
                    <button className="btn primary__btn text-white" type="submit">Submit</button>
                  </div>
                </Form>
                <ListGroup className='user__reviews'>
                  {reviews?.map(review =>(
                    <div className="review__item">
                      <img src={avatar} alt="" />
                      <div className="w-100">
                        <div className="d--flex align-items-center justisy-content-between">
                          <div>
                            <h5>Tanishq</h5>
                            <p>{new Date('01-18-2023').toLocaleDateString("en-US", options)}</p>
                          </div>
                          <span className="d-flex align-items-center">
                            5 <i className="ri-star-s-fill"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </ListGroup>
              </div> */}
            </div>
          </Col>

          <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating}/>
          </Col>
        </Row> 
        }
      </Container>
    </section>
  )
}

export default TourDetails
