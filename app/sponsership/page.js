import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './sponsership.module.css'

export default function Sponsership() {
  return (
    <div>
      {/* <Meta /> */}
      <div>
        <h1 className={styles.headerTitle}>HARTCROWN LTD SPONSERSHIP</h1>
      </div>

      <Image
          className={styles.heroSponser}
          src={'/sponserHero.jpg'}
          width={1456}
          height={816}
          alt={'contact image'}
          quality={100}
      />

      <div className={styles.contactText}>
        Hartcrown Ltd are proud sponsers of Millwall FC. 
        Below are a few of the images taken on days out for the team at Hartcrown. 
        We are greatful to Millwall FC and all their team for our collaboration.
      </div>

      <div className={styles.tagMillwall}>'Come on The Millwall'</div>


      <div className={styles.containerGrid}>

        <Image
            className={styles.sponserImage}
            src={'/sponserPDF3.jpg'}
            width={842}
            height={593}
            alt={'sponser image'}
            quality={100}
        />

        <Image
            className={styles.sponserImage}
            src={'/sponserPDF2.jpg'}
            width={1001}
            height={593}
            alt={'sponser image'}
            quality={100}
        />

        <Image
            className={styles.sponserImage}
            src={'/sponser1.jpg'}
            width={2016}
            height={1512}
            alt={'sponser image'}
            quality={100}
        />

        <Image
            className={styles.sponserImage}
            src={'/sponser2.jpg'}
            width={2016}
            height={1512}
            alt={'sponser image'}
            quality={100}
        />

        <Image
            className={styles.sponserImage}
            src={'/sponser3.jpg'}
            width={2016}
            height={1512}
            alt={'sponser image'}
            quality={100}
        />

        <Image
            className={styles.sponserImage}
            src={'/sponserName.jpg'}
            width={2016}
            height={1512}
            alt={'sponser image'}
            quality={100}
        />

      </div>

      {/* BTN */}
      <div className={styles.heroBtn}>
        <Link href="tel:0207 252 9380" className={styles.linkBTN}>CALL NOW</Link>
      </div>
      <div className={styles.heroBtn}>
        <Link
          href={"https://wa.me/447889029855?text=Hi%20Hartcrown%20Ltd...."} 
          className={styles.linkBTN}
        >
          WHATSAPP
        </Link>
      </div>
      <div className={styles.heroBtnDesktop}>0207 252 9380</div>
    </div>
  )
}
