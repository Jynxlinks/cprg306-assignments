"use client";

import { useEffect, useState } from 'react';

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || [];
};

const fetchMealDetails = async (idMeal) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
  const data = await response.json();
  return data.meals[0];
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  const [selectedMealId, setSelectedMealId] = useState(null);

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    const mealsWithDetails = await Promise.all(mealIdeas.map(async (meal) => {
      const details = await fetchMealDetails(meal.idMeal);
      return {
        idMeal: details.idMeal,
        strMeal: details.strMeal,
        strMealThumb: details.strMealThumb,
        ingredients: getIngredients(details),
        strInstructions: details.strInstructions
      };
    }));
    setMeals(mealsWithDetails);
  };

  const getIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push({
          ingredient: meal[`strIngredient${i}`],
          measure: meal[`strMeasure${i}`],
        });
      }
    }
    return ingredients;
  };

  const handleToggleIngredients = (id) => {
    setSelectedMealId(selectedMealId === id ? null : id);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="mt-5">
      <h2 className="text-4xl font-bold text-white mb-4">Meal Ideas</h2>
      {meals.length === 0 ? (
        <p className="text-white">No meal ideas found.</p>
      ) : (
        meals.map(meal => (
          <div key={meal.idMeal} className="mb-4">
            <h3
               onClick={() => handleToggleIngredients(meal.idMeal)}
               className="text-lg font-semibold cursor-pointer hover:text-blue-400"
>
               {meal.strMeal}
           </h3>

            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-auto rounded-md" />
            {selectedMealId === meal.idMeal && (
              <div className="bg-gray-800 p-3 mt-2 rounded">
                <h4 className="font-bold text-white">Ingredients:</h4>
                <ul className="list-disc ml-5 text-white">
                  {meal.ingredients.map((item, index) => (
                    <li key={index}>
                      {item.ingredient} ({item.measure})
                    </li>
                  ))}
                </ul>
                <h4 className="font-bold text-white mt-2">Instructions:</h4>
                <p className="text-white">{meal.strInstructions}</p>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default MealIdeas;
