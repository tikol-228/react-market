import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from '../components/Input'
import Button from '../components/Button'
import styles from './Account.module.css'

interface UserData {
  username: string;
  name?: string;
  email: string;
  password: string;
}

const Account = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<UserData | null>(null);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('photo', URL.createObjectURL(event.target.files![0]))
    setPhoto(event.target.files![0])
    if (fileInputRef === null) {
        return <h1>no photo</h1>
    }
}

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    // Проверка на уникальность email
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (
      users.some(
        (u: UserData) =>
          u.email === form.email && u.username !== user.username
      )
    ) {
      setMessage("Email already in use by another user.");
      return;
    }
    const updatedUser = { ...user, ...form };
    const updatedUsers = users.map((u: UserData) =>
      u.username === user.username ? updatedUser : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("email", form.email);
    localStorage.setItem("password", form.password);
    setUser(updatedUser);
    setMessage("Profile updated!");
    setTimeout(() => setMessage(""), 2000);
  };

  const handleLogout = () => {
    localStorage.removeItem("activeUser");

    console.log("User logged out");
    navigate("/auth", { replace: true });
  };

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
                <li>
                  <Button onClick={handleLogout} className={styles.logoutButton} type="button">
                    Log Out
                  </Button>
                </li>
                </ul>
            </div>

            <div className={styles.main}>
                <h1 className={styles.myAccText}>My Account</h1>
                <form className={styles.accountForm} onSubmit={handleSave}>
                <label className={styles.accountInput}>First name 
                    <Input placeholder={'First name'} name="name" value={form.name} onChange={handleChange} />
                </label>
                <label className={styles.accountInput}>Last name
                    <Input placeholder={'Last name'} />
                </label>
                <label className={styles.accountInput}>Display name
                    <Input placeholder={'Display name'} />
                    <p>This will be how your name will be displayed in the account section and in reviews</p>
                </label>
                <label className={styles.accountInput}>Email
                    <Input placeholder={'Email'} name="email" value={form.email} onChange={handleChange} />
                </label>
                <div className={styles.passwordContainer}>
                    <h3>Password</h3>
                    <label className={styles.accountInput}>Old password
                    <Input placeholder={'Old password'} />
                    </label>
                    <label className={styles.accountInput}>New password
                    <Input placeholder={'New password'} name="password" value={form.password} onChange={handleChange} />
                    </label>
                    <label className={styles.accountInput}>Repeat new password
                    <Input placeholder={'Repeat new password'} />
                    </label>
                </div>
                <Button className={styles.buttonSave} type="submit">Save changes</Button>
                </form>
                {message && <div>{message}</div>}
            </div>
        </div>

    </>
  )
}

export default Account