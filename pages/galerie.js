import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Layout } from '../components/Layout'
import { Footer } from '../components/Footer'

export default function Galerie() {
  return (
    <>
      <Layout page='Galerie'>
      <br />
      <h1 className='text-center text-info border-bottom border-info'>Ma Galerie</h1>
      <br />
      <br />
     
      
    </Layout>
    
    </>
  )
}