import Input from '../components/Input'
import Button from '../components/Button'
import styles from './Account.module.css'
import { useState, useRef, useEffect } from 'react'

const Account = () => {

    const [photo, setPhoto] = useState<File | null>(null)
    const [username, setUsername] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement | null>(null)

    const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem('photo', URL.createObjectURL(event.target.files![0]))
        setPhoto(event.target.files![0])
        if (fileInputRef === null) {
            return <h1>no photo</h1>
        }
    }

    useEffect(() => {
        const storedUsername = localStorage.getItem('username')
        setUsername(storedUsername)
    })

  return (
    <>
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.avatarSection}>
                {photo ? (
                    <img
                    src={URL.createObjectURL(photo)}
                    alt="Profile"
                    className={styles.accountImg}
                    />
                ) : (
                    <div className={styles.placeholderAvatar}></div>
                )}
                <p className={styles.userName}>{username}</p>
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handlePhotoChange}
                    className={styles.fileInput}
                />
                <Button
                    className={styles.uploadButton}
                    onClick={() => fileInputRef.current?.click()}
                    type="button"
                >
                    Upload Photo
                </Button>
                </div>
                <ul className={styles.menu}>
                <li>Account</li>
                <li>Address</li>
                <li>Orders</li>
                <li>Wishlist</li>
                <li>Log Out</li>
                </ul>
            </div>

            <div className={styles.main}>
                <h1 className={styles.myAccText}>My Account</h1>
                <form className={styles.accountForm}>
                <label className={styles.accountInput}>First name 
                    <Input placeholder={'First name'} />
                </label>
                <label className={styles.accountInput}>Last name
                    <Input placeholder={'Last name'} />
                </label>
                <label className={styles.accountInput}>Display name
                    <Input placeholder={'Display name'} />
                    <p>This will be how your name will be displayed in the account section and in reviews</p>
                </label>
                <label className={styles.accountInput}>Email
                    <Input placeholder={'Email'} />
                </label>
                <div className={styles.passwordContainer}>
                    <h3>Password</h3>
                    <label className={styles.accountInput}>Old password
                    <Input placeholder={'Old password'} />
                    </label>
                    <label className={styles.accountInput}>New password
                    <Input placeholder={'New password'} />
                    </label>
                    <label className={styles.accountInput}>Repeat new password
                    <Input placeholder={'Repeat new password'} />
                    </label>
                </div>
                <Button className={styles.buttonSave}>Save changes</Button>
                </form>
            </div>
        </div>

    </>
  )
}

export default Account