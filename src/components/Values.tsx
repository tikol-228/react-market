import car from '../assets/car.svg'
import finance from '../assets/finance.svg'
import support from '../assets/support.svg'
import secure from '../assets/secure.svg'
import styles from './Values.module.css'

const Values = () => {

    const values = [
        {id:1, img:car,title:'Free Shipping',description:'Order above $200'},
        {id:2, img:finance,title:'Money-back',description:'30 days guarantee'},
        {id:3, img:secure,title:'Secure Payments',description:'Secured by Stripe'},
        {id:4, img:support,title:'24/7 Support',description:'Phone and Email support'},
    ]

  return (
    <>
        <div>
            <div className={styles.valuesConstainer}>
                {values.map((value) => (
                    <div key={value.id} className={styles.valueCard}>
                        <img src={value.img} alt={value.title} className={styles.valuesImg} />
                        <h2 className={styles.valueTitle}>{value.title}</h2>
                        <p className={styles.valueDescription}>{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Values