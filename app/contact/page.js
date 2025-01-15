import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './contact.module.css'

export default function Contact() {
  return (
    <div>
      {/* <Meta /> */}
      <div>
        <h1 className={styles.headerTitle}>HARTCROWN LTD CONTACT</h1>
      </div>

      <Image
          className={styles.heroImageMobile}
          src={'/image_contact.png'}
          width={1456}
          height={816}
          alt={'contact image'}
          quality={100}
      />

      <div className={styles.contactText}>
        At Hartcrown Ltd, we are committed to bringing your vision to life 
        with exceptional craftsmanship and a dedication to quality. Whether you're planning a residential build, a commercial project, or a renovation, our experienced team is here to guide you every step of the way. We pride ourselves on our attention to detail, clear communication, and personalized service. Reach out to us today to discuss your next project, 
        and let's build something remarkable together.
      </div>

      {/* BTN */}
      <div className={styles.heroBtn}>
        <Link href="tel:02072529380" className={styles.linkBTN}>CALL NOW</Link>
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
      <div className={styles.containerMapImage}>
        <Image
            className={styles.mapImage}
            src={'/map_hartcrown.png'}
            width={860}
            height={835}
            alt={'map of areas covered'}
            quality={100}
        />
      </div>
    </div>
  )
}
