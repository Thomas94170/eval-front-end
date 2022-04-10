import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Layout } from "../components/Layout";
import { Footer } from "../components/Footer";
import { useState } from "react";

export async function getStaticProps(context) {
  try {
    /**
     * SOLUTION 1:
     * - recup all photos
     * - filtrer
     *
     * SOLUTION 2:
     * - request each time we select a category ( todo -> new controller )
     */
    const res = await fetch("http://localhost:1337/photos").then((res) =>
      res.json()
    );

    // add filter

    return {
      props: { res },
    };
  } catch (err) {
    console.error(err);
  }
}

export default function Galerie({ res }) {
  const [photos, setPhotos] = useState(res);
  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState(""); ///  Initialisation;    // VALUE ->   ""

  const changedCategory = (event) => {
    // console.log("we just changed a category, new value ->", event.target.value); // Mariage
    setSelectedCategory(event.target.value);
    getPhotosByCategory(event.target.value);
  };

  /**
   * Todo :
   * 1- categoryName => les photos correspondantes suivant sa categorie
   *        -   photos
   * */
  const getPhotosByCategory = (categoryName) => {
    console.log("getting photo by category -> ", categoryName);
    // DATA :
    // - categoryName
    // - photos ( contain ALL )
    const filteredPhotos = []; // Boite VIDE

    res.forEach((photo) => {
      // BOITE INITIALE
      // all photos
      console.log(
        "selected photo categorie name is ->",
        photo.categories[0].name
      );

      const actualCategories = photo.categories;

      let foundCategory = false;

      // Sequential search;
      actualCategories.forEach((oneCategory) => {
        if (oneCategory.name === categoryName) {
          foundCategory = true;
        }
      });

      if (foundCategory === true) {
        filteredPhotos.push(photo);
      }
    });
    console.log(res);
    // id: 8, name: 'Bapteme'
    // ici
    setPhotos(filteredPhotos);

    console.log("filteredPhotos -> ", filteredPhotos);
  };

  return (
    <>
      <Layout page="Galerie">
        {/* {JSON.stringify(res)} */}
        <br />
        <h1 className="text-center text-info border-bottom border-info">
          Ma Galerie
        </h1>

        <br />
        <br />

        <div className=" row row-cols-1 row-cols-md-3 g-3 ">
          <br />
          <br />
          <div className="container d-flex justify-content-around">
            <ul className="container d-flex justify-content-around list-unstyled categories">
              <li>
                <input
                  className="form-check-input"
                  type="radio"
                  value="Mariage"
                  id="Mariage"
                  onChange={changedCategory}
                  checked={selectedCategory === "Mariage"}
                />
                <label className="form-check-label" htmlFor="Mariage">
                  Mariage
                </label>
              </li>
              <li>
                <input
                  className="form-check-input"
                  type="radio"
                  value="Grossesse"
                  id="Grossesse"
                  onChange={changedCategory}
                  checked={selectedCategory === "Grossesse"}
                />
                <label className="form-check-label" htmlFor="Grossesse"></label>
                Grossesse
              </li>
              <li>
                <input
                  className="form-check-input"
                  type="radio"
                  value="Bapteme"
                  id="Bapteme"
                  onChange={changedCategory}
                  checked={selectedCategory === "Bapteme"}
                />
                <label className="form-check-label" htmlFor="Bapteme">
                  Baptême
                </label>
              </li>
              <li>
                <input
                  className="form-check-input"
                  type="radio"
                  value="Couple"
                  id="Couple"
                  onChange={changedCategory}
                  checked={selectedCategory === "Couple"}
                />
                <label className="form-check-label" htmlFor="Couple">
                  Couple
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className=" row row-cols-1 row-cols-md-3 g-3 ">
          <div className="container d-flex justify-content-around">
            <ul className="container d-flex justify-content-around list-unstyled categories">
              <li>
                <input
                  className="form-check-input"
                  type="radio"
                  value="Famille"
                  id="Famille"
                  onChange={changedCategory}
                  checked={selectedCategory === "Famille"}
                />
                <label className="form-check-label" htmlFor="Famille">
                  Famille
                </label>
              </li>

              <li>
                <input
                  className="form-check-input"
                  type="radio"
                  value="Bebe"
                  id="Bebe"
                  onChange={changedCategory}
                  checked={selectedCategory === "Bebe"}
                />
                <label className="form-check-label" htmlFor="Bebe">
                  Bebe
                </label>
              </li>

              <li>
                <input
                  className="form-check-input"
                  type="radio"
                  value="Portrait"
                  id="Portrait"
                  onChange={changedCategory}
                  checked={selectedCategory === "Portrait"}
                />
                <label className="form-check-label" htmlFor="Portrait">
                  Portrait
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
            {photos.map((photo) => (
              <div key={photo.id}>
                <div className="text-center">
                  <div className="col">
                    <div className="card bg-dark">
                      <img
                        src={
                          `http://localhost:1337` +
                          photo.img[0].formats.medium.url
                        }
                        className="card-img-top"
                        alt={photo.name}
                        width="300"
                        height="300px"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-info">{photo.name}</h5>
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
  );
}
