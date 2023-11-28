import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
// import experienceImg from '../assets/images/experience.png';
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
// import ServiceCard from '../services/ServiceCard';
// import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import Testimonials from '../components/Testimonial/Testimonial';
// import Newsletter from '../shared/Newsletter';
import Stats from './Stats';


const Home = () => {
  return <>
    <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                Travel far, stay close to your dreams {" "}
                  <span className="highight"></span>
                </h1>
                <p>
                As you traverse landscapes and navigate through the unknown, remember: every detour is a lesson, every encounter is a story, every sunset is a painting, and every journey is a masterpiece                </p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <video src={heroVideo} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
        </section>
        {/* Services */}
        {/* <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">what we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>  */}

      {/*Features*/}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Popular tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* experience */}
      {/* <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'}></Subtitle>
                <h2>With our all experience <br/> we will serve you </h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque repellat illo, provident, tempora molestiae non unde, aliquam doloribus error enim eveniet quidem labore?
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* testimonials */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Testimonials'}></Subtitle>
              <h2 className="testimonial__title">What our fans says about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* <Newsletter /> */}
    
      <Stats/>

    </>
    
}

export default Home
