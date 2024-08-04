// parse the query string
const itemParams = new URLSearchParams(window.location.search);

// get query params
const category = itemParams.get("category");
const itemName = itemParams.get("name");

// fetch data based on category
(function getItemDetails() {
  fetch(`../data/${category}.json`)
    .then((res) => res.json())
    .then(setItemDetails);
})();

// set data based on item
function setItemDetails(data) {
 
  const details = data[itemName];

   // set result title
   const fullName = details['full_name']
   const detailsDiv = document.querySelector(".item-header");
   detailsDiv.textContent = fullName
   console.log(data)

  //set image
  const imgFull = document.querySelector(".img-full");
  imgFull.src = details["image_url"];

  // parse the data into categories
  const bodyValues = Object.values(details.body);
  const neckValues = Object.values(details.neck);
  const fingerboardValues = Object.values(details.fingerboard);
  const electronicsValues = Object.values(details.electronics);

  // get element tags
  const bodyTags = document.querySelector("#body").querySelectorAll("li");
  const neckTags = document.querySelector("#neck").querySelectorAll("li");
  const fingerboardTags = document
    .querySelector("#fingerboard")
    .querySelectorAll("li");
  const electronicsTags = document
    .querySelector("#electronics")
    .querySelectorAll("li");

  // append values to tags
  bodyTags.forEach(
    (tag, i) => (tag.textContent = tag.textContent + " " + bodyValues[i])
  );
  neckTags.forEach(
    (tag, i) => (tag.textContent = tag.textContent + " " + neckValues[i])
  );
  fingerboardTags.forEach(
    (tag, i) => (tag.textContent = tag.textContent + " " + fingerboardValues[i])
  );
  electronicsTags.forEach(
    (tag, i) => (tag.textContent = tag.textContent + " " + electronicsValues[i])
  );
}
