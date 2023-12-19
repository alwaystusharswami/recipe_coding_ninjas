const list = [
  "Apple Frangipan Tart",
  "Apple & Blackberry Crumble",
  "Apam balik",
  "Ayam Percik",
  "Bakewell tart",
  "Bread and Butter Pudding",
  "Beef Wellington",
  "Baingan Bharta",
  "Beef Brisket Pot Roast",
  "Beef Sunday Roast",
  "Braised Beef Chilli",
  "Beef stroganoff",
  "Broccoli & Stilton soup",
  "Bean & Sausage Hotpot",
  "Banana Pancakes",
  "Beef Dumpling Stew",
  "Beef and Mustard Pie",
  "Beef and Oyster pie",
  "Blackberry Fool",
  "Battenberg Cake",
  "Beef Bourguignon",
  "Brie wrapped in prosciutto & brioche",
  "Boulangère Potatoes",
  "BeaverTails",
  "Brown Stew Chicken",
  "Beef Lo Mein",
  "Baked salmon with fennel & tomatoes",
  "Budino Di Ricotta",
  "Breakfast Potatoes",
  "Bitterballen (Dutch meatballs)",
  "BBQ Pork Sloppy Joes",
  "Beef Banh Mi Bowls with Sriracha Mayo ",
  "Carrot & Pickled Cucumber",
  "Big Mac",
  "Bigos (Hunters Stew)",
  "Boxty Breakfast",
  "Beef Rendang",
  "Burek",
  "Beef Mechado",
  "Bistek",
  "Beef Caldereta",
  "Beef Asado",
  "Bread omelette",
  "Beetroot Soup (Borscht)",
  "Blini Pancakes",
  "Chocolate Gateau",
  "Chicken Enchilada Casserole",
  "Cream Cheese Tart",
  "Christmas Pudding Flapjack",
  "Chicken Handi",
  "Chicken Alfredo Primavera",
  "Chicken Fajita Mac and Cheese",
  "Cajun spiced fish tacos",
  "Crock Pot Chicken Baked Tacos",
  "Chicken Karaage",
  "Coq au vin",
  "Chilli prawn linguine",
  "Clam chowder",
  "Creamy Tomato Soup",
  "Chicken & mushroom Hotpot",
  "Chicken Couscous",
  "Chocolate Avocado Mousse",
  "Choc Chip Pecan Pie",
  "Chocolate Raspberry Brownies",
  "Chickpea Fajitas",
  "Chicken Ham and Leek Pie",
  "Chicken Parmentier",
  "Carrot Cake",
  "Chelsea Buns",
  "Chocolate Souffle",
  "Chinon Apple Tarts",
  "Chicken Marengo",
  "Canadian Butter Tarts",
  "Chicken Basquaise",
  "Callaloo Jamaican Style",
  "Chicken Congee",
  "Chocolate Caramel Crispy",
  "Chakchouka",
  "Cashew Ghoriba Biscuits",
  "Corba",
  "Christmas Pudding Trifle",
  "Classic Christmas pudding",
  "Christmas cake",
  "Corned Beef and Cabbage",
  "Crispy Sausages and Greens",
  "Chicken Quinoa Greek Salad",
  "Chick-Fil-A Sandwich",
  "Coddled pork with cider",
  "Cevapi Sausages",
  "Croatian lamb peka",
  "Croatian Bean Stew",
  "Chivito uruguayo",
  "Crispy Eggplant",
  "Cabbage Soup (Shchi)",
  "Dal fry",
  "Dundee cake",
  "Duck Confit",
  "Eton Mess",
  "Eccles Cakes",
  "English Breakfast",
  "Escovitch Fish",
  "Egg Drop Soup",
  "Egyptian Fatteh",
  "Eggplant Adobo",

  "Fish pie",
  "French Lentils With Garlic and Thyme",
  "Fettucine alfredo",
  "Full English Breakfast",
  "French Onion Soup",
  "Flamiche",
  "French Omelette",
  "Fish Stew with Rouille",
  "Fennel Dauphinoise",
  "Fruit and Cream Cheese Breakfast Pastries",
  "French Onion Chicken with Roasted  Carrots & Mashed Potatoes",
  "Ful Medames",
  "Feteer Meshaltet",
  "Fish fofos",
  "Fresh sardines",
  "Fettuccine Alfredo",
  "Fish Soup (Ukha)",

  "Garides Saganaki",
  "Grilled Mac and Cheese Sandwich",
  "General Tso's Chicken",
  "Gigantes Plaki",
  "Gołąbki (cabbage roll)",
  "Grilled Portuguese sardines",
  "Grilled eggplant with coconut milk",

  "Honey Teriyaki Salmon",
  "Hot Chocolate Fudge",
  "Hot and Sour Soup",
  "Home-made Mandazi",
  "Honey Balsamic Chicken with Crispy Broccoli & Potatoes",
  "Honey Yogurt Cheesecake",
  "Ham hock colcannon",
  "Irish stew",
  "Jam Roly-Poly",
  "Jerk chicken with rice & peas",
  "Jamaican Beef Patties",
  "Japanese gohan rice",
  "Japanese Katsudon",
  "Kapsalon",
  "Kentucky Fried Chicken",
  "Katsu Chicken curry",
  "Key Lime Pie",
  "Kidney Bean Curry",
  "Kedgeree",
  "Kung Pao Chicken",
  "Kung Po Prawns",
  "Kafteji",
  "Keleya Zaara",
  "Kumpir",
  "Krispy Kreme Donut",
  "Koshari",
  "Lamb tomato and sweet spices",
  "Lamb Biryani",
  "Lamb Rogan josh",
  "Laksa King Prawn Noodles",
  "Lamb Tagine",
  "Lasagne",
  "Lamb and Potato pie",
  "Lancashire hotpot",
  "Leblebi Soup",
  "Lasagna Sandwiches",
  "Lamb and Lemon Souvlaki",
  "Lamb Tzatziki Burgers",
  "Lamb Pilaf (Plov)",
  "Mediterranean Pasta Salad",
  "Massaman Beef curry",
  "Mushroom & Chestnut Rotolo",
  "Matar Paneer",
  "Minced Beef Pie",
  "McSinghs Scotch pie",
  "Madeira Cake",
  "Montreal Smoked Meat",
  "Ma Po Tofu",
  "Mbuzi Choma (Roasted Goat)",
  "Mince Pies",
  "Moussaka",
  "Mulukhiyah",
  "Mustard champ",
  "Moroccan Carrot Soup",
  "Mee goreng mamak",
  "Mushroom soup with buckwheat",
  "Nutty Chicken Curry",
  "New York cheesecake",
  "Nanaimo Bars",
  "Nasi lemak",
  "Osso Buco alla Milanese",
  "Oxtail with broad beans",

  "Pad See Ew",
  "Potato Gratin with Chicken",
  "Poutine",
  "Pilchard puttanesca",
  "Pork Cassoulet",
  "Pancakes",
  "Pumpkin Pie",
  "Peanut Butter Cheesecake",
  "Peach & Blueberry Grunt",
  "Parkin Cake",
  "Pear Tarte Tatin",
  "Provençal Omelette Cake",
  "Prawn & Fennel Bisque",
  "Pate Chinois",
  "Pouding chomeur",
  "Peanut Butter Cookies",
  "Pizza Express Margherita",
  "Paszteciki (Polish Pasties)",
  "Pierogi (Polish Dumplings)",
  "Polskie Naleśniki (Polish Pancakes)",
  "Piri-piri chicken and slaw",
  "Portuguese prego with green piri-piri",
  "Portuguese barbecued pork (Febras assadas)",
  "Portuguese fish stew (Caldeirada de peixe)",
  "Portuguese custard tarts",
  "Potato Salad (Olivier Salad)",
  "Rigatoni with fennel sausage sauce",
  "Rocky Road Fudge",
  "Recheado Masala Fish",
  "Ribollita",
  "Roasted Eggplant With Tahini, Pine Nuts, and Lentils",
  "Rock Cakes",
  "Ratatouille",
  "Rappie Pie",
  "Red Peas Soup",
  "Roast fennel and aubergine paella",
  "Rosół (Polish Chicken Soup)",
  "Rogaliki (Polish Croissant Cookies)",
  "Roti john",
  "Spaghetti Bolognese",
  "Spicy Arrabiata Penne",
  "Smoky Lentil Chili with Squash",
  "Sticky Toffee Pudding Ultimate",
  "Spicy North African Potato Salad",
  "Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt",
  "Salmon Prawn Risotto",
  "Salted Caramel Cheescake",
  "Seafood fideuà",
  "Spinach & Ricotta Cannelloni",
  "Squash linguine",
  "Spanish Tortilla",
  "Steak and Kidney Pie",
  "Sticky Toffee Pudding",
  "Spotted Dick",
  "Summer Pudding",
  "Summer Pistou",
  "Split Pea Soup",
  "Sugar Pie",
  "Steak Diane",
  "Saltfish and Ackee",
  "Sweet and Sour Pork",
  "Szechuan Beef",
  "Shrimp Chow Fun",
  "Salmon Avocado Salad",
  "Salmon Eggs Eggs Benedict",
  "Shakshuka",
  "Smoked Haddock Kedgeree",
  "Stamppot",
  "Snert (Dutch Split Pea Soup)",
  "Spaghetti alla Carbonara",
  "Soy-Glazed Meatloaves with Wasabi Mashed Potatoes & Roasted Carrots",
  "Skillet Apple Pork Chops with Roasted Sweet Potatoes & Zucchini",
  "Strawberry Rhubarb Pie",
  "Stuffed Lamb Tomatoes",
  "Sledz w Oleju (Polish Herrings)",
  "Shawarma",
  "Spring onion and prawn empanadas",
  "Seri muka kuih",
  "Sushi",
  "Stuffed Bell Peppers with Quinoa and Black Beans",
  "Strawberries Romanoff",
  "Teriyaki Chicken Casserole",
  "Tandoori chicken",
  "Thai Green Curry",
  "Toad In The Hole",
  "Turkey Meatloaf",
  "Tuna Nicoise",
  "Tahini Lentils",
  "Three Fish Pie",
  "Treacle Tart",
  "Tarte Tatin",
  "Three-cheese souffles",
  "Tourtiere",
  "Timbits",
  "Tunisian Orange Cake",
  "Tunisian Lamb Soup",
  "Tuna and Egg Briks",
  "Tamiya",
  "Tonkatsu pork",
  "Traditional Croatian Goulash",
  "Tortang Talong",
  "Vegan Lasagna",
  "Vegan Chocolate Cake",
  "Vietnamese Grilled Pork (bun-thit-nuong)",
  "Venetian Duck Ragu",
  "Vegetarian Casserole",
  "Vegetarian Chilli",
  "Vegetable Shepherd's Pie",
  "White chocolate creme brulee",
  "Wontons",
  "Walnut Roll Gužvara",
  "Yaki Udon",
];
let fav = [];
// const home=document.querySelector('#home');
const container = document.querySelector(".container");
const resultBox = document.querySelector(".list");
const inputBox = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const mealList = document.querySelector("#meal");
const recipeCloseBtn = document.querySelector(".recipe-close-btn");
const mealDetailsContent = document.querySelector(".meal-details-content");
const favContainer=document.querySelector('.favContainer')


