import Card from "./Card"
import Title from "./Title"
import image1 from '../assets/image1.svg'
import image2 from '../assets/image2.svg'
import image3 from '../assets/image3.svg'
import image4 from '../assets/image4.svg'
import image5 from '../assets/image5.svg'
import image6 from '../assets/image6.svg'
import image7 from '../assets/image7.svg'
import image8 from '../assets/image8.svg'
import styles from './ClothesSell.module.css'

const ClothesSell = () => {
  return (
    <>
        <section className={styles.sellContainer}>
            <div className={styles.sellText}>
                <Title type={1}>Best Seller</Title>
            </div>
            <div className={styles.cardsContainer}>
                <Card 
                 name={"Freestyle Crew Racer leather jacket"} 
                 price={595.00}
                 imageSrc={image1}
                />
                <Card 
                 name={"1996 Retro Nuptse Cashmere Jacket in Gray"} 
                 price={149.99}
                 imageSrc={image2}
                />
                <Card 
                 name={"Chilliwack black Bomber HUMANATURE"} 
                 price={1195.99}
                 imageSrc={image3}
                />
                <Card 
                 name={"96 Nuptse Dip Dye bomber Jacket"} 
                 price={400.99}
                 imageSrc={image4}
                />
                <Card 
                 name={"Oversized real leather harrington jacket in black"} 
                 price={249.99}
                 imageSrc={image5}
                />
                <Card 
                 name={"Men's Diamond Quilted Bomber Hoody"} 
                 price={199.95}
                 imageSrc={image6}
                />
                <Card 
                 name={"Paradigm Chilliwack coat Black Label"} 
                 price={1495.00}
                 imageSrc={image7}
                />
                <Card 
                 name={"Men's Torrentshell 3L Rain Jacket in Brown"} 
                 price={149.00}
                 imageSrc={image8}
                />
            </div>
        </section>
    </>
  )
}

export default ClothesSell