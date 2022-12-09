import React, { useState, useEffect } from 'react';
import animalJson from "../data/animals.json";
import '../css/EducationPage.css';


function AnimalInfo() {
  const animalList = JSON.stringify(animalJson);
  const data = JSON.parse(animalList);

  const [animal, setAnimal] = useState(data);
  const [random, setRandom] = useState(Math.floor(Math.random() * 9));

  return (
  <div className="infoSection">
    <img id="animal" src={require(`../images/${animal[random].photo}`)} alt= {"A photo of " + animal[random].name} />
     <div className="content">
        <h4 className="animalHeader">{animal[random].name}</h4>
        <br></br>
        <p><strong>Scientific Name:</strong> {animal[random].scientificName}</p>
        <br></br>
        <p><strong>Population:</strong> {animal[random].population}</p>
        <br></br>
        <p> {animal[random].fact}</p>
      </div>
  </div>
  );
};

export default AnimalInfo;