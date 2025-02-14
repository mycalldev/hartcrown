import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './sponsorship.module.css'

export default function Sponsership() {
  return (
    <div>
      {/* <Meta /> */}
      <div>
        <h1 className={styles.tagLine}>
          Sponsorship
        </h1>
      </div>

      <Image
          className={styles.heroSponsor}
          src={'/sponserHero.jpg'}
          width={1456}
          height={816}
          alt={'contact image'}
          quality={100}
      />

      <div className={styles.contactText}>
        Hartcrown Ltd are proud sponsors of Millwall FC. 
        Below are a few of the images taken on days out for the team at Hartcrown. 
        We are greatful to Millwall FC and all their team for our collaboration.
      </div>

      <div className={styles.tagMillwall}>'Come on The Millwall'</div>


      <div className={styles.containerGrid}>

        <Image
            className={styles.sponsorImage}
            src={'/sponserPDF3.jpg'}
            width={842}
            height={593}
            alt={'sponsor image'}
            quality={100}
        />

        <Image
            className={styles.sponsorImage}
            src={'/sponserPDF2.jpg'}
            width={1001}
            height={593}
            alt={'sponser image'}
            quality={100}
        />

        <Image
            className={styles.sponsorImage}
            src={'/sponser1.jpg'}
            width={2016}
            height={1512}
            alt={'sponser image'}
            quality={100}
        />

        <Image
            className={styles.sponsorImage}
            src={'/sponser2.jpg'}
            width={2016}
            height={1512}
            alt={'sponser image'}
            quality={100}
        />

        <Image
            className={styles.sponsorImage}
            src={'/sponser3.jpg'}
            width={2016}
            height={1512}
            alt={'sponser image'}
            quality={100}
        />

        <Image
            className={styles.sponsorImage}
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
          href={"https://wa.me/447703522523?text=Hi%20Hartcrown%20Ltd...."} 
          className={styles.linkBTN}
        >
          WHATSAPP
        </Link>
      </div>
      <div className={styles.heroBtnDesktop}>0207 252 9380</div>
    </div>
  )
}
