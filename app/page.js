
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>

    {/* HERO SECTION */}
      {/* MOBILE HERO */}
      <Image
        className={styles.heroImageMobile}
        src={'/hero_image.jpg'}
        width={2304}
        height={1536}
        alt={'hero image'}
        quality={100}
      />

      {/* DESKTOP HERO */}
      <Image
        className={styles.heroImageDesktop}
        src={'/hero_desktop.jpg'}
        width={1456}
        height={557}
        alt={'hero image'}
        quality={100}
      />
      <div className={styles.tagLine}>Groundwork Specialists with over 30 Years Experience</div>

      {/* CTA */}
      <div className={styles.contactBTNContainer}>
          <Link href="tel:07976753254" className={styles.linkBTN}>Contact</Link>
      </div>

      <div className={styles.containerAboutUs}>
        <Image
          className={styles.aboutUs}
          src={'/about_us.jpg'}
          width={1456}
          height={816}
          alt={'About us'}
          quality={100}
        />
      </div>

      <div className={styles.tagLine}>
        Find out About HartCrown Construction
      </div>

      <div className={styles.contactBTNContainer}>
          <Link href="/" className={styles.linkBTN}>About</Link>
      </div>

      <div className={styles.containerAboutUs}>
        <Image
          className={styles.aboutUs}
          src={'/signiture_london.jpg'}
          width={1024}
          height={800}
          alt={'About us'}
          quality={100}
        />
      </div>

      <div className={styles.tagLine}>
        Check Out our Project Portfolio 
      </div>

      <div className={styles.contactBTNContainer}>
          <Link href="/" className={styles.linkBTN}>View</Link>
      </div>

      <div className={styles.containerGridAcc}>
      <Image
          className={styles.imageAcc}
          src={'/accreditations/acc1.png'}
          width={600}
          height={600}
          alt={'About us'}
          quality={100}
        />
        
        <Image
          className={styles.imageAcc}
          src={'/accreditations/acc3.png'}
          width={600}
          height={600}
          alt={'About us'}
          quality={100}
        />
        <Image
        className={styles.imageAcc}
        src={'/accreditations/acc4.png'}
        width={600}
        height={600}
        alt={'About us'}
        quality={100}
      />
      <Image
          className={styles.imageAcc}
          src={'/accreditations/acc2.png'}
          width={600}
          height={600}
          alt={'About us'}
          quality={100}
        />
      </div>
    </main>
  )
}
