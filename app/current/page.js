
import Image from 'next/image'
import Link from 'next/link'
import styles from './current.module.css'

export default function Current() {

  return (
    <main className={styles.main}>
      <h1 className={styles.tagLineCurrent}>
        Current Projects
      </h1>
    {/* HERO SECTION */}
      {/* MOBILE HERO */}
      <div className={styles.containerHero}>
        <Image
          className={styles.heroImageMobile}
          src={'/work_images/Current/Manbre_Wharf.PNG'}
          width={1024}
          height={800}
          alt={'Hero Image for Current'}
          quality={100}
        />
      </div>
     
      <div className={styles.introText}>Check out our list of current projects</div>

      <div className={styles.containerAboutUs}>
        <Image
          className={styles.heroImageMobile}
          src={'/work_images/Current/Marleb.PNG'}
          width={1024}
          height={800}
          alt={'Current Image'}
          quality={100}
        />
      </div>

      <div className={styles.introText}>Tell Delux What to say here? This paragraph I think should relate to the image above. Should we put the price of the job? </div>


      <div className={styles.containerAboutUs}>
        <Image
          className={styles.heroImageMobile}
          src={'/work_images/Current/Bamfords.PNG'}
          width={948}
          height={800}
          alt={'Current Image'}
          quality={100}
        />
      </div>

      <div className={styles.introText}>Tell Delux What to say here? This paragraph I think should relate to the image above. Should we put the price of the job?</div>

      <div className={styles.containerAboutUs}>
        <Image
          className={styles.heroImageMobile}
          src={'/work_images/Current/Park_street.PNG'}
          width={948}
          height={800}
          alt={'Current Image'}
          quality={100}
        />
      </div>

      <div className={styles.introText}>Tell Delux What to say here? This paragraph I think should relate to the image above. Should we put the price of the job?</div>


      <div className={styles.contactBTNContainer}>
          <Link href="/" className={styles.linkBTN}>Contact</Link>
      </div> 
    </main>
  )
}
