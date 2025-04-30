import styles from './Social.module.css'
import social1 from '../assets/social1.svg'
import social2 from '../assets/social2.svg'
import social3 from '../assets/social3.svg'
import social4 from '../assets/social4.svg'

const Social = () => {
  return (
    <>
        <section className={styles.socialContainer}>
            <div className={styles.socialText}>
                <p className={styles.pSocial}>newsfeed</p>
                <h2>Instagram</h2>
                <p>Follow us on social media for more discount & promotions</p>
                <p className={styles.pSocial}>@3legant_official</p>
            </div>

            <div className={styles.socialImages}>
                <img src={social1}/>
                <img src={social2}/>
                <img src={social3}/>
                <img src={social4}/>
            </div>
        </section>
    </>
  )
}

export default Social