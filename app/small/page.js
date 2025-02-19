'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from './small.module.css'

export default function Small() {

const imagesDarent = [
    '/work_images/Small_works/Darent/Darent1.jpg',
    '/work_images/Small_works/Darent/Darent2.jpg',
    '/work_images/Small_works/Darent/Darent3.jpg',
    ]

const imagesWhitechapel = [
    '/work_images/Small_works/Bamfords/whitechapel1.jpg',
    '/work_images/Small_works/Bamfords/whitechapel2.jpg',
    ]

const imagesPiccadilly = [
    '/work_images/Small_works/Piccadilly/Piccadilly1.jpg',
    '/work_images/Small_works/Piccadilly/Piccadilly2.jpg',
    '/work_images/Small_works/Piccadilly/Piccadilly3.jpg',
    ]

const imagesNational = [
    '/work_images/Small_works/National_Theatre/NATIONAL1.jpg',
    '/work_images/Small_works/National_Theatre/NATIONAL2.jpg',
    '/work_images/Small_works/National_Theatre/NATIONAL3.jpg',
    ]

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
      <h1 className={styles.tagLineSmall}>
        Small Works Division
      </h1>

      <div className={styles.introText}>
        Hartcrown Limited can also provide our expertise in one off small complex works where access can be limited or the designs need our input to achieve the desired outcome.
      </div>
      <div className={styles.introText}>
        Our small works dept have worked within underground stations, The Treasury, Picadilly Circus, Leadenhall Market, Westminster City Council, TFL, Carriageway remedials, Queens Hospital Romford, Darent Valley Hospital, Nation Theatre (SouthBank), Islington Town Hall and Network rail new electrical car charging points at various sites across the country. 
      </div>
      

      <div className={styles.introText}>
        Contract values would be from £25,000.00 to £250,000.
      </div>
     
      <div className={styles.containerMain}>

       {/* THREE BRIDGES MDU */}
      <div className={styles.containerProject}>
      <div className={styles.titleMainSmall}>Three Bridges MDU</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Small_works/Bridges/Bridges1.jpg'}
            width={1170}
            height={527}
            alt={'Three Bridges MDU'}
            quality={100}
          />
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Octavius</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Three Bridges MDU</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£190,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2023</div>
          </div>
        </div>
      </div>

         {/* BRIGHTON MDU */}
      <div className={styles.containerProject}>
      <div className={styles.titleMainSmall}>Brighton MDU</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Small_works/Brighton/Brighton1.jpg'}
            width={1170}
            height={527}
            alt={'Brighton MDU'}
            quality={100}
          />
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Octavius</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Brighton MDU</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£110,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2023</div>
          </div>
        </div>
      </div>

  {/* DARENT VALLEY HOSPITAL */}
  <div className={styles.containerProject}>
      <div className={styles.containerSwiper}>
        <div className={styles.titleMainSmall}>Darent Valley Hospital</div>
        <Swiper
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.swiper}
        >
          <div className={styles.swiperWrapper}>
            {imagesDarent.map((item, index) => (
              <SwiperSlide className={styles.swiperSlide} key={index}>
                <Image
                  src={item}
                  width={481}
                  height={252}
                  alt={`Darent Valley Hospital images`}
                  quality={100}
                  className={styles.imageTonbridge}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Rolfe Contracting Ltd</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Darent Valley Hospital</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£70,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2023</div>
          </div>
        </div>
      </div>
      </div>

 {/* ISLINGTON TOWN HALL */}
 <div className={styles.containerProject}>
      <div className={styles.titleMainSmall}>Islington Town Hall</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Small_works/islington_town.jpg'}
            width={680}
            height={510}
            alt={'Islington Town Hall'}
            quality={100}
          />
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Diamond Build</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Islington Town Hall</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£60,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2021</div>
          </div>
        </div>
      </div>

     {/* S278 WORKS WHITECHAPEL ROAD */}
     <div className={styles.containerProject}>
      <div className={styles.containerSwiper}>
        <div className={styles.titleMainSmall}>S278 Works Whitechapel Road</div>
        <Swiper
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.swiper}
        >
          <div className={styles.swiperWrapper}>
            {imagesWhitechapel.map((item, index) => (
              <SwiperSlide className={styles.swiperSlide} key={index}>
                <Image
                  src={item}
                  width={486}
                  height={440}
                  alt={`S278 works whitechapel road`}
                  quality={100}
                  className={styles.imageTonbridge}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Bamfords</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>S278 Works Whitechapel Road</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£55,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2024</div>
          </div>
        </div>
      </div>
      </div>

      {/* LEADENHALL MARKET */}
      <div className={styles.containerProject}>
      <div className={styles.titleMainSmall}>Leadenhall Market</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Small_works/leadenhall1.jpg'}
            width={365}
            height={640}
            alt={'Leadenhall Market'}
            quality={100}
          />
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Scorpion</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Leadenhall Market</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£35,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2022</div>
          </div>
        </div>
      </div>

      {/* PICCADILLY LIGHTS/SHAFTSBURY AVENUE */}
      <div className={styles.containerProject}>
      <div className={styles.containerSwiper}>
        <div className={styles.titleMainSmall}>Piccadilly Lights/Shafstbury Avenue</div>
        <Swiper
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.swiper}
        >
          <div className={styles.swiperWrapper}>
            {imagesPiccadilly.map((item, index) => (
              <SwiperSlide className={styles.swiperSlide} key={index}>
                <Image
                  src={item}
                  width={485}
                  height={440}
                  alt={`Piccadilly Lights/Shafstbury Avenue`}
                  quality={100}
                  className={styles.imageTonbridge}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Szerelmey</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Piccadilly Lights/Shafstbury Avenue</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£30,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2024</div>
          </div>
        </div>
      </div>
      </div>

      {/* NATIONAL THEATRE SOUTH BANK */}
      <div className={styles.containerProject}>
      <div className={styles.containerSwiper}>
        <div className={styles.titleMainSmall}>National Theatre South Bank</div>
        <Swiper
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.swiper}
        >
          <div className={styles.swiperWrapper}>
            {imagesNational.map((item, index) => (
              <SwiperSlide className={styles.swiperSlide} key={index}>
                <Image
                  src={item}
                  width={489}
                  height={440}
                  alt={`National Theatre South Bank`}
                  quality={100}
                  className={styles.imageTonbridge}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>CEH Contracts</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>National Theatre South Bank</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£20,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2024</div>
          </div>
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

