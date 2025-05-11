import categories from '../assets/categories.svg'
import categories2 from '../assets/categories2.svg'
import cardImg5 from '../assets/cardImg5.svg'
import Link from './Link'
import arrow1 from '../assets/arrow1.svg'
import styles from './Categories.module.css'

const Categories = () => {
  return (
    <>
        <div className={styles.wrapper}>
            <div className={styles.livingRoom}>
                <div>
                    <h2>Living Room</h2>
                    <Link href='#' className={styles.arrivalLink}>Shop Now<img src={arrow1}/></Link>
                </div>
                <img src={categories} className={styles.categoriesImg1}/>
            </div>
            <div>
                <div className={styles.bedroom}>
                    <div className={styles.bedroomText}>
                        <h2>Bedroom</h2>
                        <Link href='#' className={styles.arrivalLink}>Shop Now<img src={arrow1}/></Link>
                    </div>
                    <img src={categories2} className={styles.categoriesImg2}/>
                </div>
                <div className={styles.kitchen}>
                    <div className={styles.kitchenText}>
                        <h2>Kitchen</h2>
                        <Link href='#' className={styles.arrivalLink}>Shop Now<img src={arrow1}/></Link>
                    </div>
                    <img src={cardImg5} className={styles.cardImg1}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Categories