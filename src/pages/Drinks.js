import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Drinks = () => {
  const [drinks, setDrinks] = useState([]);
  const API_KEY = 'l6ZLTx76YO0SHtIvNlcEqQ==HiknWGVNTB5AGvI1'; 
  const drinkNames = ['bloody mary', 'bloody margarita', 'vodka', 'lemon juice']; // İçecek adları

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const drinkRequests = drinkNames.map(name => 
          axios.get(`https://api.api-ninjas.com/v1/cocktail?name=${name}`, {
            headers: { 'X-Api-Key': API_KEY }
          })
        );

        const responses = await Promise.all(drinkRequests);
        const drinksData = responses.map(response => response.data[0]).filter(drink => drink); // Boş olmayan içecekleri filtrele
        setDrinks(drinksData);
      } catch (error) {
        console.error('Hata:', error);
      }
    };

    fetchDrinks();
  }, [API_KEY]);

  if (drinks.length === 0) return <p>Yükleniyor...</p>;

  return (
    <div className="drinks-container">
      {drinks.map((drink, index) => (
        <div key={index} className="drink-container">
          <h1>{drink.name}</h1>
          <p><strong>Kategori:</strong> {drink.category}</p>
          <p><strong>Talimatlar:</strong> {drink.instructions}</p>
          <h3>Malzemeler:</h3>
          <ul>
            {drink.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Drinks;
