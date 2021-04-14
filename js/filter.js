const category_container = document.getElementById('category');
const collection_container = document.getElementById('collection');
const color_container = document.getElementById('color');
let filter = '';

const price_bar = document.querySelector('.price-range');
var max = 10;
var min = 2000;

// display categories in filter

function getCategory() {
   category_container.innerHTML = '';
   fetch(`http://localhost:3000/categories`)
      .then((res) => res.json())
      .then((data) => {
         category_container.innerHTML = data
            .map(
               (data) =>
                  ` <button class="tag categorybtn" onClick="filterItems(2,'${
                     data.name
                  }')" data-category=${data.name}>${data.name.replace(
                     /-/g,
                     ' '
                  )}</button>`
            )
            .join('');
      });
}

// display collection in filter

function getCollection() {
   collection_container.innerHTML = '';
   fetch(`http://localhost:3000/collection`)
      .then((res) => res.json())
      .then((data) => {
         collection_container.innerHTML = data
            .map(
               (data) =>
                  `<button class="tag collectionbtn" onClick="filterItems(0,'${
                     data.name
                  }')" data-collection=${data.name}>${data.name.replace(
                     /-/g,
                     ' '
                  )}</button>`
            )
            .join('');
      });
}

// display color in filter

function getColor() {
   color_container.innerHTML = '';
   fetch(`http://localhost:3000/color`)
      .then((res) => res.json())
      .then((data) => {
         color_container.innerHTML = data
            .map(
               (data) =>
                  ` <button onClick="filterItems(1,'${
                     data.name
                  }')" class="tag colorbtn" data-color=${
                     data.name
                  }>${data.name.replace(/-/g, ' ')}</button>`
            )
            .join('');
      });
}

function getPrice() {
   // let prices = [];
   fetch(`http://localhost:3000/items`)
      .then((res) => res.json())
      .then((data) => {
         data.forEach((data) => {
            if (data.price > max) {
               max = data.price;
            }
            if (data.price < min) {
               min = data.price;
            }
         });
      });
   setTimeout(() => {
      console.log(max, min);
   }, 500);
}
// filter items based on the selected filter tag
function filterItems(option, data) {
   switch (option) {
      case 0:
         filter = '?collection=';
         break;
      case 1:
         filter = '?color=';
         break;
      case 2:
         filter = '?category=';
         break;
   }
   container.innerHTML = '';
   fetch(`${BaseUrl}${filter}${data}`)
      .then((res) => res.json())
      .then((data) => {
         if (data.length == 0) {
            container.innerHTML =
               '<div class="no-result">Sorry, we could not find any results</div>';
            footer.style.display = 'none';
         } else {
            mapItems(data);
         }
      });
}
getCategory();
getColor();
getCollection();
getPrice();
