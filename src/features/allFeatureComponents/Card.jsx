import React, { useState } from 'react'
import styles from "./Card.module.css";
import { useDispatch } from 'react-redux';
const Card = ({data}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.box}>
      <div className={styles.imageContainer}>
        <img src={data.imageUrl}/>
      </div>
      <h3>
        Name : {data.name}
      </h3>
      <div className={styles.contain}>
      <h3>
        Price {data.price}
      </h3>
      <h3>
        {data.rating}
      </h3>
      </div>
      <button>Add To Cart</button>
      <button>Buy Now</button>
    </div>)
}

export default Card