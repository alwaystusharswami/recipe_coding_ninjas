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
const resultBox = document.querySelector(".list");
const inputBox = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const mealList = document.querySelector("#meal");
const recipeCloseBtn = document.querySelector(".recipe-close-btn");

searchBtn.addEventListener("click", getMealList);

// get meal list that matches with ingredients
async function getMealList() {
  let searchInputTxt = document.querySelector("#search-input").value.trim();
  await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.meals)
      let html = "";
      if (data.meals) {
        data.meals.forEach((meal) => {

          html += `
          <div class="meal-item" data-id="${meal.idMeal}">
              <div class="meal-img"><img src="${meal.strMealThumb}" alt="img" /></div>
              <div class="meal-name">
                <h3>${meal.strMeal} </h3>
                <a href="#" class="recipe-btn">get recipe</a>
              </div>
            </div>`;
        });
      }
  console.log(html)

      mealList.innerHTML=html;
    });
}

// inputBox.onkeyup = function () {
//   let result = [];
//   let input = inputBox.value;
//   if (input.length) {
//     result = list.filter((keyword) => {
//       return keyword.toLowerCase().includes(input.toLowerCase());
//     });
//   }
//   display(result);
// };

// function display(result) {
//   const content = result.map((l) => {
//     return "<li onclick=selectInput(this)>" + l + "</li>";
//   });
//   resultBox.innerHTML = "<ul>" + content.join("") + "</ul>";
// }

// function selectInput(l) {
//   inputBox.value = l.innerHTML;
//   resultBox.innerHTML = "";
// }
// !search by name meal api function

// let dataList = [];
// const ul = document.querySelector(".meal-result");

// document.querySelector("#search-btn").addEventListener("click", async function (e) {
//   e.preventDefault();
//   resultBox.innerHTML=' ';
//   while (ul.hasChildNodes()) {
//     ul.removeChild(ul.firstChild);
//   }
//   let values = document.querySelector("#search-input").value;
//   if (values.length) {
//     await fetch(
//       `https://www.themealdb.com/api/json/v1/1/search.php?s=${values}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         dataList = [];

//         data.meals.forEach((element) => {
//           dataList.push(element);
//         });
//       });
//     dataList.forEach((element) => {
//       const div = document.createElement("div");
//       div.style.boxShadow = `1px 1px 10px black`;
//       div.style.margin = `20px`;
//       div.style.padding = `20px 10px`;
//       div.style.width = "250px";
//       div.style.borderRadius = `20px`;
//       div.style.textAlign = "center";
//       div.style.backgroundColor="white";

//       const p = document.createElement("p");
//       p.innerHTML = element.strMeal;
//       // p.style.textAlign='center';
//       p.style.fontWeight = 800;
//       const img = document.createElement("img");
//       img.src = element.strMealThumb;
//       img.style.width = "250px";
//       img.style.borderRadius = `20px`;

//       const a = document.createElement("a");
//       a.style.backgroundColor = "red";
//       a.style.color = "white";
//       a.style.padding = `5px 20px`;
//       a.style.width = "50px";
//       a.innerHTML = "Fav";
//       a.link=element.idMeal;
//       a.style.borderRadius = `20px`;

//       div.appendChild(img);
//       div.appendChild(p);
//       div.appendChild(a);
//       ul.appendChild(div);
//       console.log(element.idMeal);
//     });
//   } else if (values.length == 0) {
//     dataList = [];
//     while (ul.hasChildNodes()) {
//       ul.removeChild(ul.firstChild);
//     }
//   }
// });
