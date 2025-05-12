import blog1 from '../assets/blog1.svg'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../pages/Blog.module.css'
import blog2 from '../assets/blog2.svg'
import blog3 from '../assets/blog3.svg'
import blog4 from '../assets/blog4.svg'
import blog5 from '../assets/blog5.svg'
import blog6 from '../assets/blog6.svg'
import blog7 from '../assets/blog7.svg'
import blog8 from '../assets/blog8.svg'
import blog9 from '../assets/blog9.svg'
import blog10 from '../assets/blog10.svg'
import Email from '../components/Email'

const Blog = () => {

    const cards = [
        {id:1,img:blog2,title:'7 ways to decor your home like a professional',list:'October 16, 2023'},
        {id:2,img:blog3,title:'Inside a beautiful kitchen organization',list:'October 16, 2023'},
        {id:3,img:blog4,title:'Decor your bedroom for your children',list:'October 16, 2023'},
        {id:4,img:blog5,title:'Modern texas home is beautiful and completely kid-friendly',list:'October 16, 2023'},
        {id:5,img:blog6,title:'Modern texas home is beautiful and completely kid-friendly',list:'October 16, 2023'},
        {id:6,img:blog7,title:'Modern texas home is beautiful and completely kid-friendly',list:'October 16, 2023'},
        {id:7,img:blog8,title:'Modern texas home is beautiful and completely kid-friendly',list:'October 16, 2023'},
        {id:8,img:blog9,title:'Modern texas home is beautiful and completely kid-friendly',list:'October 16, 2023'},
        {id:9,img:blog10,title:'Modern texas home is beautiful and completely kid-friendly',list:'October 16, 2023'},
    ]

  return (
    <>
        <Header/>
        <section>
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay}>
                    <h1 className={styles.heroTitle}>Our Blog</h1>
                    <p className={styles.heroSubtitle}>Home ideas and design inspiration</p>
                </div>
            </section>

            <section className={styles.cardsContainer}>
                    {cards.map(card => (
                        <div key={card.id} className={styles.card}>
                            <img src={card.img} alt={card.title} className={styles.cardImage} />
                            <h3 className={styles.cardTitle}>{card.title}</h3>
                            <p className={styles.cardDate}>{card.list}</p>
                        </div>
                    ))}
            </section>
        </section>
        <Email/>
        <Footer/>
    </>
  )
}

export default Blog