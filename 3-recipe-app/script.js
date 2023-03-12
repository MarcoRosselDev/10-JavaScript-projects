const mealsEl = document.getElementById('meals')

async function getRandomMeal() {
    const respuesta = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const respuestaData = await respuesta.json();
    const randomMeal = respuestaData.meals[0]

    return randomMeal
}

getRandomMeal()

function addMeal(mealData, random = false) {
    console.log(mealData);

    const meal = document.createElement('div');
    meal.classList.add('meal');

    meal.innerHTML = `
    <div class="meal-header">
            ${
                random
                    ? `
            <span class="random"> Random Recipe </span>`
                    : ""
            }
            <img
                src="${mealData.strMealThumb}"
                alt="${mealData.strMeal}"
            />
        </div>
        <div class="meal-body">
            <h4>${mealData.strMeal}</h4>
            <button class="fav-btn">
                <i class="fas fa-heart"></i>
            </button>
        </div>    
    `;

    const btn = meal.querySelector('.meal-body .fav-btn');

    btn.addEventListener('click', ()=>{
        if (btn.classList.contains("active")) {
            removeMealLS(mealData.idMeal);
            btn.classList.remove("active");
        } else {
            addMealLS(mealData.idMeal);
            btn.classList.add("active");
        }

        fetchFavMeals();
    });

    meal.addEventListener('click', () =>{
        showMealInfo(mealData)
    });

    mealsEl.appendChild(meal)

}
