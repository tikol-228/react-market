import clothes1 from '../assets/clothes1.svg'
import clothes2 from '../assets/clothes2.svg'
import clothes3 from '../assets/clothes3.svg'
import clothes4 from '../assets/clothes4.svg'
import clothes5 from '../assets/clothes5.svg'
import clothes6 from '../assets/clothes6.svg'
import styles from './CategorieShop.module.css'

const CategorieShop = () => {

    const cards = [
      {id:1, img:clothes1, title:'Puffers'},
      {id:2, img:clothes2, title:'Bombers'},
      {id:3, img:clothes3, title:'Lightweight jackets'},
      {id:4, img:clothes4, title:'Gilets'},
      {id:5, img:clothes5, title:'Coats'},
      {id:6, img:clothes6, title:'Rainwear'}
    ]

  return (
    <>  
      <div>
        <h2 className={styles.shopText}>Shop by Categories</h2>
        <div className={styles.cardsContainer}>
          {cards.map(card => (
            <div key={card.id} className={styles.card}>
              <img src={card.img} alt={card.title} className={styles.cardImg} />
              <h3 className={styles.cardTitle}>{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CategorieShop