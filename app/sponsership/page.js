import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './contact.module.css'

export default function Sponsership() {
  return (
    <div>
      {/* <Meta /> */}
      <div>
        <h1 className={styles.headerTitle}>HARTCROWN LTD SPONSERSHIP</h1>
      </div>

      <Image
          className={styles.heroImageMobile}
          src={'/sponserHero.png'}
          width={1456}
          height={816}
          alt={'contact image'}
          quality={100}
      />

      <div className={styles.contactText}>
        This is the sponsership section that requires some text
      </div>

      {/* BTN */}
      <div className={styles.heroBtn}>
        <Link href="tel:07889029855" className={styles.linkBTN}>CALL NOW</Link>
      </div>
      <div className={styles.heroBtn}>
        <Link
          href={"https://wa.me/447889029855?text=Hi%20Hartcrown%20Ltd...."} 
          className={styles.linkBTN}
        >
          WHATSAPP
        </Link>
      </div>
      <div className={styles.heroBtnDesktop}>07889 029 855</div>
    </div>
  )
}
