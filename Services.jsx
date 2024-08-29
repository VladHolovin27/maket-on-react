import styles from './maket.module.css';
import icon1 from './images/icon.jpg'
import icon2 from './images/icon (3).png'
import icon3 from './images/icon (1).png'
import icon4 from './images/icon (2).png'

const Services = () => {
    return (
        <div className='services'>
          <h1 className={styles.servicesTitle}>Services</h1>
          <p className={styles.servicesInfo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi repellendus voluptate distinctio sequi reprehenderit sunt aliquam illo porro, nisi tempore!</p>
          <div className={styles.servicesCards}>
            <div className={styles.servicesCard}>
             <img src={icon1} alt='' className={styles.icon1}></img>
             <h2 className='title'>UI/UX</h2>
             <p className={styles.servicesCardInfo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi repellendus voluptate distinctio sequi reprehenderit sunt aliquam illo porro, nisi tempore!</p>
            </div>
            <div className={styles.servicesCard}>
            <img src={icon2} alt='' className={styles.icon1}></img>
             <h2 className='title'>Web Design</h2>
             <p className={styles.servicesCardInfo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi repellendus voluptate distinctio sequi reprehenderit sunt aliquam illo porro, nisi tempore!</p>
            </div>
            <div className={styles.servicesCard}>
            <img src={icon3} alt='' className={styles.icon1}></img>
             <h2 className='title'>App Design</h2>
             <p className={styles.servicesCardInfo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi repellendus voluptate distinctio sequi reprehenderit sunt aliquam illo porro, nisi tempore!</p>
            </div>
            <div className={styles.servicesCard}>
            <img src={icon4} alt='' className={styles.icon1}></img>
             <h2 className='title'>Graphic Design</h2>
             <p className={styles.servicesCardInfo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi repellendus voluptate distinctio sequi reprehenderit sunt aliquam illo porro, nisi tempore!</p>
            </div>
          </div>
        </div>
    )
}

export default Services