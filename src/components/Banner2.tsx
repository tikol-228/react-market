import styles from './Banner2.module.css'
import banner2 from '../assets/banner2.svg'

const Banner2 = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.imageContainer}>
        <img src={banner2} className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Bring the<br/>warmth.
        </h1>
        <p className={styles.subtitle}>
          Everyone needs a good winter jacket.<br />
          Find yours with our collection and more.
        </p>
        <button className={styles.button}>Shopping Now</button>
      </div>
    </section>
  )
}

export default Banner2
