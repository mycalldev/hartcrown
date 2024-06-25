
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
     
      <div className={styles.introText}>Hartcrown Ltd build more than structures. We build lasting relationships with our clients through integrity, transparency, and superior craftsmanship.</div>


      

      <div className={styles.contactBTNContainer}>
          <Link href="/" className={styles.linkBTN}>Contact</Link>
      </div> 
    </main>
  )
}
