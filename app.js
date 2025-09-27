let country = "";
let htmlContainer = "";
let queryhtml = document.querySelector(".js-food");
let temp = [];
let input = document.querySelector(".js-input");
async function getData() {
  let data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`,
  );
  temp = await data.json();
  let meal = temp.meals;
  queryhtml.innerHTML = "";
  meal.forEach((value) => {
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let img = document.createElement("img");
    div.className = "border-2 rounded-lg border-green-200";
    h2.className = "text-center text-2xl";
    img.className = "h-30 w-30 rounded-[20%] p-4";
    img.src = value.strMealThumb;
    h2.textContent = value.strMeal;
    div.appendChild(img);
    div.appendChild(h2);
    queryhtml.appendChild(div);
  });
}

document.addEventListener("click", () => {
  country = input.value;
  if (country) {
    getData();
  }
});

document.addEventListener("keypress", (key) => {
  country = input.value;
  if (key.key === "Enter" && country) {
    getData();
  }
});
