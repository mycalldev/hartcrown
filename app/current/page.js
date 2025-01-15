
import Image from 'next/image'
import Link from 'next/link'
import styles from './current.module.css'

export default function Current() {

  return (
    <main className={styles.main}>
      <h1 className={styles.tagLineCurrent}>
        Current Projects
      </h1>
      <div className={styles.introText}>Check out our list of current projects</div>
     
    {/* HERO SECTION */}
      {/* MOBILE HERO */}
      <div className={styles.containerProject}>
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
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Kier Construction</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Manbre Wharf, Hammersmith</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£150,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>July Onwards</div>
          </div>
        </div>
      </div>

      <div className={styles.containerProject}>
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
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Kier Construction</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Marylebone Square</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£1,42 million</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>Ongoing</div>
          </div>
        </div>
      </div>

      <div className={styles.containerProject}>
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

        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Blenheim House</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Marylebone House</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£2 million</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>Ongoing</div>
          </div>
        </div>
      </div>

      <div className={styles.containerProject}>
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

      <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Kier Construction</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Park Street SE1</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£225k</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>Ongoing</div>
          </div>
        </div>
      </div>

      <div className={styles.contactBTNContainer}>
          <Link href="tel:02072529380" className={styles.linkBTN}>Contact</Link>
      </div>
      <div className={styles.heroBtnDesktop}>0207 252 9380</div>

    </main>
  )
}
