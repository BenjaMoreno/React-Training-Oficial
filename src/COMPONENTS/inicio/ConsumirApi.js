import React, { useEffect, useRef, useState } from "react";
import consultaFoto from '../../IMAGES/Añadir un título.png'
import "./ConsumirApi.css";



export const ConsumirApi = () => {
  // Estados
  const [arrayListo, setArrayListo] = useState([]);
  const [consultaClima, setConsultaClima] = useState(false);
  const [clima, setClima] = useState(null);
  const [error, setError] = useState(null);
  //Id de pokemons
  const idsPokemon = [1, 25, 4, 95];

  useEffect(() => {
    //Nuevo array con pokemons
    const arrayPokemons = [];

    //Iteramos los ids
    idsPokemon.forEach((element) => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${element}`)
        .then((respuesta) => respuesta.json())
        .then((data) => {
          arrayPokemons.push(data);
          if (arrayPokemons.length === idsPokemon.length) {
            setArrayListo(arrayPokemons);
          }
        });
    });
  }, []);

  //OPENWEATHERMAP

  useEffect(() => {
    const fetchAsincrona = async () => {
      if (consultaClima) {
        try {
          const peticion = await fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat=-33.59856021983831&lon=-70.5530450612808&appid=48b3b91bb4714861f439051fc263fcfa"
          );
          if (!peticion.ok) {
            throw new Error("error culiao");
          }
          const data = await peticion.json();
          console.log(data);
          setClima(data);
          setError(null);
        } catch (error) {
          console.error("error culia texto 2", error);
          setError(error.message);
        } finally {
          setConsultaClima(false);
        }
      }
    };
    fetchAsincrona();
  }, [consultaClima]);


  return (
    <div className="container-api">
      <article className="articulo-api">
        <h1>Consumir APIs</h1>
        <h2>Consumimos datos desde la PokéApi</h2>
        <div className="tabla-pokemons">
          {arrayListo.map((pokemon) => (
            <div className="item-pokemon" key={pokemon.id}>
              <img src={pokemon.sprites.front_shiny} />
              <div className="tabla-datos">
                <div className="container-dato">
                  <label>Nombre:</label>&nbsp;<strong>{pokemon.name}</strong>
                </div>
                <div className="container-dato">
                  <label>Habilidad:</label>&nbsp;
                  <strong>{pokemon.abilities[0].ability.name}</strong>
                </div>
                <div className="container-dato">
                  <label>Tamaño:</label>&nbsp;<strong>{pokemon.height}</strong>
                </div>
                <div className="container-dato">
                  <label>Id:</label>&nbsp;<strong>{pokemon.id}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2>Consumimos una api del clima {clima === null ? '' : ` para ${clima.name}` }</h2>
        <div className="container-clima">
          <img src={clima===null ? consultaFoto : `http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`} />
          <div className="container-datos-clima">
            <div className="item-dato-clima">
              <label>Humedad:</label>&nbsp;
              <strong>{clima===null ? '' : clima.main.humidity}%</strong>
            </div>
            <div className="item-dato-clima">
              <label>Clima:</label>&nbsp;
              <strong>{clima===null ? '' : clima.weather[0].description}</strong>
            </div>
            <div className="item-dato-clima">
              <label>Nubosidad:</label>&nbsp;
              <strong>{clima===null ? '' : clima.clouds.all}%</strong>
            </div>
          </div>
          <button onClick={() => setConsultaClima(true)}>
            Consultar clima
          </button>
        </div>
      </article>
    </div>
  );
};
