import styles from './index.module.css'
import { IoCallSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
const Header = () => {
  return (
    <>
      <div className={styles.headerWrapper}>
        <div className={styles.headerContact}>
          <div>
            <IoCallSharp />
          </div>
          <span>
            <span>+91 484 2887000</span>
            <span>+91 484 2445252</span>
          </span>
        </div>
        <div className={styles.headerImage}>
          <img
            src="https://sngist.org/contents/wp-content/themes/sngist18/assets/img/logo.png"
            alt="Logo image"
            height="50"
            width="150"
          />
        </div>
        <div className={styles.headerLocation}>
          <div>
            <MdLocationOn />
          </div>
          <span>
            <span>Mannam, Manjali P.O</span>
            <span>North Paravur, Ernakulam</span>
            <span>Kerala, India - 683520</span>
          </span>
        </div>
      </div>
      <div className={styles.headerLine}></div>
    </>
  );
}

export default Header