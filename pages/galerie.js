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

      <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

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


 