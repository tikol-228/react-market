import subHeader3 from '../assets/subHeader3.svg'
import Link from './Link'
import arrow1 from '../assets/arrow1.svg'
import styles from './Sale.module.css'

const Sale = () => {
  return (
    <>
        <div className={styles.saleContainer}>
            <div className={styles.saleImg}>
                <img src={subHeader3}/>
            </div>
            <div className={styles.saleAbout}>
                <div className={styles.saleText}>
                    <p>SALE UP TO 35% OFF</p>
                    <h2>HUNDREDS of<br/>New lower prices!</h2>
                    <p>It’s more affordable than ever to give every<br/>
                    room in your home a stylish makeover</p>
                </div>
                <Link href='#'>Shop Now <img src={arrow1}/></Link>
            </div>
        </div>
    </>
  )
}

export default Sale