import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import mountains from "../assets/images/mountain1.webp"
import image2 from "../assets/images/image2.jpg"
import image_3 from "../assets/images/image-3.png"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      
      <main className={styles.main}>
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <h1> Image Optimization </h1>


        <Image
          style={{ padding: "4px" }}
          src={mountains}
          className="w-100 shadow-1-strong rounded mb-4 "
          alt="mountain"
          priority
       
        />

        <Image
          style={{ padding: "4px" }}
          src={image2}
          className="w-100 shadow-1-strong rounded mb-4 "
          alt="mountain"
       
        />

        <Image
          style={{ padding: "4px" }}
          src={image_3}
          className="w-100 shadow-1-strong rounded mb-4 "
          alt="mountain"
          width={300}
          height={300}
        />
        <br></br>

        <video controls={true} style={{ width: "400px", height: "400px" }}>
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
    </main>
    </>
  )
}
