import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Layout } from '../components/Layout'
import { Footer } from '../components/Footer'

export default function Galerie({res}) {
  
  return (
    <>
      <Layout page='Galerie'>
        {/* {JSON.stringify(res)} */}
      <br />
      <h1 className='text-center text-info border-bottom border-info'>Ma Galerie</h1>
      
      <br />
      <br />
      <ul className="">
         {res.map((res) =>(
           <li key={res} className='relative hover:shadow-md p-8
           border border-blue-300 rounded-3xl bg-blue-100 md:w-auto flex-1 mx-5'>
             <div>{res.name}</div>
             {/* <div>{res.img[0].formats.large.url}</div> */}
             <img src={`http://localhost:1337`+res.img[0].formats.thumbnail.url} className="" alt={res.name} width ="300px" height= "300px"/>
             
             
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


 