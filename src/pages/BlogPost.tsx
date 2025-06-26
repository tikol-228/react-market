import Header from '../components/Header'
import Footer from '../components/Footer'
import post1 from '../assets/post1.svg'
import post2 from '../assets/post2.svg'
import post3 from '../assets/post3.svg'
import post4 from '../assets/post4.svg'
import Img from '../components/Img'
import styles from './BlogPost.module.css'

const BlogPost = () => {
  return (
    <>
    <section>
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>
            How to make a busy bathroom<br /> a place to relax
          </h1>
          <p className={styles.heroSubtitle}>
            Your bathroom serves a string of busy functions on a daily basis. See how you can make all of them work, and still have room for comfort and relaxation.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.contentGrid}>

          <div className={styles.column}>
            <Img src={post1} className={styles.imageLarge} />
            <div className={styles.textBlock}>
              <h2 className={styles.sectionTitle}>
                A cleaning hub with built-in ventilation
              </h2>
              <p className={styles.sectionText}>
                Use a rod and a shower curtain to create a complement to your cleaning cupboard. Unsightly equipment is stored out of sight yet accessibly close – while the air flow helps dry any dampness.
              </p>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.imagePair}>
              <Img src={post2} className={styles.imageSmall} />
              <Img src={post3} className={styles.imageSmall} />
            </div>
            <div className={styles.textBlock}>
              <h2 className={styles.sectionTitle}>Storage with a calming effect</h2>
              <p className={styles.sectionText}>
                Having a lot to store doesn’t mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and they’ll thrive in the humid air).
              </p>
              <h2 className={styles.sectionTitle}>Kit your clutter for easy access</h2>
              <p className={styles.sectionText}>
                Even if you have a cabinet ready to swallow the clutter, it’s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment’s notice.
              </p>
            </div>
          </div>

          <div className={styles.column}>
            <Img src={post4} className={styles.imageLarge} />
            <div className={styles.textBlock}>
              <h2 className={styles.sectionTitle}>An ecosystem of towels</h2>
              <p className={styles.sectionText}>
                Racks or hooks that allow air to circulate around each towel prolong their freshness. They dry quick and the need for frequent washing is minimized.
              </p>
              <h2 className={styles.sectionTitle}>Make your mop disappear</h2>
              <p className={styles.sectionText}>
                Having your cleaning tools organized makes them easier to both use and return to. When they’re not needed, close the curtain and feel the peace of mind it brings.
              </p>
            </div>
          </div>

        </div>
      </section>
    </section>
    </>
  )
}

export default BlogPost
