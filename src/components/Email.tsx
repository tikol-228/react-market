import styles from './Email.module.css'

const Email = () => {
  return (
    <div className={styles.emailContainer}>
      <h2>Join Our Newsletter</h2>
      <p>Sign up for deals, new products and promotions</p>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <img src="/src/assets/email.svg" alt="email icon" className={styles.icon} />
          <input
            type="email"
            placeholder="Email address"
            required
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default Email
