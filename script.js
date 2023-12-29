
localStorage.clear();
if (localStorage.getItem("favorite") == null) {
  localStorage.setItem("favorite", JSON.stringify([]));
}

// !variable
const search = document.querySelector("#search-btn");
const input = document.querySelector("#search-input");
const suggestion = document.querySelector(".list");
const mealListBox = document.querySelector("#meal");
const mealClosebtn = document.querySelector(".recipe-close-btn");

const mainPage = document.querySelector("#homepage");
const favPage = document.querySelector("#favpage");

const container = document.querySelector(".container");

const mealDetailsContent = document.querySelector(".meal-details-content");
const favContainer = document.querySelector(".favContainer");

const love = document.querySelector("#favpage");
const favList = document.querySelector(".favList");

// fav variable
const favDetailsContent = document.querySelector(".fav-meal-details-content");
const favMealCloseBtn = document.querySelector(".fav-recipe-close-btn");

// ! function where I fetch meal data by name

search.addEventListener("click", async function getMealList() {
  suggestion.innerHTML = "";
  let searchInputTxt = input.value.trim();
  await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`
  )
    .then((res) => res.json())
    .then((data) => {
      let html = "";
      if (data.meals) {
        data.meals.forEach((meal) => {
          html += `
          <div class="meal-item" data-id="${meal.idMeal}">
          <p><i class="fa-solid fa-heart heart"></i></p>

              <div class="meal-img"><img src="${meal.strMealThumb}" alt="img" /></div>
              <div class="meal-name">
                <h3>${meal.strMeal} </h3> 
                <a href="#" class="recipe-btn">Get Recepi</a>
              </div>
            </div>`;
        });
      } else {
        html = "sorry , we didn't find any Meal";
        mealListBox.classList.add("notFound");
      }

      mealListBox.innerHTML = html;
    });
});
// ! get meal detail how to make food

mealListBox.addEventListener("click", async function getMealRecipe(e) {
  let fav = JSON.parse(localStorage.getItem("favorite"));
  e.preventDefault();
  if (e.target.classList.contains("recipe-btn")) {
    let mealItem = e.target.parentElement.parentElement;
    console.log(mealItem);
    await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        function mealRecipeModal(data) {
          meal = data.meals[0];

          let html = `<img src="${meal.strMealThumb}" alt="" />
         <h2 class="recipe-title">${meal.strMeal}</h2> 
        
         <p class="recipe-category">Category : ${meal.strCategory}  </p>
         <p class="recipe-category">Famours Area : ${meal.strArea} Dish </p></div>
                    <div class="recipe-instruct">
                      <h3>Instructions:</h3>
                      <p>
                        ${meal.strInstructions}
                      </p>
                    
                    <div class="recipe-link"><a href="${meal.strYoutube}" target="_blank">watch video</a></div>`;
          mealDetailsContent.innerHTML = html;
          mealDetailsContent.parentElement.classList.add("showRecipe");
        }
        mealRecipeModal(data);
      });
  } else if (e.target.classList.contains("heart")) {
    let like = e.target.parentElement.parentElement;
    // console.log(e.target.classList);

    if (fav.length) {
      if (!fav.includes(like.dataset.id)) {
        fav.push(like.dataset.id);
        e.target.classList.add("red");
      } else if (fav.includes(like.dataset.id)) {
        fav = fav.filter((f) => f != like.dataset.id);
        e.target.classList.remove("red");
      }
    } else if (fav.length == 0) {
      fav.push(like.dataset.id);
      if (e.target.classList.contains("red")) {
        e.target.classList.remove("red");
      } else {
        e.target.classList.add("red");
      }
    }
  }
  localStorage.setItem("favorite", JSON.stringify(fav));
});
// ! close button for meal detail
mealClosebtn.addEventListener("click", () => {
  mealDetailsContent.parentElement.classList.remove("showRecipe");
});

// ! input box function to suggestion
input.onkeyup = function () {
  let result = [];
  let inputValue = input.value;
  if (inputValue.length) {
    result = list.filter((keyword) => {
      return keyword.toLowerCase().includes(inputValue.toLowerCase());
    });
  }
  const content = result.map((l) => {
    return "<li onclick=selectInput(this)>" + l + "</li>";
  });
  suggestion.innerHTML = "<ul>" + content.join("") + "</ul>";
};
// ! suggestion send into input box
function selectInput(l) {
  input.value = l.innerHTML;
  suggestion.innerHTML = "";
}

mainPage.addEventListener("click", function () {
  container.classList.remove("containerGone");
  favContainer.classList.add("containerGone");
});
favPage.addEventListener("click", function () {
  favContainer.classList.add("favContainerCome");
});
// !fav page list function
love.addEventListener("click", getFavList);
function getFavList() {
  container.classList.add("containerGone");
  favContainer.classList.remove("containerGone");
  let fav = JSON.parse(localStorage.getItem("favorite"));
  let html = "";
  fav.forEach(async (elem) => {
    await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${elem}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          data.meals.forEach((meal) => {
            html += `
          <div class="meal-item" data-id="${meal.idMeal}">
          <p><i class="fa-solid fa-heart heart red"></i></p>

              <div class="meal-img"><img src="${meal.strMealThumb}" alt="img" /></div>
              <div class="meal-name">
                <h3>${meal.strMeal} </h3> 
                <a href="#" class="recipe-btn">Get Recepi</a>
              </div>
            </div>`;
          });
        } else {
          html = "sorry , we didn't find any Meal";
          mealListBox.classList.add("notFound");
        }
      });
    favList.innerHTML = html;
  });

  localStorage.setItem("favorite", JSON.stringify(fav));
}

// favlist page
favList.addEventListener("click", async function getMealRecipe(e) {
  let fav = JSON.parse(localStorage.getItem("favorite"));

  e.preventDefault();
  if (e.target.classList.contains("recipe-btn")) {
    let mealItem = e.target.parentElement.parentElement;
    await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        function mealRecipeModal(data) {
          meal = data.meals[0];
          let html = `<img src="${meal.strMealThumb}" alt="" />
         <h2 class="recipe-title">${meal.strMeal}</h2> 
        
         <p class="recipe-category">Category : ${meal.strCategory}  </p>
         <p class="recipe-category">Famours Area : ${meal.strArea} Dish </p></div>
                    <div class="recipe-instruct">
                      <h3>Instructions:</h3>
                      <p>
                        ${meal.strInstructions}
                      </p>
                    
                    <div class="recipe-link"><a href="${meal.strYoutube}" target="_blank">watch video</a></div>`;
          favDetailsContent.innerHTML = html;
          favDetailsContent.parentElement.classList.add("showRecipe");
        }
        mealRecipeModal(data);
      });
    localStorage.setItem("favorite", JSON.stringify(fav));
  } else if (e.target.classList.contains("heart")) {
    let like = e.target.parentElement.parentElement;
    // console.log(e.target.classList);

    if (fav.length) {
      if (!fav.includes(like.dataset.id)) {
        fav.push(like.dataset.id);
        e.target.classList.add("red");
      } else if (fav.includes(like.dataset.id)) {
        fav = fav.filter((f) => f != like.dataset.id);
        e.target.classList.remove("red");
      }
      console.log(fav);

      localStorage.setItem("favorite", JSON.stringify(fav));
    } else if (fav.length == 0) {
      fav.push(like.dataset.id);
      if (e.target.classList.contains("red")) {
        e.target.classList.remove("red");
      } else {
        e.target.classList.add("red");
      }
      console.log(fav);
      localStorage.setItem("favorite", JSON.stringify(fav));
    }
    getFavList();
  }
});

favMealCloseBtn.addEventListener("click", () => {
  favDetailsContent.parentElement.classList.remove("showRecipe");
});


