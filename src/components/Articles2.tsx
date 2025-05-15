import styles from './Articles.module.css'
import article1 from '../assets/article1.svg'
import article2 from '../assets/article2.svg'
import article3 from '../assets/article3.svg'
import Link from './Link'
import arrow1 from '../assets/arrow1.svg'

const Articles = () => {

    const cards = [
        {id:1,img:article1,title:'2023 Holiday Gift Guide'},
        {id:2,img:article2,title:'2023 Holiday Gift Guide'},
        {id:3,img:article3,title:'2023 Holiday Gift Guide'}
    ]

  return (
    <>
        <div>
            <div className={styles.articleText}>
                <h2>Latest Articles</h2>
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