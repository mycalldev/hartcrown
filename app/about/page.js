
import Image from 'next/image'
import Link from 'next/link'
import styles from '../page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>

    {/* HERO SECTION */}
      {/* MOBILE HERO */}
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
        About HartCrown Ltd
      </div>
     
      <div className={styles.introText}>Hartcrown Limited have now been established for 35 years within the London region and surrounding areas, carrying out all aspects of Groundworks and Civil Engineering projects together with 278 works and diversionary road schemes for our core clients with repeat business as our main principal aim and establishing good working relationships. </div>


      

      <div className={styles.contactBTNContainer}>
          <Link href="/" className={styles.linkBTN}>Contact</Link>
      </div> 
    </main>
  )
}
