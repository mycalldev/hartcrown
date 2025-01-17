import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './contact.module.css'

export default function Contact() {
  return (
    <div>
      {/* <Meta /> */}
      <div>
        <h1 className={styles.tagLine}>
          Contact
        </h1>
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
 
      <div className={styles.containerContact}>
        <div className={styles.contactInfoKey}>
          Managing Director: 
        </div>
        <div className={styles.contactInfo}>
          Mr Tom Creighton
        </div>
        <div className={styles.contactInfo}>
          Mobile: 07703 522 523
        </div>
      </div>

      {/* <div className={styles.spaceBetween}></div> */}

      <div className={styles.containerContact}>
        <div className={styles.contactInfoKey}>
          Contracts Mangement and Operations: 
        </div>
        <div className={styles.contactInfo}>
          Mr Paul Folan
        </div>
        <div className={styles.contactInfo}>
          Mobile: 07889 029 855
        </div>
      </div>

      <div className={styles.containerContact}>
        <div className={styles.contactInfoKey}>
          Commercial Manager and Estimating: 
        </div>
        <div className={styles.contactInfo}>
          Mr Graham Brown
        </div>
        <div className={styles.contactInfo}>
          Mobile: 07535 795 872
        </div>
      </div>

      <div className={styles.containerContact}>
        <div className={styles.contactInfoKey}>
          Accounts:
        </div>
        <div className={styles.contactInfo}>
          Albert and Theresa
        </div>
        <div className={styles.contactInfo}>
          Office: 0207 252 9380
        </div>
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
