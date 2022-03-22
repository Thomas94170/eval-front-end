import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Layout } from '../components/Layout'
import { Footer } from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      <Layout page='Contact'>
      <br />
      <h1 className='text-center text-info border-bottom border-info'>Contactez moi!</h1>
      <br />
      <br />
      <ContactForm/>
      
    </Layout>
    
    </>
  )
}
