import React from 'react'
import Button from '../homePage1/Button'
import styles from './ContactUs.module.css'
import subHeader3 from '../assets/subHeader3.svg'
import Link from './Link'
import arrow1 from '../assets/arrow1.svg'

const ContactUs = () => {
  return (
    <>
        <form>
            <section>
                <h2>We believe in sustainable<br/>decor. We’re passionate about<br/>life at home.</h2>
                <p>Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which<br/>
                can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations,<br/>
                faithful to the shapes of each period, with a touch of the present</p>
            </section>
            <section>

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
            </section>
        </form>
    </>
  )
}

export default ContactUs