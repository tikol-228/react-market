import styles from './Articles.module.css'
import subHeader2 from '../assets/subHeader2.svg'
import arrivalImg1 from '../assets/arrivalImg1.svg'
import arrivalImg2 from '../assets/arrivalImg2.svg'
import Link from './Link'
import arrow1 from '../assets/arrow1.svg'

const Articles = () => {

    const cards = [
        {id:1,img:arrivalImg1,title:'7 ways to decor your home'},
        {id:2,img:subHeader2,title:'Kitchen organization'},
        {id:3,img:arrivalImg2,title:'Decor your bedroom'}
    ]

  return (
    <>
        <div>
            <div className={styles.articleText}>
                <h2>Articles</h2>
                <Link href='#' className={styles.articleLink}>More Articles <img src={arrow1}/></Link>
            </div>

            <div className={styles.articleCard}>
                {cards.map((card) => (
                    <div key={card.id} className={styles.card}>
                        <img src={card.img} alt={card.title}/>
                        <h3>{card.title}</h3>
                        <Link href='#' className={styles.articlesLink}>More Products <img src={arrow1} alt="arrow" /></Link>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Articles