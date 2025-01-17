
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
        src={'/hartcrown_hero.jpg'}
        width={1500}
        height={1020}
        alt={'hero image'}
        quality={100}
      />

      {/* DESKTOP HERO */}
      <Image
        className={styles.heroImageDesktop}
        src={'/hartcrown_hero_desktop.jpg'}
        width={1492}
        height={630}
        alt={'hero image desktop'}
        quality={100}
      />
      <div className={styles.introText}>Hartcrown Ltd was <span>Established in 1991</span>. We build lasting relationships with our clients through integrity, transparency, and superior workmanship.</div>
      
      {/* CTA */}
      <div className={styles.contactBTNContainerMobile}>
          <Link href="tel:02072529380" className={styles.linkBTN}>Contact</Link>
      </div>
      <div className={styles.contactBTNContainerDesktop}>
          <Link href={'#'} className={styles.linkBTN}>0207 252 9380</Link>
      </div>
      
      <div className={styles.tagLineTop}>Groundwork Specialists with over 35 Years Experience</div>

      

      <div className={styles.containerAboutUs}>
        <Image
          className={styles.aboutUs}
          src={'/about_us1.jpg'}
          width={1456}
          height={816}
          alt={'About us'}
          quality={100}
        />
      </div>

      <div className={styles.tagLine}>
        Find out about Hartcrown Ltd
      </div>

      <div className={styles.contactBTNContainerView}>
          <Link href="/about" className={styles.linkBTN}>About</Link>
      </div>


      {/* Current Projects */}
      <div className={styles.containerCurrentProjects}>
        <Image
          className={styles.aboutUs}
          src={'/work_images/Current/Manbre_Wharf.PNG'}
          width={1024}
          height={800}
          alt={'About us'}
          quality={100}
        />
      </div>

      <div className={styles.tagLine}>
        View our Current Projects 
      </div>
      <div className={styles.contactBTNContainerView}>
          <Link href="/current" className={styles.linkBTN}>View</Link>
      </div>

      <div className={styles.containerPreviousProjects}>
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
        View our Previous Projects 
      </div>
      <div className={styles.contactBTNContainerView}>
          <Link href="/previous" className={styles.linkBTN}>View</Link>
      </div>

      <div className={styles.containerPreviousProjects}>
        <Image
          className={styles.aboutUs}
          src={'/sponserHero.jpg'}
          width={1456}
          height={816}
          alt={'Sponsership Image'}
          quality={100}
        />
      </div>

      <div className={styles.tagLine}>
        Who we Sponsor
      </div>
      <div className={styles.contactBTNContainerView}>
          <Link href="/sponsorship" className={styles.linkBTN}>View</Link>
      </div>

      <div className={styles.containerPreviousProjects}>
        <Image
          className={styles.aboutUs}
          src={'/image_contact.png'}
          width={1456}
          height={816}
          alt={'contact image'}
          quality={100}
        />
      </div>

      <div className={styles.tagLine}>
        Visit our Contact Page
      </div>
      <div className={styles.contactBTNContainerView}>
          <Link href="/contact" className={styles.linkBTN}>Contact</Link>
      </div>

      

    </main>
  )
}
