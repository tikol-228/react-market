import subheader1 from '../assets/subheader1.svg';
import subheader2 from '../assets/subheader2.svg';
import subheader3 from '../assets/subheader3.svg';
import arrow1 from '../assets/arrow1.svg';
import arrow2 from '../assets/arrow2.svg';
import styles from './SubHeader.module.css';
import Button from './Button';
import { useState } from 'react';

const SubHeader = () => {
  const images = [subheader1, subheader2, subheader3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  
  return (
    <>
      <section className={styles.subHeader}>
        <div className={styles.slider}>
          <div
            className={styles.slides}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, idx) => (
              <div className={styles.slide} key={idx}>
                <img src={img} alt={`Slide ${idx + 1}`} />
              </div>
            ))}
          </div>

          <Button className={`${styles.arrowButton} ${styles.left}`} onClick={prevSlide}>
            <img src={arrow2} alt="Previous" />
          </Button>
          <Button className={`${styles.arrowButton} ${styles.right}`} onClick={nextSlide}>
            <img src={arrow1} alt="Next" />
          </Button>
        </div>

        <div className={styles.content}>
          <h2>
            Simply Unique/
            <br />
            Simply Better.
          </h2>
          <p>
            3legant is a gift & decorations store based in HCMC,
            <br /> Vietnam. Est since 2019.
          </p>
        </div>
      </section>
    </>
  );
};

export default SubHeader;