import Link from './Link'
import styles from './Collection.module.css'
import arrow1 from '../assets/arrow1.svg'
import collection1 from '../assets/collection1.svg'
import collection2 from '../assets/collection2.svg'
import collection3 from '../assets/collection3.svg'

const Collection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainBlock}>
        <div className={styles.textBlock}>
          <h2>Headband</h2>
          <Link href="#" className={styles.shopButton}>
          Collection <img src={arrow1} />
          </Link>
        </div>
        <img src={collection1} className={styles.imageMain} />
      </div>
      <div className={styles.sideSection}>
        <div className={styles.card}>
          <div className={styles.cardText}>
            <h2>Earbuds</h2>
            <Link href="#" className={styles.shopButton}>
            Collection <img src={arrow1} />
            </Link>
          </div>
          <img src={collection2} className={styles.imageSecondary} />
        </div>
        <div className={styles.card}>
          <div className={styles.cardText}>
            <h2>Accessories</h2>
            <Link href="#" className={styles.shopButton}>
            Collection <img src={arrow1} />
            </Link>
          </div>
          <img src={collection3} className={styles.imageSecondary} />
        </div>
      </div>
    </div>
  )
}

export default Collection