import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './FoodDetail.css'; // CSS dosyasını içe aktarıyoruz

const FoodDetail = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const API_KEY = '66bfd886b8d6478a9e725c60f5e19a2a'; // API anahtarı

  useEffect(() => {
    const fetchFoodDetail = async () => {
      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
        setFood(response.data);
      } catch (error) {
        console.error("Hata:", error);
      }
    };

    fetchFoodDetail();
  }, [id, API_KEY]);

  if (!food) return <p>Yükleniyor...</p>;

  return (
    <div className="food-detail-container">
      <h1 className="food-title">{food.title}</h1>
      <img src={food.image} alt={food.title} className="food-image" />
      <div className="food-summary" dangerouslySetInnerHTML={{ __html: food.summary }}></div>

      <h3 className="ingredients-title">Malzemeler:</h3>
      <ul className="ingredients-list">
        {food.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id} className="ingredient-item">{ingredient.original}</li>
        ))}
      </ul>
    </div>
  );
};

export default FoodDetail;
