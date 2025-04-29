import styles from './Banner.module.css'
import banner from '../assets/banner.svg'
const Banner = () => {
  return (
    <>
    <section className={styles.banner}>
      <img
        className={styles.bannerImg}
        src={banner}
        alt="Man with headphones"
      />
      <div className={styles.bannerContent}>
        <h1>
          Listen to the <span className={styles.highlight}>amazing</span> music sound.
        </h1>
        <p>Experience music like never before</p>
        <button className={styles.button}>Shopping Now</button>
      </div>
    </section>
    </>
  )
}

export default Banner