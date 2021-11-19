import React, { Component, useState, useEffect } from 'react';
import { API_URL } from '../config.js'
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';



function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function getGoods() {
      fetch(`https://cors-anywhere.herokuapp.com/${API_URL}/items`, {
      })
      .then(response => response.json())
      .then(data => {
        data && setGoods(data.items);
        setLoading(false);
      })
  }, [])

  return <main className="container content" >
    {loading ? <Preloader /> : <GoodsList goods={goods} />}
  </main>
}

export { Shop };
