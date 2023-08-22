import React from 'react'
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <div className={styles.logo}>
      <img src="/logo.png" />
    </div>
    <div className={styles.callNowContainer}>
    
    <a
    href="tel:+9911263330"><div className={styles.callNow}>Call Now</div></a>
    </div>
  </div>
  )
}

export default Navbar

