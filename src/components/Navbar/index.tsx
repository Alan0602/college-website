import styles from './index.module.css'
import { RiArrowDropDownLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
        <div className={styles.navbarBody}>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li> <a href="">Events <span><RiArrowDropDownLine /></span></a></li>
                <li><a href="">Pages<span><RiArrowDropDownLine /></span></a></li>
                <li><a href="">News<span><RiArrowDropDownLine /></span></a></li>
                <li><a href="">Contacts</a></li>
            </ul>      
        </div>
    </div>
  )
}

export default Navbar