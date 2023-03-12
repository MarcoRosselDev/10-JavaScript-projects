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
