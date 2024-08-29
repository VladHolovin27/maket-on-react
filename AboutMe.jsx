import styles from './maket.module.css';
import image from './images/image-2.jpg'
const AboutMe = () => {
    return(
        <div className={styles.aboutMeDiv}>
            <img alt='img' src={image} className={styles.imageMuhammads} />
            <div className={styles.textContainer}>
            <h1 className={styles.aboutMe}>About Me</h1>
            <p className={styles.p2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi repellendus voluptate distinctio sequi reprehenderit sunt aliquam illo porro, nisi tempore!</p>
            <div>
            <div className='slider'>
            <label className={styles.text} htmlFor="uxRange">UX</label>
            <input
            type="range"
            id="uxRange"
            className={styles.slider}
            min="0"
            max="100"
            defaultValue="50"
            />
            </div>
            <div className='slider'>
            <label className={styles.text} htmlFor="uxRange">Website Design</label>
            <input
            type="range"
            id="uxRange"
            className={styles.slider}
            min="0"
            max="100"
            defaultValue="50"
            />
            </div>
            <div className='slider'>
            <label className={styles.text} htmlFor="uxRange">App Design</label>
            <input
            type="range"
            id="uxRange"
            className={styles.slider}
            min="0"
            max="100"
            defaultValue="50"
            />
            </div>
            <div className='slider'>
            <label className={styles.text} htmlFor="uxRange">Graphic Design</label>
            <input
            type="range"
            id="uxRange"
            className={styles.slider}
            min="0"
            max="100"
            defaultValue="50"
            />
            </div>
            </div>
            </div>
          </div>
    )
}

export default AboutMe;