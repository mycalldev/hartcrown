'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './previous.module.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Previous() {

  const imagesPreviousTonbridge = [
    '/work_images/Previous/tonbridge_station/image.png',
    '/work_images/Previous/tonbridge_station/image1.png',
    '/work_images/Previous/tonbridge_station/image2.png',
    '/work_images/Previous/tonbridge_station/image3.png'
  ]

  const imagesPreviousSwanley = [
    '/work_images/Previous/swanley/image4.png',
    '/work_images/Previous/swanley/image5.png',
    '/work_images/Previous/swanley/image6.png',
    '/work_images/Previous/swanley/image7.png',
    '/work_images/Previous/swanley/image8.png',
  ]

  const imagesPreviousCorkStreet = [
    '/work_images/Previous/cork_street/image9.png',
    '/work_images/Previous/cork_street/image11.png',
    '/work_images/Previous/cork_street/image12.png',
  ]

  return (
    <main className={styles.main}>
      <h1 className={styles.tagLinePrevious}>
        Previous Projects
      </h1>
      <div className={styles.introText}>Check out our list of Previous Projects</div>
     
      {/* TONBRIDGE STATION */}
      <div className={styles.containerProject}>
      <div className={styles.containerSwiper}>
        <div className={styles.titleMainPrevious}>Tonbridge Station MDU</div>
        <Swiper
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.swiper}
        >
          <div className={styles.swiperWrapper}>
            {imagesPreviousTonbridge.map((item, index) => (
              <SwiperSlide className={styles.swiperSlide} key={index}>
                <Image
                  src={item}
                  width={481}
                  height={640}
                  alt={`tonbridge station images`}
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
            <div className={styles.value}>Osborne</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Tonbridge Station MDU</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£245,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2020</div>
          </div>
        </div>
      </div>
      </div>

      {/* SWANLEY MDU */}
      <div className={styles.containerProject}>
      <div className={styles.containerSwiper}>
        <div className={styles.titleMainPrevious}>Swanley MDU</div>
        <Swiper
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.swiper}
        >
          <div className={styles.swiperWrapper}>
            {imagesPreviousSwanley.map((item, index) => (
              <SwiperSlide className={styles.swiperSlide} key={index}>
                <Image
                  src={item}
                  width={640}
                  height={481}
                  alt={`swanley images`}
                  quality={100}
                  className={styles.imageSwanley}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Osborne</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Swanley MDU</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£175,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2021</div>
          </div>
        </div>
      </div>
      </div>

      {/* CORK STREET */}
      <div className={styles.containerProject}>
      <div className={styles.containerSwiper}>
        <div className={styles.titleMainPrevious}>Cork Street</div>
        <Swiper
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.swiper}
        >
          <div className={styles.swiperWrapper}>
            {imagesPreviousCorkStreet.map((item, index) => (
              <SwiperSlide className={styles.swiperSlide} key={index}>
                <Image
                  src={item}
                  width={481}
                  height={640}
                  alt={`cork street images`}
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
            <div className={styles.value}>Kiers Construction</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Cork Street</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£150,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2019</div>
          </div>
        </div>
      </div>
      </div>

      {/* GEORGE SHOPPING */}

      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>George Shopping Centre</div>

        <div className={styles.containerHero}>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/george_shopping.png'}
            width={751}
            height={533}
            alt={'George Shopping'}
            quality={100}
          />
        </div>
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Oakmont Ltd</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>St Georges shopping centre Gravesend</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£300,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2019</div>
          </div>
        </div>
      </div>

      {/* ROYAL COLLEGE OF ART */}
      
      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>Royal College of Arts</div>

        <div className={styles.containerAboutUs}>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/royal_college_art.png'}
            width={696}
            height={446}
            alt={'Royal College Art'}
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
            <div className={styles.value}>Royal College of Arts</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£150,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2021</div>
          </div>
        </div>
      </div>

      {/* KAO PARK HARLOW */}
      
      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>KAO Park Harlow</div>

        <div className={styles.containerAboutUs}>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/kao_park.png'}
            width={958}
            height={838}
            alt={'KAO Park Harlow'}
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
            <div className={styles.value}>KAO Park Harlow</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£2 Million</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2017</div>
          </div>
        </div>
      </div>


      {/* 120 MOORGATE */}
      
      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>120 Moorgate</div>

        <div className={styles.containerAboutUs}>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/moorgate120.png'}
            width={958}
            height={838}
            alt={'120 Moorgate'}
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
            <div className={styles.value}>120 Moorgate</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£350,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2020</div>
          </div>
        </div>
      </div>


      {/* EASTCHEAP */}
            
      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>Eastcheap</div>

        <div className={styles.containerAboutUs}>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/east_cheap.png'}
            width={958}
            height={838}
            alt={'Eastcheap'}
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
            <div className={styles.value}>Eastcheap</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£200,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2018</div>
          </div>
        </div>
      </div>

      {/* SPACE WOKING */}
      
      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>Space Woking</div>

        <div className={styles.containerAboutUs}>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/space_woking.png'}
            width={958}
            height={838}
            alt={'Space Woking'}
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
            <div className={styles.value}>KAO Park Harlow</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£650,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2018</div>
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