searchBtn.addEventListener("click", getMealList);
mealList.addEventListener("click", getMealRecipe);

document.querySelector("#home").addEventListener("click", function () {
  container.classList.remove("containerGone");
});
document.querySelector('#fav').addEventListener('click',function(){
  favContainer.classList.add('favContainerCome');

})

recipeCloseBtn.addEventListener("click", () => {
  mealDetailsContent.parentElement.classList.remove("showRecipe");
});
// get meal list that matches with ingredients
async function getMealList() {
  resultBox.innerHTML = "";
  let searchInputTxt = document.querySelector("#search-input").value.trim();
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
        mealList.classList.add("notFound");
      }

      mealList.innerHTML = html;
    });
}
// getMealRecipe
async function getMealRecipe(e) {
  e.preventDefault();
  if (e.target.classList.contains("recipe-btn")) {
    let mealItem = e.target.parentElement.parentElement;
    await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`
    )
      .then((res) => res.json())
      .then((data) => mealRecipeModal(data.meals));
  } else if (e.target.classList.contains("heart")) {
    document.querySelector(".heart").classList.add("red");

    let like = e.target.parentElement.parentElement;
    if (fav.length) {
      if (!fav.includes(like.dataset.id)) {
        fav.push(like.dataset.id);
      }
    } else if (fav.length == 0) {
      fav.push(like.dataset.id);
    }
  }
}

// create a model
function mealRecipeModal(meal) {
  meal = meal[0];
  let html = `
  <h2 class="recipe-title">${meal.strMeal}</h2> 

            <p class="recipe-category">${meal.strCategory}  </p>
            <p class="recipe-category"> ${meal.strArea} Dish </p>
            <div class="recipe-instruct">
              <h3>Instructions:</h3>
              <p>
                ${meal.strInstructions}
              </p>
            </div>
            <div class="recipe-meal-img"><img src="${meal.strMealThumb}" alt="" /></div>
            <div class="recipe-link"><a href="${meal.strYoutube}" target="_blank">watch video</a></div>`;
  mealDetailsContent.innerHTML = html;
  mealDetailsContent.parentElement.classList.add("showRecipe");
}

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = list.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
  }
  display(result);
};

function display(result) {
  const content = result.map((l) => {
    return "<li onclick=selectInput(this)>" + l + "</li>";
  });
  resultBox.innerHTML = "<ul>" + content.join("") + "</ul>";
}

function selectInput(l) {
  inputBox.value = l.innerHTML;
  resultBox.innerHTML = "";
}

// fav list function
const love = document.querySelector("#fav");
const favList = document.querySelector(".favList");


love.addEventListener("click", getFavList);
function getFavList() {
  container.classList.add("containerGone");
  favList.innerHTML = "";

  if (fav.length) {
    let html = "";

    fav.forEach(async (id) => {
      await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => res.json())
        .then((data) => {
          const m = data.meals[0];
          html += `
          <div class="fav-meal-item" data-id="${m.idMeal}">
          <p><i class="fa-solid fa-heart fav-heart"></i></p>

              <div class="fav-meal-img"><img src="${m.strMealThumb}" alt="img" /></div>
              <div class="fav-meal-name">
                <h3>${m.strMeal} </h3> 
                <a href="#" class="fav-recipe-btn">Get Recepi</a>
              </div>
            </div>`;
          favList.innerHTML = html;
        });
    });
  }
}
