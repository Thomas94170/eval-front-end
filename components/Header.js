import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// import styleHeader from "../styles/header.module.css"
import styles from "../styles/header.module.css"



export const Header=()=> {
    const router = useRouter();
    
    
  return (
      <div className="container d-flex justify-content-evenly">
          <div className={styles.header} >
      <Link href="/" passHref>  
      <span className={router.pathname === "/" ? styles.active : styles.link}>Home</span>
      </Link>
      <Link href="/galerie" passHref>
      <span className={router.pathname === "/galerie" ? styles.active : styles.link}>Galerie</span>
      </Link>
      <Link href="/tarif" passHref>
      <span className={router.pathname === "/tarif" ? styles.active : styles.link}>Tarif</span>
      </Link>
      <Link href="/contact" passHref>
      <span className={router.pathname === "/contact" ? styles.active : styles.link}>Contact</span>
      </Link>
      
      
        </div>
      </div>
    
  )
}

