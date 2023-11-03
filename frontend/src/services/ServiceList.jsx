import React from 'react'
import ServiceCard from "./ServiceCard";
import {Col} from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const serviceData=[
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "lorem",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "lorem",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "lorem",
    },
]

const ServiceList = () => {
  return (
  <>
    {serviceData.map((item,index)=> (
        <Col lg='3' key={index}>
        <ServiceCard item={item}/>   
        </Col>
    ))}
</>
    );
};

export default ServiceList;
