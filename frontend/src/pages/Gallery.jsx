import React from 'react'
import { Container,Row,Col } from 'reactstrap';
import '../styles/home.css'
import MasnoryImagesGallery from '../components/images-gallery/MasnoryImagesGallery';

function Gallery() {
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg="12">
            <h5 className="services__subtitle" style={{textAlign:'center', fontSize:'5rem', fontWeight:'600'}}>Tour Gallery</h5>
            </Col>
            <Col lg="12">
              <MasnoryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Gallery
