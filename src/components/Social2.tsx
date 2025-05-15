import styles from './Social.module.css'
import email1 from '../assets/email1.svg'
import email2 from '../assets/email2.svg'
import email3 from '../assets/email3.svg'
import email4 from '../assets/email4.svg'

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
                <img src={email1}/>
                <img src={email2}/>
                <img src={email3}/>
                <img src={email4}/>
            </div>
        </section>
    </>
  )
}

export default Social