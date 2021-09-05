import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";
import ScrollAnimation from 'react-animate-on-scroll';
import styles from 'styles/Brands/Description/Description.module.scss';

function Description() {
  return (
    <div className={styles.container}>
      <div className={styles.descriptionContainer}>
        <h3 className={styles.description}>
          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            Our water-seeking concentrates and feel-good ingredients power your present and protect our planet.
          </ScrollAnimation>
        </h3>
      </div>
      <div className={styles.sunriseContainer}>
        <h3 className={styles.sunriseText}>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce>
            Sunrise Session is a single-use, plastic, waste-free self-care innovation brand, owned and operated by Nohbo.
          </ScrollAnimation>
        </h3>
        <div className={styles.sunriseImageContainer}>
          <ScrollAnimation animateIn="fadeInRight" animateOnce>
            
            <a href="https://www.sunrisesession.com" target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.sunriseImage} src="/images/sunrise.png" alt="sunrise" />
           </a>                        
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );






const items = [
  {
    src: require("/images/sunrise.png"),
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: require("/images/sunrise.png"),
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: require("/images/sunrise.png"),
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
];

const Example = () => (
  <Row>
    <Col md="8" className="mx-auto">
      <UncontrolledCarousel items={items} />
    </Col>
  </Row>
);



}

export default Description;
