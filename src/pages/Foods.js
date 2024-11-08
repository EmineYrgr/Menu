import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Foods.css'; // Stil dosyasını import et

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const API_KEY = '66bfd886b8d6478a9e725c60f5e19a2a'; // Buraya API anahtarınızı ekleyin

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`);
        setFoods(response.data.recipes);
      } catch (error) {
        console.error("Hata:", error);
      }
    };

    fetchFoods();
  }, [API_KEY]);

  return (
    <div className="food-container">
      <h1 className="title">Lezzetli Yemekler</h1>
      <div className="foods-grid">
        {foods.map((food) => (
          <div key={food.id} className="food-card">
            <img src={food.image} alt={food.title} className="food-image" />
            <h2 className="food-title">{food.title}</h2>
            <Link to={`/foods/${food.id}`}>
              <button className="detail-button">Detay</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
