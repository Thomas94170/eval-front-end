import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Layout } from "../components/Layout";
import { Footer } from "../components/Footer";

export default function Tarif() {
  return (
    <>
      <Layout page="Tarif">
        <br />
        <h1 className="text-center text-info border-bottom border-info">
          Tarifs et Prestations
        </h1>
        <br />
        <div className="tarif">
          <br />
          <div>
            <h2 className=" text-center ">« Juste moi »</h2>
            <p className=" text-center text-info">130 € </p>
            <p className=" text-center ">
              Séance pour une personne, en extérieur ou en studio
            </p>
          </div>
          <br />
          <div>
            <h2 className=" text-center ">« Pour deux »</h2>
            <p className=" text-center text-info">195 € </p>
            <p className=" text-center ">
              Pour deux personnes, en extérieur ou en studio
            </p>
          </div>
          <br />
          <div>
            <h2 className=" text-center ">« Famille »</h2>
            <p className=" text-center text-info">220 € </p>
            <p className=" text-center ">
              Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou
              en studio 30 euros en supplément par personne au-delà de 4 (hormis
              enfant jusqu’à 2 ans)
            </p>
          </div>
          <br />
          <div>
            <h2 className=" text-center ">« Il était une fois »</h2>
            <p className=" text-center text-info">160 € </p>
            <p className=" text-center ">
              Photo de grossesse (À votre domicile, en extérieur ou en studio)
            </p>
          </div>
          <br />
          <div>
            <h2 className=" text-center ">« Mon bébé »</h2>
            <p className=" text-center text-info">100 € </p>
            <p className=" text-center ">
              Photo d’enfant jusqu’à 3 ans (photo à domicile)
            </p>
          </div>
          <br />
          <div>
            <h2 className=" text-center">« J’immortalise l’événement »</h2>
            <p className=" text-center text-info">Sur Devis</p>
            <p className=" text-center ">
              Prestation de mariage ou baptême sur devis
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
