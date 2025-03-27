import React from "react";
import styles from "./Cards.module.scss";
import { Link } from "react-router-dom";

const Cards = ({ results, page }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status } = x;
      // x in this context means target the mapped results one by one
      return (
        <Link 
        style={{textDecoration: "none"}}
          to={`${page}${id}`}
        className="col-lg-4 col-md-6 col-12 position-relative mb-4 text-dark" key={id}>
          <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
            <img src={image} alt="" className={`${styles.img} img-fluid`} />
            <div style={{ padding: "10px" }} className="content mb-4">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last location</div>
                <div className="fs-5"> {location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} badge bg-danger position-absolute`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} badge bg-success position-absolute`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} badge bg-secondary position-absolute`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
      /*
      <div className={`${styles.badge} badge bg-danger position-absolute`}>{status}</div>
      so here I see when loading in css from another sourec like a local source
      you can create a variable out of the reference with `` then make a ${} reference inside
      AND past along the rest of the className and then bootstrap will see it anyway
      at render and work just fine

      */
      /*I learned something here and im not sure what.
      the $ is not needed when you are returning the value so you can spit out 
      html and then inline use the dollar sign and {} to point to variables all you like
      */
    });
  } else {
    display = "No characters found :/";
  }

  return <>{display}</>;
};

export default Cards;
