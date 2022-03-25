import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Layout } from '../components/Layout'
import { Footer } from '../components/Footer'

export default function Galerie({res}) {
  return (
    <>
      <Layout page='Galerie'>
      <br />
      <h1 className='text-center text-info border-bottom border-info'>Ma Galerie</h1>
      {/* {JSON.stringify(res)} */}
      <br />
      <br />
      <ul className="">
         {res.map((res) =>(
           <li key={res} className='relative hover:shadow-md p-8
           border border-blue-300 rounded-3xl bg-blue-100 md:w-auto flex-1 mx-5'>
             <div>{res.name}</div>
             <div>{res.img[0].formats.large.url}</div>
             <div>{res.categories.name}</div>

             
           </li>
         ))}
       </ul>
      
    </Layout>
    
    </>
  )
}

export async function getStaticProps(context){
  try {
    const res = await fetch(
      "http://localhost:1337/photos")
      .then((res) => res.json());

    return{
      props: {res}
    }

  } catch (err){
    console.error(err);
  }
}


 