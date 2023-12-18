// const search = document.querySelector("#search");
// const input = document.querySelector("#input");
// let meals = [];
// const ul = document.querySelector(".search-result");

// input.onkeyup = async function () {
//   let values = input.value;

//   if (values.length) {
//     meals = [];

//     await fetch(
//       `https://www.www.themealdb.com/api/json/v1/1/search.php?s=${values}`
//     )
//       .then((res) => res.json())
//       .then((data) =>
//         data.meals.forEach((element) => {
//           meals.push(element);
//         })
//       );
//    if(meals.length){
//     meals.forEach((element) => {
//       if (true) {
//         let li = document.createElement("li");
//         li.innerHTML = element.strMeal;
//         li.style.listStyle = "none";
//         ul.append(li);
//       }
//     });
//    }
//   } else if (values.length == 0) {
//     meals = [];
//     
//   }

//   console.log(meals);
//   console.log(meals);
// };

let dataList = [];
const ul=document.querySelector('.search-result');

document.querySelector("#search").addEventListener("click", async function (e) {
  e.preventDefault();
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }
  let values = document.querySelector("#input").value;
  console.log(values);
 if(values.length){
  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${values}`)
  .then((res) => res.json())
  .then((data) => {
  dataList=[]

    data.meals.forEach((element) => {
      dataList.push(element);
    });
  });
dataList.forEach(element => {


  const div=document.createElement('div');
  div.style.boxShadow=`1px 1px 10px black`;
  div.style.margin=`20px`;
  div.style.padding=`20px 10px`;
  div.style.width='250px';
  div.style.borderRadius=`20px`;
  div.style.textAlign='center';


  const p=document.createElement('p');
  p.innerHTML=element.strMeal;
  // p.style.textAlign='center';
  p.style.fontWeight=800;
  const img=document.createElement('img');
  img.src=element.strMealThumb;
  img.style.width='250px';
  img.style.borderRadius=`20px`;

  const a=document.createElement('a');
  a.style.backgroundColor='red';
  a.style.color='white';
  a.style.padding=`5px 20px`;
  a.style.width='50px';
  a.innerHTML='Get Recipe';
  
  a.style.borderRadius=`20px`;


  div.appendChild(img);
  div.appendChild(p);
  div.appendChild(a);
  ul.appendChild(div);

});
 }else if(values.length==0){
  dataList=[]
  while (ul.hasChildNodes()) {
          ul.removeChild(ul.firstChild);
        }
 }

  console.log(dataList);
});
