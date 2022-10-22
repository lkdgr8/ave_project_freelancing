import { useState } from 'react';
import styles from './Header.module.css'
import Link from 'next/link';
import { array } from 'i/lib/util';

const HeaderComponent = () => {
  const [ active, setActive ] = useState(false); 
  const projects = {
    title: "xd to ux design using html and css",
    category: "UI/UX Design"
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.display}>
          <div className={styles.font}>
            <p>Company Logo</p>
          </div>
          <div className= {active ? `${styles.navbar} ${styles.navresponse}` : styles.navbar}>
              <a>Home</a>
            <Link href="../about">
              <a>About</a>
            </Link>
              <a>Services</a>
            <Link href="../contact">
              <a>Contact</a>
            </Link>
          </div>  
          <div className={styles.nav} onClick={() => setActive(!active)}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>
        </div>
      </div>
    </>
  )
}


export default HeaderComponent;