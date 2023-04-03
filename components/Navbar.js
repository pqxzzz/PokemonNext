import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Navbar.module.css"

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>
               <Image className={styles.logoimg} src="/images/pokeball.png" 
               width={30} height={30} />
                <h1>Pokemon Next</h1>
            </div>
            <ul className={styles.link_items}>
                <li><Link href="/" >Home</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </nav>
    )
}