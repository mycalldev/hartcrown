'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './previous.module.css'
import { useState, useEffect } from 'react'

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

  const imagesPreviousLondonBridge = [
    '/work_images/Previous/london_bridge/image1.jpg',
    '/work_images/Previous/london_bridge/image2.jpg',
    '/work_images/Previous/london_bridge/image3.jpg',
    '/work_images/Previous/london_bridge/image4.jpg',
    '/work_images/Previous/london_bridge/image5.jpg',
  ]

  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button when page is scrolled more than 300px
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
      <h1 className={styles.tagLinePrevious}>
        Previous Projects
      </h1>
      <div className={styles.introText}>Check out our list of Previous Projects</div>
     
      <div className={styles.containerMain}>
      {/* KAO PARK HARLOW */}
      
      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>KAO Park Harlow</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/kao_park.png'}
            width={958}
            height={838}
            alt={'KAO Park Harlow'}
            quality={100}
          />
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

      {/* UNIVERSITY OF GREENWICH */}

      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>University of Greenwich</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/uni_greenwich.jpg'}
            width={1269}
            height={1046}
            alt={'University of Greenwich'}
            quality={100}
          />
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Osborne</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>University of Greenwich Stockwell Street</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£925,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2015</div>
          </div>
        </div>
      </div>

      {/* SIG SEGRO PARK RAINHAM */}

      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>SIG Segro Park Rainham</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/segro1.jpg'}
            width={1920}
            height={1280}
            alt={'Segro Park'}
            quality={100}
          />
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>7 Formation</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Sig Segro Park Rainham</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£850,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2019</div>
          </div>
        </div>
      </div>

      {/* SPACE WOKING */}
      
      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>Space Woking</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/space_woking.png'}
            width={958}
            height={838}
            alt={'Space Woking'}
            quality={100}
          />
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Blenheim House</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Space Woking</div>
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

      {/* CROWN STREET */}

      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>Crown Street</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/crown_street.jpg'}
            width={800}
            height={622}
            alt={'crown_street'}
            quality={100}
          />
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Spence Ltd</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Crown Street, Camberwell SE5</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£615,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2020</div>
          </div>
        </div>
      </div>

      {/* AL HUDA MOSQUE, MILE END ROAD */}

      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>Al Huda Mosque</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/al_huda.jpg'}
            width={1440}
            height={1080}
            alt={'Al Huda Mosque'}
            quality={100}
          />
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Bamfords Trust</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Al Huda Mosque, Mile End Road</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£525,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2022</div>
          </div>
        </div>
      </div>

      {/* VALOR PARK SLOUGH */}

      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>Valor Park Slough</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/valor.png'}
            width={1920}
            height={1280}
            alt={'Valor Park'}
            quality={100}
          />
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>7 Formation</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Valor Park Slough</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£450,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2021</div>
          </div>
        </div>
      </div>

      {/* APARTHOTEL ADAGIO, WHITECHAPEL */}

      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>Aparthotel Adagio</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/aparthotel.jpg'}
            width={768}
            height={432}
            alt={'Aparthotel Adagio'}
            quality={100}
          />
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Bamfords Trust</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Aparthotel Adagio, Whitechapel</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£410,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2024</div>
          </div>
        </div>
      </div>

      {/* LADY MARGARET SCHOOL */}

      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>Lady Margaret School</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/lady_margaret_school.jpg'}
            width={1920}
            height={1280}
            alt={'Lady Margaret School'}
            quality={100}
          />
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Osborne</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Lady Margaret School</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£375,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2014</div>
          </div>
        </div>
      </div>

      {/* 120 MOORGATE */}
      
      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>120 Moorgate</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/moorgate120.png'}
            width={958}
            height={838}
            alt={'120 Moorgate'}
            quality={100}
          />
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

      {/* GEORGE SHOPPING */}

      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>St George's Shopping Centre</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/george_shopping.png'}
            width={751}
            height={533}
            alt={'George Shopping'}
            quality={100}
          />
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Oakmont Ltd</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>St George's shopping centre Gravesend</div>
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

      {/* WALTER LILLY - NEWPORT STREET */}

      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>Newport Street Gallery</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/newport.jpg'}
            width={2500}
            height={1875}
            alt={'Newport Street'}
            quality={100}
          />
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Walter Lilly</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Newport Street Gallery for Damien Hurst</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£300,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2015</div>
          </div>
        </div>
      </div>

      {/* UNION STREET */}

      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>Union Street</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/union_street.jpg'}
            width={800}
            height={450}
            alt={'Union Street'}
            quality={100}
          />
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Spence Ltd</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Union Street</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£285,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2016</div>
          </div>
        </div>
      </div>

      {/* TONBRIDGE STATION */}
      <div className={styles.containerProject}>
      <div className={styles.containerSwiper}>
        <div className={styles.titleMainPreviousSwiper}>Tonbridge Station MDU</div>
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
                  height={440}
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

      {/* EASTCHEAP */}
            
      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>Eastcheap</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/east_cheap.png'}
            width={958}
            height={838}
            alt={'Eastcheap'}
            quality={100}
          />
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

      {/* BATTERSEA DOGS HOME */}

      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>Battersea Dogs Home</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/battersea_dogs.jpg'}
            width={1500}
            height={2250}
            alt={'Battersea Dogs Home'}
            quality={100} 
          />
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Spence Ltd</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Battersea Arches 713-716</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£200,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2019</div>
          </div>
        </div>
      </div>

      {/* SWANLEY MDU */}
      <div className={styles.containerProject}>
      <div className={styles.containerSwiper}>
        <div className={styles.titleMainPreviousSwiper}>Swanley MDU</div>
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
                  height={281}
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

      {/* LONDON BRIDGE RETAIL ARCH */}
      <div className={styles.containerProject}>
      <div className={styles.containerSwiper}>
        <div className={styles.titleMainPreviousSwiper}>London Bridge Retail Arch</div>
        <Swiper
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.swiper}
        >
          <div className={styles.swiperWrapper}>
            {imagesPreviousLondonBridge.map((item, index) => (
              <SwiperSlide className={styles.swiperSlide} key={index}>
                <Image
                  src={item}
                  width={1170}
                  height={878}
                  alt={`london bridge`}
                  quality={100}
                  className={styles.swiperImage}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Spence Ltd</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>London Bridge Retail Arch</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£150,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2024</div>
          </div>
        </div>
      </div>
      </div>

      {/* LIVERPOOL STREET STATION */}
      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>Liverpool Street Station</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/liverpool_street.jpg'}
            width={800}
            height={533}
            alt={'Liverpool Street Station'}
            quality={100}
          />
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Spence Ltd</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Liverpool Street Station Platform 10</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£185,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2013</div>
          </div>
        </div>
      </div>

      {/* AURORA COURT */}
      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>Aurora Court</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/aurora_court.jpg'}
            width={450}
            height={291}
            alt={'Aurora Court'}
            quality={100}
          />
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Tranquil Homes</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Aurora Court, Brampton Road, Bexleyheath</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Value:</div>
            <div className={styles.value}>£185,000</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Date:</div>
            <div className={styles.value}>2019</div>
          </div>
        </div>
      </div>

      {/* WARREN ROAD - ROUPELL APARTMENTS*/}
      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>Warren Road - Roupell Apartments</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/roupell_apartments.jpg'}
            width={1500}
            height={1020}
            alt={'Roupell Apartments'}
            quality={100}
          />
        <div className={styles.containerGrid}>
          <div className={styles.containerTextProject}>
            <div className={styles.key}>Client:</div>
            <div className={styles.value}>Tranquil Homes</div>
          </div>

          <div className={styles.containerTextProject}>
            <div className={styles.key}>Project:</div>
            <div className={styles.value}>Warren Road, Bexleyheath - Roupell Apartments</div>
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

      {/* CORK STREET */}
      <div className={styles.containerProject}>
      <div className={styles.containerSwiper}>
        <div className={styles.titleMainPreviousSwiper}>Cork Street</div>
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
                  height={440}
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

      {/* ROYAL COLLEGE OF ART */}
      <div className={styles.containerProject}>
      <div className={styles.titleMainPrevious}>Royal College of Arts</div>
          <Image
            className={styles.heroImageMobile}
            src={'/work_images/Previous/royal_college_art.png'}
            width={696}
            height={446}
            alt={'Royal College Art'}
            quality={100}
          />
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
