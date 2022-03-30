import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Layout } from '../components/Layout'
import { Footer } from '../components/Footer'
import { useState } from 'react'

export default function Galerie({res}) {
    const [photos, setPhotos] = useState(res);
    const [search, setSearch] = useState("");
  
  return (
    <>
      <Layout page='Galerie'>
        {/* {JSON.stringify(res)} */}
      <br />
      <h1 className='text-center text-info border-bottom border-info'>Ma Galerie</h1>
      
      <br />
      <br />

      <div className= ' row row-cols-1 row-cols-md-3 g-3 '>   
                    <br /><br />
                    <div className=' container d-flex justify-content-around '>
                        <ul className='container d-flex justify-content-around list-unstyled categories'>
                             <li>
                             <input className=" form-check-input" type="radio" value="Mariage" id="Mariage"/>
                             <label className="form-check-label" htmlFor="Mariage">
                             Mariage
                             </label>
                             </li>
                             <li>
                             <input className="form-check-input" type="radio" value="Grossesse" id="Grossesse" />
                             <label className="form-check-label" htmlFor="Grossesse">
                             </label>
                             Grossesse
                             </li>
                             <li>
                             <input className="form-check-input" type="radio" value="Baptême" id="Baptême"/>
                             <label className="form-check-label" htmlFor="Baptême">
                             Baptême
                             </label>
                             </li>
                             <li>
                             <input className="form-check-input" type="radio" value="Couple" id="Couple"/>
                             <label className="form-check-label" htmlFor="Couple">
                             Couple
                             </label>
                             </li>
                             <li>
                             <input className="form-check-input" type="radio" value="Famille" id="Famille"/>
                             <label className="form-check-label" htmlFor="Famille">
                             Famille
                             </label>
                             </li>  
                             <li>
                             <input className="form-check-input" type="radio" name="Bébé" id="Bébé"/>
                             <label className="form-check-labe" htmlFor="Bébé">
                             Bébé
                             </label>
                             </li>            
                        </ul>            
                    </div>
                </div>

<br />
      <br />
      <br />
      <br />
      

       <div className="container d-flex justify-content-evenly">
            <div className=" row row-cols-1 row-cols-md-3 g-3 ">
            {res.map(res =>(
                
            <div key ={res.id} > 
                <div className="text-center">
                    <div className="col">
                        <div className="card bg-dark">
                            <img src={`http://localhost:1337`+res.img[0].formats.medium.url} className="card-img-top" alt={res.name} width ="300" height= "300px"/>
                            <div className="card-body">
                              <h5 className="card-title text-info">{res.name}</h5>
                              
                              
                            </div>
                        </div>
                    </div>
                </div>
              
               
              
            </div>
            ))}
            </div>
            </div>
      
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


 