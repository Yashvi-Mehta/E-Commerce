const detail_container = document.querySelector('.detail-container');
var id = localStorage['data-id'];

function getDetails(id) {
   let query = `?id=${id}`;
   fetch(`http://localhost:3000/items${query}`)
      .then((res) => res.json())
      .then((data) => {
         if (data.length == 0) {
            detail_container.innerHTML =
               '<div class="no-result">Sorry, we could not find any results</div>';
            footer.style.display = 'none';
         } else {
            displayDetails(data);
         }
      });
}

function displayDetails(data) {
   detail_container.innerHTML = data
      .map(
         (data) =>
            `<div class="img-container">
            <div class="images">
               <img
                  src="${data.img_url}"
                  alt="${data.title}"
               />
               <div class="right-arrow">
                  <i class="fas fa-arrow-circle-right"></i>
               </div>
            </div>

            <div class="extra-images">
               <img
                  src="${data.img_url}"
                  alt="${data.title}"
                  class="extra-img"
               />
                <img
                  src="${data.img_url}"
                  alt="${data.title}"
                  class="extra-img"
               />
                <img
                  src="${data.img_url}"
                  alt="${data.title}"
                  class="extra-img"
               />
            </div>
         </div>
         <div class="content-container">
            <div class="headings">
               <h3 class="subheading">Lounge</h3>
               <p class="name">Lounge 1</p>
            </div>
            <div class="details-content">
               <p>
                  ${data.desc}
               </p>
            </div>
            <div class="color-container">
               <p class="subheading">Color</p>
               <button class="color-option" style="background-color:${data.color1}"></button>
               <button class="color-option" style="background-color:${data.color2}"></button>
            </div>
            <div class="pricing-container">
               <div class="price">
                  <p class="subheading">Price per unit</p>
                  <p id="price-value">${data.price}</p>
               </div>
               <div class="buy-option">
                  <button class="buy-now">Buy Now</button>
                  <p><i class="fas fa-cart-plus" onclick=addToCart(${data.id})></i></p>
               </div>
            </div>
         </div>`
      )
      .join('');
}

window.onload = getDetails(id);
function addToCart(id) {
   items.push(id);
   console.log(items);
   localStorage.setItem('added-items', JSON.stringify(items));
   // var test = JSON.parse(localStorage.getItem('testKey'));
}
