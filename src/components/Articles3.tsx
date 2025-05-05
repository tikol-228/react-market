import React from 'react'
import Link from '../homePage1/Link'
import styles from './Articles3.module.css'
import articles1 from '../assets/articles1.svg'
import articles2 from '../assets/articles2.svg'
import articles3 from '../assets/articles3.svg'
import arrow1 from '../assets/arrow1.svg'

const Articles3 = () => {

    const cards = [
        {id:1, img: articles1, title:'Air Jordan x Travis Scott Event'},
        {id:2, img: articles2, title:'The timeless classics on the green'},
        {id:3, img: articles3, title:'The 2023 Ryder Cup'},
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

export default Articles3