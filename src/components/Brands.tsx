import brand1 from '../assets/brand1.svg'
import brand2 from '../assets/brand2.svg'
import brand3 from '../assets/brand3.svg'
import brand4 from '../assets/brand4.svg'
import brand5 from '../assets/brand5.svg'
import brand6 from '../assets/brand6.svg'
import styles from '../components/Brands.module.css'

const Brands = () => {
  return (
    <>
        <div className={styles.brandContainer}>
            <img src={brand1}/>
            <img src={brand2}/>
            <img src={brand3}/>
            <img src={brand4}/>
            <img src={brand5}/>
            <img src={brand6}/>
        </div>
    </>
  )
}

export default Brands