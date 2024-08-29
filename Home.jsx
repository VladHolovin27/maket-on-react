import styles from './maket.module.css';
import img from './images/image-1.png'
const Home = () => {
    return(
        <div className={styles.homeDiv}>
          <div className={styles.textContainer}>
            <h1 className={styles.hiTitle}>Hi I am</h1>
            <h1 className={styles.muhammadBinTitle}>Muhammad Bin Jameel</h1>
            <h2 className={styles.UiUxTitle}>UI & UX</h2>
            <h2 className={styles.designerTitle}>Designer</h2>
            <p className={styles.p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi repellendus voluptate distinctio sequi reprehenderit sunt aliquam illo porro, nisi tempore!</p>
            <button className={styles.hireMeBtn}>Hire me!</button>
            </div>
            <img alt='img' src={img} className={styles.imageMuhammad} />
          </div>
    )
}

export default Home;