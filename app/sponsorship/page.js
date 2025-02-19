'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './sponsorship.module.css'

export default function Sponsorship() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={styles.main}>
      {/* <Meta /> */}
      <h1 className={styles.tagLine}>
        Sponsorship
      </h1>

      <div className={styles.heroContainer}>
        <Image
            className={styles.heroSponsor}
            src={'/sponserHero.jpg'}
            width={1456}
            height={816}
            alt={'contact image'}
            quality={100}
        />
      </div>

      <div className={styles.contactText}>
        Hartcrown Ltd are proud sponsors of Millwall FC. 
        Below are a few of the images taken on days out for the team at Hartcrown. 
        We are greatful to Millwall FC and all their team for our collaboration.
      </div>

      <div className={styles.tagMillwall}>'Come on The Millwall'</div>

      <div className={styles.containerGrid}>
        <div className={styles.imageCard}>
          <Image
              className={styles.sponsorImage}
              src={'/sponserPDF3.jpg'}
              width={842}
              height={593}
              alt={'sponsor image'}
              quality={100}
          />
        </div>

        <div className={styles.imageCard}>
          <Image
              className={styles.sponsorImage}
              src={'/sponserPDF2.jpg'}
              width={1001}
              height={593}
              alt={'sponser image'}
              quality={100}
          />
        </div>

        <div className={styles.imageCard}>
          <Image
              className={styles.sponsorImage}
              src={'/sponser1.jpg'}
              width={2016}
              height={1512}
              alt={'sponser image'}
              quality={100}
          />
        </div>

        <div className={styles.imageCard}>
          <Image
              className={styles.sponsorImage}
              src={'/sponser2.jpg'}
              width={2016}
              height={1512}
              alt={'sponser image'}
              quality={100}
          />
        </div>

        <div className={styles.imageCard}>
          <Image
              className={styles.sponsorImage}
              src={'/sponser3.jpg'}
              width={2016}
              height={1512}
              alt={'sponser image'}
              quality={100}
          />
        </div>

        <div className={styles.imageCard}>
          <Image
              className={styles.sponsorImage}
              src={'/sponserName.jpg'}
              width={2016}
              height={1512}
              alt={'sponser image'}
              quality={100}
          />
        </div>
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

      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className={styles.scrollTopButton}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  )
}
