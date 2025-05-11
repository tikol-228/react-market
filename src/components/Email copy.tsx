import Button from '../components/Button';
import Input from '../components/Input'
import styles from './Email.module.css'

const Email = () => {
  return (
    <>
      <div className={styles.emailContainer}>
        <h2>Join Our Newsletter</h2>
        <p>Sign up for deals, new products and promotions</p>
        {/* <Input type='email' placeholder='Email address'/> */}
        <Button type='submit' className='btn'>Sing Up</Button>
      </div>
    </>
  )
}

export default Email