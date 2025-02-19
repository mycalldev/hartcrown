
import Image from 'next/image'
import Link from 'next/link'
import styles from './about.module.css'

export default function About() {

  return (
    <main className={styles.main}>
       <h1 className={styles.tagLineCurrent}>
        About Hartcrown Ltd
      </h1>

    {/* HERO SECTION */}
      {/* MOBILE HERO */}
      <div className={styles.containerAboutUs}>
        <Image
          className={styles.heroImageMobile}
          src={'/about_us1.jpg'}
          width={1456}
          height={816}
          alt={'About us'}
          quality={100}
        />
      </div>
     
      <div className={styles.introText}>Hartcrown Limited have now been established for 35 years within the London region and surrounding areas, 
        carrying out all aspects of Groundworks; Civil Engineering projects, Reinforced concrete works and Hardlandscaping Schemes together with 278 works and diversionary road schemes for our core clients with repeat business as our main principal aim and establishing good working relationships. </div>

      <div className={styles.introText}>
       Contract values that we would be happy to undertake range from £100,000.00 to £2,500,000.00
      </div>

      <div className={styles.contactBTNContainerMobile}>
          <Link href="tel:02072529380" className={styles.linkBTN}>Contact</Link>
      </div>
      <div className={styles.contactBTNContainerDesktopNumber}>
          <Link href={'#'} className={styles.linkBTN}>0207 252 9380</Link>
      </div>

      <Image
        className={styles.imageAbout}
        src={'/about_us.jpg'}
        width={1456}
        height={816}
        alt={'hero image'}
        quality={100}
      />

      <div className={styles.introText2}>
       Most of our work is negotiated with a selective list of clients that have stayed with us for many years, having built up a good relationship with both senior and site management teams, and we actively assist them both at tender stage through to completion of the contact. Our management team have excellent experience gained over the years, whereby we are able to get involved at an early tender stage to offer value engineering solutions where necessary.
      </div>

    </main>
  )
}
