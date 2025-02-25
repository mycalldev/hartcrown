'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from './current.module.css'

export default function Current() {
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
    <main className={styles.main}>
      <h1 className={styles.tagLineCurrent}>
        Current Projects
      </h1>
      <div className={styles.textTitle}>Check out our list of Current Projects</div>
     
    {/* HERO SECTION */}
      {/* MOBILE HERO */}
      <div className={styles.contianerMain}> 
      <div className={styles.containerProject}>
          <div className={styles.titleMainCurrent}>Manbre Wharf, Hammersmith</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Current/Manbre_Wharf.PNG'}
            width={1024}
            height={800}
            alt={'Image Current'}
            quality={100}
          />
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
            <div className={styles.value}>£400,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>July Onwards</div>
          </div>
        </div>
      </div>

      <div className={styles.containerProject}>
          <div className={styles.titleMainCurrent}>Marylebone Square</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Current/Marleb.PNG'}
            width={1024}
            height={800}
            alt={'Current Image'}
            quality={100}
          />
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
          <div className={styles.titleMainCurrent}>Marylebone House</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Current/Bamfords.PNG'}
            width={948}
            height={800}
            alt={'Current Image'}
            quality={100}
          />
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
        <div className={styles.titleMainCurrent}>Park Street SE1</div>
        <Image
          className={styles.heroImageMobile}
          src={'/work_images/Current/Park_street.PNG'}
          width={948}
          height={800}
          alt={'Current Image'}
          quality={100}
        />
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
      </div>
      

      <div className={styles.contactBTNContainer}>
          <Link href="tel:02072529380" className={styles.linkBTN}>Contact</Link>
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
    </main>
  )
}
