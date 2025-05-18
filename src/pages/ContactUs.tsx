import React from 'react';
import Img from '../components/Img'
import subHeader from '../assets/subHeader3.svg'
import styles from '../pages/ContactUs.module.css'
import market from '../assets/market.svg'
import phone from '../assets/phone.svg'
import email from '../assets/email.svg'
import map from '../assets/map.svg'
import Values from '../components/Values';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from '../components/Button';
import arrorw1 from '../assets/arrow1.svg'
import Link from '../components/Link';
import Header from '../components/Header';

const ContactUs2: React.FC = () => {

    const contactCards = [
        {id:1, icon:market, title:'Address', description:'234 Hai Trieu, Ho Chi Minh City, Viet Nam'},
        {id:2, icon:phone, title:'Contact Us', description:'+84 234 567 890'},
        {id:3, icon:email, title:'Email', description:'hello@3legant.com'}
    ]

    return (
        <>
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
            <div className={styles.aboutUsWrapper}>
                <div className={styles.imageWrapper}>
                    <Img src={subHeader} className={styles.image}/>
                </div>
                <div className={styles.aboutUsText}>
                    <h3>About Us</h3>
                    <p>3legant is a gift & decorations store based in HCMC,<br/>Vietnam. Est since 2019.<br/>
                    Our customer service is always prepared to support you<br/>24/7</p>
                </div>
                <div>
                    <Link href='#'>Shop Now <Img src={arrorw1}/></Link>
                </div>
            </div>
            <div>
                <h3 className={styles.contactUsHeader}>Contact Us</h3>
                <div className={styles.contactCards}>
                    {contactCards.map((card) => (
                        <div key={card.id} className={styles.card}>
                            <img src={card.icon} alt="icon" className={styles.icon}/>
                            <h4 className={styles.cardTitle}>{card.title}</h4>
                            <p className={styles.cardDescription}>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.contactFormMap}>
                <form className={styles.form}>
                    <label className={styles.label}>Full Name</label>
                    <Input placeholder="Your Name" className={styles.input} />

                    <label className={styles.label}>Email Address</label>
                    <Input placeholder="Your Email" className={styles.input} />

                    <label className={styles.label}>Message</label>
                    <Input placeholder="Your Message" className={styles.textarea} />

                    <Button className={styles.submitButton}>Send Message</Button>
                </form>

                <div className={styles.mapWrapper}>
                    <Img src={map} />
                </div>
            </div>


            <Values/>
        </section>
        </>
    );
};

export default ContactUs2;