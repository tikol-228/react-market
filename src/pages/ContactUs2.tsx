import React from 'react';
import Img from '../components/Img'
import subHeader from '../assets/subHeader3.svg'
import styles from '../pages/ContactUs2.module.css'

const ContactUs2: React.FC = () => {
    return (
        <section className={styles.contactUsContainer}>
            <div className={styles.contentWrapper}>
                <div className={styles.header}>
                    <h2 className={styles.headerText}>We believe in sustainable<br/>decor.
                    We’re passionate about<br/>life at home.</h2>
                </div>
                <div className={styles.description}>
                    <p className={styles.descriptionText}>Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which<br/>
                    can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations,<br/>
                    faithful to the shapes of each period, with a touch of the present</p>
                </div>
            </div>
            <div className={styles.imageWrapper}>
                <Img src={subHeader} className={styles.image}/>
            </div>
        </section>
    );
};

export default ContactUs2;