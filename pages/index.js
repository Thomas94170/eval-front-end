import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Layout } from '../components/Layout'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <>
    
      <Layout page='Home'>
        <div className='img-home container'>
          <div className='titre anim'>
          <h1 className='text-center  letter'>CHARLES CANTIN </h1>
          <h2 className='text-center  letter'>Photos</h2>
          </div>
        
      <br />
      {/* <div className='container'> */}
      {/* <img src="home-cantin.png" alt="accueil" width='100%' height='auto'/> */}
      {/* </div> */}
      <br />
      <br />
      
        </div>
        <p className='text-center'>Je ne me limite pas. La photographie est un Art, et l’Art n’a pas de limites. Je photographie ce qui m’anime, 
          ce qui m’inspire, ce que je ressens. Tout est dans le cœur et dans l’âme.
          Amicalement Charles Cantin
      </p>
      <br />
      
      {/* <img src="home.jpg" alt="accueil" width='100%' height='auto'/> */}
    </Layout>
    
    </>
  )
}
