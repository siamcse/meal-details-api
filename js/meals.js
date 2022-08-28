const loadMeals = (search) =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
const displayMeals = (meals) =>{
    const div = document.getElementById('meal-container');
    div.innerHTML = ``;
    meals.forEach(meal => {
        // console.log(meal);
        const divMeal = document.createElement('div');
        divMeal.classList.add('col');
        divMeal.innerHTML = `
            <div onclick="loadMealDetails(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                </div>
            </div>
        `;
        div.appendChild(divMeal);
    });
}
const searchMeal = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadMeals(searchText);
}

const loadMealDetails = (mealId) =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
}
const displayMealDetails = (meals) =>{
    // console.log(meals);
    const div = document.getElementById('meal-detail');
    div.innerHTML = '';
    const divDetail = document.createElement('div');
    divDetail.classList.add('col');
    divDetail.innerHTML = `
        <div class="card w-25">
                <img src="${meals.strMealThumb}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${meals.strMeal}</h5>
                    <p class="card-text">${meals.strInstructions.slice(0,200)}</p>
                </div>
        </div>
    `;
    div.appendChild(divDetail);
}
loadMeals('beef');