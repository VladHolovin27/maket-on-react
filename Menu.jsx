import styles from './maket.module.css'
import logo from './images/Logo.png'
const Menu = () => {
   return(
    <div className={styles.menuDiv}>
        <img alt='img' src={logo} className={styles.img}></img>
        <div className={styles.navigationButtons}>
          <a href='https://example.com' className={styles.navigationButton}>Home</a>
          <a href='https://example.com' className={styles.navigationButton}>About</a>
          <a href='https://example.com' className={styles.navigationButton}>Services</a>
          <a href='https://example.com' className={styles.navigationButton}>Projects</a>
          <a href='https://example.com' className={styles.navigationButton}>Testimonials</a>
          <a href='https://example.com' className={styles.navigationButton}>Contact Us</a>
          <button className={styles.navigationButtonS}>Downoload CV</button>
        </div>
    </div>
   )
}

export default Menu;