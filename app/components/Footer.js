import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <main>
          <div className={styles.containerBackground}>
        <div className={styles.textAccreditations}>Accreditations</div>
        <div className={styles.containerGridAcc}>
          <Image
            className={styles.imageAcc}
            src={'/accreditations/acc1.png'}
            width={600}
            height={600}
            alt={'About us'}
            quality={100}
          />
          
          <Image
            className={styles.imageAcc}
            src={'/accreditations/acc3.png'}
            width={600}
            height={600}
            alt={'About us'}
            quality={100}
          />
          <Image
          className={styles.imageAcc}
          src={'/accreditations/acc4.png'}
          width={600}
          height={600}
          alt={'About us'}
          quality={100}
        />
        <Image
            className={styles.imageAcc}
            src={'/accreditations/acc5.png'}
            width={600}
            height={600}
            alt={'About us'}
            quality={100}
          />
          <Image
            className={styles.imageAcc}
            src={'/accreditations/acc6.png'}
            width={600}
            height={600}
            alt={'About us'}
            quality={100}
          />
          <Image
            className={styles.imageAcc}
            src={'/accreditations/acc7.png'}
            width={600}
            height={600}
            alt={'About us'}
            quality={100}
          />
          <Image
            className={styles.imageAcc}
            src={'/accreditations/acc8.png'}
            width={600}
            height={600}
            alt={'About us'}
            quality={100}
          />
          <Image
            className={styles.imageAcc}
            src={'/accreditations/acc2.png'}
            width={600}
            height={600}
            alt={'About us'}
            quality={100}
          />
      </div>
      </div>

      <div className={styles.containerSocial}>
        <Link href={"https://www.linkedin.com/company/hartcrown-ltd"}>
          <Image src={'/linkedin.png'} width={'64'} height={'64'} quality={100} alt='Linkedin Icon'/>
        </Link>
      </div>
      
      <div className={styles.containerAddress}>
        <div className={styles.textAddress}>Address</div>
        <div className={styles.contentAddress}>3 Mantle Road, London, United Kingdom, SE4 2DU</div>
      </div>

      <div className={styles.number}>0207 252 9380</div>
      <div className={styles.email}>office@hartcrownltd.co.uk</div>

      <div className={styles.bottomLine}></div>

      </main>
    )
} 